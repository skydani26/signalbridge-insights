
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, CheckCircle2, MessageSquare, Search, UserCheck, Calendar, BarChart3, FileCheck, UserPlus, DollarSign, Shield, Lock } from "lucide-react";

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
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <div className={styles.iconBoxSmall} style={{ marginBottom: '32px', backgroundColor: '#e2e8f0', color: 'var(--color-primary)' }}>
                                <Shield size={20} strokeWidth={2.5} />
                            </div>
                            <h2 className={styles.securityTitle}>Compliance & Security</h2>
                            <p className={styles.securitySubtitle}>
                                We take compliance seriously. Our platform is designed to meet
                                the stringent requirements of institutional investors, regulated
                                industries, and global compliance standards.
                            </p>
                            <div className={styles.complianceList}>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> All experts sign confidentiality agreements (NDAs)</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Conflict of interest screening on every engagement</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Material Non-Public Information (MNPI) protocols</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Compliance training for all network members</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Call monitoring and quality assurance available</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Full audit trails for all platform activities</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> GDPR and data privacy compliant</div>
                                <div className={styles.complianceItem}><CheckCircle2 className={styles.checkIcon} size={20} /> Background checks for sensitive engagements</div>
                            </div>
                        </div>
                        <div className={styles.securityVisual}>
                            <div className={styles.lockWrapper}>
                                <Lock size={80} strokeWidth={1.5} />
                            </div>
                            <div className={styles.shieldOverlap}>
                                <Shield size={32} strokeWidth={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.finalCta}>
                <div className="container">
                    <h2>Ready to Get Started?</h2>
                    <p>Join the SignalBridge network today — as a client or an expert</p>
                    <div className={styles.ctaContainer}>
                        <Button href="/contact" className={styles.finalCtaBtn}>
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
