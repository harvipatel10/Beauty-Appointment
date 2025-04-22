import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menfacialgrooming = [
  { 
    name: "Classic Facial", 
    benefits: "Deep cleansing, hydration, and glowing skin.", 
    price: "₹500 - ₹700",
    process: ["Cleansing", "Exfoliation", "Steam", "Massage", "Mask", "Moisturizer"]
  },
  { 
    name: "Anti-Aging Facial", 
    benefits: "Reduces wrinkles, firms skin, and boosts collagen.", 
    price: "₹950 - ₹1200",
    process: ["Deep Cleansing", "Exfoliation", "Serum Application", "Firming Massage", "Anti-Aging Mask", "SPF Protection"]
  },
  { 
    name: "Brightening Facial", 
    benefits: "Improves skin tone, adds glow, and removes dullness.", 
    price: "₹850 - ₹1100",
    process: ["Cleansing", "Exfoliation", "Vitamin C Serum", "Massage", "Brightening Mask", "Hydration"]
  },
  { 
    name: "Hydrating Facial", 
    benefits: "Deeply moisturizes dry skin and restores elasticity.", 
    price: "₹750 - ₹1000",
    process: ["Cleansing", "Hyaluronic Acid Serum", "Massage", "Hydration Mask", "Moisturizer"]
  },
  { 
    name: "Detox Facial", 
    benefits: "Purifies skin, removes toxins, and reduces breakouts.", 
    price: "₹900 - ₹1150",
    process: ["Deep Cleansing", "Exfoliation", "Detox Mask", "Massage", "Hydration"]
  },
  { 
    name: "Oxygen Facial", 
    benefits: "Boosts hydration, promotes collagen, and improves circulation.", 
    price: "₹1050 - ₹1250",
    process: ["Oxygen Infusion", "Serum Application", "Massage", "Hydration Mask", "SPF Protection"]
  },
  { 
    name: "Gold Facial", 
    benefits: "Enhances radiance, reduces fine lines, and provides deep nourishment.", 
    price: "₹1200 - ₹1500",
    process: ["Cleansing", "Gold Serum", "Massage", "Gold Mask", "Moisturizer"]
  },
  { 
    name: "Charcoal Facial", 
    benefits: "Absorbs excess oil, unclogs pores, and prevents acne.", 
    price: "₹800 - ₹1050",
    process: ["Cleansing", "Charcoal Mask", "Exfoliation", "Massage", "Hydration"]
  },
  { 
    name: "Collagen Facial", 
    benefits: "Increases elasticity, firms skin, and reduces aging signs.", 
    price: "₹1300 - ₹1600",
    process: ["Cleansing", "Collagen Serum", "Massage", "Firming Mask", "SPF Protection"]
  }
];

const FacialTreatments = () => {
  return (
    <div className="men-facial-container">
      <BeautyNavbar />
      <section className="menfacialgrooming-hero">
        <div className="menfacialgrooming-content">
          <h1 className="menfacialgrooming-title">Facial Treatments</h1>
          <p className="menfacialgrooming-description">Enhance your skin’s natural beauty with our specialized facial treatments.</p>
        </div>
      </section>
      <div className="menfacialgrooming-heading">
        <h1>Our Facial Treatments</h1>
      </div>
      <div className="menfacialgrooming-services">
        {menfacialgrooming.map((treatment, index) => (
          <div key={index} className="menfacialgrooming-card">
            <h3 className="menfacialgrooming-name">{treatment.name}</h3>
            <p className="menfacialgrooming-benefits">{treatment.benefits}</p>
            <span className="menfacialgrooming-price">{treatment.price}</span>
            <div className="menfacialgrooming-steps">
              <h4>Process:</h4>
              <ul>
                {treatment.process.map((step, i) => (
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

export default FacialTreatments;
