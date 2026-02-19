import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'small' | 'medium' | 'large';
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'medium',
    hoverEffect = false
}) => {
    return (
        <div className={`${styles.card} ${styles[padding]} ${hoverEffect ? styles.hover : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
