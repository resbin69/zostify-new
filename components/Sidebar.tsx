
import React from 'react';
import { NavigationTab } from '../types';

interface SidebarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'overview', icon: 'grid_view', label: 'Overview' },
    { id: 'live', icon: 'videocam', label: 'Live View' },
    { id: 'zone-flow', icon: 'route', label: 'Zone Flow' },
    { id: 'heatmaps', icon: 'layers', label: 'Heatmaps' },
    { id: 'safety', icon: 'shield_with_heart', label: 'Safety Alerts' },
  ] as const;

  return (
    <aside className="w-64 bg-surface-dark border-r border-border-dark flex flex-col shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-xl">analytics</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">Zostify</h1>
            <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Spatial Intelligence</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as NavigationTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-400 hover:bg-border-dark hover:text-slate-100'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${activeTab === item.id ? 'fill' : ''}`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-1 border-t border-border-dark">
        <button
          onClick={() => onTabChange('settings')}
          className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100"
        >
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100">
          <span className="material-symbols-outlined text-xl">help</span>
          <span className="text-sm font-medium">Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
