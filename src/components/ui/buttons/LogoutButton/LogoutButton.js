// src/components/ui/buttons/LogoutButton/LogoutButton.js
import React from 'react';
import { useAuth } from '../../../../context/AuthContext';
import styles from './LogoutButton.module.css';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <button onClick={handleLogout} className={styles.logoutButton}>
            Déconnexion
        </button>
    );
};

export default LogoutButton;
