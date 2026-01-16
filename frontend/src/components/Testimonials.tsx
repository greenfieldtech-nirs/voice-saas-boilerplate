import React from 'react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "VoiceFlow transformed our customer service operations. The AI-powered IVR system handles 80% of our calls automatically, and the remaining calls go to the right department instantly.",
      author: {
        name: "Sarah Chen",
        title: "CTO, TechCorp Solutions",
        avatar: "SC"
      }
    },
    {
      text: "The integration with Cloudonix was seamless, and the multi-tenant architecture allows us to serve multiple clients securely. Outstanding performance and reliability.",
      author: {
        name: "Marcus Rodriguez",
        title: "VP of Engineering, VoiceFirst Inc",
        avatar: "MR"
      }
    },
    {
      text: "We've reduced our call handling costs by 60% while improving customer satisfaction scores. The analytics dashboard gives us deep insights into call patterns and performance.",
      author: {
        name: "Emily Watson",
        title: "Operations Director, CallCenter Pro",
        avatar: "EW"
      }
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in-up">
              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author.name}</h4>
                  <p>{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};