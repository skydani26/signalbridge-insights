"use client";

import React from 'react';
import { Shield, Lock, Eye, CheckCircle, Globe, GraduationCap, Server, ArrowRight, Activity, Zap } from 'lucide-react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./protocol.module.css";

const pillars = [
    {
        icon: <Shield size={28} />,
        title: "MNPI Prevention",
        description: "Zero-tolerance policy for Material Non-Public Information. Every engagement is screened for potential leakage points before, during, and after the consultation."
    },
    {
        icon: <Eye size={28} />,
        title: "Double-Blind Screening",
        description: "Anonymity protocols that prevent expert/client identification until research necessity is proven and compliance parameters are locked."
    },
    {
        icon: <Activity size={28} />,
        title: "Proactive Monitoring",
        description: "Institutional monitoring of all engagement metadata. We flag and sequester anomalies in real-time using our proprietary SignalWatch algorithm."
    },
    {
        icon: <Server size={28} />,
        title: "SOC2 Type II Standard",
        description: "Enterprise-grade data security verified by external auditors. Your research data and institutional IP are protected by military-grade encryption."
    },
    {
        icon: <Globe size={28} />,
        title: "Universal Sovereignty",
        description: "GDPR, CCPA, and PIPL compliance built into the core. We handle cross-border data transitions with sovereign-grade legal rigor."
    },
    {
        icon: <GraduationCap size={28} />,
        title: "Advisor Education",
        description: "Mandatory annual compliance testing for all network experts. Advisors are tested on MNPI protocols and sector-specific restrictions."
    },
    {
        icon: <Lock size={28} />,
        title: "IP Lockdown",
        description: "AES-256 encryption for all research briefs and project transcripts. Your strategic intentions stay within your firewall."
    }
];

export default function ProtocolClient() {
    return (
        <main className={styles.protocolPage}>
            <div className="container">
                <header className={styles.header}>
                    <span className={styles.tag}>INSTITUTIONAL STANDARD</span>
                    <h1>The <span className={styles.highlight}>Protocol 7</span> Framework</h1>
                    <p>
                        SignalBridge is engineered for the world's most regulated environments.
                        Protocol 7 is our proprietary seven-tier compliance architecture designed
                        to eliminate risk in primary research.
                    </p>
                </header>

                <section className={styles.vizSection}>
                    <div className={styles.vizContainer}>
                        <div className={styles.vizGrid}>
                            {pillars.map((pillar, idx) => (
                                <div key={idx} className={styles.pillarCard}>
                                    <span className={styles.pillarNumber}>PILLAR 0{idx + 1}</span>
                                    <div className={styles.pillarIcon}>{pillar.icon}</div>
                                    <h3>{pillar.title}</h3>
                                    <p>{pillar.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <SectionWrapper id="depth" background="white">
                    <h2 className={styles.sectionTitle}>Deep Security Protocols</h2>

                    <div className={styles.contentBlock}>
                        <h4><Zap size={24} color="var(--color-secondary)" /> Pre-Engagement Scrubbing</h4>
                        <p>
                            Before any consultation occurs, we perform a multi-factor conflict check.
                            If an expert has had any material overlap with the research objective
                            within the last 24 months, they are automatically sequestered.
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h4><Shield size={24} color="var(--color-secondary)" /> Double-Blind Interaction</h4>
                        <p>
                            To protect our clients' investment thesis, we facilitate interactions
                            where the expert is unaware of the client's identity. This prevents
                            the redirection of insights and protects sensitive strategic intent.
                        </p>
                    </div>

                    <div className={styles.contentBlock}>
                        <h4><Lock size={24} color="var(--color-secondary)" /> Perpetual Archiving</h4>
                        <p>
                            All compliance approvals, screening questions, and engagement logs are
                            archived for 7 years in our SEC-compliant data vault, allowing for
                            seamless audit responses.
                        </p>
                    </div>
                </SectionWrapper>

                <div className={styles.trustFooter}>
                    <h2>Zero Compromise.</h2>
                    <p>Our compliance framework is trusted by some of the largest Hedge Funds and PE Firms globally.</p>

                    <div className={styles.trustLogoGrid}>
                        <div className={styles.trustLogo}>
                            <Shield size={32} />
                            <span>SOC2 Certified</span>
                        </div>
                        <div className={styles.trustLogo}>
                            <Lock size={32} />
                            <span>AES-256 Secure</span>
                        </div>
                        <div className={styles.trustLogo}>
                            <CheckCircle size={32} />
                            <span>GDPR Compliant</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px' }}>
                        <Button href="/inquire" variant="primary">
                            Speak with Compliance Officer <ArrowRight size={18} style={{ marginLeft: '12px' }} />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
