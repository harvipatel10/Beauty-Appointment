import React, { useState } from 'react';
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautySpaHome/BeautySpaHome.css";
import spaBackground from "../../assets/s4.jpeg";

// Importing all icons in one line
import { 
  FaSpa, 
  FaUserTie, 
  FaGem, 
  FaLeaf, 
  FaHands, 
  FaClock, 
  FaQuoteLeft, 
  FaQuoteRight 
} from "react-icons/fa";

const BeautySpaHome = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="beauty-home-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="beauty-hero-section" style={{ backgroundImage: `url(${spaBackground})` }}>
        <div className="beauty-hero-content">
          <h1 className="beauty-hero-title">Welcome to Beauty & Spa</h1>
          <p className="beauty-hero-subtitle">Relax, rejuvenate, and refresh at our luxurious spa!</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="beauty-highlights-section">
        <h2 className="beauty-section-title">Why Choose Us?</h2>
        <div className="beauty-highlights-grid">
          <div className="beauty-highlight-card">
            <FaSpa className="beauty-icon" />
            <h3 className="beauty-highlight-title">Luxury Ambiance</h3>
            <p className="beauty-highlight-text">Experience a serene and elegant atmosphere designed to help you unwind.</p>
          </div>
          <div className="beauty-highlight-card">
            <FaUserTie className="beauty-icon" />
            <h3 className="beauty-highlight-title">Expert Staff</h3>
            <p className="beauty-highlight-text">Our experienced professionals provide the highest quality treatments.</p>
          </div>
          <div className="beauty-highlight-card">
            <FaGem className="beauty-icon" />
            <h3 className="beauty-highlight-title">Premium Products</h3>
            <p className="beauty-highlight-text">We use only the finest products to ensure the best results for your skin.</p>
          </div>
          <div className="beauty-highlight-card">
            <FaLeaf className="beauty-icon" />
            <h3 className="beauty-highlight-title">Organic Ingredients</h3>
            <p className="beauty-highlight-text">We prioritize natural and organic ingredients for your skin's health.</p>
          </div>
          <div className="beauty-highlight-card">
            <FaHands className="beauty-icon" />
            <h3 className="beauty-highlight-title">Personalized Service</h3>
            <p className="beauty-highlight-text">Each treatment is tailored to your needs for a personalized experience.</p>
          </div>
          <div className="beauty-highlight-card">
            <FaClock className="beauty-icon" />
            <h3 className="beauty-highlight-title">Flexible Scheduling</h3>
            <p className="beauty-highlight-text">We offer flexible appointment times to fit your busy schedule.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="beauty-testimonials-section">
        <h2 className="beauty-section-title">What Our Clients Say</h2>
        <div className="beauty-testimonials-slider">
          <div className="beauty-testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="beauty-testimonial-text">"I had the most relaxing experience at Beauty & Spa. The staff is amazing and the ambiance is perfect!"</p>
            <FaQuoteRight className="quote-icon" />
            <p className="beauty-client-name">- Sarah L.</p>
          </div>
          <div className="beauty-testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="beauty-testimonial-text">"Best spa in town! I left feeling refreshed and rejuvenated. Highly recommended."</p>
            <FaQuoteRight className="quote-icon" />
            <p className="beauty-client-name">- Emily R.</p>
          </div>
          <div className="beauty-testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="beauty-testimonial-text">"Amazing service and wonderful staff. I always feel rejuvenated after my visits!"</p>
            <FaQuoteRight className="quote-icon" />
            <p className="beauty-client-name">- Olivia M.</p>
          </div>
          <div className="beauty-testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="beauty-testimonial-text">"The best spa experience ever! I love the ambiance and the attention to detail."</p>
            <FaQuoteRight className="quote-icon" />
            <p className="beauty-client-name">- Sophia K.</p>
          </div>
          <div className="beauty-testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="beauty-testimonial-text">"Highly professional and friendly staff. I always leave feeling pampered and relaxed!"</p>
            <FaQuoteRight className="quote-icon" />
            <p className="beauty-client-name">- Mia T.</p>
          </div>
        </div>
      </section>

    
     {/* FAQs Section */}
<section className="faqs">
  <h2>Frequently Asked Questions</h2>
  
  <div 
    className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(0)}
  >
    <h3>Do I need to book an appointment?</h3>
    <p>Yes, appointments are recommended to ensure availability.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(1)}
  >
    <h3>What payment methods do you accept?</h3>
    <p>We accept cash, credit cards, and mobile payments.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(2)}
  >
    <h3>What are your working hours?</h3>
    <p>We are open from 9:00 AM to 8:00 PM, Monday to Sunday.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 3 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(3)}
  >
    <h3>Do you offer services for men and women?</h3>
    <p>Yes, we provide a wide range of treatments for both men and women.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 4 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(4)}
  >
    <h3>Are your products organic and cruelty-free?</h3>
    <p>Yes, we use high-quality organic and cruelty-free products.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 5 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(5)}
  >
    <h3>Can I cancel or reschedule my appointment?</h3>
    <p>Yes, you can cancel or reschedule your appointment at least 24 hours in advance.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 6 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(6)}
  >
    <h3>Do you offer gift vouchers?</h3>
    <p>Yes, we have gift vouchers available for all our services.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 7 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(7)}
  >
    <h3>What should I bring for my appointment?</h3>
    <p>You don’t need to bring anything special. Just relax and enjoy your treatment!</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 8 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(8)}
  >
    <h3>Do you provide home services?</h3>
    <p>Yes, we offer selected services at your home with prior booking.</p>
  </div>

  <div 
    className={`faq-item ${activeIndex === 9 ? 'active' : ''}`} 
    onClick={() => toggleFAQ(9)}
  >
    <h3>Is there a membership program?</h3>
    <p>Yes, we offer exclusive membership plans with discounts and perks.</p>
  </div>
</section>


    </div>
  );
};

export default BeautySpaHome;
