import React from 'react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 voice calls/month',
        'Basic IVR functionality',
        'Email support',
        'Basic analytics',
        '1 phone number'
      ]
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For growing businesses with advanced needs',
      popular: true,
      features: [
        'Up to 10,000 voice calls/month',
        'Advanced IVR with AI',
        'Priority phone support',
        'Advanced analytics & reporting',
        '5 phone numbers',
        'Custom integrations',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom requirements',
      features: [
        'Unlimited voice calls',
        'Full AI integration suite',
        'Dedicated account manager',
        'Custom SLA guarantees',
        'Unlimited phone numbers',
        'White-label solution',
        'On-premise deployment option'
      ]
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2>Choose Your Plan</h2>
        <p className="pricing-subtitle">
          Start free and scale as you grow. All plans include our core voice platform.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''} fade-in-up`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <div className="pricing-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>

              <button className={`pricing-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};