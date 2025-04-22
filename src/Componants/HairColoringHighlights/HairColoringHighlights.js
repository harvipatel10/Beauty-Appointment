import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menHairColoringTreatments = [
  { 
    name: "Dual-Tone Hair Coloring", 
    benefits: "Two contrasting shades for a bold and unique look.", 
    price: "₹3500 - ₹7000",
    process: [
      "Hair Sectioning",
      "First Color Application",
      "Second Color Application",
      "Processing & Styling"
    ]
  },
  { 
    name: "Salt & Pepper Look", 
    benefits: "Natural grey and black blend for a mature and stylish look.", 
    price: "₹2000 - ₹4500",
    process: [
      "Grey Blending Technique",
      "Color Application",
      "Processing & Hydration"
    ]
  },
  { 
    name: "Frosted Tips", 
    benefits: "Lightened hair tips for a trendy and youthful appearance.", 
    price: "₹1800 - ₹4000",
    process: [
      "Selective Lightening of Tips",
      "Toning & Color Application",
      "Final Styling"
    ]
  },
  { 
    name: "Platinum Blonde Coloring", 
    benefits: "Achieve an icy platinum blonde shade for a bold statement.", 
    price: "₹4000 - ₹8000",
    process: [
      "Hair Lightening & Bleaching",
      "Platinum Toner Application",
      "Deep Conditioning & Styling"
    ]
  },
  { 
    name: "Ash Grey & Silver Hair Coloring", 
    benefits: "Metallic grey and silver tones for a modern, edgy look.", 
    price: "₹4500 - ₹9000",
    process: [
      "Hair Bleaching",
      "Silver/Grey Toner Application",
      "Final Styling & Hydration"
    ]
  },
  { 
    name: "Hair Streaking", 
    benefits: "Bold streaks in different shades for a dramatic effect.", 
    price: "₹2000 - ₹5000",
    process: [
      "Hair Sectioning",
      "Highlighting & Streaking Application",
      "Processing & Final Styling"
    ]
  },
  { 
    name: "Underlayer Hair Color", 
    benefits: "Hidden vibrant colors under natural hair for a stylish surprise.", 
    price: "₹3500 - ₹7500",
    process: [
      "Underlayer Sectioning",
      "Color Application",
      "Processing & Styling"
    ]
  },
  { 
    name: "Pastel Hair Colors", 
    benefits: "Soft and subtle shades like pink, lavender, or mint green.", 
    price: "₹5000 - ₹9500",
    process: [
      "Hair Lightening",
      "Pastel Color Application",
      "Processing & Final Touches"
    ]
  },
  { 
    name: "UV & Glow-in-the-Dark Hair Color", 
    benefits: "Special hair colors that glow under UV light.", 
    price: "₹6000 - ₹12000",
    process: [
      "Base Hair Prep",
      "UV Reactive Color Application",
      "Processing & Styling"
    ]
  },
  { 
    name: "Custom Hair Coloring", 
    benefits: "Personalized color blend based on client preferences.", 
    price: "₹5000+ (Varies by customization)",
    process: [
      "Consultation & Color Selection",
      "Custom Color Mixing & Application",
      "Processing & Final Styling"
    ]
  }
];

const HairColoring = () => {
  return (
    <div className="men-haircoloring-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-haircoloring-hero">
        <div className="men-haircoloring-content">
          <h1 className="men-haircoloring-title">Men's Hair Coloring & Highlights</h1>
          <p className="men-haircoloring-description">Professional hair coloring services for a stylish and confident look.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-haircoloring-heading">
        <h1>Our Hair Coloring & Highlight Services</h1>
      </div>
      
      <div className="men-haircoloring-services">
        {menHairColoringTreatments.map((service, index) => (
          <div key={index} className="men-haircoloring-card">
            <h3 className="men-haircoloring-name">{service.name}</h3>
            <p className="men-haircoloring-benefits">{service.benefits}</p>
            <span className="men-haircoloring-price">{service.price}</span>
            <div className="men-haircoloring-steps">
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

export default HairColoring;
