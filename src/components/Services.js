import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {  description: 'Build muscle and increase strength with our specialized programs.' },
    {  description: 'Enhance your flexibility and mental peace with our yoga sessions.' },
    { description: 'Burn calories and improve cardiovascular health.' },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

