
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./about.module.css";

export const metadata = {
    title: "About Us | SignalBridge Insights",
    description: "To connect decision-makers with expert knowledge that enables faster, smarter, and more informed decisions.",
};

export default function About() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1>About SignalBridge Insights</h1>
                    <p className={styles.heroSubtitle}>
                        We are built to fix slow matching, inconsistent quality, and compliance risk in traditional expert networks.
                    </p>
                </div>
            </section>

            <SectionWrapper>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div>
                        <h2 className="mb-4">Our Mission</h2>
                        <p className="mb-4">
                            To connect decision-makers with expert knowledge that enables faster, smarter, and more informed decisions.
                        </p>
                        <p>
                            In a world overflowing with data, true expertise is rare. We cut through the noise to deliver the specific, verified human intelligence that drives competitive advantage.
                        </p>
                    </div>
                    <div style={{ backgroundColor: 'var(--color-primary)', height: '300px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontWeight: 500 }}>Mission Illustration</span>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <h2 className="text-center mb-8">Our Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    <div style={{ background: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Precision</h3>
                        <p>We don&apos;t just find experts; we find the <em>right</em> experts. Every match is curated for relevance and depth.</p>
                    </div>
                    <div style={{ background: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Integrity</h3>
                        <p>Compliance is our foundation. We operate with transparency and strict adherence to ethical standards.</p>
                    </div>
                    <div style={{ background: 'white', padding: '32px', borderRadius: '8px', textAlign: 'center' }}>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '16px' }}>Excellence</h3>
                        <p>We are relentless in our pursuit of quality, from the speed of our service to the caliber of our network.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="text-center">
                <h2>Join Our Team</h2>
                <p className="mb-8">Interested in shaping the future of knowledge sharing?</p>
                <Button href="/contact">Contact Us</Button>
            </SectionWrapper>
        </main>
    );
}
