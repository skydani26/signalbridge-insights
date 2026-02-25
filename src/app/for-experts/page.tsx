"use client";

import React, { useEffect, useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import {
    Star, ShieldCheck, Zap, DollarSign, Calendar, MessageSquare, Globe, Award,
    Shield, Users, ArrowRight, UserPlus, FileCheck, CheckCircle2, FileText,
    Phone, Stethoscope, Landmark, Cpu, Factory, Leaf, ShoppingCart,
    Briefcase, TrendingUp, Lock, ChevronUp, ChevronDown
} from "lucide-react";
import styles from "./for-experts.module.css";

export default function ForExperts() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

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
            q: "Is my participation kept confidential from my employer?",
            a: "Yes. We take privacy extremely seriously. You can chose to be anonymized on projects, and we never share your participation with your current employer. We also screen every project to ensure there are no direct conflicts with your current role."
        },
        {
            q: "How and when do I get paid?",
            a: "Payments are processed automatically through our secure platform. Once an engagement is completed and the hours are confirmed, funds are typically available for transfer within 3–5 business days via direct deposit or wire transfer."
        },
        {
            q: "What is the time commitment for an expert?",
            a: "It is completely up to you. You are never obligated to accept a project. Most of our experts spend between 2–5 hours per month on consultations and surveys, fitting them into their existing professional schedule."
        },
        {
            q: "Do I need to prepare for consultation calls?",
            a: "Generally, no preparation is required. Clients are paying for your existing knowledge and 'top of mind' expertise. If a specific project requires review of materials, this will be disclosed upfront and you will be compensated for that time."
        },
        {
            q: "What if I can't answer a specific question due to an NDA?",
            a: "We explicitly instruct our experts never to share non-public, material information or breach any existing NDAs. If a client asks something you cannot answer, simply state that you are unable to discuss that topic for compliance reasons. Our clients respect this boundary."
        }
    ];

    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.reveal}>
                        <h1>Monetize Your <span className={styles.heroHighlight}>Industry Expertise</span></h1>
                        <p className={styles.heroSubtitle}>
                            Join 10,000+ professionals earning money through paid surveys, consultation calls, focus groups, and advisory projects. Share your knowledge on your own terms.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontWeight: '700' }}>
                                Apply to Join <span style={{ marginLeft: '12px' }}>→</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <SectionWrapper id="earning-formats">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>WAYS TO EARN</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Multiple Ways to Monetize Your Knowledge</h2>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '16px', fontSize: '1.2rem' }}>Choose the engagement types that fit your expertise</p>
                </div>
                <div className={`${styles.earnGrid} ${styles.reveal}`}>
                    <div className={styles.earnCard}>
                        <div className={styles.earnIconWrapper}><FileText size={24} /></div>
                        <div className={styles.earnContent}>
                            <h3 className={styles.earnTitle}>Paid Surveys</h3>
                            <p className={styles.earnDescription}>Complete targeted industry surveys from your desktop or mobile. Quick, flexible, and well-compensated.</p>
                            <span className={styles.earnBadge}>$50–$500+ per survey</span>
                        </div>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.earnIconWrapper}><Phone size={24} /></div>
                        <div className={styles.earnContent}>
                            <h3 className={styles.earnTitle}>1-on-1 Consultation Calls</h3>
                            <p className={styles.earnDescription}>Share your expertise in 30–60 minute phone or video calls with clients seeking deep industry knowledge.</p>
                            <span className={styles.earnBadge}>$200–$1,500/hr</span>
                        </div>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.earnIconWrapper}><Users size={24} /></div>
                        <div className={styles.earnContent}>
                            <h3 className={styles.earnTitle}>Focus Groups & Panels</h3>
                            <p className={styles.earnDescription}>Join moderated group discussions with other experts to explore topics from multiple perspectives.</p>
                            <span className={styles.earnBadge}>$300–$800 per session</span>
                        </div>
                    </div>
                    <div className={styles.earnCard}>
                        <div className={styles.earnIconWrapper}><Zap size={24} /></div>
                        <div className={styles.earnContent}>
                            <h3 className={styles.earnTitle}>Advisory & Project Work</h3>
                            <p className={styles.earnDescription}>Provide ongoing advisory support or contribute to longer-term research and strategy projects.</p>
                            <span className={styles.earnBadge}>Custom project rates</span>
                        </div>
                    </div>
                </div>
                <div className={styles.reveal} style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
                    <Button href="/how-it-works" variant="outline">View All Engagement Types <ArrowRight size={18} style={{ marginLeft: '8px' }} /></Button>
                </div>
            </SectionWrapper>

            <SectionWrapper id="enrollment-process">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>APPLICATION PROCESS</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Your Path to Earning</h2>
                </div>
                <div className={`${styles.journeyGrid} ${styles.reveal}`}>
                    <div className={styles.journeyStep}>
                        <div className={styles.stepIconBox}>1</div>
                        <h3 className={styles.journeyTitle}>Apply Online</h3>
                        <p className={styles.journeyDescription}>Submit your professional profile and industry expertise in less than 5 minutes.</p>
                    </div>
                    <div className={styles.journeyStep}>
                        <div className={styles.stepIconBox}>2</div>
                        <h3 className={styles.journeyTitle}>Vetting & Verification</h3>
                        <p className={styles.journeyDescription}>Our team reviews your credentials and matches you with relevant opportunities.</p>
                    </div>
                    <div className={styles.journeyStep}>
                        <div className={styles.stepIconBox}>3</div>
                        <h3 className={styles.journeyTitle}>Start Earning</h3>
                        <p className={styles.journeyDescription}>Accept projects that interest you and get paid quickly for your time and insights.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="industries" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>INDUSTRY DEPTH</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Broad Opportunities Across Every Sector</h2>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '16px', fontSize: '1.2rem' }}>We connect experts with leaders in these core industries and beyond</p>
                </div>
                <div className={`${styles.industryGrid} ${styles.reveal}`}>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><Stethoscope size={32} /></div>
                        <span>Healthcare & Life Sciences</span>
                    </div>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><Landmark size={32} /></div>
                        <span>Financial Services</span>
                    </div>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><Cpu size={32} /></div>
                        <span>Technology & Software</span>
                    </div>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><Factory size={32} /></div>
                        <span>Industrial & Manufacturing</span>
                    </div>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><Leaf size={32} /></div>
                        <span>Energy & Renewables</span>
                    </div>
                    <div className={styles.industryItem}>
                        <div className={styles.industryIconBox}><ShoppingCart size={32} /></div>
                        <span>Consumer & Retail</span>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="compensation">
                <div className={`${styles.pricingSection} ${styles.reveal}`}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>Earn What You're Worth</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '500px' }}>
                            Your rates are based on your experience level, industry expertise, and current position. You set your rate — we help you find clients.
                        </p>
                        <div className={styles.tierList}>
                            <div className={styles.tierItem}>
                                <div className={styles.tierInfo}>
                                    <h4>Entry Expert</h4>
                                    <p>5–10 years experience</p>
                                </div>
                                <div className={styles.tierPrice}>$200–$400/hr</div>
                            </div>
                            <div className={styles.tierItem}>
                                <div className={styles.tierInfo}>
                                    <h4>Senior Expert</h4>
                                    <p>10–15 years experience</p>
                                </div>
                                <div className={styles.tierPrice}>$400–$800/hr</div>
                            </div>
                            <div className={styles.tierItem}>
                                <div className={styles.tierInfo}>
                                    <h4>Executive Expert</h4>
                                    <p>C-suite or equivalent</p>
                                </div>
                                <div className={styles.tierPrice}>$800–$1,500+/hr</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.earningsHighlight}>
                        <div className={styles.earningsValue}>$2,500+</div>
                        <div className={styles.earningsLabel}>Average monthly earnings</div>
                        <div className={styles.earningsSublabel}>(for active experts)</div>
                    </div>
                </div>
                <div className={styles.reveal} style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '48px' }}>
                    <Button href="/contact">Apply to Join Network</Button>
                    <Button href="/contact" variant="outline">Calculate Your Estimated Rate</Button>
                </div>
            </SectionWrapper>

            <SectionWrapper id="expert-testimonials" background="gray">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>TESTIMONIALS</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Hear From Our Experts</h2>
                </div>
                <div className={`${styles.testimonialGrid} ${styles.reveal}`}>
                    <div className={styles.testimonialCard}>
                        <div style={{ color: 'var(--color-secondary)', marginBottom: '16px', display: 'flex', gap: '4px' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p className={styles.quote}>"SignalBridge has allowed me to monetize my 20 years in telecom without leaving my current role. The process is incredibly smooth."</p>
                        <div className={styles.expertProfile}>
                            <div className={styles.expertInfo}>
                                <h5>Senior Tech Executive</h5>
                                <p>Telecom Industry</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div style={{ color: 'var(--color-secondary)', marginBottom: '16px', display: 'flex', gap: '4px' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p className={styles.quote}>"The compliance team is top-notch. I always feel secure sharing my general industry insights while respecting my employer NDAs."</p>
                        <div className={styles.expertProfile}>
                            <div className={styles.expertInfo}>
                                <h5>Former CFO</h5>
                                <p>Fortune 500 Manufacturing</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.testimonialCard}>
                        <div style={{ color: 'var(--color-secondary)', marginBottom: '16px', display: 'flex', gap: '4px' }}>
                            <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                        </div>
                        <p className={styles.quote}>"The variety of projects is fascinating. I've worked on everything from short surveys to deep-dive advisory panels."</p>
                        <div className={styles.expertProfile}>
                            <div className={styles.expertInfo}>
                                <h5>Industry Consultant</h5>
                                <p>Renewable Energy Sector</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="ideal-profile">
                <div className={`${styles.lookingGrid} ${styles.reveal}`}>
                    <div className={styles.infoCardGrid}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconBox}><Briefcase size={20} /></div>
                            <span>Professional Background</span>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconBox}><TrendingUp size={20} /></div>
                            <span>Industry Expertise</span>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconBox}><Users size={20} /></div>
                            <span>Strong Network</span>
                        </div>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIconBox}><Shield size={20} /></div>
                            <span>Compliance Focus</span>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>Who We're Looking For</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.15rem', lineHeight: '1.6' }}>
                            We're building a network of exceptional professionals who can provide valuable insights through surveys, calls, and advisory work.
                        </p>
                        <ul className={styles.requirementsList}>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Deep professional experience in your field</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Current or recent industry position</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Strong communication skills</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Commitment to compliance and confidentiality</li>
                            <li><CheckCircle2 size={18} className={styles.checkIcon} /> Availability for at least 2–4 hours per month</li>
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="expert-compliance" background="gray">
                <div className={`${styles.complianceBox} ${styles.reveal}`}>
                    <div className={styles.complianceHeader}>
                        <div className={styles.benefitIconWrapper} style={{ marginBottom: 0 }}><Shield size={32} /></div>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '4px' }}>Your Privacy & Career are Protected</h2>
                            <p style={{ color: 'var(--color-text-light)', margin: 0 }}>We maintain the highest standards of data security and professional compliance</p>
                        </div>
                    </div>
                    <div className={styles.complianceGrid}>
                        <div className={styles.complianceItem}>
                            <Lock className={styles.complianceIcon} size={24} />
                            <div>
                                <h4>NDA Management</h4>
                                <p>We facilitate all necessary non-disclosure agreements to ensure your conversations remain confidential.</p>
                            </div>
                        </div>
                        <div className={styles.complianceItem}>
                            <Shield className={styles.complianceIcon} size={24} />
                            <div>
                                <h4>Conflict Screening</h4>
                                <p>Our automated systems and expert team screen every project for potential conflicts of interest.</p>
                            </div>
                        </div>
                        <div className={styles.complianceItem}>
                            <Users className={styles.complianceIcon} size={24} />
                            <div>
                                <h4>Anonymized Participation</h4>
                                <p>Choose to keep your participation anonymous where appropriate to protect your professional standing.</p>
                            </div>
                        </div>
                        <div className={styles.complianceItem}>
                            <CheckCircle2 className={styles.complianceIcon} size={24} />
                            <div>
                                <h4>Clear Guidelines</h4>
                                <p>We provide explicit training and guidelines on what can and cannot be shared during projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="faqs">
                <div className={styles.reveal} style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>EXPERT FAQ</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Common Questions</h2>
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

            <SectionWrapper id="join-now" background="dark">
                <div className={styles.reveal} style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '24px', letterSpacing: '-0.02em', color: 'white' }}>Ready to Start Earning?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#F1F5F9', marginBottom: '40px', lineHeight: '1.6' }}>
                        Apply today and join 10,000+ experts earning through surveys, calls, and projects with SignalBridge
                    </p>
                    <Button href="/contact" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '16px 40px', fontWeight: '700' }}>
                        Start Your Application
                    </Button>
                </div>
            </SectionWrapper>
        </main >
    );
}
