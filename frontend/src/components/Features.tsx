import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: '🎙️',
      title: 'Voice AI Integration',
      description: 'Seamlessly integrate with Cloudonix voice services and AI-powered conversation flows for intelligent voice applications.'
    },
    {
      icon: '🔄',
      title: 'Real-Time Processing',
      description: 'Process millions of voice calls in real-time with our distributed Redis-backed execution engine and queue system.'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Multi-tenant isolation, JWT authentication, and comprehensive security measures for enterprise-grade deployments.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Detailed call analytics, performance metrics, and reporting dashboards to optimize your voice applications.'
    },
    {
      icon: '⚡',
      title: 'Auto-Scaling',
      description: 'Automatically scale your voice applications based on demand with our cloud-native infrastructure.'
    },
    {
      icon: '🔧',
      title: 'CXML Builder',
      description: 'Visual CXML builder for creating complex voice applications without coding, powered by Cloudonix markup.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Powerful Features for Voice Applications</h2>
        <p className="features-subtitle">
          Everything you need to build, deploy, and scale intelligent voice applications
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card fade-in-up">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};