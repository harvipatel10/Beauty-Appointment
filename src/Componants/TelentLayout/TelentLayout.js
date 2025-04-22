import React from 'react';
import TelentNavbar from '../TelentNavbar/TelentNavbar';
import TelentSidebar from '../TelentSidebar/TelentSidebar';
import './TelentLayout.css'; // for layout styling

const AdminLayout = () => {
  return (
    <div className="dashboard-layout">
      <TelentNavbar />
      <div className="main-content">
        <TelentSidebar />
        <div className="page-content">
          <h3>Welcome to the Dashboard!</h3>
          {/* Place your page content here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
