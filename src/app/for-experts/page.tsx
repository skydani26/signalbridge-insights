import { Metadata } from 'next';
import ForExpertsClient from './ForExpertsClient';

export const metadata: Metadata = {
    title: "Apply as Industry Expert | Monetize Your Knowledge",
    description: "Join our elite network of industry specialists. Monetize your expertise through consultations, surveys, and strategic advisory roles.",
};

export default function ForExperts() {
    return <ForExpertsClient />;
}
