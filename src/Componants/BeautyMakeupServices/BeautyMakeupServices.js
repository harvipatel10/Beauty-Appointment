import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const makeupServices = [
  {
    name: "Bridal Makeup",
    benefits: "Flawless and long-lasting makeup for your special day.",
    price: "₹5000 - ₹15000",
    process: [
      "Consultation and skin analysis",
      "Pre-makeup skincare routine",
      "Application of primer and foundation",
      "Detailed eye makeup and contouring",
      "Final setting spray"
    ]
  },
  {
    name: "Party Makeup",
    benefits: "Glamorous and vibrant makeup perfect for a night out.",
    price: "₹3000 - ₹7000",
    process: [
      "Skin cleansing and priming",
      "Foundation and concealer application",
      "Bold eye and lip makeup",
      "Highlight and contour",
      "Setting makeup for durability"
    ]
  },
  {
    name: "Everyday Makeup",
    benefits: "Natural and fresh makeup for daily wear.",
    price: "₹2000 - ₹5000",
    process: [
      "Basic skin prep and priming",
      "Light foundation or BB cream",
      "Subtle eye makeup and blush",
      "Natural lip color",
      "Finishing with a light setting powder"
    ]
  },
  {
    name: "Airbrush Makeup",
    benefits: "Flawless, lightweight finish with an airbrush technique.",
    price: "₹4000 - ₹8000",
    process: [
      "Skin analysis and preparation",
      "Application of airbrush foundation",
      "Blending for a smooth finish",
      "Subtle eye and lip enhancements",
      "Setting with a gentle spray"
    ]
  },
  {
    name: "Makeup for Photoshoots",
    benefits: "Professional makeup optimized for photography.",
    price: "₹4500 - ₹9000",
    process: [
      "Consultation and skin prep",
      "Application of high-definition makeup",
      "Enhancement of facial features for camera",
      "Detailed eye and contour work",
      "Final fix with HD setting spray"
    ]
  },
  {
    name: "Editorial Makeup",
    benefits: "Creative and dramatic makeup for fashion editorials.",
    price: "₹6000 - ₹12000",
    process: [
      "Concept discussion and skin analysis",
      "Innovative makeup application",
      "Bold colors and artistic details",
      "Intensive focus on eyes and lips",
      "Final adjustments for photography readiness"
    ]
  },
  {
    name: "Natural Glam Makeup",
    benefits: "Enhance your natural features with subtle glam for a refined look.",
    price: "₹3500 - ₹7000",
    process: [
      "Skin priming and light foundation",
      "Enhancing natural contours",
      "Soft, neutral eye makeup",
      "Subtle lip color",
      "Finishing with a natural glow"
    ]
  },
  {
    name: "High Definition Makeup",
    benefits: "Customized makeup for HD cameras and high-resolution media.",
    price: "₹5000 - ₹10000",
    process: [
      "Detailed skin analysis",
      "Application of HD foundation and concealer",
      "Precision eye and lip work",
      "Use of HD setting spray",
      "Touch-ups as required"
    ]
  },
  {
    name: "Special Effects Makeup",
    benefits: "Transformative makeup for creative projects and theatrical looks.",
    price: "₹7000 - ₹15000",
    process: [
      "Concept and design consultation",
      "Application of prosthetics or special effects products",
      "Layering and detailed work",
      "Finishing with creative enhancements",
      "Removal and aftercare instructions"
    ]
  },
  {
    name: "Quick Touch-up Service",
    benefits: "On-the-go makeup touch-ups to keep you fresh throughout the day.",
    price: "₹1500 - ₹3000",
    process: [
      "Mini skin assessment",
      "Quick fix for foundation, eyes, and lips",
      "Reapplication of powder or setting spray",
      "Final check and adjustments"
    ]
  },
  {
    name: "Celebrity Inspired Makeup",
    benefits: "Get a look inspired by your favorite celebrity styles.",
    price: "₹5500 - ₹11000",
    process: [
      "Consultation to determine desired look",
      "Customized makeup application",
      "Focus on replicating signature features",
      "Detailing and contouring",
      "Finishing with a glossy or matte finish"
    ]
  },
  {
    name: "Glamorous Evening Makeup",
    benefits: "Elegant and sophisticated makeup for evening events.",
    price: "₹4000 - ₹9000",
    process: [
      "Consultation and skin prep",
      "Application of long-wear foundation",
      "Dramatic eye makeup",
      "Bold lips or subtle finishes as desired",
      "Final setting for durability"
    ]
  }
];

const BeautyMakeupServices = () => {
  return (
    <div className="women-beautymakeupservice-container">
      <BeautyNavbar />
      <section className="women-beautymakeupservice-hero">
        <div className="women-beautymakeupservice-content">
          <h1 className="women-beautymakeupservice-title">
            Women's Beauty Makeup Services
          </h1>
          <p className="women-beautymakeupservice-description">
            Enhance your natural beauty with our expert makeup services designed for every occasion.
          </p>
        </div>
      </section>

      <div className="women-beautymakeupservice-heading">
        <h1>Our Makeup Services</h1>
      </div>

      <div className="women-beautymakeupservice-services">
        {makeupServices.map((service, index) => (
          <div key={index} className="women-beautymakeupservice-card">
            <h3 className="women-beautymakeupservice-name">{service.name}</h3>
            <p className="women-beautymakeupservice-benefits">{service.benefits}</p>
            <span className="women-beautymakeupservice-price">{service.price}</span>
            <div className="women-beautymakeupservice-steps">
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

export default BeautyMakeupServices;
