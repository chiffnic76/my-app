// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WelcomePage, LoginPage, SubscriptionPage, DashBoard, EquipmentsPage, TicketsPage, NotFoundPage } from './components/pages';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/subscribe" element={<SubscriptionPage />} />
        <Route path="/dashboard" element={
          <AuthProvider>
            <DashBoard />
          </AuthProvider>
        } />
         <Route path="/equipments" element={
          <AuthProvider>
            <EquipmentsPage />
          </AuthProvider>
        } />
        <Route path="/tickets" element={
          <AuthProvider>
            <TicketsPage />
          </AuthProvider>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;