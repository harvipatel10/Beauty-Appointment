import React from "react";
import {
  FaHome, FaUsers, FaCheckCircle, FaShieldAlt,
  FaCalendarAlt, FaLayerGroup, FaChartBar, FaFileAlt, FaMoneyBillWave
} from "react-icons/fa";
import "./AdminSidebar.css";

const Sidebar = ({ isOpen, isMobile }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
      <ul className="sidebar-list">
        <li><FaHome /> Dashboard Overview</li>
        <li><FaUsers /> User Management</li>
        <li><FaCheckCircle /> Talent Approval</li>
        <li><FaShieldAlt /> Content Moderation</li>
        <li><FaCalendarAlt /> Event Oversight</li>
        <li><FaLayerGroup /> Categories Management</li>
        <li><FaChartBar /> Analytics & Insights</li>
        <li><FaFileAlt /> Reports</li>
        <li><FaMoneyBillWave /> Payment Analytics</li>
      </ul>
    </div>
  );
};

export default Sidebar;
