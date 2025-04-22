import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const facialsSkinCareTreatments = [
  {
    name: "Hydrating Facial",
    benefits: "Deep hydration and rejuvenation for dull, dry skin.",
    price: "₹2500 - ₹4000",
    process: [
      "Cleansing and exfoliation",
      "Application of hydrating serum",
      "Facial massage",
      "Mask and steam treatment",
      "Moisturizing and SPF application"
    ]
  },
  {
    name: "Anti-Aging Facial",
    benefits: "Reduces wrinkles and fine lines, leaving skin smoother and firmer.",
    price: "₹3500 - ₹6000",
    process: [
      "Skin analysis and consultation",
      "Deep cleansing and exfoliation",
      "Application of anti-aging serum",
      "Gentle massage to boost circulation",
      "Application of a rejuvenating mask",
      "Moisturizing and sun protection"
    ]
  },
  {
    name: "Deep Cleansing Facial",
    benefits: "Removes impurities and unclogs pores for clearer, healthier skin.",
    price: "₹3000 - ₹5000",
    process: [
      "Initial skin assessment",
      "Thorough cleansing and exfoliation",
      "Extraction of impurities",
      "Application of a soothing mask",
      "Toning and hydration"
    ]
  },
  {
    name: "Brightening Facial",
    benefits: "Enhances skin radiance and evens out skin tone.",
    price: "₹3200 - ₹5500",
    process: [
      "Cleansing and mild exfoliation",
      "Application of a brightening serum",
      "Facial massage to stimulate circulation",
      "Application of a radiance-boosting mask",
      "Moisturizing and SPF protection"
    ]
  },
  {
    name: "Acne Control Facial",
    benefits: "Targets acne-prone skin to reduce breakouts and soothe inflammation.",
    price: "₹2800 - ₹5000",
    process: [
      "Skin evaluation and cleansing",
      "Gentle exfoliation",
      "Application of an acne-fighting serum",
      "Extraction (if necessary)",
      "Soothing mask and hydration"
    ]
  },
  {
    name: "Detox Facial",
    benefits: "Detoxifies and purifies the skin, leaving it refreshed and revitalized.",
    price: "₹3000 - ₹5200",
    process: [
      "Skin diagnosis",
      "Deep cleansing to remove toxins",
      "Application of a detoxifying serum",
      "Facial massage",
      "Cooling mask and hydration"
    ]
  },
  {
    name: "Collagen Boost Facial",
    benefits: "Boosts collagen production for firmer, more youthful skin.",
    price: "₹3600 - ₹6000",
    process: [
      "Skin consultation and analysis",
      "Cleansing and exfoliation",
      "Application of collagen-boosting serum",
      "Facial massage to stimulate collagen production",
      "Application of a collagen mask",
      "Moisturizing"
    ]
  },
  {
    name: "Oxygenating Facial",
    benefits: "Revitalizes and re-energizes skin with a boost of oxygen.",
    price: "₹3200 - ₹5500",
    process: [
      "Deep cleansing and exfoliation",
      "Application of an oxygen-rich serum",
      "Facial massage",
      "Steam treatment",
      "Hydration with a soothing mask"
    ]
  },
  {
    name: "Vitamin C Facial",
    benefits: "Brightens skin tone and reduces pigmentation with a powerful dose of Vitamin C.",
    price: "₹3000 - ₹5000",
    process: [
      "Cleansing and exfoliation",
      "Application of Vitamin C serum",
      "Gentle massage",
      "Application of a brightening mask",
      "Moisturizing and SPF"
    ]
  },
  {
    name: "Soothing Sensitive Skin Facial",
    benefits: "Calms and soothes sensitive or irritated skin.",
    price: "₹2800 - ₹4500",
    process: [
      "Initial skin assessment",
      "Gentle cleansing with hypoallergenic products",
      "Application of a soothing serum",
      "Cooling mask",
      "Light massage and hydration"
    ]
  },
  {
    name: "Microdermabrasion Facial",
    benefits: "Exfoliates dead skin cells and promotes a smoother, more even complexion.",
    price: "₹3500 - ₹6000",
    process: [
      "Skin assessment and cleansing",
      "Exfoliation using microdermabrasion technique",
      "Application of a rejuvenating serum",
      "Soothing mask",
      "Moisturizing"
    ]
  },
  {
    name: "Laser Facial",
    benefits: "Uses laser technology to target pigmentation and improve skin texture.",
    price: "₹5000 - ₹9000",
    process: [
      "Skin consultation and analysis",
      "Pre-treatment cleansing",
      "Application of laser treatment",
      "Post-treatment soothing care",
      "Moisturizing and sun protection"
    ]
  }
];

const BeautyFacialsSkinCare = () => {
  return (
    <div className="women-facialsskincare-container">
      <BeautyNavbar />
      <section className="women-facialsskincare-hero">
        <div className="women-facialsskincare-content">
          <h1 className="women-facialsskincare-title">
            Beauty Facials & Skin Care Treatments
          </h1>
          <p className="women-facialsskincare-description">
            Reveal a healthier, more radiant you with our specialized facials and skin care treatments, tailored to meet your unique beauty needs.
          </p>
        </div>
      </section>

      <div className="women-facialsskincare-heading">
        <h1>Our Facials & Skin Care Treatments</h1>
      </div>

      <div className="women-facialsskincare-services">
        {facialsSkinCareTreatments.map((treatment, index) => (
          <div key={index} className="women-facialsskincare-card">
            <h3 className="women-facialsskincare-name">{treatment.name}</h3>
            <p className="women-facialsskincare-benefits">{treatment.benefits}</p>
            <span className="women-facialsskincare-price">{treatment.price}</span>
            <div className="women-facialsskincare-steps">
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

export default BeautyFacialsSkinCare;
