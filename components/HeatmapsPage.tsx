
import React, { useState } from 'react';

const HeatmapsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState(50);
  const [metric, setMetric] = useState<'density' | 'dwell'>('density');

  return (
    <div className="h-full flex flex-col space-y-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Spatial Heatmaps</h1>
          <p className="text-slate-400">Time-lapse density visualization across the facility floor plan.</p>
        </div>
        <div className="flex bg-surface-dark p-1 rounded-xl border border-border-dark">
          <button 
            onClick={() => setMetric('density')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${metric === 'density' ? 'bg-primary text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >Density</button>
          <button 
            onClick={() => setMetric('dwell')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${metric === 'dwell' ? 'bg-primary text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >Dwell Time</button>
        </div>
      </div>

      <div className="flex-1 bg-surface-dark border border-border-dark rounded-3xl overflow-hidden relative flex flex-col">
        <div className="flex-1 relative bg-slate-900 overflow-hidden cursor-crosshair">
           <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-6qZr9QZ9f9RyouhREtpKmBoyq8EHtFGBffNgivlWffJRTgHMBtt-85bsV65GoBaHkSCIPPkDv9lhjwu_ggxo3XIWgnUPvDue12ca-tJZDjnRB8uieUSk4M5xkhTMt-vqQ3TkHhfo-Rz2b5VvVhhvMOfhDguCk6n21iQisKevjNRwI6z8dPLjktqpHZdV6igu_UYeOdpONA1bo3YpLgJrYyGUFHoELQgcCY_w2rPXHVNQdt7UdsJIg8W05EMgjLZzIurs8zcnw"
            alt="Floor Plan"
            className="w-full h-full object-cover opacity-30 grayscale"
           />
           
           {/* Simulated Heatmap blobs */}
           <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-danger/40 rounded-full blur-[60px] animate-pulse"></div>
           <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-warning/40 rounded-full blur-[40px]"></div>
           <div className="absolute top-1/2 right-1/2 w-32 h-32 bg-primary/40 rounded-full blur-[30px]"></div>
           <div className="absolute bottom-10 left-10 w-24 h-24 bg-success/30 rounded-full blur-[20px]"></div>

           <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-20">
              <span className="text-[120px] font-black text-white/10 tracking-tighter uppercase select-none">Top Secret Blueprint</span>
           </div>
        </div>

        <div className="p-8 border-t border-border-dark bg-background-dark/50 backdrop-blur-xl">
           <div className="flex items-center gap-6">
              <button className="size-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/30">
                 <span className="material-symbols-outlined">play_arrow</span>
              </button>
              <div className="flex-1 space-y-2">
                 <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>08:00 AM</span>
                    <span className="text-primary">Current: 14:32 PM</span>
                    <span>10:00 PM</span>
                 </div>
                 <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={timeRange} 
                  onChange={(e) => setTimeRange(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-border-dark rounded-full appearance-none cursor-pointer accent-primary"
                 />
              </div>
              <div className="w-48 bg-surface-dark border border-border-dark rounded-xl p-3">
                 <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-bold text-slate-500">PEAK DENSITY</span>
                    <span className="text-xs font-bold text-danger">4.2/sqm</span>
                 </div>
                 <div className="h-1 bg-border-dark rounded-full overflow-hidden">
                    <div className="h-full bg-danger w-3/4"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
         {[
           { label: 'Hot Zone Peak', val: 'Zone B-4', color: 'text-danger' },
           { label: 'Least Activity', val: 'Storage E', color: 'text-success' },
           { label: 'Avg Shift Flow', val: '124 ppl/hr', color: 'text-primary' },
         ].map((stat, i) => (
           <div key={i} className="bg-surface-dark border border-border-dark p-6 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">{stat.label}</p>
              <h3 className={`text-xl font-black ${stat.color}`}>{stat.val}</h3>
           </div>
         ))}
      </div>
    </div>
  );
};

export default HeatmapsPage;
