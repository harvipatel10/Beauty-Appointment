import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const beautyNailArtExtensions = [
  {
    name: "Basic Nail Art",
    benefits: "Enhance your nails with simple, elegant designs.",
    price: "₹1000 - ₹2500",
    process: [
      "Nail cleaning and shaping",
      "Application of base coat",
      "Simple design (stripes, dots)",
      "Sealing with top coat",
      "Final polish for shine"
    ]
  },
  {
    name: "Custom Nail Art",
    benefits: "Unique designs tailored to your personal style.",
    price: "₹2000 - ₹4000",
    process: [
      "Consultation for design selection",
      "Nail preparation and base coating",
      "Hand-painted design application",
      "Detailing and layering",
      "Application of top coat for durability"
    ]
  },
  {
    name: "Acrylic Nail Extensions",
    benefits: "Adds length and strength for a glamorous look.",
    price: "₹3000 - ₹6000",
    process: [
      "Nail assessment and cleaning",
      "Application of nail tips or sculpting forms",
      "Acrylic product application and shaping",
      "Curing and refinement",
      "Buffing and final polish"
    ]
  },
  {
    name: "Gel Nail Extensions",
    benefits: "Provides a natural look with flexibility and long-lasting shine.",
    price: "₹3500 - ₹6500",
    process: [
      "Preparation of nails with cleaning and buffing",
      "Application of gel builder over nail forms",
      "Sculpting and shaping",
      "Curing under LED/UV light",
      "Filing, buffing, and application of a top coat"
    ]
  },
  {
    name: "3D Nail Art",
    benefits: "Creative, textured designs that add depth and a unique flair.",
    price: "₹4000 - ₹8000",
    process: [
      "Detailed nail preparation",
      "Application of 3D elements (gems, beads, or raised patterns)",
      "Layering and precise detailing",
      "Sealing with a durable top coat",
      "Final buffing for a smooth finish"
    ]
  },
  {
    name: "French Tip Extensions",
    benefits: "A classic style featuring extended nails with crisp white tips.",
    price: "₹3200 - ₹6000",
    process: [
      "Nail preparation and extension application",
      "Sculpting to desired length and shape",
      "Application of a French tip design",
      "Curing or drying as required",
      "Finishing with a protective top coat"
    ]
  },
  {
    name: "Metallic Nail Art",
    benefits: "Shine bright with metallic finishes that add a futuristic edge.",
    price: "₹2500 - ₹5000",
    process: [
      "Nail preparation with cleaning and buffing",
      "Application of a metallic base coat",
      "Design application with metallic polish",
      "Detailing and highlighting",
      "Sealing with a glossy top coat"
    ]
  },
  {
    name: "Glitter Nail Art",
    benefits: "Sparkling designs to add glamour and fun to your nails.",
    price: "₹2000 - ₹4500",
    process: [
      "Nail shaping and base coat application",
      "Application of glitter polish or loose glitter",
      "Layering for extra sparkle",
      "Detailing with fine glitter accents",
      "Sealing with a clear top coat"
    ]
  },
  {
    name: "Water Marble Nail Art",
    benefits: "Unique, fluid designs that mimic the look of marbled water patterns.",
    price: "₹3000 - ₹6000",
    process: [
      "Nail preparation and base coat application",
      "Drip technique with multiple colors",
      "Creation of water marble effect",
      "Careful detailing and blending",
      "Application of top coat to preserve design"
    ]
  },
  {
    name: "Stiletto Nail Extensions",
    benefits: "Dramatic, elongated nail extensions for a bold statement.",
    price: "₹3500 - ₹7000",
    process: [
      "Nail assessment and cleaning",
      "Application of nail tips for stiletto shape",
      "Extension sculpting and shaping",
      "Curing and filing for perfect shape",
      "Buffing and finishing with polish"
    ]
  },
  {
    name: "Ombre Nail Art",
    benefits: "Elegant gradient designs that transition seamlessly from one color to another.",
    price: "₹2500 - ₹5000",
    process: [
      "Nail cleaning and base coat application",
      "Application of two-tone colors",
      "Blending technique for ombre effect",
      "Detailing for smooth transition",
      "Sealing with a top coat for durability"
    ]
  },
  {
    name: "Sculptured Nail Art",
    benefits: "Intricate designs and sculpted details for a unique, artistic look.",
    price: "₹4000 - ₹8500",
    process: [
      "Detailed nail preparation and shaping",
      "Application of sculpting gels or acrylics",
      "Intricate design creation with fine detailing tools",
      "Curing or drying process",
      "Buffing, filing, and final polish for refinement"
    ]
  }
];

const BeautyNailArtExtensions = () => {
  return (
    <div className="women-BeautyNailArtExtensions-container">
      <BeautyNavbar />
      <section className="women-BeautyNailArtExtensions-hero">
        <div className="women-BeautyNailArtExtensions-content">
          <h1 className="women-BeautyNailArtExtensions-title">
            Beauty Nail Art & Extensions
          </h1>
          <p className="women-BeautyNailArtExtensions-description">
            Discover creative and elegant nail art along with premium extensions to elevate your style.
          </p>
        </div>
      </section>

      <div className="women-BeautyNailArtExtensions-heading">
        <h1>Our Nail Art & Extension Services</h1>
      </div>

      <div className="women-BeautyNailArtExtensions-services">
        {beautyNailArtExtensions.map((service, index) => (
          <div key={index} className="women-BeautyNailArtExtensions-card">
            <h3 className="women-BeautyNailArtExtensions-name">{service.name}</h3>
            <p className="women-BeautyNailArtExtensions-benefits">{service.benefits}</p>
            <span className="women-BeautyNailArtExtensions-price">{service.price}</span>
            <div className="women-BeautyNailArtExtensions-steps">
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

export default BeautyNailArtExtensions;
