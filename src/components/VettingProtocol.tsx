'use client';

import React from 'react';
import styles from './VettingProtocol.module.css';
import { UserCheck, ShieldCheck, FileSearch, Zap } from 'lucide-react';

const VettingProtocol = () => {
    const steps = [
        {
            title: "Identity Verification",
            description: "Multi-factor authentication and employment history validation via LinkedIn and primary sources.",
            icon: <UserCheck size={24} strokeWidth={1.5} />
        },
        {
            title: "Compliance Screening",
            description: "Rigorous conflict-of-interest checks and NDA enforcement tailored to investment standards.",
            icon: <ShieldCheck size={24} strokeWidth={1.5} />
        },
        {
            title: "Knowledge Audit",
            description: "Custom screening questions and historical engagement data analysis to verify deep specialization.",
            icon: <FileSearch size={24} strokeWidth={1.5} />
        },
        {
            title: "Real-time Scoring",
            description: "Dynamic performance scoring based on client feedback and speed of execution.",
            icon: <Zap size={24} strokeWidth={1.5} />
        }
    ];

    return (
        <section className={styles.vettingSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>TRUST ARCHITECTURE</span>
                    <h2 className={styles.title}>The 4-Layer Vetting Standard</h2>
                    <p className={styles.subtitle}>
                        Every expert in our network undergoes a multi-dimensional screening process to ensure zero-compromise institutional quality.
                    </p>
                </div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconBox}>
                                {step.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{step.title}</h3>
                            <p className={styles.cardDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VettingProtocol;
