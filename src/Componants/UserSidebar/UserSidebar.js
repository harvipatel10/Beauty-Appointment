import {
    FaHome,
    FaSearch,
    FaCalendarCheck,
    FaCalendarAlt,
    FaStar,
    FaEnvelope,
    FaUserCog,
  } from "react-icons/fa";
  

import "./UserSidebar.css";


const UserSidebar = ({ isOpen, isMobile }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
      <ul className="sidebar-list">
        <li><FaHome /> Dashboard Overview</li>
         <li><FaSearch />  Browse Talent </li>

         <li><FaCalendarCheck />  My Bookings </li>        
     
        <li><FaCalendarAlt />  Event Requests</li>

        <li><FaStar /> Reviews & Feedback</li>

        <li><FaEnvelope /> Messages</li>

        <li><FaUserCog /> Account Settings</li>
    
       
      </ul>
    </div>
  );
};

export default UserSidebar;
