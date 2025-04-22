import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';

import Login from "./Componants/Login/Login";
import Signup from "./Componants/Signup/Signup";
import Forgotpassword from "./Componants/Forgotpassword/Forgotpassword"; 
import BeautyNavbar from "./Componants/BeautyNavbar/BeautyNavbar"

import BeautySpaHome from "./Componants/BeautySpaHome/BeautySpaHome";
import BeautyAbout from "./Componants/BeautyAbout/BeautyAbout";
import BeautyServices from "./Componants/BeautyServices/BeautyServices";

import BeautyMen from "./Componants/BeautyMen/BeautyMen";
import HairSpaScalpTreatments from "./Componants/HairSpaScalpTreatments/HairSpaScalpTreatments";
import HairColoringHighlights from "./Componants/HairColoringHighlights/HairColoringHighlights";
import HairCutStyling from "./Componants/HairCutStyling/HairCutStyling";
import ShavingGrooming from "./Componants/ShavingGrooming/ShavingGrooming";
import FacialTreatments from "./Componants/FacialTreatments/FacialTreatments";
import BodyScrubPolishing from "./Componants/BodyScrubPolishing/BodyScrubPolishing";
import ManicurePedicure from "./Componants/ManicurePedicure/ManicurePedicure";
import WaxingHairRemoval from "./Componants/WaxingHairRemoval/WaxingHairRemoval";
import DetoxRelaxationTherapy from "./Componants/DetoxRelaxationTherapy/DetoxRelaxationTherapy";
import AcneTreatment from "./Componants/AcneTreatment/AcneTreatment";
import HairLossTreatment from "./Componants/HairLossTreatment/HairLossTreatment";


import BeautyWomen from "./Componants/BeautyWomen/BeautyWomen";
import BeautyHairCutStyling from "./Componants/BeautyHairCutStyling/BeautyHairCutStyling";
import BeautyHairColoring from "./Componants/BeautyHairColoring/BeautyHairColoring";
import BeautyHairSpaTreatments from "./Componants/BeautyHairSpaTreatments/BeautyHairSpaTreatments";
import BeautyHairSmoothening from "./Componants/BeautyHairSmoothening/BeautyHairSmoothening";
import BeautyFacialsSkinCare from "./Componants/BeautyFacialsSkinCare/BeautyFacialsSkinCare";
import BeautyAntiAgingRejuvenation from "./Componants/BeautyAntiAgingRejuvenation/BeautyAntiAgingRejuvenation";
import BeautyMakeupServices from "./Componants/BeautyMakeupServices/BeautyMakeupServices";
import BeautyBodyMassageSpa from "./Componants/BeautyBodyMassageSpa/BeautyBodyMassageSpa";
import BeautyBodyScrubPolishing from "./Componants/BeautyBodyScrubPolishing/BeautyBodyScrubPolishing";
import BeautyBodyWrapsHydration from "./Componants/BeautyBodyWrapsHydration/BeautyBodyWrapsHydration";
import BeautyManicurePedicure from "./Componants/BeautyManicurePedicure/BeautyManicurePedicure";
import BeautyNailArtExtensions from "./Componants/BeautyNailArtExtensions/BeautyNailArtExtensions";
import BeautyWaxingHairRemoval from "./Componants/BeautyWaxingHairRemoval/BeautyWaxingHairRemoval";
import BeautyThreadingEyebrow from "./Componants/BeautyThreadingEyebrow/BeautyThreadingEyebrow";
import BeautyEyebrowEyelashTinting from "./Componants/BeautyEyebrowEyelashTinting/BeautyEyebrowEyelashTinting";
import BeautyDetoxSlimmingTherapy from "./Componants/BeautyDetoxSlimmingTherapy/BeautyDetoxSlimmingTherapy";
import BeautyBridalPartyPackages from "./Componants/BeautyBridalPartyPackages/BeautyBridalPartyPackages";

import BeautyGallery from "./Componants/BeautyGallery/BeautyGallery";

import BeautyPricing from "./Componants/BeautyPricing/BeautyPricing"
import BeautyContact from "./Componants/BeautyContact/BeautyContact";






function App() {
  return (

      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Forgotpassword" element={<Forgotpassword />} />
     



        <Route path="/BeautyNavbar" element={<BeautyNavbar />} />
       <Route path="/BeautySpaHome" element={<BeautySpaHome />} />
       <Route path="/BeautyAbout" element={<BeautyAbout />} />
       <Route path="/BeautyServices" element={<BeautyServices />} />

       <Route path="/BeautyMen" element={<BeautyMen />} />
        <Route path="/HairSpaScalpTreatments" element={<HairSpaScalpTreatments />} />
        <Route path="/HairColoringHighlights" element={<HairColoringHighlights />} />
        <Route path="/HairCutStyling" element={<HairCutStyling />} />
        <Route path="/ShavingGrooming" element={<ShavingGrooming />} />
        <Route path="/FacialTreatments" element={<FacialTreatments />} />
        <Route path="/BodyScrubPolishing" element={<BodyScrubPolishing />} />
        <Route path="/ManicurePedicure" element={<ManicurePedicure />} />
        <Route path="/WaxingHairRemoval" element={<WaxingHairRemoval />} />
        <Route path="/DetoxRelaxationTherapy" element={<DetoxRelaxationTherapy />} />
        <Route path="/AcneTreatment" element={<AcneTreatment />} />
        <Route path="/HairLossTreatment" element={<HairLossTreatment />} />
        
       <Route path="/BeautyWomen" element={<BeautyWomen />} />
       <Route path="/BeautyHairCutStyling" element={<BeautyHairCutStyling />} />
       <Route path="/BeautyHairColoring" element={<BeautyHairColoring />} />
       <Route path="/BeautyHairSpaTreatments" element={<BeautyHairSpaTreatments />} />
       <Route path="/BeautyHairSmoothening" element={<BeautyHairSmoothening />} />
       
       <Route path="/BeautyFacialsSkinCare" element={<BeautyFacialsSkinCare />} />
       <Route path="/BeautyAntiAgingRejuvenation" element={<BeautyAntiAgingRejuvenation />} />
       <Route path="/BeautyMakeupServices" element={<BeautyMakeupServices />} />
       <Route path="/BeautyBodyMassageSpa" element={<BeautyBodyMassageSpa />} />
       <Route path="/BeautyBodyScrubPolishing" element={<BeautyBodyScrubPolishing />} />
       <Route path="/BeautyBodyWrapsHydration" element={<BeautyBodyWrapsHydration />} />
       <Route path="/BeautyManicurePedicure" element={<BeautyManicurePedicure />} />
       <Route path="/BeautyNailArtExtensions" element={<BeautyNailArtExtensions />} />
       <Route path="/BeautyWaxingHairRemoval" element={<BeautyWaxingHairRemoval />} />
       <Route path="/BeautyThreadingEyebrow" element={<BeautyThreadingEyebrow />} />
       <Route path="/BeautyEyebrowEyelashTinting" element={<BeautyEyebrowEyelashTinting />} />
       <Route path="/BeautyDetoxSlimmingTherapy" element={<BeautyDetoxSlimmingTherapy />} />
       <Route path="/BeautyBridalPartyPackages" element={<BeautyBridalPartyPackages />} />

       <Route path="/BeautyGallery" element={<BeautyGallery />} />
       <Route path="/BeautyPricing" element={<BeautyPricing />} />
       <Route path="/BeautyContact" element={<BeautyContact />} />



       
      
      

       
  
       


{/* Catch-All Route */}
<Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

  );
}

export default App;
