import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const waxingHairRemovalServices = [
  {
    name: "Eyebrow Waxing",
    benefits: "Define and shape your eyebrows for a polished look.",
    price: "₹500 - ₹1000",
    process: [
      "Cleanse and prep the eyebrow area",
      "Apply warm wax along the hair growth direction",
      "Quickly remove the wax with hair",
      "Soothe the skin with a calming lotion"
    ]
  },
  {
    name: "Upper Lip Waxing",
    benefits: "Quick removal of unwanted upper lip hair for a smooth finish.",
    price: "₹400 - ₹800",
    process: [
      "Cleanse the upper lip area",
      "Apply a thin layer of warm wax",
      "Remove hair swiftly",
      "Apply soothing aftercare"
    ]
  },
  {
    name: "Chin Waxing",
    benefits: "Smooth and refined look with minimal irritation.",
    price: "₹500 - ₹1000",
    process: [
      "Cleanse and dry the chin area",
      "Apply warm wax carefully",
      "Remove the wax in one quick motion",
      "Soothe with a post-wax lotion"
    ]
  },
  {
    name: "Full Face Waxing",
    benefits: "Removes unwanted facial hair for a clear and radiant complexion.",
    price: "₹1500 - ₹3000",
    process: [
      "Cleanse and prep the face",
      "Apply wax on areas with unwanted hair",
      "Remove the wax and hair quickly",
      "Soothe the skin with a calming serum"
    ]
  },
  {
    name: "Underarm Waxing",
    benefits: "Keeps your underarms smooth and hair-free.",
    price: "₹800 - ₹1500",
    process: [
      "Cleanse and dry the underarm area",
      "Apply wax in small sections",
      "Quickly remove the wax",
      "Apply aftercare lotion to reduce irritation"
    ]
  },
  {
    name: "Bikini Waxing",
    benefits: "Clean, smooth bikini line for enhanced confidence.",
    price: "₹1500 - ₹3000",
    process: [
      "Consultation and preparation of the area",
      "Application of warm wax",
      "Careful removal in sections",
      "Soothing cream application post-treatment"
    ]
  },
  {
    name: "Brazilian Waxing",
    benefits: "Comprehensive hair removal for a completely smooth intimate area.",
    price: "₹2500 - ₹5000",
    process: [
      "Detailed consultation and prep",
      "Application of specialized wax",
      "Thorough hair removal in intimate areas",
      "Post-wax soothing and hydration treatment"
    ]
  },
  {
    name: "Full Leg Waxing",
    benefits: "Achieve smooth, hair-free legs for a flawless look.",
    price: "₹2000 - ₹4000",
    process: [
      "Cleanse and exfoliate legs",
      "Even application of wax",
      "Remove wax in sections",
      "Soothe skin with cooling lotion"
    ]
  },
  {
    name: "Arm Waxing",
    benefits: "Smooth arms with minimal discomfort.",
    price: "₹1200 - ₹2500",
    process: [
      "Cleanse and prep the arms",
      "Apply wax carefully along the arm",
      "Remove wax swiftly",
      "Apply aftercare to prevent irritation"
    ]
  },
  {
    name: "Back Waxing",
    benefits: "Effective hair removal for a smooth, clear back.",
    price: "₹1800 - ₹3500",
    process: [
      "Cleanse and exfoliate the back",
      "Apply wax with precision",
      "Remove hair carefully",
      "Soothe the skin with a cooling gel"
    ]
  }
];

const BeautyWaxingHairRemoval = () => {
  return (
    <div className="women-BeautyWaxingHairRemoval-container">
      <BeautyNavbar />
      <section className="women-BeautyWaxingHairRemoval-hero">
        <div className="women-BeautyWaxingHairRemoval-content">
          <h1 className="women-BeautyWaxingHairRemoval-title">
            Women's Beauty Waxing & Hair Removal
          </h1>
          <p className="women-BeautyWaxingHairRemoval-description">
            Achieve smooth, hair-free skin with our expert waxing and hair removal services, designed for precision and comfort.
          </p>
        </div>
      </section>

      <div className="women-BeautyWaxingHairRemoval-heading">
        <h1>Our Waxing & Hair Removal Services</h1>
      </div>
      
      <div className="women-BeautyWaxingHairRemoval-services">
        {waxingHairRemovalServices.map((service, index) => (
          <div key={index} className="women-BeautyWaxingHairRemoval-card">
            <h3 className="women-BeautyWaxingHairRemoval-name">{service.name}</h3>
            <p className="women-BeautyWaxingHairRemoval-benefits">{service.benefits}</p>
            <span className="women-BeautyWaxingHairRemoval-price">{service.price}</span>
            <div className="women-BeautyWaxingHairRemoval-steps">
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

export default BeautyWaxingHairRemoval;
