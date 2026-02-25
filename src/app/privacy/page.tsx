"use client";

import React, { useEffect } from 'react';
import Button from "@/components/Button";
import styles from "./privacy.module.css";
import { ShieldCheck, Eye, Lock, Database, Globe, UserCheck, ShieldAlert } from "lucide-react";

export default function PrivacyPolicy() {
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
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.reveal}>
                        <ShieldCheck size={48} className={styles.sectionIcon} style={{ margin: '0 auto 24px' }} />
                        <h1>Privacy <span style={{ color: 'var(--color-secondary)' }}>Protocol</span></h1>
                        <p className={styles.heroSubtitle}>
                            Institutional data protection standards for the world&apos;s leading investors and industry experts.
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.contentContainer}>
                <div className={`${styles.privacySection} ${styles.reveal}`}>
                    <h2><Eye size={24} className={styles.sectionIcon} /> Transparency &amp; Scope</h2>
                    <div className={styles.privacyText}>
                        <p>
                            At SignalBridge Insights, privacy is not just a policy&mdash;it is a core component of our technical architecture. This protocol outlines how we collect, safeguard, and utilize data across our global expert network and client base.
                        </p>
                        <p>
                            We operate under a &quot;Privacy by Design&quot; philosophy, ensuring that data minimization and encryption are integrated into every stage of the expert-client matching lifecycle.
                        </p>
                    </div>
                </div>

                <div className={`${styles.privacySection} ${styles.reveal}`}>
                    <h2><Database size={24} className={styles.sectionIcon} /> Data We Collect</h2>
                    <div className={styles.privacyText}>
                        <p>To facilitate high-fidelity consultations, we collect limited personal and professional datasets:</p>
                        <ul className={styles.privacyList}>
                            <li><strong>Expert Profiles</strong>: Employment history, educational background, and specific domain expertise.</li>
                            <li><strong>Engagement Metadata</strong>: Scheduling details, project durations, and billing information.</li>
                            <li><strong>Communications</strong>: Secure session recordings and transcripts (only with explicit institutional consent).</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.infobox + ' ' + styles.reveal}>
                    <h4>Institutional Security Standard</h4>
                    <p>All data is encrypted at rest using AES-256 and in transit via TLS 1.3. SignalBridge maintains a zero-trust network architecture for all internal research tools.</p>
                </div>

                <div className={`${styles.privacySection} ${styles.reveal}`}>
                    <h2><Lock size={24} className={styles.sectionIcon} /> How We Use Data</h2>
                    <div className={styles.privacyText}>
                        <p>Data usage is strictly limited to the following institutional purposes:</p>
                        <ul className={styles.privacyList}>
                            <li>Verification of expert seniority and credentials.</li>
                            <li>AI-augmented matching of specific specialists to client research briefs.</li>
                            <li>Compliance auditing to prevent MNPI disclosure and conflicts of interest.</li>
                            <li>Processing of professional compensation and tax reporting.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.privacySection} ${styles.reveal}`}>
                    <h2><Globe size={24} className={styles.sectionIcon} /> Global Compliance</h2>
                    <div className={styles.privacyText}>
                        <p>
                            SignalBridge adheres to international data protection regulations, including <strong>GDPR</strong> (EU), <strong>CCPA</strong> (California), and <strong>PIPEDA</strong> (Canada).
                        </p>
                        <p>
                            Expert data is hosted on secure, regionalized infrastructure to ensure compliance with local data residency requirements where applicable.
                        </p>
                    </div>
                </div>

                <div className={`${styles.privacySection} ${styles.reveal}`}>
                    <h2><UserCheck size={24} className={styles.sectionIcon} /> Your Rights</h2>
                    <div className={styles.privacyText}>
                        <p>Experts and clients retain full control over their data footprint:</p>
                        <ul className={styles.privacyList}>
                            <li>Right to access and export your professional profile data.</li>
                            <li>Right to request immediate &quot;Account Deletion&quot; and data erasure.</li>
                            <li>Right to anonymize participation on specific high-stakes projects.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.footerNote} ${styles.reveal}`}>
                    <p>Last updated: February 26, 2026 | Version 2.0.4 - Institutional Privacy Hub</p>
                    <Button variant="outline" href="/contact">
                        <ShieldAlert size={18} style={{ marginRight: '10px' }} /> Request Privacy Audit
                    </Button>
                </div>
            </div>
        </main>
    );
}
