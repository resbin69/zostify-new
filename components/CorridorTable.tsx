
import React from 'react';
import { CORRIDORS } from '../constants';

const CorridorTable: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-success bg-success/10';
      case 'growth': return 'text-primary bg-primary/10';
      case 'friction': return 'text-danger bg-danger/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border-dark">
            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">Origin / Destination</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Traffic Volume</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Conversion Rate</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-right">Avg. Transition Time</th>
            <th className="px-6 py-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest text-center">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-dark">
          {CORRIDORS.map((item, idx) => (
            <tr key={idx} className="hover:bg-slate-800/30 transition-colors group">
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className={`p-1.5 rounded bg-surface-dark group-hover:bg-primary/20 transition-colors`}>
                    <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm">{item.origin}</span>
                      <span className="material-symbols-outlined text-xs text-slate-600">arrow_right_alt</span>
                      <span className="font-bold text-sm">{item.destination}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">{item.note}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5 text-right font-bold text-sm text-slate-300">
                {item.volume.toLocaleString()}
              </td>
              <td className="px-6 py-5 text-right">
                <span className="font-bold text-sm text-success">{item.conversion}%</span>
                <span className="text-[10px] text-slate-500 ml-1">(+1.2%)</span>
              </td>
              <td className="px-6 py-5 text-right font-bold text-sm text-slate-300">
                {item.time}
              </td>
              <td className="px-6 py-5 text-center">
                <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-tighter ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CorridorTable;
