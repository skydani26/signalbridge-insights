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
                    <div className={styles.methodologyHeader}>
                        <span className={styles.sectionTag}>PROCEDURAL AUTHORITY</span>
                        <h2 className={styles.sectionTitle}>The 4-Step Validation Logic</h2>
                    </div>

                    <div className={styles.methodologyGrid}>
                        <div className={styles.methodologyCard}>
                            <div className={styles.methodologyCardHeader}>
                                <div className={styles.methodologyIcon}>
                                    <Search size={20} />
                                </div>
                                <h3 className={styles.methodologyStepTitle}>01 Surfacing logic</h3>
                            </div>
                            <p className={styles.methodologyDescription}>
                                We identify specialists based on specific procedural authority—individuals who have directly managed or influenced the transition, technology, or strategy in question.
                            </p>
                        </div>

                        <div className={styles.methodologyCard}>
                            <div className={styles.methodologyCardHeader}>
                                <div className={styles.methodologyIcon}>
                                    <Shield size={20} />
                                </div>
                                <h3 className={styles.methodologyStepTitle}>02 Conflict Clearance</h3>
                            </div>
                            <p className={styles.methodologyDescription}>
                                Every expert undergoes automated and manual conflict screening against institutional exclusion lists and current employment restrictions.
                            </p>
                        </div>

                        <div className={styles.methodologyCard}>
                            <div className={styles.methodologyCardHeader}>
                                <div className={styles.methodologyIcon}>
                                    <Zap size={20} />
                                </div>
                                <h3 className={styles.methodologyStepTitle}>03 Quality Calibration</h3>
                            </div>
                            <p className={styles.methodologyDescription}>
                                Specialists are matched to the client brief via a double-blind calibration process, ensuring the perspective aligns with the research thesis.
                            </p>
                        </div>

                        <div className={styles.methodologyCard}>
                            <div className={styles.methodologyCardHeader}>
                                <div className={styles.methodologyIcon}>
                                    <CheckCircle2 size={20} />
                                </div>
                                <h3 className={styles.methodologyStepTitle}>04 Final Verification</h3>
                            </div>
                            <p className={styles.methodologyDescription}>
                                Immediate post-engagement reviews and immutable transcripts provide a closed-loop quality guarantee.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
