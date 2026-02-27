'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'For Experts', href: '/for-experts' },
        { name: 'For Clients', href: '/for-clients' },
        { name: 'Insights', href: '/insights' },
        {
            name: 'Trust',
            href: '/compliance/protocol',
            submenu: [
                { name: 'Protocol 7 Standard', href: '/compliance/protocol' },
                { name: 'Methodology', href: '/about/methodology' },
                { name: 'About SignalBridge', href: '/about' },
            ]
        },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoContainer} onClick={() => setIsMenuOpen(false)}>
                    <div className={styles.logoIcon}>S</div>
                    <span className={styles.logoText}>
                        SignalBridge <span className={styles.logoInsights}>Insights</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => (
                        <div key={link.name} className={link.submenu ? styles.dropdownContainer : ''}>
                            {link.submenu ? (
                                <>
                                    <div className={pathname.startsWith('/compliance') || pathname.startsWith('/about') ? styles.linkActive : styles.link}>
                                        {link.name} <span className={styles.arrow}>▾</span>
                                    </div>
                                    <div className={styles.dropdownMenu}>
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className={pathname === sub.href ? styles.dropdownItemActive : styles.dropdownItem}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={pathname === link.href ? styles.linkActive : styles.link}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <Button href="/inquire" className={styles.getStartedBtn}>Get Started</Button>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.btnActive : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <nav className={styles.mobileNav}>
                    {navLinks.map((link, index) => (
                        <React.Fragment key={link.name}>
                            {link.submenu ? (
                                link.submenu.map((sub, subIndex) => (
                                    <Link
                                        key={sub.href}
                                        href={sub.href}
                                        className={`${pathname === sub.href ? styles.mobileLinkActive : styles.mobileLink} ${isMenuOpen ? styles.reveal : ''}`}
                                        style={{ transitionDelay: `${(index + subIndex) * 0.1}s` }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {sub.name}
                                    </Link>
                                ))
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`${pathname === link.href ? styles.mobileLinkActive : styles.mobileLink} ${isMenuOpen ? styles.reveal : ''}`}
                                    style={{ transitionDelay: `${index * 0.1}s` }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                    <div className={`${styles.mobileCta} ${isMenuOpen ? styles.reveal : ''}`} style={{ transitionDelay: '0.6s' }}>
                        <Button href="/inquire" className={styles.getStartedBtn} onClick={() => setIsMenuOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
