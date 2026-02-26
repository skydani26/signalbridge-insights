import { Metadata } from 'next';
import ComplianceClient from './ComplianceClient';

export const metadata: Metadata = {
    title: "Institutional Compliance Framework",
    description: "Sovereign-grade compliance protocols, MNPI protection, and rigorous ethical standards for institutional research engagements.",
};

export default function Compliance() {
    return <ComplianceClient />;
}
