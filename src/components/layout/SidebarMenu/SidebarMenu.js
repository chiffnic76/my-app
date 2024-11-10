/* src/components/layout/SidebarMenu/SidebarMenu.js */
import React from 'react';
import ButtonSideBar from '../../ui/buttons/ButtonSideBar';
import './SidebarMenu.css';

function SidebarMenu() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <ButtonSideBar label="DashBoard" path="/dashboard" />
        </li>
        <li>
          <ButtonSideBar label="Equipments" path="/equipments" />
        </li>
        <li>
          <ButtonSideBar label="Tickets" path="/tickets" />
        </li>
      </ul>
    </div>
  );
}
export default SidebarMenu;