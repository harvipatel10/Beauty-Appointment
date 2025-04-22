import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const antiAgingRejuvenationTreatments = [
  {
    name: "Anti-Aging Facial",
    benefits: "Reduces wrinkles, improves skin elasticity, and restores youthful radiance.",
    price: "₹3500 - ₹6000",
    process: [
      "Skin consultation and analysis",
      "Deep cleansing and exfoliation",
      "Application of anti-aging serum",
      "Facial massage to boost circulation",
      "Mask application and hydration",
      "Moisturizing with SPF"
    ]
  },
  {
    name: "Collagen Boost Therapy",
    benefits: "Stimulates collagen production for firmer, smoother skin.",
    price: "₹4000 - ₹7000",
    process: [
      "Skin evaluation",
      "Application of collagen-enhancing serum",
      "Microcurrent facial massage",
      "LED light therapy",
      "Hydration and soothing mask"
    ]
  },
  {
    name: "Rejuvenating Peel",
    benefits: "Exfoliates dead skin cells and unveils a brighter, smoother complexion.",
    price: "₹3000 - ₹5500",
    process: [
      "Skin assessment",
      "Application of a gentle chemical peel",
      "Waiting period for exfoliation",
      "Neutralization and soothing treatment",
      "Hydration and mask application"
    ]
  },
  {
    name: "Advanced Laser Rejuvenation",
    benefits: "Targets fine lines and pigmentation using precise laser technology.",
    price: "₹5000 - ₹9000",
    process: [
      "Pre-treatment consultation",
      "Cleansing and skin preparation",
      "Laser treatment session",
      "Post-treatment cooling and soothing care",
      "Moisturization and sun protection"
    ]
  },
  {
    name: "Rejuvenating Micro-Needling",
    benefits: "Enhances skin texture and firmness by stimulating collagen production.",
    price: "₹4500 - ₹8000",
    process: [
      "Skin evaluation",
      "Application of a numbing cream",
      "Micro-needling session",
      "Serum infusion for rejuvenation",
      "Cooling mask and hydration"
    ]
  },
  {
    name: "Vitamin C Brightening",
    benefits: "Brightens skin tone and diminishes pigmentation with potent Vitamin C.",
    price: "₹3000 - ₹5500",
    process: [
      "Deep cleansing",
      "Application of Vitamin C serum",
      "Gentle facial massage",
      "Mask application to boost radiance",
      "Hydration and SPF application"
    ]
  },
  {
    name: "Peptide Rejuvenation Therapy",
    benefits: "Improves skin firmness and reduces wrinkles using peptide technology.",
    price: "₹3800 - ₹6500",
    process: [
      "Skin assessment",
      "Application of a peptide-rich serum",
      "Facial massage",
      "Hydrating mask and soothing care",
      "Moisturization"
    ]
  },
  {
    name: "Hydrodermabrasion",
    benefits: "Deeply cleanses and hydrates skin while reducing fine lines and wrinkles.",
    price: "₹4000 - ₹7000",
    process: [
      "Skin analysis",
      "Hydrodermabrasion session",
      "Gentle extraction and exfoliation",
      "Serum application",
      "Hydration and sun protection"
    ]
  }
];

const BeautyAntiAgingRejuvenation = () => {
  return (
    <div className="women-beautyantiagingrejuvenation-container">
      <BeautyNavbar />
      <section className="women-beautyantiagingrejuvenation-hero">
        <div className="women-beautyantiagingrejuvenation-content">
          <h1 className="women-beautyantiagingrejuvenation-title">
            Women's Beauty Anti-Aging & Rejuvenation Treatments
          </h1>
          <p className="women-beautyantiagingrejuvenation-description">
            Turn back the clock with our advanced treatments designed to restore youthful, radiant skin and reduce the signs of aging.
          </p>
        </div>
      </section>

      <div className="women-beautyantiagingrejuvenation-heading">
        <h1>Our Anti-Aging & Rejuvenation Treatments</h1>
      </div>

      <div className="women-beautyantiagingrejuvenation-services">
        {antiAgingRejuvenationTreatments.map((treatment, index) => (
          <div key={index} className="women-beautyantiagingrejuvenation-card">
            <h3 className="women-beautyantiagingrejuvenation-name">{treatment.name}</h3>
            <p className="women-beautyantiagingrejuvenation-benefits">{treatment.benefits}</p>
            <span className="women-beautyantiagingrejuvenation-price">{treatment.price}</span>
            <div className="women-beautyantiagingrejuvenation-steps">
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

export default BeautyAntiAgingRejuvenation;
