import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | SignalBridge Insights",
    description: "Learn about SignalBridge's mission, our global expert network, and our commitment to providing world-class insights to decision-makers.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
