import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./BeautyNavbar.css"

const BeautyNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="BeautyNavbar">
      <div className="beautynavbar-container">
        <div className="Beautylogo">Beauty & Spa</div>
        <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>

        <li className="nav-item">
            <Link to="/BeautySpaHome">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/BeautyAbout">About Us</Link>
          </li>

         
          <li className="nav-item" onClick={toggleDropdown}>
            <Link to="/BeautyServices">Services ▼</Link>
            {isDropdownOpen && (
            <ul className="dropdown">
              <li><Link to="/BeautyMen"> Men ▼</Link></li>
              <li><Link to="/BeautyWomen">Women ▼</Link></li>
            </ul>

            )}

          </li>

          <li className="nav-item">
            <Link to="/BeautyGallery">Gallery</Link>
          </li>

          <li className="nav-item">
            <Link to="/BeautyPricing">Pricing</Link>
          </li>

          <li className="nav-item">
            <Link to="/BeautyContact">Contact Us</Link>
          </li>

        
        </ul>

        <div className="mobile-toggle" onClick={handleToggle}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default  BeautyNavbar;