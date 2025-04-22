import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menTreatments = [
  { 
    name: "Hair Fall Control Spa", 
    benefits: "Strengthens roots, prevents breakage, promotes hair growth", 
    price: "₹2,000 - ₹3,000",
    process: [
      "Scalp analysis and deep cleansing",
      "Nourishing oil massage",
      "Steam treatment for better absorption",
      "Hair strengthening mask application",
      "Rinse and finishing serum application"
    ]
  },
  { 
    name: "Keratin Repair Spa", 
    benefits: "Restores smoothness, repairs damage, enhances shine", 
    price: "₹2,500 - ₹4,000",
    process: [
      "Deep cleansing with sulfate-free shampoo",
      "Application of keratin-infused mask",
      "Steam treatment to penetrate keratin",
      "Rinse with cool water to lock in moisture",
      "Blow-dry and styling"
    ]
  },
  { 
    name: "Protein Nourishment Spa", 
    benefits: "Deeply nourishes weak, brittle hair", 
    price: "₹1,800 - ₹2,500",
    process: [
      "Protein-rich shampoo wash",
      "Application of protein mask",
      "Massage and steam treatment",
      "Rinse and protein spray application",
      "Styling with heat protection serum"
    ]
  },
  { 
    name: "Oil Balancing Hair Spa", 
    benefits: "Regulates excessive scalp oil production", 
    price: "₹1,500 - ₹2,200",
    process: [
      "Scalp analysis and oil control shampoo",
      "Gentle exfoliation to remove buildup",
      "Application of balancing serum",
      "Steam treatment to regulate oil levels",
      "Cool rinse and finishing spray"
    ]
  },
  { 
    name: "Anti-Frizz & Smoothing Spa", 
    benefits: "Controls frizz, softens hair, provides smooth texture", 
    price: "₹2,500 - ₹3,500",
    process: [
      "Moisturizing shampoo and deep conditioning",
      "Application of anti-frizz serum",
      "Steam therapy for better absorption",
      "Frizz control mask and smoothing serum",
      "Blow-dry and straightening (optional)"
    ]
  },
  { 
    name: "Scalp Rejuvenation Therapy", 
    benefits: "Detoxifies scalp, improves circulation, stimulates growth", 
    price: "₹2,000 - ₹2,800",
    process: [
      "Deep scalp cleansing and exfoliation",
      "Herbal infusion scalp massage",
      "Steam therapy for better penetration",
      "Application of rejuvenation mask",
      "Cool rinse and scalp toning spray"
    ]
  },
  { 
    name: "Ayurvedic Hair Spa", 
    benefits: "Uses herbal extracts to strengthen hair naturally", 
    price: "₹2,200 - ₹3,200",
    process: [
      "Herbal oil massage with traditional ingredients",
      "Steam therapy for deep nourishment",
      "Application of herbal hair mask",
      "Rinse with natural Ayurvedic shampoo",
      "Cooling serum and mild scalp massage"
    ]
  },
  { 
    name: "Cooling Menthol Scalp Spa", 
    benefits: "Soothes the scalp, relieves irritation & stress", 
    price: "₹1,500 - ₹2,000",
    process: [
      "Menthol-infused shampoo wash",
      "Cooling scalp massage with mint extract",
      "Steam treatment for relaxation",
      "Application of cooling gel mask",
      "Final rinse with cool water"
    ]
  }
];

const HairSpaScalpTreatments = () => {
  return (
    <div className="men-hairspa-container">
      <BeautyNavbar />

 
      <section className="men-hairspa-hero">
        <div className="men-hairspa-hero-content">
          <h1 className="men-hairspa-title">Men's Hair Spa & Scalp Treatments</h1>
          <p className="men-hairspa-description">Revitalize your hair and scalp with deep-nourishing treatments 
            for a healthier, refreshed look.</p>
        </div>
      </section>


      <div className="men-hairspa-heading">
        <h1>Our Hair Spa & Scalp Treatments</h1>
      </div>


      <div className="men-hairspa-services">
        {menTreatments.map((treatment, index) => (
          <div key={index} className="men-hairspa-card">
             {/* Video Section */}

            <h3 className="men-hairspa-name">{treatment.name}</h3>
            <p className="men-hairspa-benefits">{treatment.benefits}</p>
            <span className="men-hairspa-price">{treatment.price}</span>
            <div className="men-hairspa-steps">
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

export default HairSpaScalpTreatments;
