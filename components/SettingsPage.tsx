
import React, { useState } from 'react';

const SettingsPage: React.FC = () => {
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in slide-in-from-right-4 duration-500">
      <div>
        <h1 className="text-3xl font-bold mb-2">System Settings</h1>
        <p className="text-slate-400">Configure spatial intelligence thresholds, API integrations, and privacy controls.</p>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">notifications</span>
            Alert Configurations
          </h3>
          <div className="bg-surface-dark border border-border-dark rounded-2xl divide-y divide-border-dark">
            <div className="p-6 flex items-center justify-between">
              <div>
                <h4 className="font-bold mb-1">Push Notifications</h4>
                <p className="text-xs text-slate-500">Receive real-time mobile alerts for safety threshold spikes.</p>
              </div>
              <button 
                onClick={() => setAlertsEnabled(!alertsEnabled)}
                className={`w-12 h-6 rounded-full relative transition-colors ${alertsEnabled ? 'bg-primary' : 'bg-border-dark'}`}
              >
                <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${alertsEnabled ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h4 className="font-bold mb-1">Safety Threshold</h4>
                <p className="text-xs text-slate-500">Maximum allowed density before triggering emergency protocol.</p>
              </div>
              <select className="bg-border-dark border-none rounded-lg text-xs font-bold px-3 py-2 outline-none">
                <option>4.0 People / sqm</option>
                <option>5.0 People / sqm</option>
                <option>6.0 People / sqm</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">security</span>
            Privacy & Data Ethics
          </h3>
          <div className="bg-surface-dark border border-border-dark rounded-2xl divide-y divide-border-dark">
            <div className="p-6 flex items-center justify-between">
              <div>
                <h4 className="font-bold mb-1">Automated Face Anonymization</h4>
                <p className="text-xs text-slate-500">Blur all human faces in real-time before streaming to dashboard.</p>
              </div>
              <button 
                onClick={() => setPrivacyMode(!privacyMode)}
                className={`w-12 h-6 rounded-full relative transition-colors ${privacyMode ? 'bg-primary' : 'bg-border-dark'}`}
              >
                <div className={`absolute top-1 size-4 bg-white rounded-full transition-all ${privacyMode ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <div className="p-6">
              <h4 className="font-bold mb-3">Data Retention Policy</h4>
              <div className="grid grid-cols-4 gap-4">
                {['24 Hours', '7 Days', '30 Days', 'Indefinite'].map((opt) => (
                  <button key={opt} className={`py-2 rounded-xl text-[10px] font-black uppercase transition-all border ${opt === '7 Days' ? 'bg-primary border-primary text-white' : 'border-border-dark text-slate-500 hover:border-slate-400'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">api</span>
            Developer & Hardware
          </h3>
          <div className="bg-surface-dark border border-border-dark rounded-2xl p-6 space-y-6">
             <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-2">API Secret Key</label>
                <div className="flex gap-3">
                   <input type="password" value="sk_live_51M0891Hsk8923489234" readOnly className="flex-1 bg-border-dark border-none rounded-xl text-xs px-4 py-3 font-mono text-slate-400" />
                   <button className="px-4 py-2 bg-border-dark hover:bg-slate-700 rounded-xl transition-colors text-slate-300">
                     <span className="material-symbols-outlined text-sm">content_copy</span>
                   </button>
                </div>
             </div>
             
             <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center gap-4">
                <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">router</span>
                </div>
                <div className="flex-1">
                   <h5 className="text-sm font-bold">Edge Processing Unit</h5>
                   <p className="text-[10px] text-slate-400">Firmware v4.2.0 • Status: Healthy • CPU Load: 12%</p>
                </div>
                <button className="text-[10px] font-black text-primary uppercase hover:underline">Check Updates</button>
             </div>
          </div>
        </section>
      </div>

      <div className="pt-8 border-t border-border-dark flex justify-end gap-4">
         <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-400 hover:text-white transition-colors">Discard Changes</button>
         <button className="px-8 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:brightness-110 shadow-lg shadow-primary/20 transition-all">Save Configuration</button>
      </div>
    </div>
  );
};

export default SettingsPage;
