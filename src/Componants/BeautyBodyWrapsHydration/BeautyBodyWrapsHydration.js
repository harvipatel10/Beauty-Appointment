import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const bodyWrapsHydrationTreatments = [
  {
    name: "Herbal Detox Wrap",
    benefits: "Detoxifies and revitalizes the body while promoting circulation.",
    price: "₹3000 - ₹5000",
    process: [
      "Initial body assessment",
      "Application of a detoxifying herbal paste",
      "Wrapping with warm cloth",
      "Rest period for absorption",
      "Unwrapping and final moisturizing"
    ]
  },
  {
    name: "Mud Body Wrap",
    benefits: "Purifies the skin and improves circulation with natural mud therapy.",
    price: "₹3500 - ₹6000",
    process: [
      "Skin assessment",
      "Application of therapeutic mud",
      "Even distribution and gentle massage",
      "Wrap for 20-30 minutes",
      "Rinse and hydrating lotion application"
    ]
  },
  {
    name: "Seaweed Wrap",
    benefits: "Nourishes and hydrates the skin while promoting detoxification.",
    price: "₹3200 - ₹5500",
    process: [
      "Skin evaluation",
      "Application of nutrient-rich seaweed paste",
      "Body wrap to lock in moisture",
      "Rest period for absorption",
      "Rinse and hydration treatment"
    ]
  },
  {
    name: "Cocoa & Coffee Wrap",
    benefits: "Energizes and rejuvenates the skin with antioxidants and caffeine.",
    price: "₹2800 - ₹4500",
    process: [
      "Pre-treatment skin cleanse",
      "Application of a cocoa & coffee mix",
      "Body wrap for deep ingredient penetration",
      "Relaxation phase for absorption",
      "Final rinse and moisturizer application"
    ]
  },
  {
    name: "Hydrating Aloe Vera Wrap",
    benefits: "Intensely hydrates and soothes the skin using aloe vera.",
    price: "₹2500 - ₹4000",
    process: [
      "Skin assessment",
      "Application of pure aloe vera gel",
      "Wrapping with soft towels",
      "Relaxation phase",
      "Final rinse and hydration boost"
    ]
  },
  {
    name: "Gold Infusion Wrap",
    benefits: "Luxurious treatment that promotes firmness and radiance.",
    price: "₹5000 - ₹8000",
    process: [
      "Skin evaluation",
      "Application of a gold-infused serum",
      "Even distribution and wrapping",
      "Absorption period for active ingredients",
      "Final cleansing and moisturizer"
    ]
  },
  {
    name: "Clay Wrap",
    benefits: "Draws out impurities and detoxifies the skin while providing a soothing effect.",
    price: "₹2800 - ₹5000",
    process: [
      "Skin cleansing and assessment",
      "Application of a natural clay mask",
      "Even application over the body",
      "Wrap to enhance absorption",
      "Rinse off and apply moisturizer"
    ]
  },
  {
    name: "Fruit Enzyme Wrap",
    benefits: "Exfoliates and brightens the skin using natural fruit enzymes.",
    price: "₹2600 - ₹4800",
    process: [
      "Pre-treatment skin cleanse",
      "Application of a fruit enzyme mask",
      "Light massage to enhance exfoliation",
      "Wrap to allow enzyme penetration",
      "Rinse off and apply nourishing lotion"
    ]
  },
  {
    name: "Vitamin Boost Wrap",
    benefits: "Replenishes essential vitamins and antioxidants for healthier skin.",
    price: "₹3000 - ₹5500",
    process: [
      "Skin assessment and cleanse",
      "Application of a vitamin-rich serum",
      "Wrap to lock in nutrients",
      "Rest period for absorption",
      "Unwrap and hydrate skin"
    ]
  },
  {
    name: "Aromatherapy Wrap",
    benefits: "Combines essential oils with wrap therapy for relaxation and skin nourishment.",
    price: "₹3200 - ₹5400",
    process: [
      "Initial consultation and skin assessment",
      "Application of an aromatherapy oil blend",
      "Even application of wrap therapy",
      "Relaxation phase for oil absorption",
      "Rinse and final hydration treatment"
    ]
  },
  {
    name: "Rice Bran Wrap",
    benefits: "Nourishes the skin with rice bran extracts and promotes smoothness.",
    price: "₹2700 - ₹4600",
    process: [
      "Skin cleansing and assessment",
      "Application of a rice bran mixture",
      "Massage to enhance absorption",
      "Wrap to lock in nutrients",
      "Rinse and apply moisturizing lotion"
    ]
  },
  {
    name: "Chocolate Wrap",
    benefits: "Rich in antioxidants, it soothes and rejuvenates the skin with a delicious aroma.",
    price: "₹3500 - ₹5800",
    process: [
      "Skin assessment and cleanse",
      "Application of a chocolate-based mask",
      "Gentle massage to enhance penetration",
      "Wrap for deep absorption",
      "Rinse and finish with a hydrating cream"
    ]
  }
];

const BodyWrapsHydration = () => {
  return (
    <div className="women-BeautyBodyWrapsHydration-container">
      <BeautyNavbar />
      <section className="women-BeautyBodyWrapsHydration-hero">
        <div className="women-BeautyBodyWrapsHydration-content">
          <h1 className="women-BeautyBodyWrapsHydration-title">
            Women's Body Wraps & Hydration Treatments
          </h1>
          <p className="women-BeautyBodyWrapsHydration-description">
            Experience our revitalizing body wraps and hydration treatments designed to detoxify, nourish, and rejuvenate your skin for a glowing, youthful appearance.
          </p>
        </div>
      </section>    

      <div className="women-BeautyBodyWrapsHydration-heading">
        <h1>Our Body Wraps & Hydration Treatments</h1>
      </div>

      <div className="women-BeautyBodyWrapsHydration-services">
        {bodyWrapsHydrationTreatments.map((treatment, index) => (
          <div key={index} className="women-BeautyBodyWrapsHydration-card">
            <h3 className="women-BeautyBodyWrapsHydration-name">{treatment.name}</h3>
            <p className="women-BeautyBodyWrapsHydration-benefits">{treatment.benefits}</p>
            <span className="women-BeautyBodyWrapsHydration-price">{treatment.price}</span>
            <div className="women-BeautyBodyWrapsHydration-steps">
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

export default BodyWrapsHydration;
