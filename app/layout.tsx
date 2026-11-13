import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#F8F8F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "GÜMELİ | Official Online Store",
  description: "GÜMELİ Official Online Store. Architectural leather bags, modern minimalism, and timeless craftsmanship.",
  metadataBase: new URL("https://xn--gmeli-kva.com.tr"),
  alternates: {
    canonical: "https://xn--gmeli-kva.com.tr",
  },
  openGraph: {
    title: "GÜMELİ | Official Online Store",
    description: "Architectural leather goods and minimalist silhouettes.",
    url: "https://xn--gmeli-kva.com.tr",
    siteName: "GÜMELİ",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GÜMELİ | Official Online Store",
    description: "Architectural leather goods and minimalist silhouettes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F8F8F6] text-[#0A0A0A] font-sans antialiased selection:bg-[#0A0A0A] selection:text-[#F8F8F6]">
        {children}
      </body>
    </html>
  );
}
