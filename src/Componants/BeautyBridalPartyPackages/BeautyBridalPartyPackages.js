import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css";

const bridalPartyPackages = [
  {
    name: "Classic Bridal Package",
    benefits:
      "Includes full bridal makeup, hair styling, and all-day touch-ups to create a timeless and elegant look.",
    price: "₹15,000 - ₹25,000",
    process: [
      "Initial consultation & skin analysis",
      "Pre-wedding trial makeup and hair styling",
      "Bridal day full makeup and hair application",
      "Touch-up kit and on-site maintenance",
      "Final look review and adjustments"
    ]
  },
  {
    name: "Deluxe Bridal Package",
    benefits:
      "A premium package with advanced makeup, hair styling, and accessories tailored for the modern bride.",
    price: "₹25,000 - ₹40,000",
    process: [
      "Comprehensive consultation and facial analysis",
      "Multiple trial sessions for makeup and hairstyle",
      "Bridal day complete service including accessories",
      "On-site touch-ups and styling maintenance",
      "Personalized aftercare and beauty tips"
    ]
  },
  {
    name: "Party Makeup Package",
    benefits:
      "Designed for bridesmaids and party guests, offering a glamorous yet natural look for any celebration.",
    price: "₹8,000 - ₹15,000",
    process: [
      "Group consultation and look selection",
      "Makeup application for the event",
      "Professional touch-ups throughout the event",
      "Final styling and set-up"
    ]
  },
  {
    name: "Bridal & Party Combo Package",
    benefits:
      "A comprehensive package covering both the bride’s and bridal party’s makeup and hair styling needs.",
    price: "₹30,000 - ₹50,000",
    process: [
      "Detailed consultation for bride and party",
      "Trial sessions for customized looks",
      "Bridal day service for the bride and makeup for the party",
      "On-site touch-ups and styling adjustments",
      "Final group review and photography preparation"
    ]
  },
  {
    name: "Pre-Wedding Trial Package",
    benefits:
      "A trial session to experiment with different looks and ensure you’re completely satisfied with your bridal style.",
    price: "₹5,000 - ₹10,000",
    process: [
      "Consultation and style discussion",
      "Trial makeup and hair styling session",
      "Review and adjustments based on feedback",
      "Recommendations for final bridal look",
      "Follow-up session if needed"
    ]
  },
  {
    name: "Premium Bridal Package",
    benefits:
      "An all-inclusive package featuring top-tier makeup, luxurious hair styling, and bespoke accessories.",
    price: "₹40,000 - ₹60,000",
    process: [
      "Exclusive consultation with a senior stylist",
      "Multiple detailed trial sessions",
      "Bridal day full service with premium products",
      "VIP on-site support and touch-ups",
      "Post-wedding beauty care and follow-up"
    ]
  },
  {
    name: "Glam Bridal Package",
    benefits:
      "A dazzling package that ensures you shine on your big day with bold makeup and striking hairstyles.",
    price: "₹30,000 - ₹50,000",
    process: [
      "Consultation focused on glamorous styling",
      "Trial session for bold makeup and hair",
      "Bridal day styling with high-impact techniques",
      "On-site touch-ups to maintain the look",
      "Final group styling for photoshoot readiness"
    ]
  },
  {
    name: "On-Location Bridal Party Package",
    benefits:
      "Designed for destination weddings, providing on-site beauty services for the entire bridal party.",
    price: "₹35,000 - ₹55,000",
    process: [
      "Remote consultation and planning",
      "Coordinated trial sessions for the bridal party",
      "Travel and on-site beauty services",
      "Continuous touch-ups during the event",
      "Group styling and final photography prep"
    ]
  },
  {
    name: "Day-of Touch-Up Package",
    benefits:
      "Perfect for keeping your look fresh throughout the event with quick touch-ups.",
    price: "₹3,000 - ₹6,000",
    process: [
      "Quick consultation on desired look",
      "Rapid touch-up service before the event",
      "On-site makeup reapplication during the event",
      "Final check and adjustments",
      "Personalized aftercare advice"
    ]
  },
  {
    name: "Express Party Package",
    benefits:
      "Ideal for last-minute events or touch-ups, offering a quick yet stylish service.",
    price: "₹4,000 - ₹8,000",
    process: [
      "Brief consultation and style assessment",
      "Rapid makeup and hair styling",
      "Efficient on-site application",
      "Quick touch-ups and finishing",
      "Time-efficient service without compromising quality"
    ]
  }
];

const BeautyBridalPartyPackages = () => {
  return (
    <div className="women-BeautyBridalPartyPackages-container">
      <BeautyNavbar />
      <section className="women-BeautyBridalPartyPackages-hero">
        <div className="women-BeautyBridalPartyPackages-content">
          <h1 className="women-BeautyBridalPartyPackages-title">
            Women's Beauty Bridal & Party Packages
          </h1>
          <p className="women-BeautyBridalPartyPackages-description">
            Explore our range of bridal and party packages, tailored to create stunning looks for your big day and your celebration with your loved ones.
          </p>
        </div>
      </section>

      <div className="women-BeautyBridalPartyPackages-heading">
        <h1>Our Bridal & Party Packages</h1>
      </div>

      <div className="women-BeautyBridalPartyPackages-services">
        {bridalPartyPackages.map((pkg, index) => (
          <div key={index} className="women-BeautyBridalPartyPackages-card">
            <h3 className="women-BeautyBridalPartyPackages-name">{pkg.name}</h3>
            <p className="women-BeautyBridalPartyPackages-benefits">{pkg.benefits}</p>
            <span className="women-BeautyBridalPartyPackages-price">{pkg.price}</span>
            <div className="women-BeautyBridalPartyPackages-steps">
              <h4>Process:</h4>
              <ul>
                {pkg.process.map((step, i) => (
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

export default BeautyBridalPartyPackages;
