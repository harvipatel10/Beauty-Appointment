import React from 'react';
import { useNavigate } from 'react-router-dom';
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../../App.css"; 
import spaBackground from "../../assets/m1.jpg";

// import HairCut from "../../../assets/haircut.jpg";
// import Shaving from "../../../assets/shaving.jpg";
// import Facial from "../../../assets/facial.jpg";
// import Coloring from "../../../assets/coloring.jpg";
// import HairSpa from "../../../assets/hairspa.jpg";
// import Massage from "../../../assets/massage.jpg";
// import BodyScrub from "../../../assets/bodyscrub.jpg";
// import Manicure from "../../../assets/manicure.jpg";
// import Waxing from "../../../assets/waxing.jpg";
// import AntiAging from "../../../assets/antiaging.jpg";
// import Detox from "../../../assets/detox.jpg";
// import HandFoot from "../../../assets/handfoot.jpg";
// import Acne from "../../../assets/acne.jpg";
// import BodyWraps from "../../../assets/bodywraps.jpg";
// import HairLoss from "../../../assets/hairloss.jpg";

const BeautyMen = () => {
  const navigate = useNavigate();

  const navigateToDetails = (route) => {
    navigate(route);
  };

  return (
    <div className="beauty-services-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="hero-men" style={{ backgroundImage: `url(${spaBackground})` }}>
        <h1>Men's Grooming & Spa Services</h1>
        <p>Experience the finest grooming and spa services designed exclusively for men.</p>
      </section>

      <div className="services-grid">
        <div className="service-card">
          {/* <img src={HairCut} alt="Hair Cut & Styling" className="service-image" /> */}
          <h3 className="service-name">Hair Cut & Styling</h3>
          <p className="service-description">Trendy haircuts and professional styling.</p>
          <p className="service-duration">Duration: 30-45 mins</p>
          <p className="service-price">Price: ₹300 - ₹1000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/haircutstyling")}>More</button>
        </div>
        
        <div className="service-card">
          {/* <img src={Shaving} alt="Shaving & Beard Grooming" className="service-image" /> */}
          <h3 className="service-name">Shaving & Beard Grooming</h3>
          <p className="service-description">Precision shaving and beard grooming.</p>
          <p className="service-duration">Duration: 15-30 mins</p>
          <p className="service-price">Price: ₹200 - ₹800</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/shavinggrooming")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={Facial} alt="Facial Treatments" className="service-image" /> */}
          <h3 className="service-name">Facial Treatments</h3>
          <p className="service-description">Revitalizing facial treatments.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹1000 - ₹3500</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/FacialTreatments")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={Coloring} alt="Hair Coloring & Highlights" className="service-image" /> */}
          <h3 className="service-name">Hair Coloring & Highlights</h3>
          <p className="service-description">Professional hair coloring and highlights.</p>
          <p className="service-duration">Duration: 60-120 mins</p>
          <p className="service-price">₹1500 - ₹5000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/HairColoringHighlights")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={HairSpa} alt="Hair Spa & Scalp Treatments" className="service-image" /> */}
          <h3 className="service-name">Hair Spa & Scalp Treatments</h3>
          <p className="service-description">Nourishing hair spa and scalp care.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹1200 - ₹3000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/HairSpaScalpTreatments")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={Massage} alt="Body Massage & Therapy" className="service-image" /> */}
          <h3 className="service-name">Body Massage & Therapy</h3>
          <p className="service-description">Relaxing body massage and therapy.</p>
          <p className="service-duration">Duration: 60-90 mins</p>
          <p className="service-price">₹2000 - ₹6000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/BodyMassageTherapy")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={BodyScrub} alt="Body Scrub & Polishing" className="service-image" /> */}
          <h3 className="service-name">Body Scrub & Polishing</h3>
          <p className="service-description">Exfoliating body scrub and polishing.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹1500 - ₹4000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/BodyScrubPolishing")}>More</button>
        </div>
  

        <div className="service-card">
          {/* <img src={Manicure} alt="Manicure & Pedicure" className="service-image" /> */}
          <h3 className="service-name">Manicure & Pedicure</h3>
          <p className="service-description">Complete hand and foot care.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹800 - ₹2500</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/ManicurePedicure")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={Waxing} alt="Waxing & Hair Removal" className="service-image" /> */}
          <h3 className="service-name">Waxing & Hair Removal</h3>
          <p className="service-description">Smooth waxing and hair removal solutions.</p>
          <p className="service-duration">Duration: 30-60 mins</p>
          <p className="service-price">₹500 - ₹2000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/WaxingHairRemoval")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={AntiAging} alt="Anti-Aging & Skin Care" className="service-image" /> */}
          <h3 className="service-name">Anti-Aging & Skin Care</h3>
          <p className="service-description">Advanced anti-aging and skin care treatments.</p>
          <p className="service-duration">Duration: 60-90 mins</p>
          <p className="service-price">₹3000 - ₹8000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/AntiAgingSkinCare")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={Detox} alt="Detox & Relaxation Therapy" className="service-image" /> */}
          <h3 className="service-name">Detox & Relaxation Therapy</h3>
          <p className="service-description">Detoxifying and relaxation therapy.</p>
          <p className="service-duration">Duration: 60-90 mins</p>
          <p className="service-price">₹2500 - ₹6000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/DetoxRelaxationTherapy")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={HandFoot} alt="Hand & Foot Care" className="service-image" /> */}
          <h3 className="service-name">Hand & Foot Care</h3>
          <p className="service-description">Specialized hand and foot care treatments.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹800 - ₹2500</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/HandFootCare")}>More</button>
        </div>

        <div className="service-card">
          {/* <img src={Acne} alt="Acne Treatment" className="service-image" /> */}
          <h3 className="service-name">Acne Treatment</h3>
          <p className="service-description">Effective acne treatment solutions.</p>
          <p className="service-duration">Duration: 45-60 mins</p>
          <p className="service-price">₹1500 - ₹3500</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/AcneTreatment")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={BodyWraps} alt="Body Wraps" className="service-image" /> */}
          <h3 className="service-name">Body Wraps</h3>
          <p className="service-description">Hydrating and detoxifying body wraps.</p>
          <p className="service-duration">Duration: 60-90 mins</p>
          <p className="service-price">₹2000 - ₹5000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/BodyWraps")}>More</button>
        </div>


        <div className="service-card">
          {/* <img src={HairLoss} alt="Hair Loss Treatment" className="service-image" /> */}
          <h3 className="service-name">Hair Loss Treatment</h3>
          <p className="service-description">Hair loss prevention and treatment.</p>
          <p className="service-duration">Duration: 60-90 mins</p>
          <p className="service-price">₹2500 - ₹8000</p>
          <button className="more-details-btn" onClick={() => navigateToDetails("/HairLossTreatment")}>More</button>
        </div>


      

      </div>
    </div>
  );
};

export default BeautyMen;
