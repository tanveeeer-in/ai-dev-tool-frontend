import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ProjectUpload from '../components/project/ProjectUpload';

const Dashboard: React.FC = () => (
  <>
    <Navbar />
    <div>
      <h1>Dashboard</h1>
      <ProjectUpload />
    </div>
  </>
);

export default Dashboard;
