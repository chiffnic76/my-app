// src/components/pages/TicketsPage/TicketsPage.js
import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './TicketsPage.css';

function TicketsPage() {
  return (
    <div className="tickets-page">
      <Header />
      <h2>Gestion des Tickets</h2>
      <p>Aucun ticket trouvé.</p>
      <Footer />
    </div>
  );
}
export default TicketsPage;