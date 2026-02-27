import { Metadata } from 'next';
import ApplyClient from './ApplyClient';

export const metadata: Metadata = {
    title: "Apply to the Expert Network | SignalBridge Insights",
    description: "Launch your application to join our elite advisor network. Monetize your industry expertise through high-fidelity institutional engagements.",
};

export default function ApplyPage() {
    return <ApplyClient />;
}
