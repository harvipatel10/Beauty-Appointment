import React from 'react';
import UserNavbar from '../UserNavbar/UserNavbar';
import UserSidebar from '../UserSidebar/UserSidebar';
import './UserLayout.css'; // for layout styling

const AdminLayout = () => {
  return (
    <div className="dashboard-layout">
      <UserNavbar />
      <div className="main-content">
        <UserSidebar />
        <div className="page-content">
          <h3>Welcome to the Dashboard!</h3>
          {/* Place your page content here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
