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
