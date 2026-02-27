import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { impactSignals } from '@/data/impact';
import ImpactDetailClient from './ImpactDetailClient';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const signal = impactSignals.find(s => s.slug === params.slug);
    if (!signal) return { title: 'Signal Not Found' };

    return {
        title: `${signal.title} | Impact Signal | SignalBridge`,
        description: signal.challenge.substring(0, 160),
    };
}

export default function ImpactDetailPage({ params }: Props) {
    const signal = impactSignals.find(s => s.slug === params.slug);

    if (!signal) {
        notFound();
    }

    return <ImpactDetailClient signal={signal} />;
}
