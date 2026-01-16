import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { number: '10M+', label: 'Voice Calls Processed' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '500+', label: 'Active Customers' },
    { number: '50ms', label: 'Average Latency' }
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item fade-in-up">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};