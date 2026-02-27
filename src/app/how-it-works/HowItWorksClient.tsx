"use client";

import React, { useEffect, useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./how-it-works.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, CheckCircle2, MessageSquare, Search, UserCheck, Calendar, BarChart3, FileCheck, UserPlus, DollarSign, Shield, Lock, Users, Globe, ChevronDown, ChevronUp } from "lucide-react";

export default function HowItWorksClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            q: "How long does it take to find an expert?",
            a: "Most matches are identified within 2-4 hours. Calls can often be scheduled within 24 hours of your initial request."
        },
        {
            q: "How do you verify expert credentials?",
            a: "We use a multi-step vetting process including AI-powered background checks, LinkedIn verification, and manual credentials review by our internal team."
        },
        {
            q: "Are interactions recorded or transcribed?",
            a: "We offer optional transcription and recording services for all 1-on-1 calls, ensuring you have a searchable record of your insights."
        },
        {
            q: "What compliance measures are in place?",
            a: "Every engagement is subject to MNPI protocols, conflict-of-interest screening, and signed NDAs before it begins."
        },
        {
            q: "Can I speak with the same expert again?",
            a: "Yes. Follow-up consultations can be scheduled through the platform to dive deeper into specific topics."
        },
        {
            q: "What if I need help designing a survey?",
            a: "Our internal research team offers full-service support, from survey methodology and design to recruitment and reporting."
        }
    ];

    const services = [
        {
            title: "Expert Surveys",
            description: "Targeted surveys to vetted industry professionals for quantitative + qualitative insights at scale.",
            process: "Submit questions → experts respond → get aggregated data",
            icon: <FileText size={20} strokeWidth={1.5} />,
            popular: true
        },
        {
            title: "1-on-1 Expert Calls",
            description: "Confidential consultations with hand-picked experts for deep-dive discussions on specific topics.",
            process: "Book a slot → join the call → receive transcript",
            icon: <Phone size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Programming",
            description: "Technical edge for complex surveys and workflows using Qualtrics, Decipher, and internal tools.",
            process: "Submit brief → technical setup → deliver workflow",
            icon: <Zap size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Custom Research",
            description: "End-to-end research support: we scope, recruit, collect data, and deliver synthesized insights.",
            process: "Brief us → we manage everything → receive final report",
            icon: <Network size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Transcripts & Library",
            description: "Access curated transcripts, whitepapers, and recorded expert sessions from our searchable library.",
            process: "Browse library → access content → extract insights",
            icon: <Database size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Compliance & Vetting",
            description: "Rigorous expert screening, NDA management, and full audit trails on every single engagement.",
            process: "Screen experts → NDA management → audit trail ready",
            icon: <ShieldCheck size={20} strokeWidth={1.5} />,
            popular: false
        }
    ];

    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.reveal}>
                        <h1>How <span className={styles.heroHighlight}>SignalBridge Works</span></h1>
                        <p className={styles.heroSubtitle}>
                            From surveys and calls to focus groups and custom projects — a streamlined process
                            designed to connect you with expert knowledge quickly, compliantly, and effectively.
                        </p>
                        <div className={styles.heroButtons}>
                            <Button href="/inquire">
                                Get Started <span style={{ marginLeft: '12px' }}>→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <div className={`${styles.statsBanner} ${styles.reveal}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <h3>10,000+</h3>
                            <p>Global Experts</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>150+</h3>
                            <p>Industries Covered</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>24hrs</h3>
                            <p>Avg. Response Time</p>
                        </div>
                        <div className={styles.statItem}>
                            <h3>100%</h3>
                            <p>Compliance Vetted</p>
                        </div>
                    </div>
                </div>
            </div>

            <SectionWrapper id="engagement-formats">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <span className={styles.sectionTag}>ENGAGEMENT FORMATS</span>
                        <h2 className={styles.sectionTitle}>Choose Your Engagement Type</h2>
                        <p className={styles.sectionDescription}>
                            Every research need is different. We offer multiple ways to access expert knowledge.
                        </p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={index} className={`${styles.serviceCard} ${service.popular ? styles.serviceCardPopular : ''}`}>
                                {service.popular && (
                                    <span className={styles.popularBadge}>
                                        <Star size={12} fill="currentColor" /> Most Popular
                                    </span>
                                )}
                                <div className={styles.serviceIconBox}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <div className={styles.serviceProcess}>
                                    {service.process}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="process" background="gray">
                <div className={styles.reveal}>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span className={styles.sectionTag}>OUR PROCESS</span>
                        <h2 className={styles.sectionTitle}>The Path to Strategic Clarity</h2>
                        <p className={styles.sectionDescription}>
                            A high-touch, technology-enabled workflow that turns your research brief into actionable expert insights.
                        </p>
                    </div>

                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>1</div>
                            <div className={styles.iconBoxSmall}><MessageSquare size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Strategic Briefing</h3>
                            <p className={styles.cardDescription}>Define institutional research objectives and target parameters. Our PMs assist in refining the scope for maximum impact.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>2</div>
                            <div className={styles.iconBoxSmall}><Search size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Recursive AI Matching</h3>
                            <p className={styles.cardDescription}>Proprietary algorithms identify and rank specialists from our 10,000+ member network based on granular expertise mapping.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>3</div>
                            <div className={styles.iconBoxSmall}><UserCheck size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Compliance Engineering</h3>
                            <p className={styles.cardDescription}>Rigorous multi-layer screening for conflicts of interest, NDA compliance, and strict MNPI restrictions.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>4</div>
                            <div className={styles.iconBoxSmall}><Calendar size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Engagement</h3>
                            <p className={styles.cardDescription}>Experts deliver project outputs, join scheduled calls, or complete specialized surveys.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>5</div>
                            <div className={styles.iconBoxSmall}><BarChart3 size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Synthesized Deliverables</h3>
                            <p className={styles.cardDescription}>Receive clean data exports, professional transcripts, or board-ready synthesized insights for strategic decisioning.</p>
                        </div>
                        <div className={styles.processCard}>
                            <div className={styles.stepNumberBg}>6</div>
                            <div className={styles.iconBoxSmall}><Star size={18} strokeWidth={1.5} /></div>
                            <h3 className={styles.cardTitle}>Iterate</h3>
                            <p className={styles.cardDescription}>Rate expert quality to refine future matching and launch follow-up research seamlessly.</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="faqs">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className={styles.sectionTag}>FAQ</span>
                    <h2 className={styles.sectionTitle}>Common Questions</h2>
                </div>
                <div className={`${styles.faqGrid} ${styles.reveal}`}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                                {faq.q}
                                {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            {openFaq === index && (
                                <div className={styles.faqAnswer}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <section className={styles.finalCta}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Ready to Get Started?</h2>
                        <p>Join the SignalBridge network today — as a client or an expert</p>
                        <div className={styles.ctaContainer}>
                            <Button href="/inquire" className={styles.finalCtaBtn}>
                                Initialize Inquiry
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
