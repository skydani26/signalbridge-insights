
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./for-experts.module.css";

export const metadata = {
    title: "For Experts | SignalBridge Insights",
    description: "Monetize your industry expertise. Join 10,000+ professionals earning through surveys, calls, and advisory projects.",
};

export default function ForExperts() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Monetize Your Industry Expertise</h1>
                    <p className={styles.heroSubtitle}>
                        Join 10,000+ professionals earning through surveys, calls, focus groups, and advisory projects.
                    </p>
                    <Button href="/contact" variant="primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Apply Today</Button>
                </div>
            </section>

            <SectionWrapper>
                <h2 className="text-center mb-8">Ways to Earn</h2>
                <div className={styles.earnGrid}>
                    <div className={styles.earnCard}>
                        <h3>Paid Surveys</h3>
                        <span className={styles.earnPrice}>$50 – $500+</span>
                        <p>Short, targeted questionnaires that you can complete on your own schedule.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <h3>1-on-1 Consultation Calls</h3>
                        <span className={styles.earnPrice}>$200 – $1,500/hr</span>
                        <p>High-value phone consultations with investors and strategy consultants seeking deep expertise.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <h3>Focus Groups & Panels</h3>
                        <p>Participate in moderated discussions with other industry leaders.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <h3>Advisory & Project Work</h3>
                        <p>Longer-term engagements and board advisory roles.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
                    <div>
                        <h2>Why Join SignalBridge?</h2>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li className="mb-4">
                                <strong>Competitive Earnings:</strong> We pay top market rates for your time and knowledge.
                            </li>
                            <li className="mb-4">
                                <strong>Flexible Schedule:</strong> You choose which projects to accept. Zero commitment required.
                            </li>
                            <li className="mb-4">
                                <strong>Global Clients:</strong> Connect with the world&apos;s leading investment funds and corporations.
                            </li>
                            <li className="mb-4">
                                <strong>Compliance Support:</strong> We handle the training and framework so you can focus on insights.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Who We&apos;re Looking For</h2>
                        <ul className={styles.requirementsList}>
                            <li>5+ years of professional experience in your field</li>
                            <li>Current or recent role in a relevant industry</li>
                            <li>Strong communication skills</li>
                            <li>Commitment to compliance and confidentiality</li>
                            <li>Availability for 2–4 hours per month</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className={styles.ctaBox}>
                <h2>Ready to share your knowledge?</h2>
                <p className="mb-8">Join the network of top tier experts.</p>
                <Button href="/contact">Apply Now</Button>
            </SectionWrapper>
        </main>
    );
}
