import React from 'react';
import { useNavigate } from 'react-router-dom';
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyMen/BeautyMen.css"; 



import HairCut from "../../assets/m2.jpg";
import Shaving from "../../assets/m3.jpeg";
import Facial from "../../assets/m4.jpeg";
import Coloring from "../../assets/m5.jpeg";
import HairSpa from "../../assets/m6.jpg";
import BodyScrub from "../../assets/m8.jpg";
import Manicure from "../../assets/m9.jpeg";
import Waxing from "../../assets/m10.jpg";
import Detox from "../../assets/m12.jpeg";
import Acne from "../../assets/m13.webp";
import HairLoss from "../../assets/m15.jpeg";

const BeautyMen = () => {
  const navigate = useNavigate();

  const navigateToDetails = (route) => {
    navigate(route);
  };

  return (
    <div className="men-grooming-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="men-hero-section">
      </section>

      <div className="men-hero-heading">
        <h1>Men's Grooming & Spa Services</h1>
      </div>

      <div className="grooming-services-grid">



      <div className="grooming-service-box">
          <img src={HairSpa} alt="Hair Spa & Scalp Treatments" className="grooming-service-image" />
          <h3 className="grooming-service-title">Hair Spa & Scalp Treatments</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/HairSpaScalpTreatments")}>More</button>
        </div>


        <div className="grooming-service-box">
          <img src={Coloring} alt="Hair Coloring & Highlights" className="grooming-service-image" />
          <h3 className="grooming-service-title">Hair Coloring & Highlights</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/HairColoringHighlights")}>More</button>
        </div>

        <div className="grooming-service-box">
          <img src={HairCut} alt="Hair Cut & Styling" className="grooming-service-image" />
          <h3 className="grooming-service-title">Hair Cut & Styling</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/HairCutStyling")}>More</button>
        </div>
        
        <div className="grooming-service-box">
          <img src={Shaving} alt="Shaving & Beard Grooming" className="grooming-service-image" />
          <h3 className="grooming-service-title">Shaving & Beard Grooming</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/ShavingGrooming")}>More</button>
        </div>

        <div className="grooming-service-box">
          <img src={Facial} alt="Facial Treatments" className="grooming-service-image" />
          <h3 className="grooming-service-title">Facial Treatments</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/FacialTreatments")}>More</button>
        </div>

       

    

        <div className="grooming-service-box">
          <img src={BodyScrub} alt="Body Scrub & Polishing" className="grooming-service-image" />
          <h3 className="grooming-service-title">Body Scrub / Wraps & Polishing</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/BodyScrubPolishing")}>More</button>
        </div>

        <div className="grooming-service-box">
          <img src={Manicure} alt="Manicure & Pedicure" className="grooming-service-image" />
          <h3 className="grooming-service-title">Manicure & Pedicure</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/ManicurePedicure")}>More</button>
        </div>

        <div className="grooming-service-box">
          <img src={Waxing} alt="Waxing & Hair Removal" className="grooming-service-image" />
          <h3 className="grooming-service-title">Waxing & Hair Removal</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/WaxingHairRemoval")}>More</button>
        </div>

      

        <div className="grooming-service-box">
          <img src={Detox} alt="Detox & Relaxation Therapy" className="grooming-service-image" />
          <h3 className="grooming-service-title">Detox & Relaxation Massage Therapy</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/DetoxRelaxationTherapy")}>More</button>
        </div>


        <div className="grooming-service-box">
          <img src={Acne} alt="Acne Treatment" className="grooming-service-image" />
          <h3 className="grooming-service-title">Acne Treatment</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/AcneTreatment")}>More</button>
        </div>


        <div className="grooming-service-box">
          <img src={HairLoss} alt="Hair Loss Treatment" className="grooming-service-image" />
          <h3 className="grooming-service-title">Hair Loss Treatment</h3>
          <button className="grooming-more-btn" onClick={() => navigateToDetails("/HairLossTreatment")}>More</button>
        </div>

      </div>

    </div>
  );
};

export default BeautyMen;
