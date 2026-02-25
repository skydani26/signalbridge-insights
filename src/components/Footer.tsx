import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logoContainer}>
                            <div className={styles.logoIcon}>S</div>
                            <span className={styles.logoText}>SignalBridge <span className={styles.logoInsights}>Insights</span></span>
                        </Link>
                        <p className={styles.tagline}>
                            The premier global network connecting institutional capital with high-stakes industry expertise.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Solutions</h4>
                            <Link href="/how-it-works">Expert Surveys</Link>
                            <Link href="/for-clients">Expert Consultations</Link>
                            <Link href="/for-clients">Custom Research</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Network</h4>
                            <Link href="/for-experts">Apply as Expert</Link>
                            <Link href="/for-experts">Compliance Standard</Link>
                            <Link href="/for-experts">Expert Earnings</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">Our Mission</Link>
                            <Link href="/about">Global Presence</Link>
                            <Link href="/contact">Contact Support</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>Trust & Legal</h4>
                            <Link href="#">Compliance Framework</Link>
                            <Link href="#">Privacy Protocol</Link>
                            <Link href="#">Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        &copy; {new Date().getFullYear()} SignalBridge Insights. <span className={styles.institutionalTag}>Institutional Research Services.</span>
                    </div>
                    <div className={styles.legalLinks}>
                        <span>SOC2 Type II Compliant</span>
                        <span>GDPR Certified</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
