
import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import styles from "./for-clients.module.css";

export const metadata = {
    title: "For Clients | SignalBridge Insights",
    description: "Expert knowledge in any format. Surveys, calls, and custom research for investors, consultants, and corporations.",
};

export default function ForClients() {
    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Expert Knowledge, Any Format</h1>
                    <p className={styles.heroSubtitle}>
                        Access the insights you need to make smarter investment and strategic decisions.
                    </p>
                    <Button href="/contact" variant="primary" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>Find an Expert</Button>
                </div>
            </section>

            <SectionWrapper>
                <h2 className="text-center mb-8">Our Services</h2>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Expert Surveys</h3>
                        <p>Rapidly gather quantitative data from hundreds of relevant professionals.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>1-on-1 Expert Calls</h3>
                        <p>Direct access to industry leaders for deep-dive interviews.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Custom Research</h3>
                        <p>Bespoke projects managed by our team, from sourcing to analysis.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Transcripts & Content</h3>
                        <p>Searchable library of thousands of expert interviews.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Expert Staffing</h3>
                        <p>Interim executives and advisors for longer operational roles.</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <h3 className={styles.serviceTitle}>Research Operations</h3>
                        <p>Survey programming, data visualization, and reporting.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper background="gray">
                <h2 className="text-center mb-8">Why Clients Choose SignalBridge</h2>
                <div className={styles.reasonsGrid}>
                    <div className={styles.reasonItem}>
                        <h3>AI-Powered Matching</h3>
                        <p>Our proprietary technology identifies the right experts faster, reducing search times by 40%.</p>
                    </div>
                    <div className={styles.reasonItem}>
                        <h3>24-Hour Turnaround</h3>
                        <p>Speed is critical. We typically deliver initial expert profiles within one business day.</p>
                    </div>
                    <div className={styles.reasonItem}>
                        <h3>Compliance Guaranteed</h3>
                        <p>Rigorous compliance framework with custom protocols for MNPI and conflict checking.</p>
                    </div>
                    <div className={styles.reasonItem}>
                        <h3>Quality Assurance</h3>
                        <p>Every expert is vetted. We prioritize client satisfaction and long-term relationships.</p>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper>
                <h2 className="text-center mb-8">Who We Serve</h2>
                <div className={styles.clientsList}>
                    <div className={styles.clientType}>Hedge Funds & Asset Managers</div>
                    <div className={styles.clientType}>Management Consulting Firms</div>
                    <div className={styles.clientType}>Corporate Strategy Teams</div>
                </div>

                <div style={{ marginTop: '64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
                    <div>
                        <h3>Common Use Cases</h3>
                        <ul className={styles.useCaseList}>
                            <li>Investment Due Diligence</li>
                            <li>Market Sizing & Entry Strategy</li>
                            <li>Competitive Intelligence</li>
                            <li>Product Benchmarking</li>
                            <li>Regulatory & Policy Analysis</li>
                            <li>Supply Chain Optimization</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4">Industries Covered</h3>
                        <div className={styles.industryTags}>
                            <div className={styles.industryTag}>Healthcare</div>
                            <div className={styles.industryTag}>Technology</div>
                            <div className={styles.industryTag}>Financial Services</div>
                            <div className={styles.industryTag}>Energy</div>
                            <div className={styles.industryTag}>Manufacturing</div>
                            <div className={styles.industryTag}>Consumer & Retail</div>
                            <div className={styles.industryTag}>Telecommunications</div>
                            <div className={styles.industryTag}>Real Estate</div>
                            <div className={styles.industryTag}>Media</div>
                            <div className={styles.industryTag}>Logistics</div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="text-center">
                <h2 className="mb-4">Start Your Project</h2>
                <p className="mb-8">Contact our team to discuss your research needs.</p>
                <Button href="/contact">Contact Us</Button>
            </SectionWrapper>
        </main>
    );
}
