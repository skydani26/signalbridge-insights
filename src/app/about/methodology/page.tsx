import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import styles from "../about.module.css";
import { Shield, Search, Zap, CheckCircle2 } from "lucide-react";

export default function Methodology() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h1>Vetting <span className={styles.heroHighlight}>Methodology</span></h1>
                    <p className={styles.heroSubtitle}>
                        Elite expert networks are defined by the precision of their vetting. SignalBridge employs a multi-tiered validation protocol to ensure sovereign-grade insights.
                    </p>
                </div>
            </section>

            <SectionWrapper id="vetting-protocol">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ marginBottom: '64px', textAlign: 'center' }}>
                        <span className={styles.sectionTag}>PROCEDURAL AUTHORITY</span>
                        <h2 className={styles.sectionTitle}>The 4-Step Validation Logic</h2>
                    </div>

                    <div style={{ display: 'grid', gap: '32px' }}>
                        <div style={{ padding: '32px', border: '1px solid var(--color-gray-200)', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--color-accent-soft)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                    <Search size={20} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>01 Surfacing logic</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                We identify specialists based on specific procedural authority—individuals who have directly managed or influenced the transition, technology, or strategy in question.
                            </p>
                        </div>

                        <div style={{ padding: '32px', border: '1px solid var(--color-gray-200)', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--color-accent-soft)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                    <Shield size={20} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>02 Conflict Clearance</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                Every expert undergoes automated and manual conflict screening against institutional exclusion lists and current employment restrictions.
                            </p>
                        </div>

                        <div style={{ padding: '32px', border: '1px solid var(--color-gray-200)', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--color-accent-soft)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                    <Zap size={20} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>03 Quality Calibration</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                Specialists are matched to the client brief via a double-blind calibration process, ensuring the perspective aligns with the research thesis.
                            </p>
                        </div>

                        <div style={{ padding: '32px', border: '1px solid var(--color-gray-200)', borderRadius: '16px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ width: '40px', height: '40px', background: 'var(--color-accent-soft)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                                    <CheckCircle2 size={20} />
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-primary)' }}>04 Final Verification</h3>
                            </div>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                Immediate post-engagement reviews and immutable transcripts provide a closed-loop quality guarantee.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
