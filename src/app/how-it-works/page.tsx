
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, CheckCircle2, MessageSquare, Search, UserCheck, Calendar, BarChart3, FileCheck, UserPlus, DollarSign } from "lucide-react";

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
                <span className={styles.sectionTag}>FOR CLIENTS</span>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>For Clients</h2>
                    <p className={styles.sectionDescription}>
                        From research brief to actionable insights in as little as 24 hours
                    </p>
                </div>

                <div className={styles.processGrid}>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><MessageSquare size={18} /></div>
                        <h3 className={styles.cardTitle}>1. Share Your Brief</h3>
                        <p className={styles.cardDescription}>
                            Tell us your research objectives, target industries, and preferred engagement type — survey, call, focus group, or custom project.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><Search size={18} /></div>
                        <h3 className={styles.cardTitle}>2. AI-Powered Matching</h3>
                        <p className={styles.cardDescription}>
                            Our intelligent system identifies qualified experts from our 10,000+ network who match your specific requirements.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><UserCheck size={18} /></div>
                        <h3 className={styles.cardTitle}>3. Compliance Screening</h3>
                        <p className={styles.cardDescription}>
                            Every expert is screened for conflicts of interest, NDA compliance, and MNPI restrictions before engagement.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><Calendar size={18} /></div>
                        <h3 className={styles.cardTitle}>4. Experts Engage</h3>
                        <p className={styles.cardDescription}>
                            Experts complete your survey, join scheduled calls, participate in focus groups, or deliver project outputs.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><BarChart3 size={18} /></div>
                        <h3 className={styles.cardTitle}>5. Get Deliverables</h3>
                        <p className={styles.cardDescription}>
                            Receive survey data, call transcripts, research reports, or synthesized insights — ready for decision-making.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><Star size={18} /></div>
                        <h3 className={styles.cardTitle}>6. Rate & Iterate</h3>
                        <p className={styles.cardDescription}>
                            Rate expert quality to improve future matching. Launch follow-up engagements or new research anytime.
                        </p>
                    </div>
                </div>
                <div className={styles.ctaContainer}>
                    <Button href="/contact" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '16px 40px', fontWeight: '600' }}>
                        Get Started as a Client <span style={{ marginLeft: '12px' }}>→</span>
                    </Button>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <span className={styles.sectionTag}>FOR EXPERTS</span>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>For Experts</h2>
                    <p className={styles.sectionDescription}>
                        Share your knowledge through surveys, calls, and projects — and earn on your own schedule
                    </p>
                </div>

                <div className={styles.processGrid}>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><FileCheck size={18} /></div>
                        <h3 className={styles.cardTitle}>1. Apply Online</h3>
                        <p className={styles.cardDescription}>
                            Complete our application with your professional background, expertise areas, and industry experience.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><UserPlus size={18} /></div>
                        <h3 className={styles.cardTitle}>2. Get Verified</h3>
                        <p className={styles.cardDescription}>
                            Our team reviews your application, verifies credentials, and conducts compliance onboarding.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><Calendar size={18} /></div>
                        <h3 className={styles.cardTitle}>3. Set Preferences</h3>
                        <p className={styles.cardDescription}>
                            Configure your availability, preferred engagement types (surveys, calls, projects), and compensation preferences.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><MessageSquare size={18} /></div>
                        <h3 className={styles.cardTitle}>4. Receive Opportunities</h3>
                        <p className={styles.cardDescription}>
                            Get matched with relevant surveys, call requests, focus groups, and project invitations based on your expertise.
                        </p>
                    </div>
                    <div className={styles.processCard}>
                        <div className={styles.iconBoxSmall}><DollarSign size={18} /></div>
                        <h3 className={styles.cardTitle}>5. Get Paid</h3>
                        <p className={styles.cardDescription}>
                            Earn per survey, hourly for calls, or project-based fees. Get paid quickly via your preferred method.
                        </p>
                    </div>
                </div>
                <div className={styles.ctaContainer}>
                    <Button href="/for-experts" variant="outline" style={{ padding: '16px 40px', fontWeight: '600', color: 'var(--color-primary)', borderColor: 'rgba(0,0,0,0.1)' }}>
                        Apply to Join <span style={{ marginLeft: '12px' }}>→</span>
                    </Button>
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
