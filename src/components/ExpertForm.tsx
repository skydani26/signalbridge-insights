"use client";

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2, Linkedin, Briefcase, Globe, Shield } from 'lucide-react';
import styles from './ExpertForm.module.css';

type Step = 1 | 2 | 3 | 4;

const INDUSTRIES = [
    "Healthcare & Life Sciences",
    "Financial Services & FinTech",
    "Technology, Media & Telecom (TMT)",
    "Industrial & Manufacturing",
    "Energy & Renewables",
    "Retail & Consumer Goods",
    "Public Sector & Policy",
    "Professional Services"
];

const EXPERTISE_LEVELS = [
    { id: 'associate', label: 'Associate Specialist (5-10 years)', range: '$200 - $400/hr' },
    { id: 'senior', label: 'Senior Expert (10-15 years)', range: '$400 - $800/hr' },
    { id: 'executive', label: 'Executive Expert (C-Suite / 15+ years)', range: '$800 - $1,500+/hr' }
];

export default function ExpertForm() {
    const [step, setStep] = useState<Step>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        currentRole: '',
        currentCompany: '',
        primaryIndustry: '',
        expertiseLevel: '',
        consultationTypes: [] as string[],
        bio: '',
        complianceAgreed: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (type: string) => {
        setFormData(prev => {
            const types = prev.consultationTypes.includes(type)
                ? prev.consultationTypes.filter(t => t !== type)
                : [...prev.consultationTypes, type];
            return { ...prev, consultationTypes: types };
        });
    };

    const nextStep = () => setStep(prev => (prev + 1) as Step);
    const prevStep = () => setStep(prev => (prev - 1) as Step);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/mkovewqb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    subject: `Expert Application: ${formData.firstName} ${formData.lastName}`,
                    ...formData,
                    consultationTypes: formData.consultationTypes.join(", ")
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const data = await response.json();
                const errorMsg = data.errors ? data.errors.map((e: any) => e.message).join(", ") : "Submission failed";
                alert(`Error: ${errorMsg}. Please check your Formspree dashboard for any action required.`);
            }
        } catch (error) {
            alert("An error occurred. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.formContainer}>
                <div className={styles.successState}>
                    <div className={styles.successIcon}>
                        <CheckCircle2 size={48} />
                    </div>
                    <h2>Application Received</h2>
                    <p>
                        Thank you for applying to the SignalBridge network. Our Research Architecture team will review your credentials and reach out within 48 hours to finalize your onboarding.
                    </p>
                    <button onClick={() => window.location.href = '/'} className={styles.nextBtn}>
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.stepIndicator}>
                {[1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className={`${styles.indicator} ${step >= i ? styles.activeIndicator : ''}`}
                    />
                ))}
            </div>

            {step === 1 && (
                <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                        <h2>Professional Identity</h2>
                        <p>Tell us about your current professional standing.</p>
                    </div>
                    <div className={styles.formGrid}>
                        <div className={styles.inputGroup}>
                            <label>First Name</label>
                            <input
                                required
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="John"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Last Name</label>
                            <input
                                required
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Doe"
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Professional Email</label>
                            <input
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="john@company.com"
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>LinkedIn Profile URL</label>
                            <div style={{ position: 'relative' }}>
                                <Linkedin style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', width: '18px' }} />
                                <input
                                    required
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                    placeholder="linkedin.com/in/username"
                                    style={{ paddingLeft: '40px' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div />
                        <button
                            type="button"
                            onClick={nextStep}
                            className={styles.nextBtn}
                            disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.linkedin}
                        >
                            Continue <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                        <h2>Sector & Role</h2>
                        <p>Define your primary industry and current position.</p>
                    </div>
                    <div className={styles.formGrid}>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Primary Industry</label>
                            <select
                                required
                                name="primaryIndustry"
                                value={formData.primaryIndustry}
                                onChange={handleInputChange}
                            >
                                <option value="">Select an industry</option>
                                {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                            </select>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Current Role</label>
                            <input
                                required
                                name="currentRole"
                                value={formData.currentRole}
                                onChange={handleInputChange}
                                placeholder="VP of Operations"
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Company</label>
                            <input
                                required
                                name="currentCompany"
                                value={formData.currentCompany}
                                onChange={handleInputChange}
                                placeholder="Global Tech Corp"
                            />
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className={styles.nextBtn}
                            disabled={!formData.primaryIndustry || !formData.currentRole || !formData.currentCompany}
                        >
                            Continue <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                        <h2>Expertise Scope</h2>
                        <p>Which compensation tiers and engagement types apply to you?</p>
                    </div>
                    <div className={styles.optionGrid}>
                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px', display: 'block' }}>Seniority Tier</label>
                        {EXPERTISE_LEVELS.map(tier => (
                            <div
                                key={tier.id}
                                className={`${styles.optionCard} ${formData.expertiseLevel === tier.id ? styles.selectedOption : ''}`}
                                onClick={() => setFormData(prev => ({ ...prev, expertiseLevel: tier.id }))}
                            >
                                <div className={styles.optionDot}>
                                    {formData.expertiseLevel === tier.id && <div className={styles.innerDot} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{tier.label}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600 }}>{tier.range}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '24px' }}>
                        <label style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px', display: 'block' }}>Engagement Preferences</label>
                        <div className={styles.checkboxGroup}>
                            {['Consultation Calls', 'Industry Surveys', 'Ongoing Advisory', 'Panel Discussions'].map(type => (
                                <label key={type} className={styles.checkboxItem}>
                                    <input
                                        type="checkbox"
                                        checked={formData.consultationTypes.includes(type)}
                                        onChange={() => handleCheckboxChange(type)}
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>
                        <button
                            type="button"
                            onClick={nextStep}
                            className={styles.nextBtn}
                            disabled={!formData.expertiseLevel || formData.consultationTypes.length === 0}
                        >
                            Continue <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                        <h2>Compliance & Finalize</h2>
                        <p>Complete your bio and agree to institutional protocols.</p>
                    </div>
                    <div className={styles.formGrid}>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                            <label>Specialty Highlights (Brief Bio)</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleInputChange}
                                placeholder="I have overseen the deployment of 5G infrastructure across EMEA and managed $200M+ budgets..."
                                rows={4}
                            />
                        </div>
                        <div className={`${styles.inputGroup} ${styles.fullWidth}`} style={{ marginTop: '12px' }}>
                            <label className={styles.checkboxItem}>
                                <input
                                    type="checkbox"
                                    required
                                    checked={formData.complianceAgreed}
                                    onChange={(e) => setFormData(prev => ({ ...prev, complianceAgreed: e.target.checked }))}
                                />
                                <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>
                                    I agree to the SignalBridge **Protocol 7** compliance framework and confirm I will not discuss sensitive, non-public, or employer-proprietary information.
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <button type="button" onClick={prevStep} className={styles.backBtn}>Back</button>
                        <button
                            type="submit"
                            className={`${styles.nextBtn} ${styles.submitBtn}`}
                            disabled={isSubmitting || !formData.complianceAgreed}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" /> Initializing...
                                </>
                            ) : (
                                <>Submit Application <ArrowRight size={18} /></>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
