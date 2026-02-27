"use client";

import React from 'react';
import { DollarSign, Shield, Zap, Globe, Lock } from 'lucide-react';
import ExpertForm from '@/components/ExpertForm';
import SectionWrapper from '@/components/SectionWrapper';
import styles from './apply.module.css';

export default function ApplyClient() {
    return (
        <main className={styles.applyPage}>
            <div className="container">
                <header className={styles.applyHeader}>
                    <h1>Initialize Your <span style={{ color: 'var(--color-secondary)' }}>Expert Profile</span></h1>
                    <p>
                        SignalBridge connects the world's most specialized professionals with institutional capital.
                        Complete the application below to begin monetizing your industry expertise.
                    </p>
                </header>

                <div className={styles.applyContainer}>
                    <div className={styles.formSection}>
                        <ExpertForm />
                    </div>

                    <aside className={styles.benefitSidebar}>
                        <h3>Why SignalBridge?</h3>
                        <div className={styles.benefitList}>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}><DollarSign size={22} /></div>
                                <div className={styles.benefitText}>
                                    <h4>Premium Compensation</h4>
                                    <p>Our experts earn between $200 and $1,500+ per hour based on seniority and sector depth.</p>
                                </div>
                            </div>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}><Lock size={22} /></div>
                                <div className={styles.benefitText}>
                                    <h4>Total Confidentiality</h4>
                                    <p>Engage with institutional clients anonymously or through pseudonyms to protect your current role.</p>
                                </div>
                            </div>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}><Zap size={22} /></div>
                                <div className={styles.benefitText}>
                                    <h4>Protocol 7 Security</h4>
                                    <p>Your data and engagements are protected by our proprietary institutional compliance framework.</p>
                                </div>
                            </div>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}><Globe size={22} /></div>
                                <div className={styles.benefitText}>
                                    <h4>Global Network</h4>
                                    <p>Consult for leading Hedge Funds, PE Firms, and Strategy Desks across all major global markets.</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.complianceNote}>
                            <h4><Shield size={16} /> Institutional Protocol</h4>
                            <p>
                                SignalBridge is a restricted network. All experts undergo a strict background and credentials verification process. We explicitly prohibit the disclosure of non-public, material information.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
