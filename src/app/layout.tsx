import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.signalbridgeinsights.com'),
  title: {
    default: "SignalBridge Insights | Elite Institutional Expert Network",
    template: "%s | SignalBridge Insights"
  },
  description: "SignalBridge Insights is the premier global network connecting institutional capital with sovereign-grade industry expertise and rigorous vetting protocols.",
  keywords: ["expert network", "institutional research", "investment due diligence", "industry expertise", "market intelligence", "SignalBridge"],
  authors: [{ name: "SignalBridge Insights" }],
  creator: "SignalBridge Insights",
  publisher: "SignalBridge Insights",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'SignalBridge Insights',
    title: 'SignalBridge Insights | Elite Institutional Expert Network',
    description: 'Premier global network connecting institutional capital with sovereign-grade industry expertise.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SignalBridge Insights - Institutional Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SignalBridge Insights | Elite Institutional Expert Network',
    description: 'Premier global network connecting institutional capital with sovereign-grade industry expertise.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SignalBridge Insights",
              "url": "https://www.signalbridgeinsights.com",
              "logo": "https://www.signalbridgeinsights.com/favicon.png",
              "sameAs": [
                "https://www.linkedin.com/company/signalbridgeinsights"
              ],
              "description": "Elite institutional expert network connecting global capital with sovereign-grade industry expertise.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            })
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
