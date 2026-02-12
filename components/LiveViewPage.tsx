
import React, { useState } from 'react';

const LiveViewPage: React.FC = () => {
  const [selectedCam, setSelectedCam] = useState(0);

  const cameras = [
    { id: 0, name: 'Main Hallway (N)', count: 24, status: 'High Density', color: 'text-danger' },
    { id: 1, name: 'Entrance South', count: 8, status: 'Optimal', color: 'text-success' },
    { id: 2, name: 'Checkout Area', count: 15, status: 'Moderate', color: 'text-warning' },
    { id: 3, name: 'Loading Dock', count: 2, status: 'Low Activity', color: 'text-slate-400' },
  ];

  return (
    <div className="h-full flex flex-col space-y-8 animate-in zoom-in-95 duration-500">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Spatial Stream</h1>
          <p className="text-slate-400">Object tracking and occupancy monitoring in real-time.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right">
             <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Stream</span>
             <span className="text-xs font-bold text-white">4 Active Feeds</span>
          </div>
          <button className="p-3 bg-surface-dark border border-border-dark rounded-xl text-slate-400 hover:text-white transition-colors">
            <span className="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex gap-8">
        <div className="w-80 flex flex-col gap-4 overflow-y-auto pr-2">
          {cameras.map((cam) => (
            <div
              key={cam.id}
              onClick={() => setSelectedCam(cam.id)}
              className={`p-4 rounded-2xl cursor-pointer transition-all border shrink-0 ${
                selectedCam === cam.id
                  ? 'bg-primary/10 border-primary/50 ring-1 ring-primary'
                  : 'bg-surface-dark border-border-dark hover:bg-slate-800'
              }`}
            >
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden bg-black">
                 <img
                  src={`https://picsum.photos/seed/cam${cam.id}/300/200`}
                  className={`w-full h-full object-cover opacity-60 ${selectedCam === cam.id ? 'opacity-100' : ''}`}
                  alt={cam.name}
                 />
                 <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 bg-black/60 rounded text-[9px] font-bold text-white backdrop-blur">
                    <span className={`size-1.5 rounded-full bg-red-500 animate-pulse`}></span>
                    LIVE
                 </div>
              </div>
              <h4 className="font-bold text-sm mb-1">{cam.name}</h4>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-bold">{cam.count} Objects Tracked</span>
                <span className={`text-[10px] font-black uppercase ${cam.color}`}>{cam.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 bg-surface-dark border border-border-dark rounded-3xl relative overflow-hidden flex flex-col shadow-2xl">
          <div className="absolute top-6 left-6 z-10 space-y-2">
             <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">videocam</span>
               <div>
                  <h3 className="text-sm font-bold leading-none">{cameras[selectedCam].name}</h3>
                  <p className="text-[9px] text-slate-400 font-medium mt-1">Stream: HD-1080p • Latency: 42ms</p>
               </div>
             </div>
             <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
               <span className="material-symbols-outlined text-success">motion_sensor_active</span>
               <span className="text-[10px] font-black tracking-widest text-success uppercase">A.I. Inference Active</span>
             </div>
          </div>

          <div className="flex-1 relative bg-black group">
             <img
              src={`https://picsum.photos/seed/cam${selectedCam}/1200/800`}
              className="w-full h-full object-cover opacity-80"
              alt="Main Stream"
             />
             
             {/* Simulated Bounding Boxes */}
             <div className="absolute top-1/4 left-1/3 w-24 h-48 border-2 border-primary bg-primary/5 rounded">
                <div className="absolute -top-6 left-0 bg-primary text-white text-[9px] font-bold px-1 rounded">Person #402</div>
             </div>
             <div className="absolute top-1/3 right-1/4 w-20 h-40 border-2 border-primary bg-primary/5 rounded">
                <div className="absolute -top-6 left-0 bg-primary text-white text-[9px] font-bold px-1 rounded">Person #403</div>
             </div>
             <div className="absolute bottom-1/4 left-1/2 w-32 h-20 border-2 border-warning bg-warning/5 rounded">
                <div className="absolute -top-6 left-0 bg-warning text-black text-[9px] font-bold px-1 rounded">Object-Luggage</div>
             </div>

             <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none"></div>
             
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur p-2 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="size-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white"><span className="material-symbols-outlined">capture</span></button>
                <button className="size-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white"><span className="material-symbols-outlined">zoom_in</span></button>
                <div className="w-px h-6 bg-white/20"></div>
                <button className="size-10 flex items-center justify-center rounded-xl hover:bg-white/10 text-white"><span className="material-symbols-outlined">record_voice_over</span></button>
                <button className="size-10 flex items-center justify-center rounded-xl bg-danger text-white"><span className="material-symbols-outlined fill">emergency_share</span></button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveViewPage;
