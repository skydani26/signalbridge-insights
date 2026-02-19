
"use client";
import React, { useState } from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./contact.module.css";

// Note: No backend logic is implemented as requested. 
// The form will construct a mailto link on submit.

export default function Contact() {
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
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p className={styles.heroSubtitle}>
                        Contact our team to discuss your research needs or expert application.
                    </p>
                </div>
            </section>

            <SectionWrapper>
                <div className={styles.contactGrid}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <div className={styles.infoValue}>contact@signalbridgeinsights.com</div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Phone</span>
                            <div className={styles.infoValue}>+1 (555) 123-4567</div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Office</span>
                            <div className={styles.infoValue}>
                                New York, NY<br />
                                10017, USA
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Business Hours</span>
                            <div className={styles.infoValue}>
                                Mon–Fri: 9am – 6pm EST
                            </div>
                        </div>
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
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company" className={styles.label}>Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={styles.input}
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className={styles.input}
                                required
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary">Send Message</Button>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', marginTop: '8px' }}>
                            Submitting this form will open your default email client.
                        </p>
                    </form>
                </div>
            </SectionWrapper>
        </main>
    );
}
