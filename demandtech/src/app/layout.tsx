import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import { SmoothScroll } from "../../components";
import HeaderNav from "@/components/ui/HeaderNav";
import Footer from "@/components/ui/Footer";
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
