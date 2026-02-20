import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import { FileText, Phone, Users, Zap, CheckCircle2, DollarSign, Clock, Globe, Shield, Briefcase, TrendingUp } from "lucide-react";
import styles from "./for-experts.module.css";

export const metadata = {
    title: "For Experts | SignalBridge Insights",
    description: "Monetize your industry expertise. Join 10,000+ professionals earning through surveys, calls, and advisory projects.",
};

export default function ForExperts() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
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
            </section>

            <SectionWrapper>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--color-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>WAYS TO EARN</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '16px', fontWeight: '800' }}>Multiple Ways to Monetize Your Knowledge</h2>
                    <p style={{ color: 'var(--color-text-light)', marginTop: '16px', fontSize: '1.2rem' }}>Choose the engagement types that work best for you</p>
                </div>
                <div className={styles.earnGrid}>
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
            </SectionWrapper>

            <SectionWrapper background="gray">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>Why Join Our Network?</h2>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '1.25rem' }}>Turn your knowledge into income while helping others make better decisions</p>
                </div>
                <div className={styles.benefitGrid}>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIconWrapper}><DollarSign size={24} /></div>
                        <h3 className={styles.benefitTitle}>Competitive Earnings</h3>
                        <p className={styles.benefitDescription}>Earn $50–$500+ per survey, set your hourly rate for calls, and get project-based fees for longer engagements.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIconWrapper}><Clock size={24} /></div>
                        <h3 className={styles.benefitTitle}>Flexible Schedule</h3>
                        <p className={styles.benefitDescription}>Complete surveys on your time. Accept only the calls, focus groups, and projects that fit your schedule.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIconWrapper}><Globe size={24} /></div>
                        <h3 className={styles.benefitTitle}>Global Clients</h3>
                        <p className={styles.benefitDescription}>Connect with leading hedge funds, consulting firms, private equity, and corporations worldwide.</p>
                    </div>
                    <div className={styles.benefitCard}>
                        <div className={styles.benefitIconWrapper}><Shield size={24} /></div>
                        <h3 className={styles.benefitTitle}>Compliance Support</h3>
                        <p className={styles.benefitDescription}>We handle compliance complexities. Clear guidelines, NDA management, and conflict screening for every engagement.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <div className={styles.pricingSection}>
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
            </SectionWrapper>
            <SectionWrapper>
                <div className={styles.lookingGrid}>
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

            <SectionWrapper background="dark">
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
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
