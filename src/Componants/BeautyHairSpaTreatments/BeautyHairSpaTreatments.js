import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const hairSpaTreatments = [
  {
    name: "Deep Conditioning Spa",
    benefits: "Restores moisture and repairs damaged hair.",
    price: "₹2500 - ₹5000",
    process: [
      "Hair analysis and consultation.",
      "Application of deep conditioning treatment.",
      "Steam therapy for enhanced absorption.",
      "Rinse with lukewarm water.",
      "Blow-dry and styling."
    ]
  },
  {
    name: "Keratin Smooth Spa",
    benefits: "Reduces frizz and enhances smoothness.",
    price: "₹4000 - ₹8000",
    process: [
      "Hair cleansing with a sulfate-free shampoo.",
      "Application of keratin-infused treatment.",
      "Heat sealing with a flat iron.",
      "Cooling and setting phase.",
      "Final rinse and styling."
    ]
  },
  {
    name: "Anti-Dandruff Hair Spa",
    benefits: "Soothes scalp and removes dandruff.",
    price: "₹2000 - ₹4500",
    process: [
      "Scalp diagnosis and exfoliation.",
      "Application of anti-dandruff treatment.",
      "Gentle scalp massage for absorption.",
      "Steam therapy for deep penetration.",
      "Rinse and styling."
    ]
  },
  {
    name: "Hair Fall Control Spa",
    benefits: "Strengthens roots and reduces hair fall.",
    price: "₹3000 - ₹6000",
    process: [
      "Hair and scalp assessment.",
      "Application of fortifying hair mask.",
      "Massage for blood circulation improvement.",
      "Steam and rinse with herbal shampoo.",
      "Final styling."
    ]
  },
  {
    name: "Color Protection Hair Spa",
    benefits: "Enhances and prolongs hair color vibrancy.",
    price: "₹3500 - ₹7000",
    process: [
      "Hair wash with color-safe shampoo.",
      "Application of color-protecting treatment.",
      "Heat activation for better absorption.",
      "Rinse and conditioning.",
      "Blow-dry and final touch-up."
    ]
  },
  {
    name: "Scalp Revitalization Treatment",
    benefits: "Stimulates the scalp and promotes healthy hair growth.",
    price: "₹3200 - ₹6000",
    process: [
      "Initial scalp analysis",
      "Deep cleansing of the scalp",
      "Application of revitalizing serum",
      "Gentle scalp massage",
      "Steam infusion for nutrient absorption",
      "Final rinse and conditioning"
    ]
  },
  {
    name: "Hot Oil Treatment",
    benefits: "Deeply nourishes and revitalizes dry, brittle hair.",
    price: "₹2000 - ₹4000",
    process: [
      "Application of a warm oil blend",
      "Gentle scalp massage",
      "Covering with a warm towel for deep penetration",
      "Rinse with a mild shampoo",
      "Deep conditioning treatment"
    ]
  },
  {
    name: "Scalp Detox Treatment",
    benefits: "Removes buildup and impurities, leaving your scalp refreshed.",
    price: "₹2800 - ₹5000",
    process: [
      "Scalp cleansing with a detox formula",
      "Exfoliation to remove dead skin cells",
      "Application of a detoxifying serum",
      "Soothing scalp massage",
      "Rinse and condition"
    ]
  },
  {
    name: "Nourishing Overnight Spa",
    benefits: "Provides intensive overnight care for extremely dry hair.",
    price: "₹3500 - ₹6500",
    process: [
      "Pre-treatment consultation",
      "Application of a nourishing overnight mask",
      "Optional use of a hair wrap or bonnet",
      "Rinse in the morning",
      "Follow-up conditioning"
    ]
  },
  {
    name: "Protein Hair Treatment",
    benefits: "Repairs and strengthens hair with a protein-rich formula.",
    price: "₹2800 - ₹5000",
    process: [
      "Hair evaluation",
      "Cleansing with a protein-enriched shampoo",
      "Application of a protein mask",
      "Gentle massage",
      "Steam treatment for protein infusion",
      "Rinse and style"
    ]
  },
  {
    name: "Frizz Control Treatment",
    benefits: "Reduces frizz and adds shine for smoother hair.",
    price: "₹3000 - ₹5500",
    process: [
      "Hair analysis and consultation",
      "Cleansing with a smoothing shampoo",
      "Application of anti-frizz serum",
      "Hair conditioning and blow-drying",
      "Styling for a smooth finish"
    ]
  }
];

const BeautyHairSpaTreatments = () => {
  return (
    <div className="women-hairspa-container">
      <BeautyNavbar />
      <section className="women-hairspa-hero">
        <div className="women-hairspa-content">
          <h1 className="women-hairspa-title">Women's Hair Spa Treatments</h1>
          <p className="women-hairspa-description">
            Indulge in luxurious hair spa treatments designed to nourish, repair, and rejuvenate your hair.
          </p>
        </div>
      </section>

      <div className="women-hairspa-heading">
        <h1>Our Hair Spa Treatments</h1>
      </div>

      <div className="women-hairspa-services">
        {hairSpaTreatments.map((treatment, index) => (
          <div key={index} className="women-hairspa-card">
            <h3 className="women-hairspa-name">{treatment.name}</h3>
            <p className="women-hairspa-benefits">{treatment.benefits}</p>
            <span className="women-hairspa-price">{treatment.price}</span>
            <div className="women-hairspa-steps">
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

export default BeautyHairSpaTreatments;
