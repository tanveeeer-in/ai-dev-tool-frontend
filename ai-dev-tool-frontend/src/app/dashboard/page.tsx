import React from 'react';
import GitOperations from '../../components/GitOperations';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <GitOperations />
    </div>
  );
};

export default Dashboard;
