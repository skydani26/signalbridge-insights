"use client";

import React, { useState } from 'react';
import styles from './InquiryForm.module.css';
import Button from './Button';
import { User, Briefcase, FileText, CheckCircle2, ChevronRight, ChevronLeft, Mail, Clock } from 'lucide-react';

type Step = 1 | 2 | 3;

export default function InquiryForm() {
    const [step, setStep] = useState<Step>(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        // Step 1: Identity
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        // Step 2: Research Brief
        projectType: 'Expert Consultation',
        projectDetail: '',
        timeline: 'Immediate (< 48 hours)',
        // Step 3: Confirmation
        acceptedCompliance: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => setStep(prev => (prev + 1) as Step);
    const handleBack = () => setStep(prev => (prev - 1) as Step);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        // For now, we simulate success
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className={styles.successState}>
                <div className={styles.successIcon}>
                    <CheckCircle2 size={40} />
                </div>
                <h2 className={styles.successTitle}>Inquiry Initialized</h2>
                <p className={styles.successText}>
                    Thank you, {formData.firstName}. Your research brief has been transmitted to our global strategy desk.
                </p>
                <div style={{ marginBottom: '32px' }}>
                    <div className={styles.protocolBadge}>
                        <Clock size={14} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        SLA: RESPONSE WITHIN 12 HOURS
                    </div>
                </div>
                <Button href="/">Return to Site</Button>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <div className={styles.stepIndicator}>
                <div className={`${styles.step} ${step >= 1 ? styles.stepActive : ''} ${step > 1 ? styles.stepCompleted : ''}`}>
                    {step > 1 ? <CheckCircle2 size={16} /> : 1}
                </div>
                <div className={`${styles.step} ${step >= 2 ? styles.stepActive : ''} ${step > 2 ? styles.stepCompleted : ''}`}>
                    {step > 2 ? <CheckCircle2 size={16} /> : 2}
                </div>
                <div className={`${styles.step} ${step >= 3 ? styles.stepActive : ''}`}>
                    3
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="reveal">
                        <h3 className={styles.methodologyStepTitle} style={{ marginBottom: '24px' }}>Professional Identity</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>First Name</label>
                                <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Last Name</label>
                                <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className={styles.input} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Work Email Address</label>
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} className={styles.input} placeholder="name@company.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Organization</label>
                            <input type="text" name="company" required value={formData.company} onChange={handleChange} className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Job Title / Seniority</label>
                            <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className={styles.input} />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="reveal">
                        <h3 className={styles.methodologyStepTitle} style={{ marginBottom: '24px' }}>Research Brief</h3>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Engagement Type</label>
                            <select name="projectType" value={formData.projectType} onChange={handleChange} className={styles.select}>
                                <option>Expert Consultation (1-on-1)</option>
                                <option>Expert Survey (Qualitative)</option>
                                <option>Strategic Partnership</option>
                                <option>Other Inquiry</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Project Objectives</label>
                            <textarea
                                name="projectDetail"
                                required
                                value={formData.projectDetail}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Briefly describe the expertise you are looking for..."
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Required Timeline</label>
                            <select name="timeline" value={formData.timeline} onChange={handleChange} className={styles.select}>
                                <option>Immediate (&lt; 24 hours)</option>
                                <option>Urgent (48-72 hours)</option>
                                <option>Planning (Next Week)</option>
                            </select>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="reveal">
                        <h3 className={styles.methodologyStepTitle} style={{ marginBottom: '24px' }}>Final Review</h3>
                        <div style={{ background: 'var(--color-gray-100)', padding: '20px', borderRadius: '12px', marginBottom: '24px' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                                <strong>Contact:</strong> {formData.firstName} {formData.lastName} ({formData.company})
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginBottom: '0' }}>
                                <strong>Brief:</strong> {formData.projectType}
                            </p>
                        </div>
                        <div className={styles.formGroup} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <input
                                type="checkbox"
                                required
                                checked={formData.acceptedCompliance}
                                onChange={(e) => setFormData(prev => ({ ...prev, acceptedCompliance: e.target.checked }))}
                                style={{ marginTop: '4px' }}
                            />
                            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', margin: 0 }}>
                                I confirm this inquiry follows my institutional compliance guidelines and does not solicit MNPI (Material Non-Public Information).
                            </p>
                        </div>
                    </div>
                )}

                <div className={styles.buttonGroup}>
                    {step > 1 && (
                        <Button variant="outline" type="button" onClick={handleBack} style={{ flex: 1 }}>
                            <ChevronLeft size={16} /> Back
                        </Button>
                    )}
                    {step < 3 ? (
                        <Button type="button" onClick={handleNext} style={{ flex: 1 }}>
                            Continue <ChevronRight size={16} />
                        </Button>
                    ) : (
                        <Button type="submit" style={{ flex: 2 }}>
                            Transmit Brief <CheckCircle2 size={16} style={{ marginLeft: '8px' }} />
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}
