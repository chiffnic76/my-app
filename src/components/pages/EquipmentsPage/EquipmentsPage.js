// src/components/pages/EquipmentsPage/EquipmentsPage.js
import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import EquipmentTab from '../../modules/EquipmentTab'
import './EquipmentsPage.css';

function EquipmentsPage() {
  return (
    <div className="equipments-page">
      <Header />
      <h2>Liste des Équipements</h2>
      <p>Aucun équipement trouvé.</p>
      <EquipmentTab />
      <Footer />
    </div>
  );
}
export default EquipmentsPage;