
import React from 'react';

export const COLORS = {
  primary: '#135bec',
  danger: '#ef4444',
  warning: '#f59e0b',
  success: '#10b981',
  slate: '#92a4c9'
};

export const CORRIDORS: any[] = [
  {
    origin: 'Entrance',
    destination: 'Main Aisle',
    volume: 37102,
    conversion: 82.1,
    time: '0m 45s',
    status: 'optimal',
    note: 'Shortest path identified'
  },
  {
    origin: 'Main Aisle',
    destination: 'Promo Zone',
    volume: 14215,
    conversion: 38.4,
    time: '3m 12s',
    status: 'growth',
    note: 'Marketing impact high'
  },
  {
    origin: 'Promo Zone',
    destination: 'Checkout',
    volume: 9820,
    conversion: 12.5,
    time: '8m 55s',
    status: 'friction',
    note: 'High friction detected'
  },
  {
    origin: 'Main Aisle',
    destination: 'Checkout',
    volume: 22810,
    conversion: 61.4,
    time: '1m 20s',
    status: 'stable',
    note: 'Direct conversion path'
  }
];
