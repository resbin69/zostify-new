
import React from 'react';
import MetricCard from './MetricCard';
import CorridorTable from './CorridorTable';
import FlowVisualization from './FlowVisualization';

const ZoneFlowPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">Zone Flow & Pathing Analysis</h1>
        <p className="text-slate-400 max-w-2xl">Visualize traffic patterns and movement efficiency across physical zones in your facility.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          label="TOTAL TRANSITIONS"
          value="124.5k"
          trend="+8.2%"
          trendType="positive"
          icon="group"
          color="primary"
          progress={75}
        />
        <MetricCard
          label="AVG. DWELL TIME"
          value="14m 22s"
          trend="-2.4%"
          trendType="negative"
          icon="timer"
          color="warning"
          progress={40}
        />
        <MetricCard
          label="BOTTLENECK SCORE"
          value="12%"
          trend="+0.5%"
          trendType="neutral"
          icon="grid_on"
          color="success"
          progress={15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-surface-dark border border-border-dark rounded-2xl p-6 flex flex-col gap-6">
          <div className="flex items-center gap-2 font-bold border-b border-border-dark pb-4">
            <span className="material-symbols-outlined text-primary">filter_list</span>
            Path Filters
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Entry Point</label>
              <select className="w-full bg-border-dark border-none rounded-lg text-sm px-3 py-2.5 focus:ring-1 focus:ring-primary">
                <option>Main Entrance</option>
                <option>Side Entrance</option>
                <option>Service Dock</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Primary Target</label>
              <select className="w-full bg-border-dark border-none rounded-lg text-sm px-3 py-2.5 focus:ring-1 focus:ring-primary">
                <option>Main Aisle</option>
                <option>Checkout</option>
                <option>Promo Zone</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2 tracking-widest">Time Granularity</label>
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-primary py-2 rounded-lg text-xs font-bold">Hourly</button>
                <button className="bg-border-dark py-2 rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors">Daily</button>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between bg-border-dark/50 p-4 rounded-xl">
             <div className="flex items-center gap-3">
               <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person_off</span>
               </div>
               <span className="text-sm font-medium">Exclude Staff Paths</span>
             </div>
             <div className="w-10 h-5 bg-primary rounded-full relative">
                <div className="absolute right-0.5 top-0.5 size-4 bg-white rounded-full"></div>
             </div>
          </div>

          <button className="w-full bg-primary py-3 rounded-lg font-bold hover:brightness-110 transition-all mt-auto shadow-lg shadow-primary/20">
            Apply Selection
          </button>
        </div>

        <div className="lg:col-span-2 bg-surface-dark border border-border-dark rounded-2xl flex flex-col min-h-[500px]">
          <div className="p-6 border-b border-border-dark flex items-center justify-between">
            <h3 className="font-bold">Spatial Flow Visualization</h3>
            <div className="flex items-center gap-2">
              <span className="size-2 bg-primary rounded-full"></span>
              <span className="text-[10px] font-bold text-slate-500">High Volume</span>
            </div>
          </div>
          <div className="flex-1 p-8 relative flex items-center justify-center">
            <FlowVisualization />
            <div className="absolute bottom-4 right-6 text-[10px] text-slate-500 italic">* Thickness represents total unique visitor volume</div>
          </div>
        </div>
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-border-dark flex items-center justify-between">
          <h3 className="font-bold text-lg">High-Traffic Corridor Analytics</h3>
          <div className="flex gap-4">
            <button className="p-1.5 hover:bg-border-dark rounded transition-colors"><span className="material-symbols-outlined text-xl">search</span></button>
            <button className="p-1.5 hover:bg-border-dark rounded transition-colors"><span className="material-symbols-outlined text-xl">sort</span></button>
          </div>
        </div>
        <CorridorTable />
      </div>
    </div>
  );
};

export default ZoneFlowPage;
