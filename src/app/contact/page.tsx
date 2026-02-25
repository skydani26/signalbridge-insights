"use client";

import React, { useState, useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./contact.module.css";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ShieldCheck, Send, Users } from "lucide-react";

export default function Contact() {
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

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { firstName, lastName, email, company, subject, message } = formData;

        const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:admin@signalbridgeinsights.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return (
        <main>
            <section className={styles.hero}>
                <div className={`container ${styles.reveal}`}>
                    <h1>Contact Our <span className={styles.heroHighlight}>Global Team</span></h1>
                    <p className={styles.heroSubtitle}>
                        Whether you&apos;re looking to find an expert, join our network, or explore partnership opportunities, we&apos;re ready to help you reach strategic clarity.
                    </p>
                </div>
            </section>

            <SectionWrapper id="protocol" background="gray">
                <div style={{ textAlign: 'center', marginBottom: '48px' }} className={styles.reveal}>
                    <span className={styles.officeTag} style={{ marginBottom: '16px' }}>RESPONSE PROTOCOL</span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Institutional Service Standard</h2>
                </div>
                <div className={`${styles.protocolGrid} ${styles.reveal}`}>
                    <div className={styles.protocolCard}>
                        <div className={styles.protocolIcon}><MessageSquare size={24} /></div>
                        <h3>1. Strategic Briefing</h3>
                        <p>Discuss your research objectives with an industry-specialized project manager.</p>
                    </div>
                    <div className={styles.protocolCard}>
                        <div className={styles.protocolIcon}><Users size={24} /></div>
                        <h3>2. Precision Matching</h3>
                        <p>Our team identifies and vets the specific experts required for your inquiry.</p>
                    </div>
                    <div className={styles.protocolCard}>
                        <div className={styles.protocolIcon}><Clock size={24} /></div>
                        <h3>3. Rapid Execution</h3>
                        <p>Engage with verified expertise within 24-48 hours of initial briefing.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="contact-form">
                <div className={`${styles.contactGrid} ${styles.reveal}`}>
                    <div className={styles.officeGrid}>
                        <div className={styles.officeCard}>
                            <span className={styles.officeTag}>AMER</span>
                            <h4>New York</h4>
                            <p>Global Headquarters<br />Manhattan, NY 10017</p>
                        </div>
                        <div className={styles.officeCard}>
                            <span className={styles.officeTag}>EMEA</span>
                            <h4>London</h4>
                            <p>European Hub<br />Mayfair, London W1</p>
                        </div>
                        <div className={styles.officeCard}>
                            <span className={styles.officeTag}>APAC</span>
                            <h4>Singapore</h4>
                            <p>Asia-Pacific Lead<br />Marina Bay, 018981</p>
                        </div>
                    </div>

                    <div className={styles.formCard}>
                        <div className={styles.formHeader}>
                            <h2>Message the Desk</h2>
                            <p>Direct priority channel to our research specialized team.</p>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className={styles.input}
                                        placeholder="Enter your first name"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className={styles.input}
                                        placeholder="Enter your last name"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email" className={styles.label}>Work Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="name@company.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="company" className={styles.label}>Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className={styles.input}
                                    placeholder="Enter company name"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject" className={styles.label}>Inquiry Type</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={styles.input}
                                    placeholder="How can we assist you today?"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>Detailed Requirements</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className={styles.textarea}
                                    placeholder="Please provide details about your project or inquiry..."
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" style={{ width: '100%', padding: '18px' }}>
                                <Send size={18} style={{ marginRight: '8px' }} /> Initialize Inquiry
                            </Button>
                            <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '24px' }}>
                                This secure channel is monitored by our lead research partners. Response time &lt; 12 hours.
                            </p>
                        </form>
                    </div>
                </div>
            </SectionWrapper>

            <section id="support" className={styles.supportSection}>
                <div className={`${styles.supportContent} ${styles.reveal}`}>
                    <h2 className={styles.supportTitle}>Enterprise Support</h2>
                    <p className={styles.supportDescription}>
                        For enterprise-level inquiries, custom research projects, or strategic partnerships, our dedicated support team is ready to assist.
                    </p>
                    <Button variant="outline" href="mailto:enterprise@signalbridgeinsights.com" className={styles.supportBtn}>
                        Contact Enterprise Support
                    </Button>
                </div>
            </section>
        </main>
    );
}
