import React from 'react';
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyServices/BeautyServices.css";
import spaBackground from "../../assets/m17.jpg";

const menServices = [
  {
    name: "Hair Spa & Scalp Treatments",
    price: "₹1,500 - ₹2,500"
  },
  {
    name: "Hair Coloring & Highlights",
    price: "₹2,000 - ₹4,500"
  },
  {
    name: "Hair Cut & Styling",
    price: "₹500 - ₹1,500"
  },
  {
    name: "Shaving & Beard Grooming",
    price: "₹300 - ₹800"
  },
  {
    name: "Facial Treatments",
    price: "₹1,200 - ₹3,000"
  },
  {
    name: "Body Scrub / Wraps & Polishing",
    price: "₹2,000 - ₹5,000"
  },
  {
    name: "Manicure & Pedicure",
    price: "₹1,000 - ₹2,500"
  },
  {
    name: "Waxing & Hair Removal",
    price: "₹800 - ₹2,000"
  },
  {
    name: "Detox & Relaxation Massage Therapy",
    price: "₹2,500 - ₹6,000"
  },
  {
    name: "Acne Treatment",
    price: "₹2,000 - ₹4,500"
  },
  {
    name: "Hair Loss Treatment",
    price: "₹3,000 - ₹7,000"
  }
];

const womenServices = [
  {
    name: "Hair Cut & Styling",
    price: "₹700 - ₹2,000"
  },
  {
    name: "Hair Coloring & Highlights",
    price: "₹2,500 - ₹6,000"
  },
  {
    name: "Hair Spa & Treatments",
    price: "₹1,800 - ₹3,500"
  },
  {
    name: "Hair Smoothening & Straightening",
    price: "₹4,000 - ₹10,000"
  },
  {
    name: "Facials & Skin Care",
    price: "₹1,500 - ₹3,500"
  },
  {
    name: "Anti-Aging & Rejuvenation",
    price: "₹3,000 - ₹8,000"
  },
  {
    name: "Makeup Services",
    price: "₹3,500 - ₹12,000"
  },
  {
    name: "Body Massage & Spa",
    price: "₹3,000 - ₹7,000"
  },
  {
    name: "Body Scrub & Polishing",
    price: "₹2,000 - ₹5,000"
  },
  {
    name: "Body Wraps & Hydration",
    price: "₹2,500 - ₹6,000"
  },
  {
    name: "Manicure & Pedicure",
    price: "₹1,200 - ₹3,000"
  },
  {
    name: "Nail Art & Extensions",
    price: "₹1,500 - ₹4,000"
  },
  {
    name: "Waxing & Hair Removal",
    price: "₹1,000 - ₹2,500"
  },
  {
    name: "Threading & Eyebrow Shaping",
    price: "₹250 - ₹1,000"
  },
  {
    name: "Eyebrow & Eyelash Tinting",
    price: "₹600 - ₹1,500"
  },
  {
    name: "Detox & Slimming Therapy",
    price: "₹4,000 - ₹12,000"
  },
  {
    name: "Bridal & Party Packages",
    price: "₹5,000 - ₹25,000"
  }
];

const BeautyServices = () => {
  return (
    <div className="beauty-service-container">
      <BeautyNavbar />
      
      {/* Hero Section */}
      <section
        className="beauty-services-hero"
        style={{ backgroundImage: `url(${spaBackground})` }}
      >
        <div className="beauty-services-hero-content">
          <h1 className="beauty-services-hero-title">
            Premium Beauty & Spa Services
          </h1>
          <p className="beauty-services-hero-description">
            Indulge in luxury with our exclusive beauty and wellness treatments. Rejuvenate your body, refresh your mind, and enhance your natural beauty.
          </p>
        </div>
      </section>

      {/* Men's Services Section */}
      <div className="beauty-services-men-heading">
        <h1>Men's Grooming & Spa Services</h1>
      </div>
      <div className="beauty-services-grid">
        {menServices.map((service, index) => (
          <div key={index} className="beauty-services-card">
            <h3 className="beauty-services-card-name">{service.name}</h3>
            <p className="beauty-services-card-price">{service.price}</p>
          </div>
        ))}
      </div>

      {/* Women's Services Section */}
      <div className="beauty-services-women-heading">
        <h1>Women's Beauty & Spa Services</h1>
      </div>
      <div className="beauty-services-grid">
        {womenServices.map((service, index) => (
          <div key={index} className="beauty-services-card">
            <h3 className="beauty-services-card-name">{service.name}</h3>
            <p className="beauty-services-card-price">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyServices;
