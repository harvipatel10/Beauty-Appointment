import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const hairSmootheningTreatments = [
  {
    name: "Basic Hair Smoothening",
    benefits: "Smoothens hair with a subtle shine and reduced frizz.",
    price: "₹3500 - ₹6000",
    process: [
      "Initial hair consultation",
      "Pre-treatment hair wash",
      "Application of smoothening formula",
      "Heat treatment and straightening",
      "Final rinse and styling"
    ]
  },
  {
    name: "Keratin Hair Smoothening",
    benefits: "Infuses keratin to combat frizz and add long-lasting shine.",
    price: "₹4500 - ₹7500",
    process: [
      "Hair evaluation",
      "Cleansing with a sulfate-free shampoo",
      "Application of keratin solution",
      "Heat sealing process",
      "Rinse and style"
    ]
  },
  {
    name: "Deep Conditioning Smoothening",
    benefits: "Combines smoothening with deep conditioning for nourished hair.",
    price: "₹4000 - ₹7000",
    process: [
      "Scalp and hair assessment",
      "Pre-treatment cleansing",
      "Application of a conditioning and smoothening mask",
      "Heat and steam treatment",
      "Rinse and finish styling"
    ]
  },
  {
    name: "Frizz Control Smoothening",
    benefits: "Targets frizz to leave hair sleek, smooth, and manageable.",
    price: "₹3800 - ₹6500",
    process: [
      "Consultation and hair analysis",
      "Application of a frizz control serum",
      "Heat treatment for long-lasting results",
      "Cool rinse and blow-dry"
    ]
  },
  {
    name: "Advanced Hair Smoothening",
    benefits: "A premium treatment offering intensive smoothening with extra shine and nourishment.",
    price: "₹5000 - ₹8500",
    process: [
      "Comprehensive hair and scalp evaluation",
      "Pre-treatment cleansing",
      "Application of an advanced smoothening formula",
      "Precision heat treatment and styling",
      "Deep conditioning rinse and final touch"
    ]
  },
  {
    name: "Silk Infusion Smoothening",
    benefits: "Enhances hair's shine and softness with a luxurious silk infusion.",
    price: "₹4800 - ₹8000",
    process: [
      "Consultation and hair assessment",
      "Pre-wash and gentle cleansing",
      "Application of silk infusion treatment",
      "Heat activation for smoothness",
      "Final rinse and styling"
    ]
  },
  {
    name: "Protein & Vitamin Smoothening",
    benefits: "Fortifies hair with essential proteins and vitamins while smoothing.",
    price: "₹4200 - ₹7000",
    process: [
      "Hair analysis and consultation",
      "Cleansing with a nourishing shampoo",
      "Application of protein and vitamin mask",
      "Heat treatment for absorption",
      "Rinse and style"
    ]
  },
  {
    name: "Anti-Humidity Smoothening",
    benefits: "Locks out humidity for long-lasting smooth, frizz-free hair.",
    price: "₹4000 - ₹6800",
    process: [
      "Consultation and hair evaluation",
      "Pre-treatment cleansing",
      "Application of anti-humidity solution",
      "Heat sealing to lock in smoothness",
      "Rinse and style"
    ]
  },
  {
    name: "Premium Smoothening & Repair",
    benefits: "Combines repair and smoothening for damaged, unruly hair.",
    price: "₹5200 - ₹9000",
    process: [
      "Comprehensive hair assessment",
      "Pre-wash treatment",
      "Application of premium smoothening solution",
      "Extended heat treatment",
      "Deep conditioning rinse and styling"
    ]
  },
  {
    name: "Express Smoothening",
    benefits: "Quick treatment for smooth, manageable hair on-the-go.",
    price: "₹3000 - ₹5000",
    process: [
      "Quick hair assessment",
      "Express wash",
      "Application of express smoothening serum",
      "Rapid heat activation",
      "Rinse and quick blow-dry"
    ]
  }
];

const BeautyHairSmoothening = () => {
  return (
    <div className="women-hairsmoothening-container">
      <BeautyNavbar />
      <section className="women-hairsmoothening-hero">
        <div className="women-hairsmoothening-content">
          <h1 className="women-hairsmoothening-title">Women's Beauty Hair Smoothening Treatments</h1>
          <p className="women-hairsmoothening-description">
            Experience sleek, smooth, and nourished hair with our specialized smoothening treatments tailored for you.
          </p>
        </div>
      </section>

      <div className="women-hairsmoothening-heading">
        <h1>Our Hair Smoothening Treatments</h1>
      </div>

      <div className="women-hairsmoothening-services">
        {hairSmootheningTreatments.map((treatment, index) => (
          <div key={index} className="women-hairsmoothening-card">
            <h3 className="women-hairsmoothening-name">{treatment.name}</h3>
            <p className="women-hairsmoothening-benefits">{treatment.benefits}</p>
            <span className="women-hairsmoothening-price">{treatment.price}</span>
            <div className="women-hairsmoothening-steps">
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

export default BeautyHairSmoothening;
