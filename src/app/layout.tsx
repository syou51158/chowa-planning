import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageTransition } from '@/components/ui/page-transition';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "調和プランニング - 建築設計事務所",
  description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする建築設計事務所です。住宅設計、商業建築、都市計画など幅広いサービスを提供しています。",
  keywords: "建築設計, 住宅設計, 商業建築, 都市計画, 環境配慮, 持続可能, 東京, 設計事務所",
  authors: [{ name: "調和プランニング" }],
  creator: "調和プランニング",
  publisher: "調和プランニング",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chowa-planning.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "調和プランニング - 建築設計事務所",
    description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする建築設計事務所です。",
    url: 'https://chowa-planning.com',
    siteName: '調和プランニング',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "調和プランニング - 建築設計事務所",
    description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする建築設計事務所です。",
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
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <PageTransition>
          <main className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
