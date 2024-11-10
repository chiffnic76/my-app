// src/components/ui/buttons/LoginButton/LoginButton.js
import React from 'react';
import styles from './LoginButton.module.css';

function LoginButton ({label}) {
  return (
    <button className={styles.LoginButton} >
      {label}
    </button>
  );
}
export default LoginButton;