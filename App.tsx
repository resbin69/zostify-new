
import React, { useState } from 'react';
import Layout from './components/Layout';
import OverviewPage from './components/OverviewPage';
import LiveViewPage from './components/LiveViewPage';
import ZoneFlowPage from './components/ZoneFlowPage';
import HeatmapsPage from './components/HeatmapsPage';
import SafetyMonitorPage from './components/SafetyMonitorPage';
import SettingsPage from './components/SettingsPage';
import { NavigationTab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewPage />;
      case 'live':
        return <LiveViewPage />;
      case 'zone-flow':
        return <ZoneFlowPage />;
      case 'heatmaps':
        return <HeatmapsPage />;
      case 'safety':
        return <SafetyMonitorPage />;
      case 'settings':
        return <SettingsPage />;
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
