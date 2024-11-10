// src/components/ui/buttons/CloseButton/CloseButton.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CloseButton.module.css';

const CloseButton = ({ onClose }) => {
    return (
        <button onClick={onClose} className={styles.closeButton} aria-label="Close">
            &times;
        </button>
    );
};

CloseButton.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default CloseButton;

