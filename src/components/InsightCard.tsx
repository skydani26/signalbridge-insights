'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { Insight } from '@/data/insights';
import styles from './InsightCard.module.css';

interface InsightCardProps {
    insight: Insight;
    featured?: boolean;
}

const InsightCard: React.FC<InsightCardProps> = ({ insight, featured = false }) => {
    return (
        <Link
            href={`/insights/${insight.slug}`}
            className={`${styles.card} ${featured ? styles.featured : ''}`}
        >
            <div className={styles.imageWrapper}>
                {/* 
                   In a real app, we'd use insight.coverImage. 
                   Since we don't have real images yet, we use a styled placeholder 
                   that matches the brand aesthetic.
                */}
                <div className={styles.placeholderImage}>
                    <div className={styles.imageOverlay} />
                    <span className={styles.categoryTag}>{insight.category}</span>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.date}>{insight.date}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.readTime}>
                        <Clock size={14} className={styles.icon} />
                        {insight.readTime}
                    </span>
                </div>

                <h3 className={styles.title}>{insight.title}</h3>
                <p className={styles.excerpt}>{insight.excerpt}</p>

                <div className={styles.footer}>
                    <span className={styles.readMore}>
                        View Signal <ArrowRight size={16} className={styles.arrow} />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default InsightCard;
