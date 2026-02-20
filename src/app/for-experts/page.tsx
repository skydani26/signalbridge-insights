import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FileText, Phone, Users, Zap, CheckCircle2 } from "lucide-react";
import styles from "./for-experts.module.css";

export const metadata = {
    title: "For Experts | SignalBridge Insights",
    description: "Monetize your industry expertise. Join 10,000+ professionals earning through surveys, calls, and advisory projects.",
};

export default function ForExperts() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h1>Monetize Your <span className={styles.heroHighlight}>Industry Expertise</span></h1>
                    <p className={styles.heroSubtitle}>
                        Join 10,000+ professionals earning money through paid surveys, consultation calls, focus groups, and advisory projects. Share your knowledge on your own terms.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontWeight: '700' }}>
                            Apply to Join <span style={{ marginLeft: '12px' }}>→</span>
                        </Button>
                    </div>
                </div>
            </section>

            <SectionWrapper>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>OPPORTUNITIES</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px' }}>Ways to Earn</h2>
                </div>
                <div className={styles.earnGrid}>
                    <div className={styles.earnCard}>
                        <div className={styles.iconBox}><FileText size={20} /></div>
                        <h3 className={styles.earnTitle}>Paid Surveys</h3>
                        <span className={styles.earnPrice}>$50 – $500+ per survey</span>
                        <p>Targeted questionnaires delivered to your inbox. Share your perspective on market trends and industry developments on your own schedule.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.iconBox}><Phone size={20} /></div>
                        <h3 className={styles.earnTitle}>1-on-1 Consultation Calls</h3>
                        <span className={styles.earnPrice}>$200 – $1,500/hr</span>
                        <p>High-value consultations with institutional investors and strategy consultants seeking deep, specialized industry expertise.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.iconBox}><Users size={20} /></div>
                        <h3 className={styles.earnTitle}>Focus Groups & Panels</h3>
                        <span className={styles.earnPrice}>Project-based compensation</span>
                        <p>Participate in moderated discussions and interactive panels with other high-level industry leaders and professionals.</p>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.iconBox}><Zap size={20} /></div>
                        <h3 className={styles.earnTitle}>Advisory & Project Work</h3>
                        <span className={styles.earnPrice}>Custom engagement fees</span>
                        <p>Engage in longer-term strategic projects, specialized workshops, or board-level advisory roles tailored to your background.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px', alignItems: 'center' }}>
                    <div>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>BENEFITS</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '32px' }}>Why Join SignalBridge?</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Competitive Earnings</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>We pay top-tier market rates that reflect the value of your specialized knowledge and years of experience.</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Total Flexibility</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>You have full control. Accept only the projects that interest you and work entirely on your own terms.</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Elite Connections</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Interact with decision-makers at the world's leading investment funds, private equity firms, and corporations.</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Strict Compliance</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-light)' }}>Our dedicated compliance framework protects you and your current obligations, allowing for secure knowledge sharing.</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '48px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.03)' }}>
                        <h2 style={{ fontSize: '1.75rem', marginBottom: '32px' }}>Who We're Looking For</h2>
                        <ul className={styles.requirementsList}>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> 5+ years of senior experience</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Current or recent industry role</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Specific technical or strategic niche</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> High standard of professionalism</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Commitment to compliance</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <section className={styles.ctaBox}>
                <div className="container">
                    <h2>Ready to share your knowledge?</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '48px' }}>Join the network of top-tier experts and monetize your industry expertise.</p>
                    <Button href="/contact" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '16px 40px', fontWeight: '600' }}>
                        Apply Now <span style={{ marginLeft: '12px' }}>→</span>
                    </Button>
                </div>
            </section>
        </main>
    );
}
