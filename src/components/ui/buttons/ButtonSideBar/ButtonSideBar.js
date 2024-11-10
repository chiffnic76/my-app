// src/components/ui/buttons/CloseButton/CloseButton.js
import React from 'react';
import styles from './ButtonSideBar.module.css';
import { useNavigate } from 'react-router-dom';

function ButtonSideBar({label, path}) {
  const navigate = useNavigate();
  const handleLogout = () => {
        navigate(path);
    };
  return (
    <button onClick={handleLogout} className={styles.ButtonSideBar}>
      {label}
    </button>
  );
}
export default ButtonSideBar;