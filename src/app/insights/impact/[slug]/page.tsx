import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { impactSignals } from '@/data/impact';
import ImpactDetailClient from './ImpactDetailClient';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const signal = impactSignals.find(s => s.slug === slug);
    if (!signal) return { title: 'Signal Not Found' };

    return {
        title: `${signal.title} | Impact Signal | SignalBridge`,
        description: signal.challenge.substring(0, 160),
    };
}

export async function generateStaticParams() {
    return impactSignals.map((signal) => ({
        slug: signal.slug,
    }));
}

export default async function ImpactDetailPage({ params }: Props) {
    const { slug } = await params;
    const signal = impactSignals.find(s => s.slug === slug);

    if (!signal) {
        notFound();
    }

    return <ImpactDetailClient signal={signal} />;
}
