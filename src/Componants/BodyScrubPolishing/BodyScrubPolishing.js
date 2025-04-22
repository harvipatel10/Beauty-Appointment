import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";


const menbodyscrub = [
  {
    name: "Detoxifying Body Scrub",
    benefits: "Removes dead skin cells, detoxifies the skin, and improves circulation.",
    price: "₹1,500 - ₹2,000",
    process: [
      "Full-body cleansing with warm water",
      "Application of detox scrub",
      "Gentle exfoliation using natural ingredients",
      "Warm towel wrap for deep absorption",
      "Moisturizing and soothing body lotion"
    ]
  },
  {
    name: "Hydrating Body Wrap",
    benefits: "Deeply hydrates dry skin, restores elasticity, and leaves skin soft.",
    price: "₹2,000 - ₹2,800",
    process: [
      "Body cleansing with hydrating cleanser",
      "Application of moisture-rich wrap",
      "Relaxation under a thermal blanket",
      "Gentle rinse with warm water",
      "Hydrating serum and body massage"
    ]
  },
  {
    name: "Brightening Body Polishing",
    benefits: "Enhances skin radiance, removes dullness, and evens out skin tone.",
    price: "₹1,800 - ₹2,500",
    process: [
      "Skin assessment and cleansing",
      "Application of brightening exfoliant",
      "Buffing and polishing treatment",
      "Warm towel therapy",
      "Final hydration with brightening lotion"
    ]
  },
  {
    name: "Anti-Tan Body Scrub",
    benefits: "Removes tan, soothes sun-damaged skin, and brightens complexion.",
    price: "₹1,600 - ₹2,200",
    process: [
      "Gentle cleansing to remove dirt & oils",
      "Application of tan-removal scrub",
      "Massage to improve blood circulation",
      "Cool-down with a refreshing gel",
      "Final hydration with aloe-based lotion"
    ]
  },
  {
    name: "Coffee Detox Scrub",
    benefits: "Reduces cellulite, improves blood circulation, and tightens skin.",
    price: "₹1,700 - ₹2,400",
    process: [
      "Warm shower preparation",
      "Application of organic coffee scrub",
      "Massage for deep exfoliation",
      "Relaxation with warm towel therapy",
      "Moisturizing with caffeine-infused lotion"
    ]
  },
  {
    name: "Charcoal Purifying Wrap",
    benefits: "Removes impurities, unclogs pores, and controls oiliness.",
    price: "₹2,200 - ₹3,000",
    process: [
      "Cleansing with a detoxifying charcoal cleanser",
      "Application of activated charcoal mask",
      "Steam treatment for deep absorption",
      "Removal with warm water rinse",
      "Soothing gel massage to lock in moisture"
    ]
  },
  {
    name: "Gold Radiance Body Polish",
    benefits: "Adds a golden glow, enhances skin elasticity, and boosts hydration.",
    price: "₹2,500 - ₹3,500",
    process: [
      "Skin cleansing and exfoliation",
      "Application of gold-infused polish",
      "Light massage to activate ingredients",
      "Golden wrap therapy for absorption",
      "Moisturization with gold serum"
    ]
  },
  {
    name: "Aloe Vera Cooling Wrap",
    benefits: "Soothes sensitive skin, reduces inflammation, and refreshes the body.",
    price: "₹1,800 - ₹2,300",
    process: [
      "Cooling shower preparation",
      "Application of aloe vera gel wrap",
      "Gentle massage for absorption",
      "Relaxation with cooling compress",
      "Hydration with aloe-based moisturizer"
    ]
  },
  {
    name: "Milk & Honey Hydration Wrap",
    benefits: "Deep nourishment, softens skin, and provides anti-aging benefits.",
    price: "₹2,000 - ₹2,900",
    process: [
      "Gentle cleansing with milk-based cleanser",
      "Application of honey-infused body wrap",
      "Warm towel therapy for deep hydration",
      "Light massage for better absorption",
      "Moisturization with a honey-based cream"
    ]
  },
  {
    name: "Deep Cleansing Body Scrub",
    benefits: "Exfoliates dead skin, removes impurities, and improves skin texture.",
    price: "₹1,500 - ₹2,200",
    process: [
      "Full-body cleansing",
      "Application of exfoliating scrub",
      "Gentle massage and rinse",
      "Hydrating lotion application"
    ]
  },
  {
    name: "Cooling Cucumber Wrap",
    benefits: "Soothes and hydrates the skin, reduces inflammation.",
    price: "₹1,800 - ₹2,500",
    process: [
      "Light body exfoliation",
      "Application of cooling cucumber gel",
      "Relaxation and hydration treatment",
      "Rinse and moisturizing"
    ]
  }
];


const BodyScrubPolishing = () => {
  return (
    <div className="men-body-scrub-container">
      <BeautyNavbar />


        <section className="menbodyscrub-hero">
        <div className="menbodyscrub-content">
          <h1 className="menbodyscrub-title">Men’s Body Scrub, Wraps & Polishing</h1>
          <p className="menbodyscrub-description">Rejuvenate your skin with our luxurious body treatments.</p>
        </div>
      </section>

        <div className="menbodyscrub-heading">
        <h1>Our Body Scrub, Wraps & Polishing services</h1>
      </div>

        <div className="menbodyscrub-services">
        {menbodyscrub.map((menbodyscrub, index) => (
          <div key={index} className="menbodyscrub-card">
            <h3 className="menbodyscrub-name">{menbodyscrub.name}</h3>
            <p className="menbodyscrub-benefits">{menbodyscrub.benefits}</p>
            <span className="menbodyscrub-price">{menbodyscrub.price}</span>
            <div className="menbodyscrub-steps">
              <h4>Process:</h4>
              <ul>
                {menbodyscrub.process.map((step, i) => (
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

export default BodyScrubPolishing;
