import { Metadata } from 'next';
import ImpactGalleryClient from './ImpactGalleryClient';

export const metadata: Metadata = {
    title: 'Impact Signals | Institutional Case Studies | SignalBridge',
    description: 'Explore institutional case studies and proof-of-work demonstrating how SignalBridge expert network drives alpha and risk mitigation globally.',
};

export default function ImpactGalleryPage() {
    return <ImpactGalleryClient />;
}
