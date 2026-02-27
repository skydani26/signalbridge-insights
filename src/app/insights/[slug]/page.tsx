import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { insights } from '@/data/insights';
import InsightDetailClient from './InsightDetailClient';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const insight = insights.find((i) => i.slug === params.slug);

    if (!insight) return { title: 'Signal Not Found' };

    return {
        title: `${insight.title} | SignalBridge Insights`,
        description: insight.excerpt,
    };
}

export async function generateStaticParams() {
    return insights.map((insight) => ({
        slug: insight.slug,
    }));
}

export default function InsightPage({ params }: PageProps) {
    const insight = insights.find((i) => i.slug === params.slug);

    if (!insight) {
        notFound();
    }

    // Get 3 related insights (excluding current one)
    const relatedInsights = insights
        .filter((i) => i.id !== insight.id)
        .slice(0, 3);

    return <InsightDetailClient insight={insight} relatedInsights={relatedInsights} />;
}
