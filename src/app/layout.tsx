import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mahavira Developers LLP | Plots for Sale in Bhubaneswar",
    template: "%s | Mahavira Developers LLP",
  },
  description:
    "Mahavira Developers LLP offers plots for sale in Bhubaneswar, including Bajarangi Nagar at Kuainlo and Maruti Nagar near Bhubaneswar New Railway Station.",
  keywords: [
    "Mahavira Developers LLP",
    "plots for sale in Bhubaneswar",
    "residential plots Bhubaneswar",
    "land for sale Bhubaneswar",
    "Bajarangi Nagar Kuainlo",
    "Maruti Nagar Bhubaneswar",
    "plots near Bhubaneswar Railway Station",
    "RERA plots Odisha",
    "real estate Bhubaneswar",
    "property developers Bhubaneswar",
    "buy plot in Odisha",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Mahavira Developers LLP",
    description: "Plots for sale in Bhubaneswar with clear pricing.",
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/logo.jpg", alt: site.name }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15803d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
