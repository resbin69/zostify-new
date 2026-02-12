
export type NavigationTab = 'overview' | 'live' | 'zone-flow' | 'heatmaps' | 'safety' | 'settings';

export interface Metric {
  label: string;
  value: string;
  trend: string;
  trendType: 'positive' | 'negative' | 'neutral';
  color: string;
  icon: string;
}

export interface ZoneStatus {
  name: string;
  density: number; // P/sqm
  status: 'optimal' | 'friction' | 'growth' | 'stable';
}

export interface Alert {
  id: string;
  type: 'critical' | 'elevated' | 'stable';
  title: string;
  duration: string;
  subtext: string;
}

export interface CorridorData {
  origin: string;
  destination: string;
  volume: number;
  conversion: number;
  time: string;
  status: 'optimal' | 'growth' | 'friction' | 'stable';
  note: string;
}
