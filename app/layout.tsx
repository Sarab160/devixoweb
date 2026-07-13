import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devixo Solutions | POS Systems, Web & Mobile Apps, AI & Cloud",
  description: "Devixo Solutions builds custom POS systems, websites, mobile apps, AI agents, data analytics, and cloud solutions for businesses of all sizes.",
  keywords: ["POS system", "restaurant POS", "custom software", "web development", "mobile app", "AI agents", "data analytics", "cloud solutions", "Devixo Solutions"],
  authors: [{ name: "Devixo Solutions" }],
  metadataBase: new URL("https://devixo.com"), // Fallback base URL for metadata resolving
  openGraph: {
    title: "Devixo Solutions | Premium Software Engineering & AI Consulting",
    description: "Devixo Solutions designs and develops enterprise-grade custom software, high-performance cloud architectures, and AI integrations.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Devixo Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devixo Solutions | Premium Software Engineering & AI Consulting",
    description: "Bespoke digital solutions, AI systems, and cloud-native software architectures.",
    images: ["/logo.png"],
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
