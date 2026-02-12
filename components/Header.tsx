
import React from 'react';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  return (
    <header className="h-16 border-b border-border-dark bg-surface-dark flex items-center justify-between px-8 shrink-0 z-10">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-slate-500 uppercase tracking-wide">Analytics</span>
        <span className="material-symbols-outlined text-xs text-slate-600">chevron_right</span>
        <span className="font-semibold text-slate-200 capitalize">
          {activeTab.replace('-', ' ')}
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-border-dark px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-lg text-slate-400">calendar_month</span>
          <span className="text-xs font-semibold">Last 7 Days</span>
          <span className="material-symbols-outlined text-sm text-slate-400">expand_more</span>
        </div>

        <button className="flex items-center gap-2 bg-primary px-4 py-1.5 rounded-lg text-white text-xs font-bold hover:bg-blue-600 transition-colors">
          <span className="material-symbols-outlined text-sm">download</span>
          Export Report
        </button>

        <div className="size-8 rounded-full overflow-hidden border border-primary/40 p-0.5">
          <img
            src="https://picsum.photos/seed/user123/100/100"
            alt="User"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
