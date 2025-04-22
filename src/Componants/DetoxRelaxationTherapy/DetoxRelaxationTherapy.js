import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menDetoxTreatments = [
  { 
    name: "Aromatherapy Massage", 
    benefits: "Relieves stress, improves mood, and enhances relaxation.", 
    price: "₹1500 - ₹2500",
    process: [
      "Selection of Essential Oils",
      "Full Body Relaxation Massage",
      "Deep Breathing Techniques",
      "Post-Massage Relaxation"
    ]
  },
  { 
    name: "Hot Stone Therapy", 
    benefits: "Eases muscle stiffness and improves circulation.", 
    price: "₹1800 - ₹2800",
    process: [
      "Heated Stone Placement",
      "Slow and Gentle Massage",
      "Stress Point Therapy",
      "Relaxation Phase"
    ]
  },
  { 
    name: "Deep Tissue Massage", 
    benefits: "Targets deep muscle layers to relieve chronic pain.", 
    price: "₹2000 - ₹3000",
    process: [
      "Pre-Massage Warm-up",
      "Slow & Deep Strokes",
      "Pressure Point Therapy",
      "Post-Massage Relaxation"
    ]
  },
  { 
    name: "Body Scrub & Detox Wrap", 
    benefits: "Exfoliates skin and removes toxins for a fresh feel.", 
    price: "₹2200 - ₹3200",
    process: [
      "Full Body Exfoliation",
      "Detoxifying Clay or Seaweed Wrap",
      "Hydrating Moisturization"
    ]
  },
  { 
    name: "Herbal Steam Therapy", 
    benefits: "Cleanses skin, removes toxins, and promotes relaxation.", 
    price: "₹1200 - ₹1800",
    process: [
      "Pre-Steam Hydration",
      "20-Minute Herbal Steam Session",
      "Post-Steam Cooling Therapy"
    ]
  },
  { 
    name: "Reflexology Foot Therapy", 
    benefits: "Improves circulation and relieves stress through foot pressure points.", 
    price: "₹1000 - ₹1500",
    process: [
      "Foot Soaking & Cleansing",
      "Reflexology Pressure Massage",
      "Moisturizing & Relaxation"
    ]
  },
  { 
    name: "Swedish Massage", 
    benefits: "A gentle massage to relax muscles and improve circulation.", 
    price: "₹1800 - ₹2800",
    process: [
      "Light to Moderate Pressure Strokes",
      "Full Body Massage",
      "Muscle Relaxation Techniques"
    ]
  },
  { 
    name: "Thai Yoga Massage", 
    benefits: "Increases flexibility, improves energy flow, and reduces muscle tension.", 
    price: "₹2000 - ₹3200",
    process: [
      "Stretching & Pressure Points",
      "Guided Yoga Postures",
      "Relaxation & Flexibility Enhancement"
    ]
  },
  { 
    name: "Shiatsu Therapy", 
    benefits: "Japanese acupressure massage for stress relief and relaxation.", 
    price: "₹2200 - ₹3500",
    process: [
      "Finger & Palm Pressure",
      "Energy Pathway Stimulation",
      "Gentle Stretching Techniques"
    ]
  },
  { 
    name: "Mud Therapy", 
    benefits: "Detoxifies skin, improves circulation, and provides deep relaxation.", 
    price: "₹2500 - ₹3700",
    process: [
      "Full Body Mud Application",
      "Relaxation Period",
      "Mud Removal & Hydration"
    ]
  },
  { 
    name: "Sound Healing Therapy", 
    benefits: "Balances energy and reduces stress using vibrations and frequencies.", 
    price: "₹1800 - ₹2600",
    process: [
      "Use of Singing Bowls & Chimes",
      "Relaxation & Meditation",
      "Vibrational Healing Techniques"
    ]
  },
  { 
    name: "Cryotherapy", 
    benefits: "Cold therapy to reduce muscle soreness, inflammation, and tighten skin.", 
    price: "₹2000 - ₹3000",
    process: [
      "Exposure to Cold Air or Ice Packs",
      "Short Burst Therapy (2-3 mins)",
      "Post-Therapy Hydration & Moisturization"
    ]
  }
];

const DetoxRelaxationTherapy = () => {
  return (
    <div className="men-detox-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-detox-hero">
        <div className="men-detox-content">
          <h1 className="men-detox-title">Men's Detox & Relaxation Therapy</h1>
          <p className="men-detox-description">Revitalize your body and mind with our expert detox and relaxation treatments.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-detox-heading">
        <h1>Our Detox & Relaxation Treatments</h1>
      </div>
      
      <div className="men-detox-services">
        {menDetoxTreatments.map((service, index) => (
          <div key={index} className="men-detox-card">
            <h3 className="men-detox-name">{service.name}</h3>
            <p className="men-detox-benefits">{service.benefits}</p>
            <span className="men-detox-price">{service.price}</span>
            <div className="men-detox-steps">
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

export default DetoxRelaxationTherapy;
