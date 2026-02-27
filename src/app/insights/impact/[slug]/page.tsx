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

    const title = `${signal.sector}: ${signal.title} | Proof of Work`;
    const description = `[Institutional Case Study] ${signal.clientType} engagement in ${signal.sector}. Challenge: ${signal.challenge.substring(0, 100)}...`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            section: signal.sector,
            publishedTime: signal.date,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        }
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
