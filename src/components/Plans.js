import React from 'react';
import './Plans.css';

const Plans = () => {
  const plans = [
    { title: 'Beginner Plan', description: 'Perfect for those starting their fitness journey.' },
    { title: 'Intermediate Plan', description: 'Step up your game with this plan.' },
    { title: 'Advanced Plan', description: 'For those who want to push their limits.' },
  ];

  return (
    <section id="plans" className="plans">
      <h2>Workout Plans</h2>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div className="card" key={index}>
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <button onClick={() => alert('Workout Plan Details Loaded')}>View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
