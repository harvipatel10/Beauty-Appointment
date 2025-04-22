import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menHaircutStylingServices = [
  { 
    name: "Classic Haircut", 
    benefits: "Timeless and versatile haircut suitable for all occasions.", 
    price: "₹500 - ₹800",
    process: [
      "Consultation & Hair Type Analysis",
      "Precision Hair Cutting",
      "Final Styling & Blow-Dry"
    ]
  },
  { 
    name: "Fade Haircut (Low, Mid, High, Skin Fade, Taper Fade)", 
    benefits: "Smoothly blended fade for a sharp and modern look.", 
    price: "₹700 - ₹1200",
    process: [
      "Hair Sectioning & Tapering",
      "Fade Blending Technique",
      "Detailing & Styling"
    ]
  },
  { 
    name: "Undercut", 
    benefits: "Short sides with a longer top for a bold contrast.", 
    price: "₹800 - ₹1500",
    process: [
      "Clipping the Sides",
      "Scissor Cutting for Top Styling",
      "Final Touches & Styling"
    ]
  },
  { 
    name: "Crew Cut", 
    benefits: "A short, low-maintenance military-style cut.", 
    price: "₹500 - ₹1000",
    process: [
      "Clipper Cutting",
      "Evening Out the Length",
      "Final Styling"
    ]
  },
  { 
    name: "Buzz Cut", 
    benefits: "Ultra-short, clean, and effortless hairstyle.", 
    price: "₹400 - ₹900",
    process: [
      "Close Clipper Cutting",
      "Even Length Throughout",
      "Optional Fade or Taper"
    ]
  },
  { 
    name: "Pompadour", 
    benefits: "Classic volume on top with sleek sides.", 
    price: "₹1000 - ₹2000",
    process: [
      "Hair Length Adjustment",
      "Blow-Dry & Volume Styling",
      "Final Pomade Application"
    ]
  },
  { 
    name: "Quiff", 
    benefits: "Modern, voluminous hairstyle with texture.", 
    price: "₹1000 - ₹1800",
    process: [
      "Layered Cutting",
      "Volumizing Blow-Dry",
      "Texturizing & Styling"
    ]
  },
  { 
    name: "Side Part", 
    benefits: "Professional and polished look with a deep part.", 
    price: "₹800 - ₹1500",
    process: [
      "Hair Sectioning",
      "Precision Cutting",
      "Final Styling with Part Definition"
    ]
  },
  { 
    name: "Textured Crop", 
    benefits: "Messy, casual yet stylish short haircut.", 
    price: "₹900 - ₹1600",
    process: [
      "Layering & Texture Cutting",
      "Product Application",
      "Final Styling"
    ]
  },
  { 
    name: "Spiky Hair", 
    benefits: "Bold and edgy spikes for a modern look.", 
    price: "₹900 - ₹1700",
    process: [
      "Hair Cutting & Layering",
      "Hair Gel/Wax Application",
      "Final Spike Styling"
    ]
  },
  { 
    name: "Mohawk & Faux Hawk", 
    benefits: "Edgy hairstyles with volume at the top.", 
    price: "₹1200 - ₹2500",
    process: [
      "Hair Sectioning & Clipping",
      "Volume Boost & Styling",
      "Final Mohawk Shape"
    ]
  },
  { 
    name: "Curly Hair Styling", 
    benefits: "Enhances natural curls with professional styling.", 
    price: "₹1000 - ₹2000",
    process: [
      "Curl Enhancement Cutting",
      "Moisturizing & Styling",
      "Final Curl Definition"
    ]
  },
  { 
    name: "Long Hair Layering & Trimming", 
    benefits: "Maintains shape and enhances long hair.", 
    price: "₹1200 - ₹2500",
    process: [
      "Layered Cutting",
      "Moisturizing Treatment",
      "Final Blow-Dry Styling"
    ]
  },
  { 
    name: "Beard Trimming & Styling", 
    benefits: "Perfectly shaped beard for a polished look.", 
    price: "₹600 - ₹1200",
    process: [
      "Beard Shape Consultation",
      "Precision Trimming",
      "Final Beard Styling"
    ]
  },
  { 
    name: "Hair Wash & Blow-Dry Styling", 
    benefits: "Fresh, clean hair with expert blow-dry styling.", 
    price: "₹400 - ₹1000",
    process: [
      "Hair Wash & Conditioning",
      "Blow-Dry & Volume Styling",
      "Final Look & Touch-Up"
    ]
  },
  { 
    name: "Man Bun & Ponytail Styling", 
    benefits: "Tied-back looks with clean edges.", 
    price: "₹800 - ₹2000",
    process: [
      "Hair Length Adjustment",
      "Tie & Secure Styling",
      "Final Polishing"
    ]
  },
  { 
    name: "Straightening & Smoothing Treatment", 
    benefits: "Sleek, frizz-free hair.", 
    price: "₹3000 - ₹7000",
    process: [
      "Hair Wash & Conditioning",
      "Heat Styling & Straightening",
      "Final Touches"
    ]
  },
  { 
    name: "Texturizing & Volumizing Treatment", 
    benefits: "Enhanced texture and volume.", 
    price: "₹2500 - ₹6000",
    process: [
      "Hair Preparation",
      "Volumizing Treatment Application",
      "Final Styling"
    ]
  }
];

const HaircutStyling = () => {
  return (
    <div className="men-haircut-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-haircut-hero">
        <div className="men-haircut-content">
          <h1 className="men-haircut-title">Men's Haircut & Styling</h1>
          <p className="men-haircut-description">Premium haircut and styling services for a confident, polished look.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-haircut-heading">
        <h1>Our Haircut & Styling Services</h1>
      </div>
      
      <div className="men-haircut-services">
        {menHaircutStylingServices.map((service, index) => (
          <div key={index} className="men-haircut-card">
            <h3 className="men-haircut-name">{service.name}</h3>
            <p className="men-haircut-benefits">{service.benefits}</p>
            <span className="men-haircut-price">{service.price}</span>
            <div className="men-haircut-steps">
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

export default HaircutStyling;
