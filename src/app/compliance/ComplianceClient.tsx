"use client";

import React, { useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./compliance.module.css";
import { ShieldAlert, Lock, Scale, FileCheck, Gavel, ShieldCheck, AlertCircle } from "lucide-react";

export default function ComplianceClient() {
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

    const clauses = [
        {
            title: "Cooperative Relationship",
            text: "As a SignalBridge Expert, you agree to join our elite network to provide non-confidential industry insights. You acknowledge that our clients rely on your professional integrity and good-faith efforts to provide accurate information within the scope of your expertise."
        },
        {
            title: "Data Protection & Privacy",
            text: "The security of your personal and professional data is paramount. SignalBridge manages all expert data in accordance with global privacy standards (GDPR, SOC2). Call recordings, where applicable, are used strictly for quality assurance and compliance audit purposes."
        },
        {
            title: "Compensation Protocol",
            text: "Experts are fairly compensated for their specialized knowledge. Hourly rates are established upfront and paid pro-rata for consultations. Payments are processed securely via direct deposit within 15–30 days of project completion."
        },
        {
            title: "No Conflicts & MNPI",
            text: "You explicitly agree not to disclose any non-public, material information (MNPI) or trade secrets. You must decline any project that presents a conflict of interest with your current employer or any active legal/fiduciary obligations.",
            list: [
                "No disclosure of confidential intellectual property.",
                "Compliance with existing employer NDAs.",
                "Notification to SignalBridge if conflict of interest arises post-onboarding."
            ]
        },
        {
            title: "Professional Obligations",
            text: "Experts represent that all provided credentials (education, employment history) are accurate and maintain a commitment to professional excellence. You agree to use automated tools (AI) only when project scaffolds allow and always cite primary sources."
        },
        {
            title: "Confidentiality Tiering",
            text: "All project briefs, client identities, and inquiry details are strictly confidential. Experts are prohibited from disclosing their participation in specific client projects to third parties or on public professional platforms."
        }
    ];

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.reveal}>
                        <h1>Institutional <span className={styles.heroHighlight}>Compliance</span></h1>
                        <p className={styles.heroSubtitle}>
                            Engineering transparency and security into every expert engagement. Our framework protects the integrity of capital and the careers of our experts.
                        </p>
                    </div>
                </div>
            </section>

            <SectionWrapper id="philosophy">
                <div style={{ textAlign: 'center' }} className={styles.reveal}>
                    <h2 className={styles.sectionTitle}>The SignalBridge Standard</h2>
                    <p className={styles.sectionSubtitle}>We maintain the world's most rigorous vetting and audit infrastructure for institutional research.</p>
                </div>

                <div className={`${styles.pillarGrid} ${styles.reveal}`}>
                    <div className={styles.pillarCard}>
                        <div className={styles.pillarIconBox}><ShieldAlert size={24} /></div>
                        <h3 className={styles.pillarTitle}>MNPI Protocol</h3>
                        <p className={styles.pillarText}>Strict 'Double-Blind' screening ensures no Material Non-Public Information is ever shared during consultations.</p>
                    </div>
                    <div className={styles.pillarCard}>
                        <div className={styles.pillarIconBox}><Lock size={24} /></div>
                        <h3 className={styles.pillarTitle}>Data Isolation</h3>
                        <p className={styles.pillarText}>SOC2-compliant encryption for all expert identities and client research briefs.</p>
                    </div>
                    <div className={styles.pillarCard}>
                        <div className={styles.pillarIconBox}><Scale size={24} /></div>
                        <h3 className={styles.pillarTitle}>Audit Trails</h3>
                        <p className={styles.pillarText}>Comprehensive logging and optional transcript archiving for every client-expert interaction.</p>
                    </div>
                </div>
            </SectionWrapper>

            <section id="agreement" className={styles.agreementSection}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '64px' }} className={styles.reveal}>
                        <h2 className={styles.sectionTitle}>Standard Expert Agreement</h2>
                        <p className={styles.sectionSubtitle}>The legal foundation of our relationship with the global expert network.</p>
                    </div>

                    <div className={`${styles.agreementContainer} ${styles.reveal}`}>
                        <div className={styles.agreementHeader}>
                            <div className={styles.agreementTitle}>
                                <h2>SignalBridge Expert Agreement</h2>
                                <p style={{ color: 'var(--color-secondary)', fontWeight: 700, margin: '8px 0 0' }}>Institutional Master Version</p>
                            </div>
                            <div className={styles.agreementVersion}>REF: SB-EXA-2026-V1.2</div>
                        </div>

                        <div className={styles.agreementBody}>
                            <p style={{ fontStyle: 'italic', color: '#64748B', marginBottom: '32px' }}>
                                This Agreement governs your relationship as a "SignalBridge Expert" and defines the parameters of your engagement with our global institutional client base.
                            </p>

                            {clauses.map((clause, index) => (
                                <div key={index} className={styles.clause}>
                                    <h3>
                                        <span className={styles.clauseNumber}>{index + 1}.</span> {clause.title}
                                    </h3>
                                    <div className={styles.clauseText}>
                                        {clause.text}
                                        {clause.list && (
                                            <ul className={styles.clauseList}>
                                                {clause.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.agreementFooter}>
                            &copy; 2026 SignalBridge Insights Ltd. All rights reserved. <br />
                            Updated: February 2026 | Approved by General Counsel
                        </div>
                    </div>
                </div>
            </section>

            <SectionWrapper background="gray">
                <div className={`${styles.reveal}`} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <AlertCircle size={32} style={{ color: 'var(--color-secondary)', marginBottom: '24px' }} />
                    <h2 style={{ marginBottom: '16px' }}>Compliance Inquiries</h2>
                    <p style={{ marginBottom: '32px' }}>For specific questions regarding our compliance framework or custom NDA requirements for your organization, please contact our Legal Desk directly.</p>
                    <Button href="/contact">Contact Compliance Desk</Button>
                </div>
            </SectionWrapper>
        </main >
    );
}
