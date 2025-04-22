import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const bodyScrubPolishingTreatments = [
  {
    name: "Coffee Body Scrub",
    benefits: "Exfoliates the skin and promotes a smooth, radiant glow.",
    price: "₹2200 - ₹4000",
    process: [
      "Gentle exfoliation with coffee grounds",
      "Massage to improve blood circulation",
      "Application of hydrating lotion after scrub",
      "Final soothing massage to lock in moisture"
    ]
  },
  {
    name: "Sugar Body Scrub",
    benefits: "Softens and smoothens the skin while removing dead skin cells.",
    price: "₹2000 - ₹3500",
    process: [
      "Gentle exfoliation with sugar granules",
      "Massage to promote blood circulation",
      "Rinse with warm water",
      "Application of a nourishing body lotion"
    ]
  },
  {
    name: "Sea Salt Body Scrub",
    benefits: "Removes toxins and dead skin cells while improving skin texture.",
    price: "₹2500 - ₹4500",
    process: [
      "Gentle exfoliation with sea salt",
      "Massage to stimulate circulation",
      "Steam treatment to open pores",
      "Application of hydrating cream to finish"
    ]
  },
  {
    name: "Dead Sea Mud Scrub",
    benefits: "Detoxifies and rejuvenates the skin, leaving it soft and smooth.",
    price: "₹3000 - ₹5000",
    process: [
      "Application of Dead Sea mud to exfoliate",
      "Massage to remove impurities and dead skin",
      "Relaxing steam to open pores",
      "Rinse with lukewarm water and moisturizing"
    ]
  },
  {
    name: "Aloe Vera Body Scrub",
    benefits: "Calms and hydrates the skin while exfoliating.",
    price: "₹2300 - ₹4000",
    process: [
      "Gentle scrub with aloe vera gel",
      "Massage to remove dead skin cells",
      "Cooling mask application for hydration",
      "Final moisturizing treatment"
    ]
  },
  {
    name: "Lavender Body Scrub",
    benefits: "Relieves stress and leaves the skin feeling smooth and refreshed.",
    price: "₹2400 - ₹4200",
    process: [
      "Exfoliation with lavender-infused scrub",
      "Massage to ease tension and improve circulation",
      "Rinse with warm water",
      "Hydration treatment with lavender lotion"
    ]
  },
  {
    name: "Orange Body Scrub",
    benefits: "Brightens and revitalizes dull skin, leaving it radiant.",
    price: "₹2100 - ₹3800",
    process: [
      "Exfoliation with citrus-based scrub",
      "Massage to refresh and rejuvenate",
      "Steam to open pores and detoxify",
      "Nourishing citrus lotion applied afterward"
    ]
  },
  {
    name: "Rose Body Scrub",
    benefits: "Softens and smoothens the skin with a soothing floral scent.",
    price: "₹2500 - ₹4500",
    process: [
      "Gentle exfoliation with rose-infused scrub",
      "Relaxing massage with aromatic oils",
      "Hydrating treatment with rose-based lotion",
      "Final relaxation and skin rejuvenation"
    ]
  },
  {
    name: "Herbal Body Scrub",
    benefits: "Detoxifies and nourishes with a blend of natural herbs.",
    price: "₹2200 - ₹4000",
    process: [
      "Application of herbal scrub for exfoliation",
      "Massage with essential oils",
      "Steam treatment to open pores",
      "Moisturizing body wrap to lock in hydration"
    ]
  },
  {
    name: "Turmeric Body Scrub",
    benefits: "Brightens and tones the skin while exfoliating.",
    price: "₹2500 - ₹4500",
    process: [
      "Gentle exfoliation with turmeric scrub",
      "Massage to improve skin texture",
      "Steam treatment to open pores",
      "Soothing turmeric-based cream applied"
    ]
  }
];

const BeautyBodyScrubPolishing = () => {
  return (
    <div className="women-bodyscrubpolishing-container">
      <BeautyNavbar />
      <section className="women-bodyscrubpolishing-hero">
        <div className="women-bodyscrubpolishing-content">
          <h1 className="women-bodyscrubpolishing-title">
            Women's Beauty Body Scrub & Polishing Treatments
          </h1>
          <p className="women-bodyscrubpolishing-description">
            Rejuvenate your skin with our luxurious body scrub and polishing treatments that exfoliate and leave your skin smooth, fresh, and glowing.
          </p>
        </div>
      </section>

      <div className="women-bodyscrubpolishing-heading">
        <h1>Our Body Scrub & Polishing Treatments</h1>
      </div>

      <div className="women-bodyscrubpolishing-services">
        {bodyScrubPolishingTreatments.map((treatment, index) => (
          <div key={index} className="women-bodyscrubpolishing-card">
            <h3 className="women-bodyscrubpolishing-name">{treatment.name}</h3>
            <p className="women-bodyscrubpolishing-benefits">{treatment.benefits}</p>
            <span className="women-bodyscrubpolishing-price">{treatment.price}</span>
            <div className="women-bodyscrubpolishing-steps">
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

export default BeautyBodyScrubPolishing;
