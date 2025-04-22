import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menAcneTreatments = [
  { 
    name: "Deep Cleansing Acne Facial", 
    benefits: "Removes excess oil, unclogs pores, and prevents breakouts.", 
    price: "₹1000 - ₹1500",
    process: [
      "Skin Cleansing",
      "Exfoliation & Steam",
      "Blackhead & Whitehead Removal",
      "Soothing Mask",
      "Oil-Free Moisturization"
    ]
  },
  { 
    name: "Chemical Peel for Acne", 
    benefits: "Exfoliates dead skin, reduces acne scars, and brightens complexion.", 
    price: "₹1800 - ₹2500",
    process: [
      "Mild Acid Peel Application",
      "Skin Penetration & Cell Renewal",
      "Cooling Mask",
      "Post-Treatment Hydration"
    ]
  },
  { 
    name: "LED Light Therapy", 
    benefits: "Kills acne bacteria, reduces redness, and soothes inflammation.", 
    price: "₹2000 - ₹3000",
    process: [
      "Cleansing & Exfoliation",
      "Blue LED Light Exposure",
      "Cooling Gel Application",
      "Hydration & SPF Protection"
    ]
  },
  { 
    name: "Charcoal Detox Facial", 
    benefits: "Absorbs impurities, deep cleanses, and minimizes pores.", 
    price: "₹1200 - ₹1800",
    process: [
      "Cleansing & Charcoal Mask",
      "Steam & Extractions",
      "Hydrating Serum",
      "Final Moisturization"
    ]
  },
  { 
    name: "Oxygen Facial for Acne", 
    benefits: "Delivers oxygen deep into skin, reducing acne and boosting healing.", 
    price: "₹2200 - ₹3200",
    process: [
      "Cleansing & Light Exfoliation",
      "Oxygen Infusion with Serums",
      "Relaxation & Skin Hydration",
      "Final Cooling Treatment"
    ]
  },
  { 
    name: "Salicylic Acid Treatment", 
    benefits: "Controls oil production, unclogs pores, and reduces breakouts.", 
    price: "₹1500 - ₹2200",
    process: [
      "Cleansing & Exfoliation",
      "Salicylic Acid Application",
      "Pore Tightening Serum",
      "Hydration & SPF Protection"
    ]
  },
  { 
    name: "Microdermabrasion for Acne Scars", 
    benefits: "Reduces acne scars, removes dead skin cells, and improves skin texture.", 
    price: "₹2500 - ₹3500",
    process: [
      "Cleansing",
      "Microdermabrasion Machine Treatment",
      "Calming Mask",
      "Hydration & SPF Protection"
    ]
  },
  { 
    name: "HydraFacial for Acne", 
    benefits: "Deeply hydrates, removes dirt from pores, and reduces acne.", 
    price: "₹3000 - ₹4000",
    process: [
      "Deep Cleansing",
      "HydraFacial Suction Extraction",
      "Nourishing Serum Infusion",
      "Hydration & SPF Protection"
    ]
  },
  { 
    name: "Tea Tree Oil Acne Treatment", 
    benefits: "Natural antibacterial solution to reduce acne breakouts.", 
    price: "₹1200 - ₹1600",
    process: [
      "Gentle Cleansing",
      "Tea Tree Oil Application",
      "Cooling Mask",
      "Hydration & Oil-Free Moisturization"
    ]
  },
  { 
    name: "Sulfur Mask Therapy", 
    benefits: "Dries out acne, reduces redness, and absorbs excess oil.", 
    price: "₹1300 - ₹1800",
    process: [
      "Deep Cleansing",
      "Sulfur Mask Application",
      "Pore Tightening Treatment",
      "Final Hydration"
    ]
  }
];

const AcneTreatment = () => {
  return (
    <div className="men-acne-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-acne-hero">
        <div className="men-acne-content">
          <h1 className="men-acne-title">Men's Acne Treatments</h1>
          <p className="men-acne-description">Targeted skincare solutions for clear, acne-free skin.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-acne-heading">
        <h1>Our Acne Treatments</h1>
      </div>
      
      <div className="men-acne-services">
        {menAcneTreatments.map((service, index) => (
          <div key={index} className="men-acne-card">
            <h3 className="men-acne-name">{service.name}</h3>
            <p className="men-acne-benefits">{service.benefits}</p>
            <span className="men-acne-price">{service.price}</span>
            <div className="men-acne-steps">
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

export default AcneTreatment;
