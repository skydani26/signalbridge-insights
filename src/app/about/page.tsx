"use client";

import React, { useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./about.module.css";
import { Globe, Users, Target, ShieldCheck, Award, TrendingUp, Handshake, Network, Zap, Building2 } from "lucide-react";

export default function About() {
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
                    <h1>About SignalBridge Insights</h1>
                    <p className={styles.heroSubtitle}>
                        We are built to fix slow matching, inconsistent quality, and compliance risk in traditional expert networks.
                    </p>
                </div>
            </section>

            <SectionWrapper id="mission">
                <div className={`${styles.missionGrid} ${styles.reveal}`}>
                    <div className={styles.buildingBox}>
                        <Building2 className={styles.buildingIcon} strokeWidth={1.5} />
                    </div>
                    <div className={styles.missionContent}>
                        <h2>Our Mission</h2>
                        <p>
                            SignalBridge Insights was founded with a simple mission: to connect decision-makers with the expertise they need to make smarter, faster, and more informed choices.
                        </p>
                        <p>
                            We recognized that the traditional expert network model was broken—slow matching, inconsistent quality, and compliance concerns were holding back the industry. We set out to change that.
                        </p>
                        <p>
                            Today, SignalBridge serves leading hedge funds, private equity firms, consulting companies, and corporations across the globe. Our platform combines cutting-edge technology with human expertise to deliver unmatched results.
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
                    <span className={styles.sectionTag}>OUR VALUES</span>
                    <h2 className={styles.sectionTitle}>Built on Core Principles</h2>
                </div>
                <div className={`${styles.valuesGrid} ${styles.reveal}`}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><Target size={24} /></div>
                        <h3>Precision</h3>
                        <p>We don&apos;t just find experts; we find the <em>right</em> experts. Every match is curated for relevance and depth.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><ShieldCheck size={24} /></div>
                        <h3>Integrity</h3>
                        <p>Compliance is our foundation. We operate with transparency and strict adherence to ethical standards.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}><Award size={24} /></div>
                        <h3>Excellence</h3>
                        <p>We are relentless in our pursuit of quality, from the speed of our service to the caliber of our network.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="partners" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className={styles.sectionTag}>GLOBAL PRESENCE</span>
                    <h2 className={styles.sectionTitle}>A Borderless Insight Engine</h2>
                    <p className={styles.sectionDescription}>
                        Connecting global capital with localized expertise across every major market.
                    </p>
                </div>
                <div className={`${styles.presenceContent} ${styles.reveal}`}>
                    <div style={{ background: 'white', padding: '48px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                        <Globe size={120} color="var(--color-primary)" strokeWidth={1} style={{ marginBottom: '32px' }} />
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>EMEA</h4>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>London, Berlin, Dubai</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>AMER</h4>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>NYC, Toronto, São Paulo</p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: 700 }}>APAC</h4>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Tokyo, Singapore, Sydney</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="career" background="dark">
                <div className={styles.reveal} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px', color: 'white' }}>Join Our Global Team</h2>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '40px' }}>
                        We are always looking for passionate people to join our mission of bridging the gap between complexity and clarity.
                    </p>
                    <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 700 }}>
                        View Openings
                    </Button>
                </div>
            </SectionWrapper>
        </main >
    );
}
