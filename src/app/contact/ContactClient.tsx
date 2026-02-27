"use client";

import React, { useState, useEffect } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./contact.module.css";
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ShieldCheck, Send, Users } from "lucide-react";

export default function ContactClient() {
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const formDataToSubmit = {
                ...formData,
                _subject: `New Inquiry: ${formData.subject}`,
                _source: 'Contact Page'
            };

            const response = await fetch('https://formspree.io/f/xzdaonlr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataToSubmit)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const data = await response.json();
                setSubmitError(data.error || 'Submission failed. Please try again.');
            }
        } catch (err) {
            setSubmitError('An error occurred. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <main>
                <section className={styles.hero}>
                    <div className="container" style={{ maxWidth: '900px' }}>
                        <div className={styles.revealVisible}>
                            <h1>Inquiry <span className={styles.heroHighlight}>Received</span></h1>
                            <p className={styles.heroSubtitle}>
                                Thank you for reaching out. Your strategic brief has been transmitted to our global strategy desk.
                            </p>
                        </div>
                    </div>
                </section>
                <SectionWrapper id="success">
                    <div style={{ textAlign: 'center', padding: '80px 0' }} className={styles.revealVisible}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: 'var(--color-secondary)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 32px'
                        }}>
                            <ShieldCheck size={40} color="white" />
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Transmission Protocol Confirmed</h2>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '500px', margin: '0 auto 40px' }}>
                            A specialized project manager will review your requirements and respond within our 12-hour institutional SLA.
                        </p>
                        <Button href="/">Return to Registry</Button>
                    </div>
                </SectionWrapper>
            </main>
        );
    }

    return (
        <main>
            {/* ... hero ... */}
            <section className={styles.hero}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div className={styles.reveal}>
                        <h1>Contact Our <span className={styles.heroHighlight}>Global Team</span></h1>
                        <p className={styles.heroSubtitle}>
                            Whether you're looking to find an expert, join our network, or explore partnership opportunities, we're ready to help you reach strategic clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* ... protocol ... */}
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
                            {submitError && (
                                <div style={{ color: 'var(--color-error)', fontSize: '0.875rem', marginBottom: '20px', textAlign: 'center' }}>
                                    {submitError}
                                </div>
                            )}
                            <div className={styles.nameGrid}>
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
                                        disabled={isSubmitting}
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
                                        disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>Transmitting Brief...</>
                                ) : (
                                    <><Send size={18} style={{ marginRight: '8px' }} /> Initialize Inquiry</>
                                )}
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
                    <Button variant="outline" href="/inquire">
                        Contact Enterprise Support
                    </Button>
                </div>
            </section>
        </main>
    );
}
