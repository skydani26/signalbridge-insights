import { Metadata } from 'next';
import ProtocolClient from './ProtocolClient';

export const metadata: Metadata = {
    title: 'Protocol 7 Compliance | SignalBridge Insights',
    description: 'SignalBridge is built on Protocol 7, a seven-tier institutional compliance framework designed to eliminate MNPI risk and protect institutional IP.',
};

export default function ProtocolPage() {
    return <ProtocolClient />;
}
