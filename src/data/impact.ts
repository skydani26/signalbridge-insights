import { ReactNode } from 'react';

export interface ImpactSignal {
    id: string;
    slug: string;
    clientType: string;
    sector: string;
    title: string;
    challenge: string;
    methodology: string;
    outcome: string;
    stats: {
        label: string;
        value: string;
    }[];
    date: string;
}

export const impactSignals: ImpactSignal[] = [
    {
        id: "impact_01",
        slug: "stealth-medtech-acquisition",
        clientType: "Global Private Equity",
        sector: "Healthcare / MedTech",
        title: "Diligence on Stealth-Stage Robot-Assisted Surgery Platform",
        challenge: "A Tier-1 PE firm required deep technical vetting of a pre-revenue robotic surgery startup within a 72-hour exclusivity window. Traditional consultants lacked specific hands-on experience with the startup's proprietary haptic sensor array.",
        methodology: "SignalBridge deployed Protocol 7 to identify and vet 4 former Lead Engineers from the target's primary competitor and 2 Chief of Surgery users who had participated in secret alpha trials.",
        outcome: "The client identified a critical calibration flaw in the haptic feedback loop that would have delayed FDA approval by 18 months. The deal was restructured with a $40M valuation adjustment.",
        stats: [
            { label: "Expert Turnaround", value: "< 14 Hours" },
            { label: "SME Seniority", value: "C-Level / Lead Eng" },
            { label: "Deal Impact", value: "$40M Delta" }
        ],
        date: "Feb 2026"
    },
    {
        id: "impact_02",
        slug: "tmt-semiconductor-pivot",
        clientType: "Focus Hedge Fund",
        sector: "TMT / Semiconductors",
        title: "Forecasting Yield Shifts in 3nm Logic Nodes",
        challenge: "A focus hedge fund needed to understand the ground-truth yield rates of a major Asian foundry after conflicting public reports. Data required was highly technical and sensitive.",
        methodology: "SignalBridge facilitated double-blind consultations with 3 recently retired Fab Directors and 2 equipment supply chain specialists under strict Protocol 7 monitoring.",
        outcome: "Client received granular yield delta projections 3 weeks ahead of the consensus shift, allowing for a strategic repositioning of their long/short semiconductor basket.",
        stats: [
            { label: "Signal Lead Time", value: "21 Days" },
            { label: "Vetting Rigor", value: "Double-Blind" },
            { label: "Confidence", value: "High" }
        ],
        date: "Jan 2026"
    }
];
