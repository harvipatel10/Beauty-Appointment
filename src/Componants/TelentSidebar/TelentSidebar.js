import React from "react";
import {
    FaHome,
    FaUserEdit,
    FaCalendarAlt,
    FaClipboardCheck,
    FaEnvelope,
    FaStar,
    FaChartBar,
    FaMoneyBillWave,
    FaBullhorn,
  } from "react-icons/fa";

import "./TelentSidebar.css";


const TalentSidebar = ({ isOpen, isMobile }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
      <ul className="sidebar-list">
        <li><FaHome /> Dashboard Overview</li>
         <li><FaUserEdit />  My Profile </li>
         <li><FaClipboardCheck /> Booking Requests </li>        
        <li><FaBullhorn /> Apply to Events</li>
        <li><FaCalendarAlt /> Calendar</li>
        <li><FaStar /> Ratings & Reviews</li>
        <li><FaEnvelope /> Inbox</li>
        <li><FaChartBar /> Profile Analytics</li>
        <li><FaMoneyBillWave /> Payment Details</li>
       
      </ul>
    </div>
  );
};

export default TalentSidebar;
