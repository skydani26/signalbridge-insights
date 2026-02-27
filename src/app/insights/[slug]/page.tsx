import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { insights } from '@/data/insights';
import InsightDetailClient from './InsightDetailClient';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const insight = insights.find((i) => i.slug === slug);

    if (!insight) return { title: 'Signal Not Found' };

    const title = `${insight.category}: ${insight.title} | SignalBrief`;

    return {
        title,
        description: insight.excerpt,
        openGraph: {
            title,
            description: insight.excerpt,
            type: 'article',
            section: insight.category,
            publishedTime: insight.date,
            authors: ['SignalBridge Insights'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: insight.excerpt,
        }
    };
}

export async function generateStaticParams() {
    return insights.map((insight) => ({
        slug: insight.slug,
    }));
}

export default async function InsightPage({ params }: PageProps) {
    const { slug } = await params;
    const insight = insights.find((i) => i.slug === slug);

    if (!insight) {
        notFound();
    }

    // Get 3 related insights (excluding current one)
    const relatedInsights = insights
        .filter((i) => i.id !== insight.id)
        .slice(0, 3);

    return <InsightDetailClient insight={insight} relatedInsights={relatedInsights} />;
}
