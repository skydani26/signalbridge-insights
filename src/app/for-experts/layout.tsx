import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Experts | SignalBridge Insights",
    description: "Monetize your expertise. Connect with global leaders and share your insights through calls, surveys, and focus groups.",
};

export default function ForExpertsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
