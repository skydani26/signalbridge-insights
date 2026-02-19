import React from 'react';
import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    background?: 'white' | 'gray' | 'dark';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    id,
    className = '',
    background = 'white'
}) => {
    return (
        <section id={id} className={`${styles.section} ${styles[background]} ${className}`}>
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
