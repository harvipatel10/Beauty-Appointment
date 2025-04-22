import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const eyebrowThreadingServices = [
  {
    name: "Basic Eyebrow Threading",
    benefits: "Quick and precise eyebrow shaping for a polished look.",
    price: "₹300 - ₹600",
    process: [
      "Cleanse and prepare the eyebrow area",
      "Outline the desired eyebrow shape",
      "Use thread to remove unwanted hair",
      "Soothe the skin with a cooling gel",
      "Final check and touch-up"
    ]
  },
  {
    name: "Advanced Eyebrow Threading",
    benefits: "Expert threading for perfectly shaped brows with enhanced symmetry.",
    price: "₹600 - ₹1000",
    process: [
      "Consultation and eyebrow assessment",
      "Precise threading for detailed shaping",
      "Symmetry adjustment and refining",
      "Application of soothing serum",
      "Post-threading care advice"
    ]
  },
  {
    name: "Eyebrow Threading with Tinting",
    benefits: "Enhance your brows with threading followed by tinting for a fuller look.",
    price: "₹800 - ₹1200",
    process: [
      "Cleanse and prepare the eyebrow area",
      "Threading for precise hair removal",
      "Application of eyebrow tint",
      "Setting with a nourishing treatment",
      "Final adjustment for perfect shape"
    ]
  },
  {
    name: "Express Eyebrow Threading",
    benefits: "Quick eyebrow threading service for on-the-go touch-ups.",
    price: "₹250 - ₹500",
    process: [
      "Cleanse and prep the eyebrows",
      "Quick threading for efficient hair removal",
      "Simple shape refinement",
      "Soothe skin with a calming lotion",
      "Final check for balance"
    ]
  },
  {
    name: "Luxury Eyebrow Threading",
    benefits: "Indulge in a premium threading experience for meticulously sculpted brows.",
    price: "₹1000 - ₹1500",
    process: [
      "Comprehensive consultation and eyebrow mapping",
      "Precision threading using expert techniques",
      "Customized shaping to enhance facial features",
      "Application of premium aftercare serum",
      "Detailed finishing touches"
    ]
  },
  {
    name: "Customized Eyebrow Shaping",
    benefits: "Tailored threading combined with expert shaping for your unique look.",
    price: "₹900 - ₹1300",
    process: [
      "Detailed eyebrow analysis",
      "Customized threading to match facial symmetry",
      "Fine adjustments and shaping",
      "Soothing application of aloe vera gel",
      "Post-threading care advice"
    ]
  },
  {
    name: "Precision Eyebrow Threading",
    benefits: "High-precision threading to define every arch and angle.",
    price: "₹750 - ₹1100",
    process: [
      "Targeted cleaning and preparation",
      "Precision threading using advanced techniques",
      "Fine detailing for perfect arches",
      "Soothe with cooling solution",
      "Final inspection for symmetry"
    ]
  },
  {
    name: "Organic Eyebrow Threading",
    benefits: "Eco-friendly threading using natural, organic products for sensitive skin.",
    price: "₹650 - ₹1000",
    process: [
      "Cleanse with organic, natural cleansers",
      "Threading using organic cotton thread",
      "Gentle hair removal with minimal irritation",
      "Application of organic soothing balm",
      "Final check and organic aftercare advice"
    ]
  }
];

const BeautyThreadingEyebrow = () => {
  return (
    <div className="women-BeautyThreadingEyebrow-container">
      <BeautyNavbar />
      <section className="women-BeautyThreadingEyebrow-hero">
        <div className="women-BeautyThreadingEyebrow-content">
          <h1 className="women-BeautyThreadingEyebrow-title">
            Women's Beauty Eyebrow Threading
          </h1>
          <p className="women-BeautyThreadingEyebrow-description">
            Achieve perfectly shaped eyebrows with our expert threading services, designed for precision and a natural look.
          </p>
        </div>
      </section>

      <div className="women-BeautyThreadingEyebrow-heading">
        <h1>Our Eyebrow Threading Services</h1>
      </div>

      <div className="women-BeautyThreadingEyebrow-services">
        {eyebrowThreadingServices.map((service, index) => (
          <div key={index} className="women-BeautyThreadingEyebrow-card">
            <h3 className="women-BeautyThreadingEyebrow-name">{service.name}</h3>
            <p className="women-BeautyThreadingEyebrow-benefits">{service.benefits}</p>
            <span className="women-BeautyThreadingEyebrow-price">{service.price}</span>
            <div className="women-BeautyThreadingEyebrow-steps">
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

export default BeautyThreadingEyebrow;
