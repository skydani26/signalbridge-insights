
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { MessageSquare, Phone, Users, FileText, Library, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "How It Works | SignalBridge Insights",
    description: "Streamlined process designed to connect you with expert knowledge quickly, compliantly, and effectively.",
};

export default function HowItWorks() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1>How SignalBridge Works</h1>
                    <p className={styles.heroSubtitle}>
                        From surveys and calls to focus groups and custom projects — a streamlined process
                        designed to connect you with expert knowledge quickly, compliantly, and effectively.
                    </p>
                </div>
            </section>

            <SectionWrapper>
                <span className={styles.sectionTag}>CAPABILITIES</span>
                <h2 className={styles.sectionTitle}>Engagement Formats</h2>
                <div className={styles.formatGrid}>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><MessageSquare size={24} /></div>
                        <h3>Expert Surveys</h3>
                        <p>Quantitative data from thousands of vetted professionals globally.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Phone size={24} /></div>
                        <h3>1-on-1 Expert Calls</h3>
                        <p>Direct consultations for deep strategic and industry-specific insights.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Users size={24} /></div>
                        <h3>Focus Groups & Panels</h3>
                        <p>Interactive discussions with multiple experts for rounded perspectives.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><FileText size={24} /></div>
                        <h3>Custom Research Projects</h3>
                        <p>Tailored research programming, deep-dive analysis, and execution.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Library size={24} /></div>
                        <h3>Content Library</h3>
                        <p>Instant access to thousands of pre-vetted transcripts and reports.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><ShieldCheck size={24} /></div>
                        <h3>Compliance Advisory</h3>
                        <p>Assuring MNPI and conflict-of-interest screening for every call.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <span className={styles.sectionTag}>TIMELINE</span>
                <h2 className={styles.sectionTitle}>The Streamlined Process</h2>
                <div className={styles.processContainer}>
                    <div className={styles.processColumn}>
                        <h3>For Clients</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>1. Share Your Brief</div>
                                <p>Define your research objectives and target expert profile.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>2. AI-Powered Matching</div>
                                <p>We identify the best experts from our network quickly.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>3. Compliance Screening</div>
                                <p>Every interaction is vetted for potential conflicts.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>4. Experts Engage</div>
                                <p>Calls are scheduled or surveys are launched.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.processColumn}>
                        <h3>For Experts</h3>
                        <div className={styles.timeline}>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>1. Application & Vetting</div>
                                <p>Submit your professional history and wait for verification.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>2. Set Preferences</div>
                                <p>Define your availability and your competitive hourly rate.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>3. Receive Projects</div>
                                <p>Get invited to relevant projects matching your niche skills.</p>
                            </div>
                            <div className={styles.timelineItem}>
                                <div className={styles.itemTitle}>4. Fast Payouts</div>
                                <p>Fast and secure payment for your specialized time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <section className={styles.complianceSection}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <span className={styles.sectionTag} style={{ textAlign: 'left' }}>SECURITY</span>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left', marginBottom: '24px' }}>Compliance & Safety</h2>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '32px' }}>
                                Our industry-leading compliance framework protects both clients and experts,
                                ensuring every interaction is safe, professional, and audit-ready.
                            </p>
                            <div className={styles.complianceGrid}>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> MNPI Protocols</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Conflict Screening</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> NDA Enforcement</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Full Audit Trails</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> GDPR Compliance</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Identity Verification</div>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'var(--color-primary)', borderRadius: '16px', padding: '56px', color: 'white', textAlign: 'center' }}>
                            <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: '800', marginBottom: '16px' }}>Ready to Scale?</h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.6' }}>
                                Connect with the world&apos;s leading network of verified experts today.
                            </p>
                            <Button href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>Contact Us Now</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
