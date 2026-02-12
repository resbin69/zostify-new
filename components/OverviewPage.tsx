
import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { getSpatialInsights } from '../services/aiService';

const data = [
  { name: '00:00', visitors: 400 },
  { name: '04:00', visitors: 300 },
  { name: '08:00', visitors: 1200 },
  { name: '12:00', visitors: 2800 },
  { name: '16:00', visitors: 2400 },
  { name: '20:00', visitors: 1600 },
  { name: '23:59', visitors: 600 },
];

const OverviewPage: React.FC = () => {
  const [insights, setInsights] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const spatialMetrics = {
    visitors: "42,810",
    dwellTime: "18m 45s",
    occupancy: "89%",
    safetyIncidents: 0
  };

  const handleGenerateInsights = async () => {
    setLoading(true);
    const result = await getSpatialInsights(spatialMetrics);
    setInsights(result || "No insights available.");
    setLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Executive Summary</h1>
          <p className="text-slate-400">Holistic view of site performance, safety, and spatial efficiency.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handleGenerateInsights}
            disabled={loading}
            className="flex items-center gap-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-4 py-2 rounded-xl transition-all group"
          >
            <span className={`material-symbols-outlined text-sm ${loading ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`}>psychology</span>
            <span className="text-xs font-bold">{loading ? 'Analyzing...' : 'Generate AI Insights'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard label="TOTAL VISITORS" value={spatialMetrics.visitors} trend="+12.5%" trendType="positive" icon="groups" color="primary" progress={82} />
        <MetricCard label="DWELL TIME AVG" value={spatialMetrics.dwellTime} trend="+3.2%" trendType="neutral" icon="schedule" color="warning" progress={65} />
        <MetricCard label="SAFETY INCIDENTS" value={spatialMetrics.safetyIncidents.toString()} trend="-100%" trendType="positive" icon="verified_user" color="success" progress={100} />
        <MetricCard label="PEAK OCCUPANCY" value={spatialMetrics.occupancy} trend="+5.1%" trendType="negative" icon="speed" color="danger" progress={89} />
      </div>

      {insights && (
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 animate-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-lg">auto_awesome</span>
            </div>
            <h3 className="font-bold text-lg text-primary">A.I. Spatial Analysis</h3>
          </div>
          <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap prose prose-invert max-w-none">
            {insights}
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-dark border border-border-dark rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Daily Activity Trends</h3>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2"><span className="size-2 bg-primary rounded-full"></span>Current Period</div>
              <div className="flex items-center gap-2"><span className="size-2 bg-slate-700 rounded-full"></span>Prev. Week</div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#135bec" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#135bec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#232f48" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                <Tooltip contentStyle={{ backgroundColor: '#111722', border: '1px solid #232f48', borderRadius: '8px', fontSize: '12px' }} />
                <Area type="monotone" dataKey="visitors" stroke="#135bec" strokeWidth={3} fillOpacity={1} fill="url(#colorVis)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
            <h3 className="font-bold mb-4">Hotspot Performance</h3>
            <div className="space-y-4">
              {[
                { name: 'Main Lobby', density: 85, color: 'bg-danger' },
                { name: 'Retail Wing', density: 62, color: 'bg-warning' },
                { name: 'Food Court', density: 44, color: 'bg-primary' },
                { name: 'Entrance B', density: 21, color: 'bg-success' },
              ].map((zone, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">{zone.name}</span>
                    <span className="text-slate-500">{zone.density}%</span>
                  </div>
                  <div className="h-2 w-full bg-border-dark rounded-full overflow-hidden">
                    <div className={`h-full ${zone.color} transition-all duration-700`} style={{ width: `${zone.density}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary p-6 rounded-2xl text-white flex items-center justify-between group cursor-pointer hover:brightness-110 transition-all shadow-xl shadow-primary/20">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Upcoming Milestone</p>
              <h4 className="font-bold text-lg">System Optimization</h4>
              <p className="text-xs opacity-80 mt-1">Next scheduled recalibration in 2 days.</p>
            </div>
            <span className="material-symbols-outlined text-3xl transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
