import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Institutional Intelligence & Expert Access",
  description: "Connect with 10,000+ vetted industry experts across 100+ countries. Trusted by leading investors, consultants, and corporations worldwide for sovereign-grade insights.",
};

export default function Home() {
  return <HomeClient />;
}
