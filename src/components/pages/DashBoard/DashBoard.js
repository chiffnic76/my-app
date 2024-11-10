// src/components/modules/DashBoard/DashBoard.js
import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './DashBoard.css';

function DashBoard() {
  return (
    <div className="dashboard">
      <Header />
      <h2>Dashboard</h2>
      <div>Welcome!</div>
      <div>This is the home page.</div>
      <Footer />
    </div>
  );
}

export default DashBoard;