import React from 'react';
import { Metadata } from 'next';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
    title: 'Insights & Thought Leadership | SignalBridge',
    description: 'Explore institutional research, market intelligence, and case studies from the SignalBridge global expert network.',
};

export default function InsightsPage() {
    return <InsightsClient />;
}
