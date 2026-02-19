
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'text';
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    onClick,
    href,
    className = '',
    type = 'button',
    style
}) => {
    const buttonClass = `${styles.btn} ${styles[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={buttonClass} style={style}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} className={buttonClass} onClick={onClick} style={style}>
            {children}
        </button>
    );
};

export default Button;
