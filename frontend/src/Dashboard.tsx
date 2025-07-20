import React from 'react';

interface DashboardProps {
  user: {
    id: string;
    username: string;
    email: string;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}!</h1>
      <div className="user-info">
        <p>Email: {user.email}</p>
        <p>User ID: {user.id}</p>
      </div>
      <div className="dashboard-content">
        <h2>Your Dashboard</h2>
        <p>This is your personalized dashboard after successful authentication.</p>
      </div>
    </div>
  );
};

export default Dashboard;