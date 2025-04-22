import React from "react";
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import { FaSpa } from "react-icons/fa";
import { FaGem } from "react-icons/fa";
import spaBackground from "../../assets/s3.jpeg";
import "../BeautyAbout/BeautyAbout.css"; 


const BeautyAbout = () => {
  return (

    <div className="beauty-about-container">
      <BeautyNavbar /> 

      {/* Introduction Section */}
      <section className="beauty-about-intro"  style={{ backgroundImage: `url(${spaBackground})` }}>
        <div className="beauty-about-intro-content">
          <h1 className="beauty-about-title"> Beauty & Spa About Us</h1>
          <p className="beauty-about-subtitle">Discover the story behind Beauty & Spa and our passion for wellness.</p>
        </div>
      </section>


       <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Beauty & Spa</strong>, we believe that self-care is not a luxury but a necessity.
            Our team of professional therapists and beauty experts are dedicated to providing you
            with a serene and rejuvenating experience. From indulgent spa treatments to
            revitalizing skincare, we bring you the best in relaxation and beauty.
          </p>
        </div>
        </div>


    <section className="beauty-about-section">
      <h2 className="beauty-section-title">Who We Are</h2>
      <div className="beauty-about-content">
        <FaSpa className="beauty-icon" />
        <p className="beauty-about-text">
          At Beauty & Spa, we are dedicated to providing a tranquil sanctuary where you can relax and rejuvenate. Our mission is to enhance your well-being through luxurious and personalized experiences.
        </p>
      </div>
    </section>

    <section className="beauty-offers-section">
      <h2 className="beauty-section-title">Exclusive Offers</h2>
      <div className="beauty-offers-content">
        <FaGem className="beauty-icon" />
        <p className="beauty-offers-text">
          Enjoy our special introductory offers and exclusive packages tailored just for you!
        </p>
      </div>
    </section>

  
      {/* Our Mission Section */}
      <section className="beauty-about-mission">
        <h2 className="beauty-section-title">Our Mission</h2>
        <div className="beauty-mission-content">
        <p className="beauty-mission-text">
          At Beauty & Spa, our mission is to provide a sanctuary for relaxation and rejuvenation. We are dedicated to
          enhancing well-being through luxurious treatments and exceptional service.
        </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="beauty-about-team">
        <h2 className="beauty-section-title">Meet Our Team</h2>
        <div className="beauty-team-grid">
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Anna Smith</h3>
            <p className="beauty-team-role">Lead Therapist</p>
          </div>
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Michael Lee</h3>
            <p className="beauty-team-role">Wellness Expert</p>
          </div>
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Sophia Brown</h3>
            <p className="beauty-team-role">Beauty Specialist</p>
          </div>
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Jessica Taylor</h3>
            <p className="beauty-team-role">Senior Spa Therapist</p>
          </div>
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Michael Adams</h3>
            <p className="beauty-team-role">Beauty Specialist</p>
          </div>
          <div className="beauty-team-card">
            <h3 className="beauty-team-name">Sarah Lee</h3>
            <p className="beauty-team-role">Hair & Skin Expert</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="beauty-about-experience">
        <h2 className="beauty-section-title">The Beauty & Spa Experience</h2>
        <div className="beauty-experience-content">
        <p className="beauty-experience-text">
          Indulge in a serene environment designed to relax your body and mind. Our state-of-the-art facilities and
          premium products create an unforgettable experience.
        </p>
        </div>
      </section>
      
    </div>



  
  );
};

export default BeautyAbout;
