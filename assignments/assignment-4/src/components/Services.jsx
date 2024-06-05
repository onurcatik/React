import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h2 className="servicesHeading">Our Services</h2>
      <div className="service-container">
        <div className="service-item">
          <img
            src="https://via.placeholder.com/600x400?text=Service+1"
            alt="Service 1"
          />
        </div>
        <div className="service-item">
          <img
            src="https://via.placeholder.com/600x400?text=Service+2"
            alt="Service 2"
          />
        </div>
        <div className="service-item">
          <img
            src="https://via.placeholder.com/600x400?text=Service+3"
            alt="Service 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
