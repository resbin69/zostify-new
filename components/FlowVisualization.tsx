
import React from 'react';

const FlowVisualization: React.FC = () => {
  const nodes = [
    { id: 'entrance', label: 'ENTRANCE', value: '45.2k', x: 20, y: 30, color: 'bg-primary' },
    { id: 'main-aisle', label: 'MAIN AISLE', value: '37.1k', x: 50, y: 15, color: 'bg-primary' },
    { id: 'promo-zone', label: 'PROMO ZONE', value: '14.2k', x: 50, y: 45, color: 'bg-primary' },
    { id: 'checkout', label: 'CHECKOUT', value: '22.8k', x: 80, y: 30, color: 'bg-primary' },
    { id: 'side-entry', label: 'SIDE ENTRY', value: '12.8k', x: 20, y: 65, color: 'bg-slate-800' },
    { id: 'lobby-b', label: 'LOBBY B', value: '5.3k', x: 50, y: 75, color: 'bg-slate-800' },
    { id: 'exit-north', label: 'EXIT NORTH', value: '8.1k', x: 80, y: 60, color: 'bg-slate-800' },
  ];

  return (
    <div className="w-full h-full relative">
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {/* Connections */}
        <path d="M 25% 40% L 45% 25%" stroke="#135bec" strokeWidth="8" fill="none" />
        <path d="M 55% 25% L 75% 40%" stroke="#135bec" strokeWidth="5" fill="none" />
        <path d="M 55% 55% L 75% 45%" stroke="#135bec" strokeWidth="3" fill="none" />
        <path d="M 50% 30% L 50% 45%" stroke="#135bec" strokeWidth="10" fill="none" />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute ${node.color} p-4 rounded-xl shadow-2xl transition-transform hover:scale-110 cursor-pointer border border-white/5`}
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)', minWidth: '120px' }}
        >
          <p className="text-[9px] font-black tracking-widest text-white/50 mb-1">{node.label}</p>
          <p className="text-lg font-bold text-white">{node.value}</p>
          {node.id === 'main-aisle' && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary/20 text-primary text-[9px] font-bold px-2 py-0.5 rounded border border-primary/20">
               +12% Conversion
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowVisualization;
