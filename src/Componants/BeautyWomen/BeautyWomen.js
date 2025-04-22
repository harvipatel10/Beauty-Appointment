import React from 'react';
import { useNavigate } from 'react-router-dom';
import BeautyNavbar from "../BeautyNavbar/BeautyNavbar";
import "../BeautyWomen/BeautyWomen.css"; 


import HairCut from "../../assets/w1.jpg";
import Coloring from "../../assets/w2.jpeg";
import HairSpa from "../../assets/w3.avif";
import Facial from "../../assets/w4.jpeg";
import Makeup from "../../assets/w17.jpg";
import Massage from "../../assets/w5.jpeg";
import Scrub from "../../assets/w6.jpeg";
import Manicure from "../../assets/w7.jpeg";
import NailArt from "../../assets/w8.jpg";
import Waxing from "../../assets/w9.jpg";
import Threading from "../../assets/w10.webp";
import Bridal from "../../assets/w11.jpeg";
import AntiAging from "../../assets/w12.jpg";
import Smoothening from "../../assets/w13.jpeg";
import Tinting from "../../assets/w14.jpeg";
import BodyWraps from "../../assets/w15.jpg";
import Detox from "../../assets/w16.jpg";


const BeautyWomen = () => {
  const navigate = useNavigate();

  const navigateToDetails = (route) => {
    navigate(route);
  };
  
  return (
    <div className="beauty-services-container">
      <BeautyNavbar />

      {/* Hero Section */}
      <section className="women-hero-section">
      </section>

      <div className="women-hero-heading">
      <h1>Women's Beauty & Spa Services</h1>
      </div>
          
                <div className="beauty-services-grid">


                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={HairCut} alt="Hair Cut & Styling" />
                    <h3 className="beauty-service-title">Hair Cut & Styling</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyHairCutStyling")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Coloring} alt="Hair Coloring & Highlights" />
                    <h3 className="beauty-service-title">Hair Coloring & Highlights</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyHairColoring")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={HairSpa} alt="Hair Spa & Treatments" />
                    <h3 className="beauty-service-title">Hair Spa & Treatments</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyHairSpaTreatments")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Smoothening} alt="Hair Smoothening & Straightening" />
                    <h3 className="beauty-service-title">Hair Smoothening & Straightening</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyHairSmoothening")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Facial} alt="Facials & Skin Care" />
                    <h3 className="beauty-service-title">Facials & Skin Care</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyFacialsSkinCare")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={AntiAging} alt="Anti-Aging & Rejuvenation" />
                    <h3 className="beauty-service-title">Anti-Aging & Rejuvenation</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyAntiAgingRejuvenation")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Makeup} alt="Makeup Services" />
                    <h3 className="beauty-service-title">Makeup Services</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyMakeupServices")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Massage} alt="Body Massage & Spa" />
                    <h3 className="beauty-service-title">Body Massage & Spa</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyBodyMassageSpa")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Scrub} alt="Body Scrub & Polishing" />
                    <h3 className="beauty-service-title">Body Scrub & Polishing</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyBodyScrubPolishing")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={BodyWraps} alt="Body Wraps & Hydration" />
                    <h3 className="beauty-service-title">Body Wraps & Hydration</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyBodyWrapsHydration")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Manicure} alt="Manicure & Pedicure" />
                    <h3 className="beauty-service-title">Manicure & Pedicure</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyManicurePedicure")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={NailArt} alt="Nail Art & Extensions" />
                    <h3 className="beauty-service-title">Nail Art & Extensions</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyNailArtExtensions")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Waxing} alt="Waxing & Hair Removal" />
                    <h3 className="beauty-service-title">Waxing & Hair Removal</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyWaxingHairRemoval")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Threading} alt="Threading & Eyebrow Shaping" />
                    <h3 className="beauty-service-title">Threading & Eyebrow Shaping</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyThreadingEyebrow")}>More</button>
                  </div>
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Tinting} alt="Eyebrow & Eyelash Tinting" />
                    <h3 className="beauty-service-title">Eyebrow & Eyelash Tinting</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyEyebrowEyelashTinting")}>More</button>
                  </div>

                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Detox} alt="Detox & Slimming Therapy" />
                    <h3 className="beauty-service-title">Detox & Slimming Therapy</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyDetoxSlimmingTherapy")}>More</button>
                  </div>
                  
                  <div className="beauty-service-box">
                    <img className="beauty-service-image" src={Bridal} alt="Bridal & Party Packages" />
                    <h3 className="beauty-service-title">Bridal & Party Packages</h3>
                    <button className="beauty-more-btn" onClick={() => navigateToDetails("/BeautyBridalPartyPackages")}>More</button>
                  </div>
                 
                </div>
      

               </div>
 
  );
};

export default BeautyWomen;
