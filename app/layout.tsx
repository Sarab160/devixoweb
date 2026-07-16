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
  title: "Devixo Solutions | Custom Software, Web & Mobile App Development",
  description: "Devixo Solutions is a premier Software Company in Pakistan, Faisalabad. We specialize in Web Development, Mobile App Development, AI Development, Custom Business Software, and Cloud Solutions.",
  keywords: [
    "Software Company",
    "Web Development",
    "Mobile App Development",
    "AI Development",
    "Custom Software",
    "Cloud Solutions",
    "UI UX Design",
    "Pakistan",
    "Faisalabad",
    "Next.js Development",
    "Business Software"
  ],
  metadataBase: new URL("https://devixosolutions.online"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Devixo Solutions", url: "https://devixosolutions.online" }],
  creator: "Devixo Solutions",
  publisher: "Devixo Solutions",
  category: "Technology",
  openGraph: {
    title: "Devixo Solutions | Custom Software & AI Development",
    description: "Devixo Solutions designs and develops enterprise-grade custom software, web & mobile applications, cloud architectures, and AI integrations in Faisalabad, Pakistan.",
    url: "https://devixosolutions.online",
    siteName: "Devixo Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Devixo Solutions Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devixo Solutions | Custom Software & AI Development",
    description: "Premier Software Company in Pakistan offering Web Development, Mobile Apps, AI, and Cloud Solutions.",
    images: ["/logo.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devixo Solutions",
    "url": "https://devixosolutions.online",
    "logo": "https://devixosolutions.online/logo.png",
    "description": "Devixo Solutions is a premier Software Company in Pakistan, Faisalabad specializing in Web Development, Mobile App Development, AI Development, Custom Business Software, and Cloud Solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://devixosolutions.online/#contact"
    }
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
