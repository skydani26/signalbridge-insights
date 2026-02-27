'use client';

import React, { useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import InsightCard from "@/components/InsightCard";
import FilterBar from "@/components/FilterBar";
import { insights, InsightCategory } from "@/data/insights";
import styles from "./insights.module.css";

export default function InsightsClient() {
    const [activeCategory, setActiveCategory] = useState<InsightCategory | 'All Signals'>('All Signals');

    const filteredInsights = activeCategory === 'All Signals'
        ? insights
        : insights.filter(i => i.category === activeCategory);

    const featuredInsight = insights[0]; // First one is featured
    const remainingInsights = filteredInsights.filter(i => i.id !== featuredInsight.id);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <span className={styles.tag}>THOUGHT LEADERSHIP</span>
                        <h1>Signals <span className={styles.highlight}>& Insights</span></h1>
                        <p className={styles.subtitle}>
                            Institutional research, sector intelligence, and execution protocols from the heart of the global expert network.
                        </p>
                    </div>
                </div>
            </section>

            <SectionWrapper id="signals" background="gray">
                <div className="container">
                    <FilterBar
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {activeCategory === 'All Signals' && (
                        <div className={`${styles.featuredGrid} revealVisible`}>
                            <InsightCard insight={featuredInsight} featured={true} />
                        </div>
                    )}

                    <div className={styles.grid}>
                        {(activeCategory === 'All Signals' ? remainingInsights : filteredInsights).map((insight) => (
                            <div key={insight.id} className="revealVisible">
                                <InsightCard insight={insight} />
                            </div>
                        ))}
                    </div>

                    {filteredInsights.length === 0 && (
                        <div className={styles.emptyState}>
                            <p>No signals found in this category. Pulse checking our global desk...</p>
                        </div>
                    )}
                </div>
            </SectionWrapper>

            <section className={styles.briefingCta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Need Specific Intelligence?</h2>
                        <p>Our research desk can commission custom primary research for your specific investment thesis.</p>
                        <div className={styles.ctaActions}>
                            <a href="/inquire" className={styles.ctaBtn}>
                                Request Strategic Briefing
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
