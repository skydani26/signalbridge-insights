"use client";

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';
import styles from './NewsletterSignup.module.css';

interface NewsletterSignupProps {
    category?: string;
}

export default function NewsletterSignup({ category }: NewsletterSignupProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xzdaonlr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    interest: category || "General Signals",
                    source: "Newsletter Subscription"
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const data = await response.json();
                const errorMsg = data.errors ? data.errors.map((e: any) => e.message).join(", ") : "Submission failed";
                console.error("Newsletter signup error detail:", errorMsg);
            }
        } catch (error) {
            console.error("Newsletter signup error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className={styles.signupContainer}>
                <div className={styles.successMsg}>
                    <CheckCircle2 color="var(--color-secondary)" style={{ marginBottom: '12px' }} />
                    <h4>Subscription Active</h4>
                    <p>You have been enrolled in the {category || "Global"} SignalBrief.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.signupContainer}>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h3>The SignalBrief</h3>
                    <p>
                        Institutional-grade research and network updates delivered weekly.
                        Stay ahead of cross-sector transitions.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formArea}>
                    <div className={styles.inputRow}>
                        <input
                            required
                            type="email"
                            className={styles.input}
                            placeholder="institutional@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
                        </button>
                    </div>
                    <p className={styles.complianceText}>
                        By subscribing, you agree to receive research updates. You can opt-out at any time.
                        Data is handled under SignalBridge Protocol 7.
                    </p>
                </form>
            </div>
        </div>
    );
}
