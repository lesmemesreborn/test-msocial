import React from 'react';
import './Button.scss'

interface ButtonProps {
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => (
    <button className="button" type="submit" onClick={onClick}>
        Изменить
    </button>
);
