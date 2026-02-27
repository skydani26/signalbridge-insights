"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { ImpactSignal } from "@/data/impact";
import styles from "./impact-detail.module.css";

interface ImpactDetailClientProps {
    signal: ImpactSignal;
}

export default function ImpactDetailClient({ signal }: ImpactDetailClientProps) {
    return (
        <main className={styles.page}>
            <header className={styles.header}>
                <div className="container">
                    <Link href="/insights/impact" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Impact Signals
                    </Link>

                    <div className={styles.titleGroup}>
                        <span className={styles.category}>{signal.sector} Case Study</span>
                        <h1>{signal.title}</h1>

                        <div className={styles.statsBar}>
                            {signal.stats.map((stat, i) => (
                                <div key={i} className={styles.statItem}>
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <SectionWrapper id="content" background="white">
                <div className="container">
                    <div className={styles.contentContainer}>
                        <div className={styles.article}>
                            <section className={styles.articleSection}>
                                <h2><Target size={28} color="var(--color-secondary)" /> The Challenge</h2>
                                <p>{signal.challenge}</p>
                            </section>

                            <section className={styles.articleSection}>
                                <h2><Zap size={28} color="var(--color-secondary)" /> The Methodology</h2>
                                <p>{signal.methodology}</p>
                            </section>

                            <section className={styles.articleSection}>
                                <h2><TrendingUp size={28} color="var(--color-secondary)" /> The Outcome</h2>
                                <p>{signal.outcome}</p>
                            </section>
                        </div>

                        <aside className={styles.sidebar}>
                            <div className={styles.protocolNotice}>
                                <h4><ShieldCheck size={20} /> Protocol 7 Audit</h4>
                                <p>
                                    This engagement was executed under full Protocol 7 compliance oversight,
                                    ensuring zero MNPI leakage and full institutional data sovereignty.
                                </p>
                                <Link href="/compliance/protocol" style={{ display: 'inline-block', marginTop: '16px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-secondary)', textDecoration: 'none' }}>
                                    Learn about Protocol 7 →
                                </Link>
                            </div>
                        </aside>
                    </div>

                    <div className={styles.ctaSection}>
                        <h2>Solve Your Research Mandate</h2>
                        <p>Leverage the same methodology to de-risk your next high-stakes investment decision.</p>
                        <Button href="/inquire" variant="primary">Initialize Inquiry Desk</Button>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
