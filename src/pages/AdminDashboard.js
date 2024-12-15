import React from 'react';
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-overview">
        <DashboardCard title="Total Students" value={100} />
        <DashboardCard title="Available Rooms" value={20} />
        <DashboardCard title="Pending Complaints" value={5} />
        <DashboardCard title="Staff Tasks" value={10} />
      </div>
      <div className="dashboard-sections">
        <h2>Manage Sections</h2>
        <ul>
          <li>Student Management</li>
          <li>Room Management</li>
          <li>Fee Management</li>
          <li>Complaint Management</li>
          <li>Staff Task Management</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
