'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import SectionWrapper from "@/components/SectionWrapper";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Insight } from "@/data/insights";
import styles from "./insight-detail.module.css";

interface InsightDetailClientProps {
    insight: Insight;
    relatedInsights: Insight[];
}

export default function InsightDetailClient({ insight, relatedInsights }: InsightDetailClientProps) {
    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <Link href="/insights" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Signals
                    </Link>

                    <div className={styles.headerContent}>
                        <span className={styles.category}>{insight.category}</span>
                        <h1>{insight.title}</h1>

                        <div className={styles.meta}>
                            <div className={styles.metaItem}>
                                <User size={16} /> {insight.author.name}
                            </div>
                            <div className={styles.metaItem}>
                                <Calendar size={16} /> {insight.date}
                            </div>
                            <div className={styles.metaItem}>
                                <Clock size={16} /> {insight.readTime}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <SectionWrapper id="content" background="white">
                <div className={styles.contentContainer}>
                    <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: insight.content }} />

                    <footer className={styles.articleFooter}>
                        <NewsletterSignup category={insight.category} />
                        <div className={styles.authorCard}>
                            <div className={styles.authorInfo}>
                                <h4>{insight.author.name}</h4>
                                <p>{insight.author.role}</p>
                            </div>
                            <div className={styles.shareActions}>
                                <button className={styles.shareBtn} aria-label="Share Signal">
                                    <Share2 size={18} />
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </SectionWrapper>

            {relatedInsights.length > 0 && (
                <SectionWrapper id="related" background="gray">
                    <div className="container">
                        <h3 className={styles.relatedTitle}>Related Signals</h3>
                        <div className={styles.relatedGrid}>
                            {relatedInsights.map(related => (
                                <Link key={related.id} href={`/insights/${related.slug}`} className={styles.relatedCard}>
                                    <span className={styles.relatedCategory}>{related.category}</span>
                                    <h4>{related.title}</h4>
                                    <span className={styles.readMore}>Read Now →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
            )}

            <section className={styles.briefingCta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Commission a Custom Research Brief</h2>
                        <p>Leverage our global network to solve your specific investment or compliance questions.</p>
                        <a href="/inquire" className={styles.ctaBtn}>Initialize Inquiry</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
