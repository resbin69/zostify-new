
import React, { useState } from 'react';
import Layout from './components/Layout';
import ZoneFlowPage from './components/ZoneFlowPage';
import SafetyMonitorPage from './components/SafetyMonitorPage';
import { NavigationTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('zone-flow');

  const renderContent = () => {
    switch (activeTab) {
      case 'zone-flow':
        return <ZoneFlowPage />;
      case 'safety':
        return <SafetyMonitorPage />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-slate-400">
            <span className="material-symbols-outlined text-6xl mb-4">construction</span>
            <h2 className="text-xl font-bold">Content for {activeTab} coming soon</h2>
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
