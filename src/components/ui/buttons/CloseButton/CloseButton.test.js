// src/components/ui/buttons/CloseButton/CloseButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CloseButton from './CloseButton';

test('renders CloseButton and calls onClose when clicked', () => {
    const onClose = jest.fn();
    render(<CloseButton onClose={onClose} />);
    
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    
    expect(onClose).toHaveBeenCalledTimes(1);
});
