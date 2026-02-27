"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import SectionWrapper from "@/components/SectionWrapper";
import { impactSignals } from "@/data/impact";
import styles from "./impact.module.css";

export default function ImpactGalleryClient() {
    return (
        <main className={styles.page}>
            <header className={styles.hero}>
                <div className="container">
                    <span className={styles.tag}>PROOF OF WORK</span>
                    <h1>Impact <span style={{ color: 'var(--color-secondary)' }}>Signals</span></h1>
                    <p>
                        Real-world case studies demonstrating how SignalBridge expertise
                        drives institutional alpha and risk mitigation across high-stakes research mandates.
                    </p>
                </div>
            </header>

            <SectionWrapper id="signals" background="white">
                <div className="container">
                    <div className={styles.grid}>
                        {impactSignals.map((signal) => (
                            <Link
                                key={signal.id}
                                href={`/insights/impact/${signal.slug}`}
                                className={styles.card}
                            >
                                <span className={styles.cardCategory}>{signal.sector}</span>
                                <h3>{signal.title}</h3>
                                <p className={styles.cardChallenge}>{signal.challenge.substring(0, 150)}...</p>

                                <div className={styles.cardStats}>
                                    {signal.stats.map((stat, i) => (
                                        <div key={i} className={styles.statItem}>
                                            <span className={styles.statValue}>{stat.value}</span>
                                            <span className={styles.statLabel}>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
