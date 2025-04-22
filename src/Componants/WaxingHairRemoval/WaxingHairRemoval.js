import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menWaxingTreatments = [
  { 
    name: "Full Body Waxing", 
    benefits: "Removes all unwanted hair, leaving skin smooth and soft.", 
    price: "₹2500 - ₹3500",
    process: [
      "Pre-wax Skin Cleansing",
      "Wax Application",
      "Hair Removal",
      "Soothing Gel Application"
    ]
  },
  { 
    name: "Chest & Back Waxing", 
    benefits: "Removes thick hair from chest and back for a clean look.", 
    price: "₹1200 - ₹1800",
    process: [
      "Pre-wax Cleansing",
      "Waxing in Sections",
      "Post-wax Cooling Gel"
    ]
  },
  { 
    name: "Arms & Legs Waxing", 
    benefits: "Smooth and hair-free arms and legs for a neat appearance.", 
    price: "₹1000 - ₹1600",
    process: [
      "Cleansing the Area",
      "Waxing in Strips",
      "Post-wax Moisturizing"
    ]
  },
  { 
    name: "Underarm Waxing", 
    benefits: "Removes hair for clean, odor-free underarms.", 
    price: "₹400 - ₹700",
    process: [
      "Pre-wax Skin Prep",
      "Warm Wax Application",
      "Quick Hair Removal",
      "Soothing Lotion Application"
    ]
  },
  { 
    name: "Facial Waxing (Eyebrows, Upper Lip, Cheeks)", 
    benefits: "Shapes brows, removes facial hair for a clean look.", 
    price: "₹300 - ₹600",
    process: [
      "Skin Cleansing",
      "Precision Waxing",
      "Post-wax Cooling Gel"
    ]
  },
  { 
    name: "Bikini & Intimate Waxing (For personal grooming)", 
    benefits: "Grooming for personal hygiene and confidence.", 
    price: "₹1500 - ₹2200",
    process: [
      "Skin Cleansing",
      "Sensitive Area Waxing",
      "Post-wax Care"
    ]
  }
];

const WaxingHairRemoval = () => {
  return (
    <div className="men-waxing-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-waxing-hero">
        <div className="men-waxing-content">
          <h1 className="men-waxing-title">Men's Waxing & Hair Removal</h1>
          <p className="men-waxing-description">Achieve smooth and hair-free skin with our professional waxing services.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-waxing-heading">
        <h1>Our Waxing Treatments</h1>
      </div>
      
      <div className="men-waxing-services">
        {menWaxingTreatments.map((service, index) => (
          <div key={index} className="men-waxing-card">
            <h3 className="men-waxing-name">{service.name}</h3>
            <p className="men-waxing-benefits">{service.benefits}</p>
            <span className="men-waxing-price">{service.price}</span>
            <div className="men-waxing-steps">
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

export default WaxingHairRemoval;
