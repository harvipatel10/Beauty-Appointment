import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const detoxSlimmingTherapyServices = [
  {
    name: "Herbal Detox Wrap",
    benefits: "Eliminates toxins and rejuvenates the skin with a nourishing herbal blend.",
    price: "₹3000 - ₹5000",
    process: [
      "Initial body assessment",
      "Application of a detoxifying herbal paste",
      "Wrapping with warm cloth to enhance absorption",
      "Rest period for detoxification",
      "Removal and final moisturizing treatment"
    ]
  },
  {
    name: "Slimming Massage Therapy",
    benefits: "Targets stubborn fat and boosts circulation for a leaner appearance.",
    price: "₹3500 - ₹6000",
    process: [
      "Pre-massage consultation and skin assessment",
      "Application of a specialized slimming oil",
      "Deep tissue massage focusing on problem areas",
      "Stimulation of lymphatic drainage",
      "Cooling and hydrating treatment post-massage"
    ]
  },
  {
    name: "Detox & Slimming Combo",
    benefits: "Comprehensive treatment combining detox wrap and slimming massage for full-body rejuvenation.",
    price: "₹6000 - ₹9000",
    process: [
      "Initial consultation and skin assessment",
      "Application of an herbal detox wrap",
      "Followed by targeted slimming massage",
      "Cooling phase with hydration",
      "Final skin nourishment treatment"
    ]
  },
  {
    name: "Infrared Detox Slimming",
    benefits: "Uses infrared heat to boost detoxification and enhance fat burning for a slimmer profile.",
    price: "₹5000 - ₹8000",
    process: [
      "Consultation and skin preparation",
      "Application of detox and slimming gel",
      "Infrared heat therapy session",
      "Cooling treatment and hydration",
      "Post-treatment skin care for lasting results"
    ]
  },
  {
    name: "Lymphatic Drainage Massage",
    benefits: "Stimulates the lymphatic system to eliminate toxins and reduce water retention.",
    price: "₹3200 - ₹5500",
    process: [
      "Consultation and body assessment",
      "Gentle massage focusing on lymph nodes",
      "Stimulation of lymph flow",
      "Reduction of water retention",
      "Post-massage hydration and cooling treatment"
    ]
  },
  {
    name: "Cold Therapy Wrap",
    benefits: "Uses cold treatment to constrict blood vessels and boost metabolism for enhanced fat reduction.",
    price: "₹3000 - ₹5000",
    process: [
      "Skin preparation and consultation",
      "Application of a cold gel pack or wrap",
      "Wrap to reduce inflammation and boost metabolism",
      "Cooling phase with hydration",
      "Final skin conditioning treatment"
    ]
  },
  {
    name: "Body Contouring Wrap",
    benefits: "Helps reduce body circumference and firm the skin using natural ingredients.",
    price: "₹3500 - ₹6000",
    process: [
      "Initial body measurement and consultation",
      "Application of a natural firming serum",
      "Application of a body wrap to enhance absorption",
      "Short massage to stimulate circulation",
      "Removal and application of moisturizer"
    ]
  },
  {
    name: "Detox Foot Bath Therapy",
    benefits: "Detoxifies the body through the feet using ionized water and natural extracts.",
    price: "₹1500 - ₹3000",
    process: [
      "Initial foot soak and cleansing",
      "Placement in an ionized water bath with detox herbs",
      "30-minute soak for toxin extraction",
      "Massage of feet post-soak",
      "Application of nourishing foot cream"
    ]
  }
];

const BeautyDetoxSlimmingTherapy = () => {
  return (
    <div className="women-BeautyDetoxSlimmingTherapy-container">
      <BeautyNavbar />
      <section className="women-BeautyDetoxSlimmingTherapy-hero">
        <div className="women-BeautyDetoxSlimmingTherapy-content">
          <h1 className="women-BeautyDetoxSlimmingTherapy-title">
            Women's Beauty Detox & Slimming Therapy
          </h1>
          <p className="women-BeautyDetoxSlimmingTherapy-description">
            Revitalize your body with our specialized detox and slimming therapies designed to eliminate toxins, improve circulation, and help you achieve a leaner, healthier profile.
          </p>
        </div>
      </section>

      <div className="women-BeautyDetoxSlimmingTherapy-heading">
        <h1>Our Detox & Slimming Therapy Services</h1>
      </div>

      <div className="women-BeautyDetoxSlimmingTherapy-services">
        {detoxSlimmingTherapyServices.map((service, index) => (
          <div key={index} className="women-BeautyDetoxSlimmingTherapy-card">
            <h3 className="women-BeautyDetoxSlimmingTherapy-name">{service.name}</h3>
            <p className="women-BeautyDetoxSlimmingTherapy-benefits">{service.benefits}</p>
            <span className="women-BeautyDetoxSlimmingTherapy-price">{service.price}</span>
            <div className="women-BeautyDetoxSlimmingTherapy-steps">
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

export default BeautyDetoxSlimmingTherapy;
