import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "Our Mission & Institutional Mandate",
    description: "SignalBridge Insights was founded to bridge the critical intelligence gap between global capital and specialized industry knowledge.",
};

export default function About() {
    return <AboutClient />;
}
