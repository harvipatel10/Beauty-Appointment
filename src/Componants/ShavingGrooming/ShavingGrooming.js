import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css"; 

const services = [
  { 
    name: "Classic Shave", 
    benefits: "Smooth skin, reduced irritation, and a refreshing feel.", 
    price: "₹250 - ₹350",
    process: [
      "Hot towel preparation",
      "Straight razor shave",
      "Soothing aftershave application"
    ]
  },
  { 
    name: "Beard Trim & Shape", 
    benefits: "Well-groomed beard, enhanced facial features, and easy maintenance.", 
    price: "₹210 - ₹300",
    process: [
      "Consultation for beard style",
      "Precision trimming and shaping",
      "Application of hydrating beard oil"
    ]
  },
  { 
    name: "Luxury Shaving Experience", 
    benefits: "Deep relaxation, improved skin health, and a premium grooming touch.", 
    price: "₹375 - ₹500",
    process: [
      "Hot towel preparation",
      "Exfoliation treatment",
      "Straight razor shave",
      "Facial massage",
      "Premium aftershave application"
    ]
  }
];

const ShavingGrooming = () => {
  return (

    <div className="men-shavinggrooming-container">
      <BeautyNavbar />

      <section className="shavinggrooming-hero">
        <div className="shavinggrooming-content">
          <h1 className="shavinggrooming-title">Shaving & Beard Grooming</h1>
          <p className="shavinggrooming-description">Experience the finest grooming services tailored for the modern gentleman.</p>
        </div>
      </section>

      <div className="shaving-heading">
        <h1>Our Shaving & Beard Grooming services</h1>
      </div>
     
      <div className="shaving-services">
        {services.map((service, index) => (
          <div key={index} className="shaving-card">
            <h3 className="shaving-name">{service.name}</h3>
            <p className="shaving-benefits">{service.benefits}</p>
            <span className="shaving-price">{service.price}</span>
            <div className="shaving-steps">
              <h4>Process:</h4>
              <ul>
                {service.process.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
    
    </div>
  
  );
};

export default ShavingGrooming;
