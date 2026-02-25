"use client";

import React, { useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, CheckCircle2, MessageSquare, Search, UserCheck, Calendar, BarChart3, FileCheck, UserPlus, DollarSign, Shield, Lock, Users, Globe } from "lucide-react";

export default function HowItWorks() {
    useEffect(() => {
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.revealVisible);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll(`.${styles.reveal}`);
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    return (
        <main>
            <section className={styles.hero}>
                <div className={`container ${styles.reveal}`}>
                    <h1>How SignalBridge Works</h1>
                    <p className={styles.heroSubtitle}>
                        From surveys and calls to focus groups and custom projects — a streamlined process
                        designed to connect you with expert knowledge quickly, compliantly, and effectively.
                    </p>
                </div>
            </section>

            <div className={`${styles.statsBanner} ${styles.reveal}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <h3>10,000+</h3>
                            <p>Global Experts</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>150+</h3>
                            <p>Industries Covered</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>24hrs</h3>
                            <p>Avg. Response Time</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>100%</h3>
                            <p>Compliance Vetted</p>
                        </div>
                    </div>
                </div>
            </div>

            <SectionWrapper id="engagement-formats">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span className={styles.sectionTag}>ENGAGEMENT FORMATS</span>
                        <h2 className={styles.sectionTitle}>Choose Your Engagement Type</h2>
                        <p className={styles.sectionDescription}>
                            Every research need is different. We offer multiple ways to access expert knowledge.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {/* Simplified list for engagement grid, keeping the same 6 items as homepage */}
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><FileText size={20} /></div>
                            <h3 className={styles.serviceTitle}>Expert Surveys</h3>
                            <p className={styles.serviceDescription}>Targeted surveys to vetted industry professionals for quantitative + qualitative insights at scale.</p>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><Phone size={20} /></div>
                            <h3 className={styles.serviceTitle}>1-on-1 Expert Calls</h3>
                            <p className={styles.serviceDescription}>Confidential consultations with hand-picked experts for deep-dive discussions on specific topics.</p>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><Zap size={20} /></div>
                            <h3 className={styles.serviceTitle}>Programming</h3>
                            <p className={styles.serviceDescription}>Technical edge for complex surveys and workflows using Qualtrics, Decipher, and internal tools.</p>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><Network size={20} /></div>
                            <h3 className={styles.serviceTitle}>Custom Research</h3>
                            <p className={styles.serviceDescription}>End-to-end research support: we scope, recruit, collect data, and deliver synthesized insights.</p>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><Database size={20} /></div>
                            <h3 className={styles.serviceTitle}>Transcripts & Library</h3>
                            <p className={styles.serviceDescription}>Access curated transcripts, whitepapers, and recorded expert sessions from our searchable library.</p>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.formatCard}`}>
                            <div className={styles.iconBox}><ShieldCheck size={20} /></div>
                            <h3 className={styles.serviceTitle}>Compliance & Vetting</h3>
                            <p className={styles.serviceDescription}>Rigorous expert screening, NDA management, and full audit trails on every single engagement.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="process" background="gray">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className={styles.sectionTag}>OUR PROCESS</span>
                        <h2 className={styles.sectionTitle}>The Path to Strategic Clarity</h2>
                        <p className={styles.sectionDescription}>
                            A high-touch, technology-enabled workflow that turns your research brief into actionable expert insights.
                        </p>
                    </div>

                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>1</div>
                            <div className={styles.iconBoxSmall}><MessageSquare size={18} /></div>
                            <h3 className={styles.cardTitle}>Research Brief</h3>
                            <p className={styles.cardDescription}>Define research objectives and target industries for surveys, calls, or custom projects.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>2</div>
                            <div className={styles.iconBoxSmall}><Search size={18} /></div>
                            <h3 className={styles.cardTitle}>AI Matching</h3>
                            <p className={styles.cardDescription}>Intelligent identification of qualified specialists from our 10,000+ member network.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>3</div>
                            <div className={styles.iconBoxSmall}><UserCheck size={18} /></div>
                            <h3 className={styles.cardTitle}>Compliance</h3>
                            <p className={styles.cardDescription}>Rigorous screening for conflicts of interest, NDA compliance, and MNPI restrictions.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>4</div>
                            <div className={styles.iconBoxSmall}><Calendar size={18} /></div>
                            <h3 className={styles.cardTitle}>Engagement</h3>
                            <p className={styles.cardDescription}>Experts deliver project outputs, join scheduled calls, or complete specialized surveys.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.iconBoxSmall}><BarChart3 size={18} /></div>
                            <h3 className={styles.cardTitle}>Deliverables</h3>
                            <p className={styles.cardDescription}>Receive raw data, transcripts, or synthesized insights ready for strategic decision-making.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>6</div>
                            <div className={styles.iconBoxSmall}><Star size={18} /></div>
                            <h3 className={styles.cardTitle}>Iterate</h3>
                            <p className={styles.cardDescription}>Rate expert quality to refine future matching and launch follow-up research seamlessly.</p>
                        </div>
                    </div>
                    <div className={styles.ctaContainer}>
                        <Button href="/contact" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '16px 40px', fontWeight: '600' }}>
                            Get Started as a Client <span style={{ marginLeft: '12px' }}>→</span>
                        </Button>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="vetted-experts">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span className={styles.sectionTag}>VETTED EXPERTS</span>
                        <h2 className={styles.sectionTitle}>Precision Recruited Specialists</h2>
                        <p className={styles.sectionDescription}>
                            We don&apos;t just search a database. We custom recruit the world&apos;s leading practitioners for your specific need.
                        </p>
                    </div>

                    <div className={styles.expertsShowcaseGrid}>
                        <div className={styles.expertTypeCard}>
                            <div className={styles.expertHeader}>
                                <div className={styles.expertIcon}><Shield size={24} /></div>
                                <h3>C-Level & Executives</h3>
                            </div>
                            <p>Former CEOs, CFOs, and business leaders with strategic P&L responsibility across global enterprises.</p>
                        </div>
                        <div className={styles.expertTypeCard}>
                            <div className={styles.expertHeader}>
                                <div className={styles.expertIcon}><Zap size={24} /></div>
                                <h3>Functional Leaders</h3>
                            </div>
                            <p>Heads of supply chain, manufacturing, R&D, and engineering with deep operational knowledge.</p>
                        </div>
                        <div className={styles.expertTypeCard}>
                            <div className={styles.expertHeader}>
                                <div className={styles.expertIcon}><Globe size={24} /></div>
                                <h3>Policy & Regulatory</h3>
                            </div>
                            <p>Former government officials, regulators, and industry lobbyists with 30+ years of legislative insight.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="compliance-framework" background="dark">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>COMPLIANCE</span>
                        <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>World-Class Compliance Framework</h2>
                        <p style={{ color: 'var(--color-white)', opacity: 0.8, marginTop: '16px', fontSize: '1.2rem', maxWidth: '800px', margin: '16px auto 0' }}>
                            Rigorous protocols designed for the world&apos;s most sophisticated hedge funds and private equity firms.
                        </p>
                    </div>

                    <div className={styles.complianceGrid}>
                        <div className={styles.complianceCard}>
                            <Lock size={28} />
                            <h3>MNPI Restrictions</h3>
                            <p>Strict prohibitions on sharing material non-public information during any engagement.</p>
                        </div>
                        <div className={styles.complianceCard}>
                            <Shield size={28} />
                            <h3>Conflict Screening</h3>
                            <p>Every expert is custom-screened against your project requirements to prevent direct conflicts of interest.</p>
                        </div>
                        <div className={styles.complianceCard}>
                            <Users size={28} />
                            <h3>Vetting & Verification</h3>
                            <p>Background checks and employment verification to ensure only high-quality, senior experts participate.</p>
                        </div>
                    </div>
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
                                We take compliance seriously. Our platform is designed to meet the stringent requirements
                                of institutional investors, regulated industries, and global standards.
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

            <section className={styles.faqSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>FAQ</span>
                        <h2 className={styles.sectionTitle}>Common Questions</h2>
                    </div>

                    <div className={styles.faqGrid}>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How long does it take to find an expert?</h3>
                            <p className={styles.faqAnswer}>
                                Most matches are identified within 2-4 hours. Calls can often be scheduled within 24 hours of your initial request.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>How do you verify expert credentials?</h3>
                            <p className={styles.faqAnswer}>
                                We use a multi-step vetting process including AI-powered background checks, LinkedIn verification, and manual credentials review by our internal team.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Are interactions recorded or transcribed?</h3>
                            <p className={styles.faqAnswer}>
                                We offer optional transcription and recording services for all 1-on-1 calls, ensuring you have a searchable record of your insights.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What compliance measures are in place?</h3>
                            <p className={styles.faqAnswer}>
                                Every engagement is subject to MNPI protocols, conflict-of-interest screening, and signed NDAs before it begins.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>Can I speak with the same expert again?</h3>
                            <p className={styles.faqAnswer}>
                                Yes. Follow-up consultations can be scheduled through the platform to dive deeper into specific topics.
                            </p>
                        </div>
                        <div className={styles.faqItem}>
                            <h3 className={styles.faqQuestion}>What if I need help designing a survey?</h3>
                            <p className={styles.faqAnswer}>
                                Our internal research team offers full-service support, from survey methodology and design to recruitment and reporting.
                            </p>
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
