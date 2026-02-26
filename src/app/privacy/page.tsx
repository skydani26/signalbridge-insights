import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
    title: "Privacy Protocol | Institutional Data Protection",
    description: "SignalBridge's commitment to data privacy, GDPR compliance, and zero-trust security architecture for expert and client data.",
};

export default function PrivacyPolicy() {
    return <PrivacyClient />;
}
