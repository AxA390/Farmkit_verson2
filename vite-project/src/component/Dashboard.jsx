import NavBar from './NavBar.jsx'; 
import React from 'react';

function Dashboard() {
  return (
    <>
       <NavBar />
      <div className="dashboard">
        <h1>Admin Dashboard</h1>
        <div className="card">
          <h2>User Management</h2>
        </div>
        <div className="card">
          <h2>Sales Data</h2>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
