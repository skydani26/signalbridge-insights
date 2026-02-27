"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import Card from "@/components/Card";
import styles from "./home.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, Clock, Shield, Search, TrendingUp, MessageSquare, BarChart3, Quote, CheckCircle2, Globe, Briefcase, Building2, User } from 'lucide-react';

export default function HomeClient() {
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
        <main>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={`${styles.heroTitle} ${styles.reveal} ${styles.delay1}`}>
                        Your Gateway to <br />
                        <span className={styles.highlightBlue}>Expert Knowledge</span>
                    </h1>
                    <p className={`${styles.heroSubtitle} ${styles.reveal} ${styles.delay2}`}>
                        Surveys, 1-on-1 calls, focus groups, custom research, and more. Connect with 10,000+ vetted industry experts across 100+ countries. Trusted by leading investors, consultants, and corporations worldwide.
                    </p>
                    <div className={`${styles.heroButtons} ${styles.reveal} ${styles.delay3}`}>
                        <Button href="/inquire" className={styles.btnHeroPrimary}>
                            Consult Our Strategy Desk <span style={{ marginLeft: '12px' }}>→</span>
                        </Button>
                        <Button href="/for-experts/apply" className={styles.btnHeroSecondary}>
                            Apply to the Network
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div
                    className={styles.scrollIndicator}
                    onClick={() => {
                        document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span>Explore</span>
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                </div>
            </section>

            {/* Stats Section - Blue Strip with Elite Border */}
            <section id="stats" className={`${styles.statsSection} ${styles.reveal}`}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>10,000+</div>
                            <div className={styles.statLabel}>Specialized Experts</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>150+</div>
                            <div className={styles.statLabel}>Domain Sectors</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>24hrs</div>
                            <div className={styles.statLabel}>Average Turnaround</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>100%</div>
                            <div className={styles.statLabel}>Compliance Assured</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services - White Background */}
            <section className={styles.servicesSection} id="services">
                <div className="container">
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <div className={styles.servicesTag}>
                            OUR SERVICES
                        </div>
                        <h2 className={styles.sectionTitle}>
                            Institutional Insight Pillars
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            SignalBridge is engineered for high-stakes research, providing the compliance, speed, and precision required by the world's most demanding investors.
                        </p>
                    </div>

                    <div className={`${styles.servicesGrid} ${styles.reveal}`}>
                        {/* Signature Pillar */}
                        <div className={`${styles.serviceCard} ${styles.active}`}>
                            <div className={styles.badge}>
                                <Star size={12} fill="#5390ff" /> Signature Offering
                            </div>
                            <div className={styles.iconBox}>
                                <FileText size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.serviceTitle}>Expert Surveys</h3>
                            <p className={styles.serviceDescription}>
                                Deploy targeted surveys to vetted industry professionals and get quantitative + qualitative insights at scale. Our proprietary logic ensures 0% respondent overlap.
                            </p>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.iconBox}>
                                <Zap size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.serviceTitle}>Institutional Speed</h3>
                            <p className={styles.serviceDescription}>
                                Profiles delivered in <span style={{ color: 'var(--color-secondary)', fontWeight: 700 }}>under 12 hours</span>. We integrate directly with your workflow to meet the tightest diligence windows.
                            </p>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={styles.iconBox}>
                                <ShieldCheck size={20} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.serviceTitle}>Rigorous Compliance</h3>
                            <p className={styles.serviceDescription}>
                                MNPI protocols and double-blind screening are built into every engagement. We protect the integrity of your capital and your reputation.
                            </p>
                        </div>
                    </div>
                    <div className={styles.exploreBtnContainer}>
                        <Button href="/for-clients" className={styles.exploreBtn}>
                            Explore All Services <span style={{ marginLeft: '12px' }}>→</span>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Overhauled Why Choose SignalBridge - Sage Background */}
            <section id="why-signalbridge" className={styles.whyUsSection}>
                <div className={`container ${styles.reveal}`}>
                    <div className={styles.whyUsTag}>STRATEGIC ADVANTAGE</div>
                    <h2 className={styles.whyUsTitle}>The SignalBridge Advantage</h2>
                    <p className={styles.whyUsSubtitle}>
                        We bridge the gap between institutional complexity and actionable expertise,
                        backed by rigorous data protocols and sovereign-grade compliance.
                    </p>

                    <div className={styles.whyUsGrid}>
                        <div className={styles.whyCard}>
                            <div className={styles.whyIconBox}>
                                <Clock size={28} />
                            </div>
                            <h3 className={styles.whyCardTitle}>Fast Matching</h3>
                            <p className={styles.whyCardText}>
                                Get connected with the right expert within hours, not days. Our AI-powered
                                matching streamlines the process.
                            </p>
                        </div>

                        <div className={styles.whyCard}>
                            <div className={styles.whyIconBox}>
                                <Shield size={28} />
                            </div>
                            <h3 className={styles.whyCardTitle}>Institutional Compliance</h3>
                            <p className={styles.whyCardText}>
                                Proprietary MNPI protocols and multi-layer surfacing logic ensure all
                                engagements meet the strictest global regulatory standards.
                            </p>
                        </div>

                        <Link href="/about/methodology" className={styles.whyCard} style={{ textDecoration: 'none' }}>
                            <div className={styles.whyIconBox}>
                                <Search size={28} />
                            </div>
                            <h3 className={styles.whyCardTitle}>Vetting Methodology</h3>
                            <p className={styles.whyCardText}>
                                Our deep-vetting algorithm matches specialists not just by title, but by
                                verified procedural authority and domain-specific track records.
                            </p>
                        </Link>

                        <div className={styles.whyCard}>
                            <div className={styles.whyIconBox}>
                                <TrendingUp size={28} />
                            </div>
                            <h3 className={styles.whyCardTitle}>Actionable Insights</h3>
                            <p className={styles.whyCardText}>
                                Gain the competitive edge with real-world perspectives that inform better
                                investment and business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overhauled How It Works - Process Section */}
            <section id="process" className={styles.processSection}>
                <div className={`container ${styles.reveal}`}>
                    <div className={styles.processTag}>PROCESS</div>
                    <h2 className={styles.processTitle}>How It Works</h2>
                    <p className={styles.processSubtitle}>
                        A surgical workflow designed for rapid institutional clarity.
                    </p>

                    <div className={styles.processGrid}>
                        <div className={styles.processCard}>
                            <div className={styles.cardNumber}>01</div>
                            <div className={styles.processIconBox}>
                                <MessageSquare size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.processCardTitle}>Strategic Briefing</h3>
                            <p className={styles.processCardText}>
                                Define your research objectives and compliance parameters. Our team handles the scoping and specialist identification.
                            </p>
                        </div>

                        <div className={styles.processCard}>
                            <div className={styles.cardNumber}>02</div>
                            <div className={styles.processIconBox}>
                                <Search size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.processCardTitle}>Rigorous Vetting</h3>
                            <p className={styles.processCardText}>
                                We screen specialists against our 10,000+ member network, ensuring zero conflicts and high-fidelity expertise.
                            </p>
                        </div>

                        <div className={styles.processCard}>
                            <div className={styles.cardNumber}>03</div>
                            <div className={styles.processIconBox}>
                                <BarChart3 size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.processCardTitle}>Engagement & Insights</h3>
                            <p className={styles.processCardText}>
                                Receive compliance-screened data, transcripts, or synthesized reports within your critical diligence window.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overhauled Client Success - Testimonials Section */}
            <section id="testimonials" className={styles.testimonialSection}>
                <div className={`container ${styles.reveal}`}>
                    <div className={styles.testimonialTag}>TESTIMONIALS</div>
                    <h2 className={styles.testimonialTitle}>Trusted by Decision Makers</h2>
                    <p className={styles.testimonialSubtitle}>
                        See what leading firms are saying about SignalBridge
                    </p>

                    <div className={styles.testimonialsGrid}>
                        <div className={styles.testCard}>
                            <div className={styles.testIconBox}>
                                <Quote size={40} strokeWidth={1} fill="none" />
                            </div>
                            <p className={styles.testText}>
                                &quot;SignalBridge consistently delivers high-quality experts who understand our investment thesis. Their response time is unmatched.&quot;
                            </p>
                            <div className={styles.testSeparator} />
                            <div className={styles.testAuthorGroup}>
                                <div className={styles.testAuthor}>Managing Director</div>
                                <div className={styles.testRole}>Investment Fund</div>
                            </div>
                        </div>

                        <div className={styles.testCard}>
                            <div className={styles.testIconBox}>
                                <Quote size={40} strokeWidth={1} fill="none" />
                            </div>
                            <p className={styles.testText}>
                                &quot;The survey platform is incredibly intuitive. We launched a 500-respondent study in under 24 hours.&quot;
                            </p>
                            <div className={styles.testSeparator} />
                            <div className={styles.testAuthorGroup}>
                                <div className={styles.testAuthor}>Partner</div>
                                <div className={styles.testRole}>Strategy Consulting</div>
                            </div>
                        </div>

                        <div className={styles.testCard}>
                            <div className={styles.testIconBox}>
                                <Quote size={40} strokeWidth={1} fill="none" />
                            </div>
                            <p className={styles.testText}>
                                &quot;We rely on SignalBridge for all our primary research needs. The compliance framework gives us confidence in every engagement.&quot;
                            </p>
                            <div className={styles.testSeparator} />
                            <div className={styles.testAuthorGroup}>
                                <div className={styles.testAuthor}>VP Strategy</div>
                                <div className={styles.testRole}>Corporation</div>
                            </div>
                        </div>

                        <div className={styles.testCard}>
                            <div className={styles.testIconBox}>
                                <Quote size={40} strokeWidth={1} fill="none" />
                            </div>
                            <p className={styles.testText}>
                                &quot;Their expert matching algorithm saves us hours of vetting. Quality and speed combined.&quot;
                            </p>
                            <div className={styles.testSeparator} />
                            <div className={styles.testAuthorGroup}>
                                <div className={styles.testAuthor}>Research Director</div>
                                <div className={styles.testRole}>Strategy Consulting</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overhauled Industry Coverage - "Deep Expertise" Section */}
            <section id="coverage" className={styles.coverageSection}>
                <div className={`container ${styles.reveal}`}>
                    <div className={styles.coverageContainer}>
                        {/* Left Column: Info & Checklist */}
                        <div className={styles.coverageInfo}>
                            <div className={styles.coverageTag}>COVERAGE</div>
                            <h2 className={styles.coverageTitle}>Deep Expertise Across Industries</h2>
                            <p className={styles.coverageSubtitle}>
                                Our expert network spans every major industry, from emerging tech startups to established healthcare enterprises.
                            </p>

                            <div className={styles.checklistGrid}>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Healthcare & Life Sciences
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Technology & Software
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Financial Services
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Energy & Utilities
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Manufacturing
                                </div>
                                <div className={styles.checkItem}>
                                    <CheckCircle2 size={20} className={styles.checkIcon} /> Consumer & Retail
                                </div>
                            </div>

                        </div>

                        {/* Right Column: Stats Grid */}
                        <div className={styles.coverageStatsGrid}>
                            <div className={styles.coverageStatCard}>
                                <Globe size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                                <span className={styles.coverageStatValue}>100+ Countries</span>
                                <span className={styles.coverageStatLabel}>Global Coverage</span>
                            </div>
                            <div className={styles.coverageStatCard}>
                                <Briefcase size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                                <span className={styles.coverageStatValue}>15+ Years Avg</span>
                                <span className={styles.coverageStatLabel}>Expert Experience</span>
                            </div>
                            <div className={styles.coverageStatCard}>
                                <BarChart3 size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                                <span className={styles.coverageStatValue}>50,000+</span>
                                <span className={styles.coverageStatLabel}>Engagements Delivered</span>
                            </div>
                            <div className={styles.coverageStatCard}>
                                <Building2 size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                                <span className={styles.coverageStatValue}>500+</span>
                                <span className={styles.coverageStatLabel}>Enterprise Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                        <p className={styles.ctaSubtitle}>
                            Whether you need expert insights through surveys, calls, or custom projects — or
                            want to monetize your expertise — we&apos;re here to help.
                        </p>
                        <div className={styles.ctaButtonsContainer}>
                            <Button href="/inquire" className={styles.btnCtaPrimary}>Consult Our Strategy Desk</Button>
                            <Button href="/for-experts/apply" className={styles.btnCtaSecondary}>Apply to Become an Expert</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
