/* src/components/layout/Header/Header.js */
import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import './Header.css';
import SidebarMenu from '../SidebarMenu';
import UserInfo from '../UserInfo';

function Header() {
  const { user } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserInfoOpen, setUserInfoOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserInfo = () => {
    setUserInfoOpen(!isUserInfoOpen);
  };

  return (
    <header className="header">
      {user ? (
        <div className="header-content">
          <button className="menu-button" onClick={toggleMenu}>☰</button>

          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <img src="https://via.placeholder.com/40" alt="Profile" className="profile-photo" onClick={toggleUserInfo} />
          {isUserInfoOpen && <UserInfo />}
          {isMenuOpen && <SidebarMenu />}
        </div>
      ) : (
        <span className="not-logged-in">Vous n'êtes pas connecté</span>
      )}
    </header>
  );
}

export default Header;

/*

*/
