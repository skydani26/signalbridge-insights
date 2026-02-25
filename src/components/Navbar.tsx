'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'For Experts', href: '/for-experts' },
        { name: 'For Clients', href: '/for-clients' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoContainer}>
                    <div className={styles.logoIcon}>S</div>
                    <span className={styles.logoText}>
                        SignalBridge <span className={styles.logoInsights}>Insights</span>
                    </span>
                </Link>

                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathname === link.href ? styles.linkActive : styles.link}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Button href="/contact" className={styles.getStartedBtn}>Get Started</Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
