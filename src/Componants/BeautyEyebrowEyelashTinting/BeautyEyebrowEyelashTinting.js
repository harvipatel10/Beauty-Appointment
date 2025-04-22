import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const tintingServices = [
  {
    name: "Eyebrow Tinting",
    benefits: "Enhance and define your brows with a natural-looking tint.",
    price: "₹800 - ₹1500",
    process: [
      "Consultation and color selection",
      "Cleanse and prep the eyebrow area",
      "Apply tint solution evenly",
      "Allow tint to process for optimal color",
      "Remove tint and apply nourishing treatment"
    ]
  },
  {
    name: "Eyelash Tinting",
    benefits: "Darken and define your lashes for a fuller, vibrant look.",
    price: "₹800 - ₹1500",
    process: [
      "Cleanse and prep the lash area",
      "Apply tint solution carefully along the lashes",
      "Allow tint to process",
      "Gently remove excess tint",
      "Apply soothing lotion to calm the eyes"
    ]
  },
  {
    name: "Eyebrow & Eyelash Combo Tinting",
    benefits: "Achieve a harmonious look with simultaneous tinting for brows and lashes.",
    price: "₹1500 - ₹2500",
    process: [
      "Consultation and color matching",
      "Prep both eyebrows and eyelashes",
      "Apply appropriate tint solutions to each area",
      "Allow tint to set and process",
      "Rinse thoroughly and apply post-treatment care"
    ]
  }
];

const BeautyEyebrowEyelashTinting = () => {
  return (
    <div className="women-BeautyEyebrowEyelashTinting-container">
      <BeautyNavbar />
      <section className="women-BeautyEyebrowEyelashTinting-hero">
        <div className="women-BeautyEyebrowEyelashTinting-content">
          <h1 className="women-BeautyEyebrowEyelashTinting-title">
            Women's Eyebrow & Eyelash Tinting
          </h1>
          <p className="women-BeautyEyebrowEyelashTinting-description">
            Enhance your natural beauty with our expert tinting services, designed to define and elevate your eyebrows and eyelashes.
          </p>
        </div>
      </section>

      <div className="women-BeautyEyebrowEyelashTinting-heading">
        <h1>Our Tinting Services</h1>
      </div>

      <div className="women-BeautyEyebrowEyelashTinting-services">
        {tintingServices.map((service, index) => (
          <div key={index} className="women-BeautyEyebrowEyelashTinting-card">
            <h3 className="women-BeautyEyebrowEyelashTinting-name">{service.name}</h3>
            <p className="women-BeautyEyebrowEyelashTinting-benefits">{service.benefits}</p>
            <span className="women-BeautyEyebrowEyelashTinting-price">{service.price}</span>
            <div className="women-BeautyEyebrowEyelashTinting-steps">
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

export default BeautyEyebrowEyelashTinting;
