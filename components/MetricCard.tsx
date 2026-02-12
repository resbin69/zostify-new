
import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
  icon: string;
  color: 'primary' | 'warning' | 'success' | 'danger';
  progress: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, trend, trendType, icon, color, progress }) => {
  const colorMap = {
    primary: 'text-primary bg-primary/10 border-primary/20',
    warning: 'text-warning bg-warning/10 border-warning/20',
    success: 'text-success bg-success/10 border-success/20',
    danger: 'text-danger bg-danger/10 border-danger/20',
  };

  const trendColorMap = {
    positive: 'text-success',
    negative: 'text-danger',
    neutral: 'text-warning',
  };

  const barColorMap = {
    primary: 'bg-primary',
    warning: 'bg-warning',
    success: 'bg-success',
    danger: 'bg-danger',
  };

  return (
    <div className="bg-surface-dark border border-border-dark p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</p>
        <div className={`p-2 rounded-lg ${colorMap[color]} border`}>
          <span className="material-symbols-outlined fill text-xl">{icon}</span>
        </div>
      </div>
      <div className="flex items-baseline gap-3">
        <h2 className="text-4xl font-bold tracking-tight">{value}</h2>
        <span className={`text-sm font-bold ${trendColorMap[trendType]}`}>{trend}</span>
      </div>
      <div className="mt-2">
        <div className="h-1.5 w-full bg-border-dark rounded-full overflow-hidden">
          <div
            className={`h-full ${barColorMap[color]} rounded-full transition-all duration-1000`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
