import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const menManicurePedicure = [
  { 
    name: "Classic Manicure", 
    benefits: "Cleans, trims, and hydrates hands for a neat look.", 
    price: "₹400 - ₹600",
    process: [
      "Hand Soaking",
      "Nail Clipping & Shaping",
      "Cuticle Care",
      "Exfoliation",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Classic Pedicure", 
    benefits: "Softens feet, removes dead skin, and trims nails.", 
    price: "₹500 - ₹700",
    process: [
      "Foot Soaking",
      "Nail Trimming & Shaping",
      "Cuticle Cleaning",
      "Exfoliation",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Luxury Manicure", 
    benefits: "Deep hydration and nourishment for smooth hands.", 
    price: "₹700 - ₹1000",
    process: [
      "Hand Soaking",
      "Nail Clipping & Shaping",
      "Cuticle Care",
      "Exfoliation",
      "Hand Mask",
      "Extended Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Luxury Pedicure", 
    benefits: "Intensive foot care for deep relaxation and softness.", 
    price: "₹900 - ₹1200",
    process: [
      "Foot Soaking",
      "Nail Care & Shaping",
      "Cuticle Treatment",
      "Exfoliation",
      "Foot Mask",
      "Extended Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Detox Manicure", 
    benefits: "Deep cleansing and toxin removal for healthier hands.", 
    price: "₹850 - ₹1100",
    process: [
      "Hand Soaking with Detox Solution",
      "Nail & Cuticle Care",
      "Charcoal Scrub",
      "Massage",
      "Hydrating Mask",
      "Moisturizing"
    ]
  },
  { 
    name: "Detox Pedicure", 
    benefits: "Eliminates toxins and deeply refreshes feet.", 
    price: "₹1000 - ₹1300",
    process: [
      "Foot Soaking with Detox Solution",
      "Nail & Cuticle Cleaning",
      "Exfoliation",
      "Detox Mask",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Paraffin Wax Manicure", 
    benefits: "Deeply hydrates and softens dry hands.", 
    price: "₹950 - ₹1200",
    process: [
      "Hand Soaking",
      "Nail Care",
      "Cuticle Treatment",
      "Exfoliation",
      "Paraffin Wax Treatment",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Paraffin Wax Pedicure", 
    benefits: "Heals cracked heels and softens rough feet.", 
    price: "₹1200 - ₹1500",
    process: [
      "Foot Soaking",
      "Nail Trimming",
      "Exfoliation",
      "Paraffin Wax Treatment",
      "Massage",
      "Hydrating Cream"
    ]
  },
  { 
    name: "Charcoal Manicure", 
    benefits: "Detoxifies, cleanses, and refreshes hands.", 
    price: "₹850 - ₹1100",
    process: [
      "Hand Soaking",
      "Nail & Cuticle Cleaning",
      "Charcoal Scrub",
      "Charcoal Mask",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Charcoal Pedicure", 
    benefits: "Purifies and deeply cleanses feet.", 
    price: "₹1000 - ₹1300",
    process: [
      "Foot Soaking",
      "Nail & Cuticle Care",
      "Exfoliation",
      "Charcoal Mask",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Express Manicure", 
    benefits: "Quick cleaning and hydration for hands.", 
    price: "₹300 - ₹500",
    process: [
      "Hand Soaking",
      "Nail Shaping",
      "Cuticle Trimming",
      "Massage",
      "Moisturizing"
    ]
  },
  { 
    name: "Express Pedicure", 
    benefits: "Fast and effective cleaning for feet.", 
    price: "₹400 - ₹600",
    process: [
      "Foot Soaking",
      "Nail Trimming",
      "Exfoliation",
      "Massage",
      "Moisturizing"
    ]
  }
];

const ManicurePedicure = () => {
  return (
    <div className="men-manicurepedicure-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-manicurepedicure-hero">
        <div className="men-manicurepedicure-content">
          <h1 className="men-manicurepedicure-title">Men's Manicure & Pedicure</h1>
          <p className="men-manicurepedicure-description">Give your hands and feet the care they deserve with our professional treatments.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="men-manicurepedicure-heading">
        <h1>Our Manicure & Pedicure Treatments</h1>
      </div>
      
      <div className="men-manicurepedicure-services">
        {menManicurePedicure.map((service, index) => (
          <div key={index} className="men-manicurepedicure-card">
            <h3 className="men-manicurepedicure-name">{service.name}</h3>
            <p className="men-manicurepedicure-benefits">{service.benefits}</p>
            <span className="men-manicurepedicure-price">{service.price}</span>
            <div className="men-manicurepedicure-steps">
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

export default ManicurePedicure;
