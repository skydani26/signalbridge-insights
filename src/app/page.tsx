"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";
import Card from "@/components/Card";
import styles from "./home.module.css";
import { Star, FileText, Phone, Zap, Network, Database, ShieldCheck, Clock, Shield, Search, TrendingUp, MessageSquare, BarChart3, Quote, CheckCircle2, Globe, Briefcase, Building2, User } from 'lucide-react';

export default function Home() {
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
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} ${styles.reveal} ${styles.delay1}`}>
            Your Gateway to <br />
            <span className={styles.highlightBlue}>Expert Knowledge</span>
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.reveal} ${styles.delay2}`}>
            Surveys, 1-on-1 calls, focus groups, custom research, and more. Connect with 10,000+ vetted industry experts across 100+ countries. Trusted by leading investors, consultants, and corporations worldwide.
          </p>
          <div className={`${styles.heroButtons} ${styles.reveal} ${styles.delay3}`}>
            <Button href="/contact" className={styles.btnHeroPrimary}>
              Request Experts <span style={{ marginLeft: '12px', fontSize: '1.2rem' }}>→</span>
            </Button>
            <Button href="/for-experts" className={styles.btnHeroSecondary}>
              Join as an Expert
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={styles.scrollIndicator}
          onClick={() => {
            document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore</span>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Blue Strip with Elite Border */}
      <section id="stats" className={`${styles.statsSection} ${styles.reveal}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>Specialized Experts</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>Domain Sectors</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24hrs</div>
              <div className={styles.statLabel}>Average Turnaround</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Compliance Assured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - White Background */}
      <section className={styles.servicesSection} id="services">
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.reveal}`}>
            <div className={styles.servicesTag}>
              OUR SERVICES
            </div>
            <h2 className={styles.sectionTitle}>
              Everything You Need from an Expert Network
            </h2>
            <p className={styles.sectionSubtitle}>
              From rapid-fire surveys to deep-dive consulting projects, we provide the full range
              of expert engagement formats.
            </p>
          </div>

          <div className={`${styles.servicesGrid} ${styles.reveal}`}>
            {/* Signature Card */}
            <div className={`${styles.serviceCard} ${styles.active}`}>
              <div className={styles.badge}>
                <Star size={12} fill="#5390ff" /> Signature
              </div>
              <div className={styles.iconBox}>
                <FileText size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Expert Surveys</h3>
              <p className={styles.serviceDescription}>
                Our signature offering. Deploy targeted surveys to vetted industry professionals
                and get quantitative + qualitative insights at scale.
              </p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>1-on-1 Expert Calls</h3>
              <p className={styles.serviceDescription}>
                Schedule confidential consultations with hand-picked experts for deep-dive
                discussions on specific topics.
              </p>
            </div>

            {/* NEW: Programming Card (In place of Focus Groups) */}
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Zap size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Programming</h3>
              <p className={styles.serviceDescription}>
                Our technical edge. Execute complex surveys and workflows with precision using Qualtrics, Decipher, and internal tools for seamless data capture.
              </p>
            </div>

            {/* NEW: Custom Research Projects */}
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Network size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Custom Research Projects</h3>
              <p className={styles.serviceDescription}>
                End-to-end research support: we scope, recruit experts, collect data, and deliver synthesized insights tailored to your needs.
              </p>
            </div>

            {/* NEW: Transcripts & Knowledge Library */}
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <Database size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Transcripts & Knowledge Library</h3>
              <p className={styles.serviceDescription}>
                Access curated transcripts, whitepapers, and recorded expert sessions from our growing, searchable content library.
              </p>
            </div>

            {/* NEW: Compliance & Vetting */}
            <div className={styles.serviceCard}>
              <div className={styles.iconBox}>
                <ShieldCheck size={20} strokeWidth={1.5} />
              </div>
              <h3 className={styles.serviceTitle}>Compliance & Vetting</h3>
              <p className={styles.serviceDescription}>
                Rigorous expert screening, NDA management, conflict-of-interest checks, and full audit trails on every single engagement.
              </p>
            </div>
          </div>
          <div className={styles.exploreBtnContainer}>
            <Button href="/for-clients" className={styles.exploreBtn}>
              Explore All Services <span style={{ marginLeft: '12px' }}>→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Overhauled Why Choose SignalBridge - Sage Background */}
      <section id="why-signalbridge" className={styles.whyUsSection}>
        <div className={`container ${styles.reveal}`}>
          <div className={styles.whyUsTag}>WHY US</div>
          <h2 className={styles.whyUsTitle}>Why Choose SignalBridge?</h2>
          <p className={styles.whyUsSubtitle}>
            We connect you with the expertise you need, when you need it, with the compliance
            and quality controls you expect.
          </p>

          <div className={styles.whyUsGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <Clock size={28} />
              </div>
              <h3 className={styles.whyCardTitle}>Fast Matching</h3>
              <p className={styles.whyCardText}>
                Get connected with the right expert within hours, not days. Our AI-powered
                matching streamlines the process.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <Shield size={28} />
              </div>
              <h3 className={styles.whyCardTitle}>Compliance First</h3>
              <p className={styles.whyCardText}>
                Built-in compliance protocols ensure all engagements meet regulatory and
                confidentiality requirements.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <Search size={28} />
              </div>
              <h3 className={styles.whyCardTitle}>AI-Powered Search</h3>
              <p className={styles.whyCardText}>
                Our intelligent matching engine finds the perfect expert based on your specific
                research needs and criteria.
              </p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIconBox}>
                <TrendingUp size={28} />
              </div>
              <h3 className={styles.whyCardTitle}>Actionable Insights</h3>
              <p className={styles.whyCardText}>
                Gain the competitive edge with real-world perspectives that inform better
                investment and business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overhauled How It Works - Process Section */}
      <section id="process" className={styles.processSection}>
        <div className={`container ${styles.reveal}`}>
          <div className={styles.processTag}>PROCESS</div>
          <h2 className={styles.processTitle}>How It Works</h2>
          <p className={styles.processSubtitle}>
            From defining your research needs to receiving expert insights — in as little as 24 hours
          </p>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.processIconBox}>
                <MessageSquare size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.processCardTitle}>Brief Us</h3>
              <p className={styles.processCardText}>
                Tell us your research objectives, target industries, and preferred engagement type — survey, call, focus group, or project.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.cardNumber}>02</div>
              <div className={styles.processIconBox}>
                <Search size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.processCardTitle}>We Match Experts</h3>
              <p className={styles.processCardText}>
                Our AI-powered matching engine identifies the best-fit experts from our vetted network of 10,000+ professionals.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.cardNumber}>03</div>
              <div className={styles.processIconBox}>
                <User size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.processCardTitle}>Experts Engage</h3>
              <p className={styles.processCardText}>
                Experts complete surveys, join calls, participate in focus groups, or deliver project outputs based on your needs.
              </p>
            </div>

            <div className={styles.processCard}>
              <div className={styles.cardNumber}>04</div>
              <div className={styles.processIconBox}>
                <BarChart3 size={24} strokeWidth={1.5} />
              </div>
              <h3 className={styles.processCardTitle}>Get Insights</h3>
              <p className={styles.processCardText}>
                Receive high-quality, compliance-screened insights. Access transcripts, data exports, and synthesized reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overhauled Client Success - Testimonials Section */}
      <section id="testimonials" className={styles.testimonialSection}>
        <div className={`container ${styles.reveal}`}>
          <div className={styles.testimonialTag}>TESTIMONIALS</div>
          <h2 className={styles.testimonialTitle}>Trusted by Decision Makers</h2>
          <p className={styles.testimonialSubtitle}>
            See what leading firms are saying about SignalBridge
          </p>

          <div className={styles.testimonialsGrid}>
            <div className={styles.testCard}>
              <div className={styles.testIconBox}>
                <Quote size={40} strokeWidth={1} fill="none" />
              </div>
              <p className={styles.testText}>
                &quot;SignalBridge consistently delivers high-quality experts who understand our investment thesis. Their response time is unmatched.&quot;
              </p>
              <div className={styles.testSeparator} />
              <div className={styles.testAuthorGroup}>
                <div className={styles.testAuthor}>Managing Director</div>
                <div className={styles.testRole}>Investment Fund</div>
              </div>
            </div>

            <div className={styles.testCard}>
              <div className={styles.testIconBox}>
                <Quote size={40} strokeWidth={1} fill="none" />
              </div>
              <p className={styles.testText}>
                &quot;The survey platform is incredibly intuitive. We launched a 500-respondent study in under 24 hours.&quot;
              </p>
              <div className={styles.testSeparator} />
              <div className={styles.testAuthorGroup}>
                <div className={styles.testAuthor}>Partner</div>
                <div className={styles.testRole}>Strategy Consulting</div>
              </div>
            </div>

            <div className={styles.testCard}>
              <div className={styles.testIconBox}>
                <Quote size={40} strokeWidth={1} fill="none" />
              </div>
              <p className={styles.testText}>
                &quot;We rely on SignalBridge for all our primary research needs. The compliance framework gives us confidence in every engagement.&quot;
              </p>
              <div className={styles.testSeparator} />
              <div className={styles.testAuthorGroup}>
                <div className={styles.testAuthor}>VP Strategy</div>
                <div className={styles.testRole}>Corporation</div>
              </div>
            </div>

            <div className={styles.testCard}>
              <div className={styles.testIconBox}>
                <Quote size={40} strokeWidth={1} fill="none" />
              </div>
              <p className={styles.testText}>
                &quot;Their expert matching algorithm saves us hours of vetting. Quality and speed combined.&quot;
              </p>
              <div className={styles.testSeparator} />
              <div className={styles.testAuthorGroup}>
                <div className={styles.testAuthor}>Research Director</div>
                <div className={styles.testRole}>Strategy Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overhauled Industry Coverage - "Deep Expertise" Section */}
      <section id="coverage" className={styles.coverageSection}>
        <div className={`container ${styles.reveal}`}>
          <div className={styles.coverageContainer}>
            {/* Left Column: Info & Checklist */}
            <div className={styles.coverageInfo}>
              <div className={styles.coverageTag}>COVERAGE</div>
              <h2 className={styles.coverageTitle}>Deep Expertise Across Industries</h2>
              <p className={styles.coverageSubtitle}>
                Our expert network spans every major industry, from emerging tech startups to established healthcare enterprises.
              </p>

              <div className={styles.checklistGrid}>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Healthcare & Life Sciences
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Technology & Software
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Financial Services
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Energy & Utilities
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Manufacturing
                </div>
                <div className={styles.checkItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} /> Consumer & Retail
                </div>
              </div>

              <Button href="/industries" className={styles.coverageBtn}>
                Explore All Industries
              </Button>
            </div>

            {/* Right Column: Stats Grid */}
            <div className={styles.coverageStatsGrid}>
              <div className={styles.coverageStatCard}>
                <Globe size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                <span className={styles.coverageStatValue}>100+ Countries</span>
                <span className={styles.coverageStatLabel}>Global Coverage</span>
              </div>
              <div className={styles.coverageStatCard}>
                <Briefcase size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                <span className={styles.coverageStatValue}>15+ Years Avg</span>
                <span className={styles.coverageStatLabel}>Expert Experience</span>
              </div>
              <div className={styles.coverageStatCard}>
                <BarChart3 size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                <span className={styles.coverageStatValue}>50,000+</span>
                <span className={styles.coverageStatLabel}>Engagements Delivered</span>
              </div>
              <div className={styles.coverageStatCard}>
                <Building2 size={40} strokeWidth={1.5} className={styles.coverageStatIcon} />
                <span className={styles.coverageStatValue}>500+</span>
                <span className={styles.coverageStatLabel}>Enterprise Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaSubtitle}>
            Whether you need expert insights through surveys, calls, or custom projects — or
            want to monetize your expertise — we&apos;re here to help.
          </p>
          <div className={styles.ctaButtonsContainer}>
            <Button href="/contact" className={styles.btnCtaPrimary}>I Need Experts</Button>
            <Button href="/for-experts" className={styles.btnCtaSecondary}>I&apos;m an Expert</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
