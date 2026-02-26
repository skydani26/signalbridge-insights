import React, { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'small' | 'medium' | 'large';
    hoverEffect?: boolean;
    delay?: number;
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    padding = 'medium',
    hoverEffect = false,
    delay = 0
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`${styles.card} ${padding ? styles[padding] : ''} ${hoverEffect ? styles.hover : ''} ${isVisible ? styles.cardVisible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Card;
