'use client';

import React from 'react';
import { InsightCategory } from '@/data/insights';
import styles from './FilterBar.module.css';

interface FilterBarProps {
    activeCategory: InsightCategory | 'All Signals';
    onCategoryChange: (category: InsightCategory | 'All Signals') => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onCategoryChange }) => {
    const categories: (InsightCategory | 'All Signals')[] = [
        'All Signals',
        'Strategic Intelligence',
        'Execution Protocol',
        'Institutional Case Study'
    ];

    return (
        <div className={styles.filterBar}>
            {categories.map((cat) => (
                <button
                    key={cat}
                    className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                    onClick={() => onCategoryChange(cat)}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
