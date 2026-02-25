import { Metadata } from "next";

export const metadata: Metadata = {
    title: "For Clients | SignalBridge Insights",
    description: "Access expert knowledge in any format. Surveys, calls, focus groups, and custom research for global leaders.",
};

export default function ForClientsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
