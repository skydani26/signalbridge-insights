import { Metadata } from 'next';
import HowItWorksClient from './HowItWorksClient';

export const metadata: Metadata = {
    title: "How It Works | The SignalBridge Process",
    description: "A surgical workflow designed for rapid institutional clarity. From strategic briefing to conflict-cleared industry insights.",
};

export default function HowItWorks() {
    return <HowItWorksClient />;
}
