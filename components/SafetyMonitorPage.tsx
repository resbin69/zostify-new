
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { getSafetyRecommendation } from '../services/aiService';

const chartData = [
  { time: '08:00', density: 1.2 },
  { time: '10:00', density: 2.1 },
  { time: '12:00', density: 3.5 },
  { time: '14:00', density: 4.8 },
  { time: '16:00', density: 2.9 },
  { time: '18:00', density: 1.8 },
  { time: '20:00', density: 1.2 },
  { time: '22:00', density: 0.8 },
];

const SafetyMonitorPage: React.FC = () => {
  const [recommendation, setRecommendation] = useState<string>("Analyzing current zone safety...");

  useEffect(() => {
    const fetchRec = async () => {
      const rec = await getSafetyRecommendation("Gate 4", 4.8);
      setRecommendation(rec || "Monitor closely.");
    };
    fetchRec();
  }, []);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Real-Time Safety Monitor</h1>
          <p className="text-slate-400">Monitoring occupancy thresholds and congestion risks across all security zones.</p>
        </div>
        <div className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full border border-success/20">
           <span className="size-2 bg-success rounded-full animate-pulse"></span>
           <span className="text-xs font-bold uppercase tracking-wider">Operational Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-dark border-2 border-danger/50 p-6 rounded-2xl relative overflow-hidden group shadow-lg shadow-danger/5">
          <div className="absolute top-0 right-0 p-3">
             <span className="flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-danger"></span>
             </span>
          </div>
          <p className="text-[10px] font-black text-danger uppercase mb-1">Immediate Action Required</p>
          <h3 className="text-xl font-bold mb-2">Gate 4 Congestion</h3>
          <p className="text-xs text-slate-400 mb-4 bg-background-dark/50 p-2 rounded border border-danger/10 italic">
            "AI Advisor: {recommendation}"
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="px-2 py-0.5 bg-danger/10 text-danger rounded text-[10px] font-bold">CRITICAL</span>
            <span className="text-xs text-slate-500 font-medium">Wait: 15+ min</span>
          </div>
        </div>

        <div className="bg-surface-dark border border-warning/50 p-6 rounded-2xl">
          <p className="text-[10px] font-black text-warning uppercase mb-1">Threshold Warning</p>
          <h3 className="text-xl font-bold mb-2">Crowd: Zone B</h3>
          <p className="text-sm text-slate-500 mb-4">Duration: 6m 12s • Trend: Stable</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="px-2 py-0.5 bg-warning/10 text-warning rounded text-[10px] font-bold">ELEVATED</span>
            <span className="text-xs text-slate-500 font-medium">85% Capacity</span>
          </div>
        </div>

        <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl opacity-75">
          <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Informational</p>
          <h3 className="text-xl font-bold mb-2">Main Entrance</h3>
          <p className="text-sm text-slate-500 mb-4">Duration: 2m 05s • Traffic Flowing</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="px-2 py-0.5 bg-slate-700 text-slate-400 rounded text-[10px] font-bold">STABLE</span>
            <span className="text-xs text-slate-500 font-medium">Normalizing</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden h-[500px] flex flex-col shadow-2xl">
            <div className="px-6 py-4 border-b border-border-dark flex items-center justify-between bg-background-dark/30">
              <h3 className="font-bold">Live Spatial Intelligence Map</h3>
              <div className="flex gap-2">
                <button className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded shadow-lg shadow-primary/20">Heatmap</button>
                <button className="bg-border-dark text-slate-400 text-[10px] font-bold px-3 py-1 rounded hover:bg-slate-700">Objects</button>
              </div>
            </div>
            <div className="flex-1 relative bg-slate-900 overflow-hidden">
               <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-6qZr9QZ9f9RyouhREtpKmBoyq8EHtFGBffNgivlWffJRTgHMBtt-85bsV65GoBaHkSCIPPkDv9lhjwu_ggxo3XIWgnUPvDue12ca-tJZDjnRB8uieUSk4M5xkhTMt-vqQ3TkHhfo-Rz2b5VvVhhvMOfhDguCk6n21iQisKevjNRwI6z8dPLjktqpHZdV6igu_UYeOdpONA1bo3YpLgJrYyGUFHoELQgcCY_w2rPXHVNQdt7UdsJIg8W05EMgjLZzIurs8zcnw"
                alt="Map Background"
                className="w-full h-full object-cover opacity-30 grayscale"
               />
               <div className="absolute top-1/4 left-1/4 w-32 h-24 border-2 border-danger bg-danger/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-danger text-white text-[9px] font-black px-2 py-0.5 rounded-full animate-pulse shadow-lg">CHOKE-POINT</span>
               </div>
               <div className="absolute top-1/2 right-1/4 w-40 h-32 border-2 border-warning bg-warning/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-black/60 text-warning text-[9px] font-black px-2 py-1 rounded-lg uppercase border border-warning/20">Zone B High Density</span>
               </div>
               <div className="absolute bottom-1/4 left-1/3 w-48 h-20 border-2 border-success bg-success/5 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-black/60 text-success text-[9px] font-black px-2 py-1 rounded-lg uppercase border border-success/20">Main Hall Normal</span>
               </div>
               <div className="absolute bottom-6 right-6 flex flex-col gap-2">
                  <button className="size-10 bg-surface-dark border border-border-dark rounded-lg flex items-center justify-center text-slate-300 shadow-xl hover:bg-slate-700 transition-colors"><span className="material-symbols-outlined">add</span></button>
                  <button className="size-10 bg-surface-dark border border-border-dark rounded-lg flex items-center justify-center text-slate-300 shadow-xl hover:bg-slate-700 transition-colors"><span className="material-symbols-outlined">remove</span></button>
                  <button className="size-10 bg-surface-dark border border-border-dark rounded-lg flex items-center justify-center text-slate-300 shadow-xl hover:bg-slate-700 transition-colors text-primary"><span className="material-symbols-outlined">my_location</span></button>
               </div>
            </div>
          </div>

          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
            <h3 className="font-bold mb-6">Zone Metrics Detail</h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {[
                { label: 'Zone A (Entrance)', val: '1.2', color: 'bg-success', w: '30%' },
                { label: 'Zone B (Gate 4)', val: '4.8', color: 'bg-danger', w: '95%' },
                { label: 'Main Lobby', val: '0.5', color: 'bg-success', w: '15%' },
                { label: 'Retail Wing', val: '2.9', color: 'bg-warning', w: '70%' },
              ].map((m, i) => (
                <div key={i} className="bg-background-dark/50 p-4 rounded-xl border border-border-dark group hover:border-slate-600 transition-all cursor-default">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{m.label}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tighter">{m.val}</span>
                    <span className="text-[10px] text-slate-500 font-bold">P/sqm</span>
                  </div>
                  <div className="mt-3 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full transition-all duration-1000`} style={{ width: m.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
           <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 flex-1 flex flex-col">
              <h3 className="font-bold mb-1">Density Analytics</h3>
              <p className="text-xs text-slate-500 mb-8 tracking-wide uppercase font-bold">Last 24 Hours Threshold Exposure</p>
              
              <div className="flex-1 min-h-[200px] mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={[0, 6]} />
                    <Tooltip cursor={{ fill: 'transparent' }} content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return <div className="bg-background-dark border border-border-dark p-2 rounded text-[10px] font-bold shadow-xl">{payload[0].value} P/sqm</div>;
                        }
                        return null;
                      }}
                    />
                    <Bar dataKey="density" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.density > 4 ? '#ef4444' : entry.density > 2.5 ? '#f59e0b' : '#135bec'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-4 pt-4 border-t border-border-dark">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Critical Peaks (&gt;4.0)</span>
                  <span className="font-bold text-danger">4 Instances</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Warning Thresholds</span>
                  <span className="font-bold text-warning">12 Instances</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Current Facility Mean</span>
                  <span className="font-bold text-primary">1.4 P/sqm</span>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-border-dark hover:bg-slate-700 rounded-xl text-sm font-bold transition-all border border-transparent hover:border-slate-500">
                Generate Full Incident Report
              </button>
           </div>

           <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-6xl text-primary">gavel</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary text-xl">policy</span>
                <h4 className="font-bold text-sm">Active Safety Protocol</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                System set to auto-dispatch staff when density exceeds <span className="text-danger font-bold">4.0 P/sqm</span> for <span className="text-white font-bold">300s</span>. Current sensitivity: <span className="text-white font-bold">High</span>.
              </p>
              <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline flex items-center gap-1">
                Configure Protocols <span className="material-symbols-outlined text-xs">open_in_new</span>
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyMonitorPage;
