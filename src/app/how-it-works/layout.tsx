import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How It Works | SignalBridge Insights",
    description: "Streamlined process designed to connect you with expert knowledge quickly, compliantly, and effectively.",
};

export default function HowItWorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
