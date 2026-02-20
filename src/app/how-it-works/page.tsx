
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, CheckCircle2 } from "lucide-react";

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
                <span className={styles.sectionTag}>ENGAGEMENT FORMATS</span>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Choose Your Engagement Type</h2>
                    <p className={styles.sectionDescription}>
                        Every research need is different. We offer multiple ways to access expert knowledge.
                    </p>
                </div>

                <div className={styles.formatGrid}>
                    {/* Signature Card */}
                    <div className={`${styles.formatCard} ${styles.active}`} style={{ border: '2px solid var(--color-secondary)', position: 'relative' }}>
                        <div className={styles.badge}>
                            <Star size={12} fill="#5390ff" /> Signature
                        </div>
                        <div className={styles.formatIcon}><FileText size={20} /></div>
                        <h3>Expert Surveys</h3>
                        <p>
                            Our signature offering. Deploy targeted surveys to vetted industry professionals
                            and get quantitative + qualitative insights at scale.
                        </p>
                    </div>

                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Phone size={20} /></div>
                        <h3>1-on-1 Expert Calls</h3>
                        <p>
                            Schedule confidential consultations with hand-picked experts for deep-dive
                            discussions on specific topics.
                        </p>
                    </div>

                    {/* NEW: Programming Card */}
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Zap size={20} /></div>
                        <h3>Programming</h3>
                        <p>
                            Our technical edge. Execute complex surveys and workflows with precision using Qualtrics, Decipher, and internal tools for seamless data capture.
                        </p>
                    </div>

                    {/* NEW: Custom Research Projects */}
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Network size={20} /></div>
                        <h3>Custom Research Projects</h3>
                        <p>
                            End-to-end research support: we scope, recruit experts, collect data, and deliver synthesized insights tailored to your needs.
                        </p>
                    </div>

                    {/* NEW: Knowledge Library */}
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><Database size={20} /></div>
                        <h3>Knowledge Library</h3>
                        <p>
                            Access curated transcripts, whitepapers, and recorded expert sessions from our growing, searchable content library.
                        </p>
                    </div>

                    {/* NEW: Compliance & Vetting */}
                    <div className={styles.formatCard}>
                        <div className={styles.formatIcon}><ShieldCheck size={20} /></div>
                        <h3>Compliance & Vetting</h3>
                        <p>
                            Rigorous expert screening, NDA management, conflict-of-interest checks, and full audit trails on every single engagement.
                        </p>
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
