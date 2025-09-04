import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "DemandTech | Accelerate Your Business Growth",
    template: "%s | DemandTech"
  },
  description: "Transform your demand generation with cutting-edge technology and proven strategies. Drive qualified leads, increase conversions, and scale your business.",
  keywords: ["demand generation", "marketing automation", "lead generation", "B2B marketing", "growth marketing"],
  authors: [{ name: "DemandTech" }],
  creator: "DemandTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://demandtech.com",
    siteName: "DemandTech",
    title: "DemandTech | Accelerate Your Business Growth",
    description: "Transform your demand generation with cutting-edge technology and proven strategies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemandTech | Accelerate Your Business Growth",
    description: "Transform your demand generation with cutting-edge technology and proven strategies.",
    creator: "@demandtech",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Favicon and PWA metadata
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/favicon.ico",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
