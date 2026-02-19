
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";

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
                        From surveys and calls to focus groups and custom projects — a streamlined process designed to connect you with expert knowledge quickly, compliantly, and effectively.
                    </p>
                </div>
            </section>

            <SectionWrapper>
                <h2 className="text-center">Engagement Formats</h2>
                <div className={styles.formatList}>
                    <div className={styles.formatCard}>
                        <h3>Expert Surveys</h3>
                        <p>Quantitative data from vetted professionals.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <h3>1-on-1 Expert Calls</h3>
                        <p>Direct consultations for deep insights.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <h3>Focus Groups & Panels</h3>
                        <p>Interactive discussions with multiple experts.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <h3>Custom Research Projects</h3>
                        <p>Tailored research programming and analysis.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <h3>Transcripts & Content Library</h3>
                        <p>Instant access to thousands of interviews.</p>
                    </div>
                    <div className={styles.formatCard}>
                        <h3>Expert Staffing & Advisory</h3>
                        <p>Long-term operational support.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <h2 className="text-center">Our Process</h2>
                <div className={styles.processContainer}>
                    <div className={styles.processColumn}>
                        <h3>For Clients</h3>
                        <ul className={styles.timeline}>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>1. Share Your Brief</div>
                                <p>Define your research objectives and target expert profile.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>2. AI-Powered Matching</div>
                                <p>We identify the best experts from our network quickly.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>3. Compliance Screening</div>
                                <p>Every interaction is vetted for potential conflicts.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>4. Experts Engage</div>
                                <p>Calls are scheduled or surveys are launched.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>5. Get Deliverables</div>
                                <p>Receive transcripts, data sets, or recordings.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>6. Rate & Iterate</div>
                                <p>Provide feedback to refine future matches.</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.processColumn}>
                        <h3>For Experts</h3>
                        <ul className={styles.timeline}>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>1. Apply Online</div>
                                <p>Submit your profile and professional history.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>2. Get Verified</div>
                                <p>We vet your background and credentials.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>3. Set Preferences</div>
                                <p>Define your availability and hourly rate.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>4. Receive Opportunities</div>
                                <p>Get invited to relevant projects matching your skills.</p>
                            </li>
                            <li className={styles.timelineItem}>
                                <div className={styles.itemTitle}>5. Get Paid</div>
                                <p>Fast and secure payment for your time.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
                    <div>
                        <h2 className="mb-4">Compliance & Security</h2>
                        <p className="mb-8">
                            Our industry-leading compliance framework protects both clients and experts, ensuring every interaction is safe and professional.
                        </p>
                        <div className={styles.complianceGrid}>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> NDAs</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> Conflict of Interest Screening</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> MNPI Protocols</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> Compliance Training</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> Call Monitoring (Optional)</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> Full Audit Trails</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> GDPR & Data Privacy</div>
                            <div className={styles.complianceItem}><span className={styles.checkIcon}>✓</span> Background Checks</div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-primary)', borderRadius: '8px', padding: '48px', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
                        <h3 style={{ color: 'white' }}>Ready to get started?</h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px' }}>
                            Join the SignalBridge network today — as a client or an expert.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <Button href="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Contact Us</Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
