
import React from 'react';
import MetricCard from './MetricCard';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

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
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Executive Summary</h1>
          <p className="text-slate-400">Holistic view of site performance, safety, and spatial efficiency.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} className="size-8 rounded-full border-2 border-background-dark shadow-lg" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="user" />
            ))}
            <div className="size-8 rounded-full border-2 border-background-dark bg-border-dark flex items-center justify-center text-[10px] font-bold">+12</div>
          </div>
          <div className="text-right text-[10px] font-bold text-slate-500 uppercase flex flex-col justify-center ml-2">
            <span>Viewing Live</span>
            <span className="text-primary tracking-widest">Active Stakeholders</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          label="TOTAL VISITORS"
          value="42,810"
          trend="+12.5%"
          trendType="positive"
          icon="groups"
          color="primary"
          progress={82}
        />
        <MetricCard
          label="DWELL TIME AVG"
          value="18m 45s"
          trend="+3.2%"
          trendType="neutral"
          icon="schedule"
          color="warning"
          progress={65}
        />
        <MetricCard
          label="SAFETY INCIDENTS"
          value="0"
          trend="-100%"
          trendType="positive"
          icon="verified_user"
          color="success"
          progress={100}
        />
        <MetricCard
          label="PEAK OCCUPANCY"
          value="89%"
          trend="+5.1%"
          trendType="negative"
          icon="speed"
          color="danger"
          progress={89}
        />
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 bg-surface-dark border border-border-dark rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-lg">Daily Activity Trends</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 bg-primary rounded-full"></span>
                <span className="text-slate-400">Current Period</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 bg-slate-700 rounded-full"></span>
                <span className="text-slate-400">Prev. Week</span>
              </div>
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
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111722', border: '1px solid #232f48', borderRadius: '8px', fontSize: '12px' }}
                />
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

          <div className="bg-primary p-6 rounded-2xl text-white flex items-center justify-between group cursor-pointer hover:brightness-110 transition-all">
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
