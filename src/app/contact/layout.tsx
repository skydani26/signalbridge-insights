import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | SignalBridge Insights",
    description: "Get in touch with our team. Whether you're looking for an expert or have a question about our services, we're here to help.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
