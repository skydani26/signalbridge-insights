import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import InquiryForm from "@/components/InquiryForm";
import styles from "./inquire.module.css";
import { ShieldCheck, Clock, Zap } from "lucide-react";

export default function InquirePage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <div className={`${styles.heroContent} reveal`}>
                        <span className={styles.tag}>INQUIRY DESK</span>
                        <h1>Initialize Strategic <span className={styles.highlight}>Briefing</span></h1>
                        <p className={styles.subtitle}>
                            Our global research desk responds to all institutional inquiries within 12 hours.
                        </p>
                    </div>
                </div>
            </section>

            <SectionWrapper id="inquiry-form" background="gray">
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.formSide}>
                            <InquiryForm />
                        </div>
                        <div className={styles.infoSide}>
                            <div className={styles.protocolCard}>
                                <div className={styles.iconBox}><Clock size={24} /></div>
                                <h4>Global Availability</h4>
                                <p>Our team operates across AMER, EMEA, and APAC time zones for 24/7 responsiveness.</p>
                            </div>
                            <div className={styles.protocolCard}>
                                <div className={styles.iconBox}><ShieldCheck size={24} /></div>
                                <h4>Regulatory Shield</h4>
                                <p>Strict data encryption and MNPI avoidance protocols integrated into every match.</p>
                            </div>
                            <div className={styles.protocolCard}>
                                <div className={styles.iconBox}><Zap size={24} /></div>
                                <h4>High Fidelity</h4>
                                <p>Human-vetted specialists matched to your specific research thesis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
