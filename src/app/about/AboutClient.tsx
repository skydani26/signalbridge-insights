"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./about.module.css";
import { Globe, Users, Target, ShieldCheck, Award, TrendingUp, Handshake, Network, Zap, Building2, Lock } from "lucide-react";

export default function AboutClient() {
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
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.reveal}>
                        <h1>Institutional Intelligence, <span className={styles.heroHighlight}>Reimagined</span></h1>
                        <p className={styles.heroSubtitle}>
                            SignalBridge was engineered to solve the critical gaps in traditional expert networks:
                            slow fulfillment, inconsistent quality, and complex compliance risk.
                        </p>
                        <div className={styles.heroButtons}>
                            <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontWeight: '700' }}>
                                Get Started <span style={{ marginLeft: '12px' }}>→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SectionWrapper id="mission">
                <div className={`${styles.missionGrid} ${styles.reveal}`}>
                    <div className={styles.buildingBox}>
                        <Building2 className={styles.buildingIcon} strokeWidth={1.5} />
                    </div>
                    <div className={styles.missionContent}>
                        <h2>Our Institutional Mandate</h2>
                        <p>
                            SignalBridge Insights was founded to bridge the critical intelligence gap between global capital and specialized industry knowledge. We provide the methodology, speed, and compliance infrastructure required by the world's most sophisticated institutional investors.
                        </p>
                        <p>
                            In an era of information fragmentation, we focus on procedural authority—identifying the exact individuals who hold the keys to complex industry transitions. Our network is not just a database; it is a curated ecosystem of domain specialists. Learn more about our <Link href="/about/methodology" style={{ color: 'var(--color-secondary)', fontWeight: '600', textDecoration: 'underline' }}>4-Step Validation Logic</Link>.
                        </p>
                        <p>
                            Today, SignalBridge serves a premium tier of hedge funds, private equity firms, and global consultancies. We operate at the intersection of technological precision and human expertise, ensuring that every insight is as reliable as it is rapid.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="stats" background="dark">
                <div className={`${styles.statsGrid} ${styles.reveal}`}>
                    <div className={styles.statBox}>
                        <h3>100%</h3>
                        <p>Success Rate</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3>10k+</h3>
                        <p>Expert Network</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3>150+</h3>
                        <p>Industries</p>
                    </div>
                    <div className={styles.statBox}>
                        <h3>24Hr</h3>
                        <p>Response Time</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="values">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <p className={styles.sectionSubtitle}>Everything we do is guided by these core principles</p>
                </div>
                <div className={`${styles.valuesGrid} ${styles.reveal}`}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><Target size={28} strokeWidth={1.5} /></div>
                        <h3>Precision</h3>
                        <p>We match you with exactly the right expert for your specific needs, saving time and delivering quality.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><ShieldCheck size={28} strokeWidth={1.5} /></div>
                        <h3>Integrity</h3>
                        <p>Every expert is thoroughly vetted, and every engagement follows strict compliance protocols.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><Award size={28} strokeWidth={1.5} /></div>
                        <h3>Excellence</h3>
                        <p>We&apos;re committed to delivering exceptional experiences for both our clients and experts.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="partners" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className={styles.sectionTag}>GLOBAL NETWORK</span>
                    <h2 className={styles.sectionTitle}>A Borderless Insight Engine</h2>
                    <p className={styles.sectionSubtitle}>
                        Connecting global capital with localized expertise across every major market.
                    </p>
                </div>
                <div className={`${styles.presenceContent} ${styles.reveal}`}>
                    <div className={styles.presenceCard}>
                        <Globe className={styles.globeIcon} strokeWidth={1} />
                        <div className={styles.presenceGrid}>
                            <div className={styles.presenceItem}>
                                <h4>EMEA</h4>
                                <p>London, Berlin, Dubai</p>
                            </div>
                            <div className={styles.presenceItem}>
                                <h4>AMER</h4>
                                <p>NYC, Toronto, São Paulo</p>
                            </div>
                            <div className={styles.presenceItem}>
                                <h4>APAC</h4>
                                <p>Tokyo, Singapore, Sydney</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="security" background="dark">
                <div className={`${styles.securityGrid} ${styles.reveal}`}>
                    <div className={styles.securityText}>
                        <span className={styles.sectionTag} style={{ color: 'var(--color-secondary)' }}>TRUST INFRASTRUCTURE</span>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Security & Compliance Architecture</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Institutional trust is built on technical transparency. SignalBridge manages expert data and client briefings within a zero-trust network environment, ensuring that your research remains proprietary and secure.
                        </p>
                        <div className={styles.securityFeatures}>
                            <div className={styles.securityFeature}>
                                <div className={styles.securityIcon}><Lock size={20} strokeWidth={1.5} /></div>
                                <div>
                                    <h4 style={{ color: 'white', marginBottom: '4px' }}>SOC2 & GDPR Readiness</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Adhering to global data residency and security auditing standards.</p>
                                </div>
                            </div>
                            <div className={styles.securityFeature}>
                                <div className={styles.securityIcon}><ShieldCheck size={20} strokeWidth={1.5} /></div>
                                <div>
                                    <h4 style={{ color: 'white', marginBottom: '4px' }}>Immutable Audit Trails</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Every interaction is timestamped and logged for internal compliance reviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="esg" background="gray">
                <div className={`${styles.esgGrid} ${styles.reveal}`}>
                    <div className={styles.esgContent}>
                        <span className={styles.sectionTag}>ESG & RESPONSIBILITY</span>
                        <h2 className={styles.sectionTitle}>Institutional Responsibility</h2>
                        <p className={styles.sectionDescription}>
                            SignalBridge is committed to sustainable business operations and social responsibility. We integrate ESG principles into our specialist selection and corporate governance.
                        </p>
                        <div className={styles.esgPillars}>
                            <div className={styles.esgPillar}>
                                <h4>Environmental</h4>
                                <p>Progressive carbon-neutral digital infrastructure and zero-waste operational protocols.</p>
                            </div>
                            <div className={styles.esgPillar}>
                                <h4>Social</h4>
                                <p>Promoting diverse domain expertise and equitable specialist compensation models.</p>
                            </div>
                            <div className={styles.esgPillar}>
                                <h4>Governance</h4>
                                <p>Rigorous transparency, ethical AI usage, and proactive regulatory alignment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <section id="career" className={styles.careerSection}>
                <div className={`${styles.careerContent} ${styles.reveal}`}>
                    <h2>Join Our Global Team</h2>
                    <p>
                        We are always looking for passionate people to join our mission of bridging the gap between complexity and clarity.
                    </p>
                    <Button href="/contact" className={styles.careerBtn}>
                        View Openings
                    </Button>
                </div>
            </section>
        </main >
    );
}
