import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const bodyMassageSpaTreatments = [
  {
    name: "Swedish Massage",
    benefits: "Relaxing massage to reduce tension and improve circulation.",
    price: "₹2500 - ₹4000",
    process: [
      "Consultation and body assessment",
      "Application of relaxing oils",
      "Long, smooth strokes to ease tension",
      "Targeted focus on sore muscles",
      "Final relaxation phase"
    ]
  },
  {
    name: "Deep Tissue Massage",
    benefits: "Focuses on deeper muscle layers to relieve chronic tension.",
    price: "₹3000 - ₹5000",
    process: [
      "Initial consultation",
      "Assessment of muscle tension",
      "Application of deep pressure techniques",
      "Focused work on trigger points",
      "Cool-down and stretching"
    ]
  },
  {
    name: "Aromatherapy Massage",
    benefits: "Combines massage techniques with essential oils to soothe the mind and body.",
    price: "₹2800 - ₹4500",
    process: [
      "Consultation on scent preferences",
      "Selection of essential oils",
      "Gentle massage to relax muscles",
      "Integration of aromatherapy",
      "Final relaxation and oil absorption"
    ]
  },
  {
    name: "Hot Stone Massage",
    benefits: "Uses heated stones to deeply relax muscles and improve circulation.",
    price: "₹3500 - ₹6000",
    process: [
      "Consultation and body assessment",
      "Application of warm, heated stones",
      "Combination of gentle and deep massage strokes",
      "Targeted heat therapy on tense areas",
      "Cool-down and hydrating massage"
    ]
  },
  {
    name: "Thai Massage",
    benefits: "Combines yoga-like stretching with traditional massage techniques for energy balance.",
    price: "₹3000 - ₹5500",
    process: [
      "Initial consultation and body assessment",
      "Application of rhythmic pressure and stretching",
      "Focus on energy lines and flexibility",
      "Deep relaxation and muscle release",
      "Final relaxation and meditation"
    ]
  },
  {
    name: "Shiatsu Massage",
    benefits: "Uses finger pressure to promote energy flow and balance.",
    price: "₹2800 - ₹5000",
    process: [
      "Consultation and energy assessment",
      "Application of finger pressure along energy pathways",
      "Manual manipulation of acupressure points",
      "Release of tension and energy balance",
      "Cool-down period for full relaxation"
    ]
  },
  {
    name: "Body Wrap Therapy",
    benefits: "Detoxifies and nourishes the skin while promoting overall relaxation.",
    price: "₹3200 - ₹5500",
    process: [
      "Skin and body assessment",
      "Application of detoxifying and hydrating products",
      "Wrapping of the body to enhance absorption",
      "Relaxation period with heat therapy",
      "Unwrapping and final moisturizing treatment"
    ]
  },
  {
    name: "Reflexology Massage",
    benefits: "Stimulates specific pressure points in the feet to promote overall wellness.",
    price: "₹2500 - ₹4500",
    process: [
      "Initial foot assessment",
      "Application of targeted pressure on reflex points",
      "Massage of the feet and lower legs",
      "Stimulation of energy flow",
      "Relaxation and feedback"
    ]
  },
  {
    name: "Balinese Massage",
    benefits: "A unique blend of acupressure, skin rolling, and gentle stretches for complete relaxation.",
    price: "₹3000 - ₹5500",
    process: [
      "Initial consultation",
      "Application of aromatic oils",
      "Deep tissue massage combined with gentle stretching",
      "Skin rolling techniques",
      "Final soothing massage"
    ]
  },
  {
    name: "Ayurvedic Abhyanga",
    benefits: "Traditional Indian oil massage that nourishes the body and balances energy.",
    price: "₹2800 - ₹5000",
    process: [
      "Assessment of dosha (body constitution)",
      "Selection of herbal oils",
      "Full body massage using rhythmic strokes",
      "Warm oil absorption for detoxification",
      "Relaxation and energy balancing"
    ]
  },
  {
    name: "Lomi Lomi Massage",
    benefits: "Hawaiian massage featuring flowing, rhythmic strokes for deep relaxation.",
    price: "₹3500 - ₹6000",
    process: [
      "Pre-treatment consultation",
      "Application of tropical oils",
      "Flowing, continuous strokes across the body",
      "Integration of gentle stretches",
      "Concluding with a calming finish"
    ]
  },
  {
    name: "Hydrotherapy",
    benefits: "Uses water treatments to relax muscles and improve circulation.",
    price: "₹3000 - ₹5500",
    process: [
      "Initial consultation and water temperature check",
      "Hydro massage in a therapeutic pool or bath",
      "Application of water jets or whirlpool techniques",
      "Relaxation period in warm water",
      "Transition to a cool-down phase"
    ]
  },
  {
    name: "Sports Massage",
    benefits: "Designed for athletes, it focuses on relieving muscle tension and enhancing performance.",
    price: "₹3200 - ₹6000",
    process: [
      "Sports-specific muscle assessment",
      "Targeted massage on tight muscle groups",
      "Deep tissue work to improve flexibility",
      "Stretching and recovery techniques",
      "Final relaxation and hydration advice"
    ]
  }
];

const WomenBodyMassageSpa = () => {
  return (
    <div className="women-bodymassagespa-container">
      <BeautyNavbar />
      <section className="women-bodymassagespa-hero">
        <div className="women-bodymassagespa-content">
          <h1 className="women-bodymassagespa-title">
            Women's Body Massage & Spa Treatments
          </h1>
          <p className="women-bodymassagespa-description">
            Unwind and rejuvenate with our exclusive range of body massage and spa treatments tailored for your relaxation and wellness.
          </p>
        </div>
      </section>

      <div className="women-bodymassagespa-heading">
        <h1>Our Massage & Spa Treatments</h1>
      </div>

      <div className="women-bodymassagespa-services">
        {bodyMassageSpaTreatments.map((treatment, index) => (
          <div key={index} className="women-bodymassagespa-card">
            <h3 className="women-bodymassagespa-name">{treatment.name}</h3>
            <p className="women-bodymassagespa-benefits">{treatment.benefits}</p>
            <span className="women-bodymassagespa-price">{treatment.price}</span>
            <div className="women-bodymassagespa-steps">
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

export default WomenBodyMassageSpa;
