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
                            Connecting industry experts with leading investors, consultants, and corporations for actionable insights.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About Us</Link>
                            <Link href="/how-it-works">How It Works</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>For Experts</h4>
                            <Link href="/contact">Join as Expert</Link>
                            <Link href="/for-experts">How It Works</Link>
                        </div>
                        <div className={styles.column}>
                            <h4>For Clients</h4>
                            <Link href="/contact">Find Experts</Link>
                            <Link href="/for-clients">How It Works</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} SignalBridge Insights. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
