import React, { useState, useEffect } from 'react';
import './AdminNavbar.css';
import { FaSearch, FaBell, FaChartBar, FaUserCircle, FaEdit, FaCog, FaSignOutAlt } from 'react-icons/fa';

const AdminNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const toggleButton = document.querySelector('.sidebar-toggle');

    const handleToggle = () => {
      document.body.classList.toggle('sidebar-open');
    };

    if (toggleButton) {
      toggleButton.addEventListener('click', handleToggle);
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener('click', handleToggle);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="sidebar-toggle">☰</div>
        <h2 className="logo">LocalGems</h2>
      </div>

      <div className="navbar-center">
        <div className="searchbar">
          <input type="text" placeholder="Search users, talents, events..." />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="navbar-right" onMouseLeave={() => setDropdownOpen(false)}>
        <FaBell className="nav-icon" />
        <FaChartBar className="nav-icon" />
        <div className="profile-container" onMouseEnter={() => setDropdownOpen(true)}>
          <FaUserCircle className="nav-icon profile-icon" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item"><FaEdit className="dropdown-icon" /> Edit Profile</div>
              <div className="dropdown-item"><FaCog className="dropdown-icon" /> Settings</div>
              <div className="dropdown-item logout"><FaSignOutAlt className="dropdown-icon" /> Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
