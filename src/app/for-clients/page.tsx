"use client";

import React, { useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
    FileText, Phone, Zap, Network, Database, ShieldCheck,
    ArrowRight, Star, Shield, Globe, Users, Search, Calendar, BarChart3,
    TrendingUp, Building2, Briefcase, CheckCircle2
} from "lucide-react";
import VettingProtocol from "@/components/VettingProtocol";
import styles from "./for-clients.module.css";

export default function ForClients() {
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
    const services = [
        {
            title: "Expert Surveys",
            description: "Targeted surveys to vetted industry professionals for quantitative + qualitative insights at scale.",
            icon: <FileText size={20} strokeWidth={1.5} />,
            popular: true
        },
        {
            title: "1-on-1 Expert Calls",
            description: "Confidential consultations with hand-picked experts for deep-dive discussions on specific topics.",
            icon: <Phone size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Programming",
            description: "Technical edge for complex surveys and workflows using Qualtrics, Decipher, and internal tools.",
            icon: <Zap size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Custom Research",
            description: "End-to-end research support: we scope, recruit, collect data, and deliver synthesized insights.",
            icon: <Network size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Transcripts & Library",
            description: "Access curated transcripts, whitepapers, and recorded expert sessions from our searchable library.",
            icon: <Database size={20} strokeWidth={1.5} />,
            popular: false
        },
        {
            title: "Compliance & Vetting",
            description: "Rigorous expert screening, NDA management, and full audit trails on every single engagement.",
            icon: <ShieldCheck size={20} strokeWidth={1.5} />,
            popular: false
        }
    ];

    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.reveal}>
                        <h1>Expert Knowledge, <span className={styles.heroHighlight}>Any Format</span></h1>
                        <p className={styles.heroSubtitle}>
                            Surveys, 1-on-1 calls, focus groups, custom research, and more. Access 10,000+ vetted industry experts to get the insights you need — fast, compliant, and at scale.
                        </p>
                        <div className={styles.heroButtons}>
                            <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontWeight: '700' }}>
                                Get Started <ArrowRight size={18} style={{ marginLeft: '12px' }} />
                            </Button>
                            <Button href="/contact" variant="outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '16px 40px' }}>
                                Request a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SectionWrapper id="services">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className={styles.serviceTag}>STRATEGIC SOLUTIONS</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800', color: 'var(--color-primary)' }}>Strategic Research Solutions</h2>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '16px', fontSize: '1.2rem' }}>Precision-engineered engagement formats for institutional decision makers</p>
                </div>

                <div className={`${styles.servicesGrid} ${styles.reveal}`}>
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
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper id="trust" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '12px' }}>Why Clients Choose Us</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>Fast, compliant, and high-quality expert access across every engagement type</p>
                </div>

                <div className={`${styles.trustGrid} ${styles.reveal}`}>
                    <div className={styles.trustCard}>
                        <div className={styles.trustIconBox}>
                            <Search size={20} />
                        </div>
                        <h4 className={styles.trustTitle}>AI-Powered Matching</h4>
                        <p className={styles.trustDescription}>Identify perfect specialists across our 10,000+ member network using our proprietary AI matching engine.</p>
                    </div>

                    <div className={styles.trustCard}>
                        <div className={styles.trustIconBox}>
                            <Calendar size={20} />
                        </div>
                        <h4 className={styles.trustTitle}>24-Hour Turnaround</h4>
                        <p className={styles.trustDescription}>Profiles delivered in hours. Validated a $500M market thesis in under 48 hours for a leading NYC asset manager.</p>
                    </div>

                    <div className={styles.trustCard}>
                        <div className={styles.trustIconBox}>
                            <Shield size={20} />
                        </div>
                        <h4 className={styles.trustTitle}>Compliance Guaranteed</h4>
                        <p className={styles.trustDescription}>Strict protocols, NDA management, and conflict screening custom-built for institutional investors.</p>
                    </div>

                    <div className={styles.trustCard}>
                        <div className={styles.trustIconBox}>
                            <BarChart3 size={20} />
                        </div>
                        <h4 className={styles.trustTitle}>Quality Assured</h4>
                        <p className={styles.trustDescription}>Every expert is manually vetted for seniority. Maintaining a 98% satisfaction rate across all industries.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="geographic-reach" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)', marginBottom: '16px' }}>Global Reach, Local Depth</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>Connecting global capital with localized expertise across 100+ countries.</p>
                </div>
                <div className={`${styles.serveGrid} ${styles.reveal}`}>
                    <div className={styles.serveCard}>
                        <div className={styles.serveIconCircle}>
                            <Globe size={28} />
                        </div>
                        <h4 className={styles.serveTitle}>AMER</h4>
                        <p className={styles.serveDescription}>Dominant presence in NYC, San Francisco, and Toronto. High-fidelity coverage of North American markets.</p>
                    </div>
                    <div className={styles.serveCard}>
                        <div className={styles.serveIconCircle}>
                            <Globe size={28} />
                        </div>
                        <h4 className={styles.serveTitle}>EMEA</h4>
                        <p className={styles.serveDescription}>Hubs in London, Berlin, and Dubai. Deep regulatory and industrial insights across the European theater.</p>
                    </div>
                    <div className={styles.serveCard}>
                        <div className={styles.serveIconCircle}>
                            <Globe size={28} />
                        </div>
                        <h4 className={styles.serveTitle}>APAC</h4>
                        <p className={styles.serveDescription}>Active networks in Singapore, Tokyo, and Sydney. Critical intelligence for high-growth Asian economies.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="use-cases">
                <div className={styles.reveal} style={{ marginBottom: '64px' }}>
                    <span className={styles.serviceTag}>USE CASES</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--color-primary)', margin: '16px 0 24px' }}>How Clients Use SignalBridge</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', maxWidth: '700px' }}>
                        From investment due diligence to regulatory intelligence, our experts provide insights across a range of business needs.
                    </p>
                </div>

                <div className={`${styles.useCasesSplit} ${styles.reveal}`}>
                    <div className={styles.useCasesContent}>
                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <TrendingUp size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Investment Due Diligence</h4>
                                <p className={styles.useCaseText}>Validate investment theses, understand market dynamics, and identify risks before committing capital.</p>
                            </div>
                        </div>

                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <BarChart3 size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Market Research & Sizing</h4>
                                <p className={styles.useCaseText}>Get real-world perspectives on industry trends, TAM estimates, competitive landscapes, and customer behavior.</p>
                            </div>
                        </div>

                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <Briefcase size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Strategic Planning</h4>
                                <p className={styles.useCaseText}>Inform corporate strategy with insights from industry veterans, domain experts, and functional leaders.</p>
                            </div>
                        </div>

                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <Users size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Competitive Intelligence</h4>
                                <p className={styles.useCaseText}>Understand competitor strategies, capabilities, product roadmaps, and market positioning from those who know.</p>
                            </div>
                        </div>

                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <Database size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Product & Technology Assessment</h4>
                                <p className={styles.useCaseText}>Evaluate technology stacks, product capabilities, and engineering approaches through expert technical reviews.</p>
                            </div>
                        </div>

                        <div className={styles.useCaseItem}>
                            <div className={styles.useCaseIconBox}>
                                <Shield size={22} />
                            </div>
                            <div>
                                <h4 className={styles.useCaseTitle}>Regulatory & Compliance Insights</h4>
                                <p className={styles.useCaseText}>Navigate complex regulatory environments with guidance from former regulators and compliance specialists.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.industrySidebar}>
                        <div className={styles.industryCard}>
                            <h3>Industries Covered</h3>
                            <div className={styles.industryGrid}>
                                {[
                                    "Healthcare & Pharmaceuticals", "Financial Services", "Manufacturing & Industrial",
                                    "Telecommunications", "Real Estate", "Technology & Software",
                                    "Energy & Utilities", "Consumer & Retail", "Transportation & Logistics",
                                    "Media & Entertainment"
                                ].map((industry, index) => (
                                    <div key={index} className={styles.industryItem}>
                                        <CheckCircle2 size={18} className={styles.industryCheck} />
                                        <span>{industry}</span>
                                    </div>
                                ))}
                            </div>
                            <Button href="/contact" className={styles.findExpertBtn} style={{ marginTop: '32px' }}>
                                Find an Expert
                            </Button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <VettingProtocol />

            <section className={styles.finalCta}>
                <div className="container">
                    <div className={`${styles.ctaContent} ${styles.revealVisible}`}>
                        <h2>Ready to Connect with Experts?</h2>
                        <p>Start with a survey, book a call, or tell us about your research project</p>
                        <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 48px', fontWeight: '700' }}>
                            Connect with Experts
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
