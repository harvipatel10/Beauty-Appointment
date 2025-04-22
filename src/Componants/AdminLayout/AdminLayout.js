import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminLayout.css'; // for layout styling

const AdminLayout = () => {
  return (
    <div className="dashboard-layout">
      <AdminNavbar />
      <div className="main-content">
        <AdminSidebar />
        <div className="page-content">
          <h3>Welcome to the Dashboard!</h3>
          {/* Place your page content here */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
