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
  title: "CHOWA Planning - 総合企画・コンサルティング",
  description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする総合企画・コンサルティング会社です。住宅設計、商業建築、都市計画など幅広いサービスを提供しています。",
  keywords: "総合企画, コンサルティング, 建築設計, 住宅設計, 商業建築, 都市計画, 環境配慮, 持続可能, 東京",
  authors: [{ name: "CHOWA Planning" }],
  creator: "CHOWA Planning",
  publisher: "CHOWA Planning",
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
    title: "CHOWA Planning - 総合企画・コンサルティング",
    description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする総合企画・コンサルティング会社です。",
    url: 'https://chowa-planning.com',
    siteName: 'CHOWA Planning',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CHOWA Planning - 総合企画・コンサルティング",
    description: "誠実な監理、自然素材と持続可能性、まち文脈の読み解きを大切にする総合企画・コンサルティング会社です。",
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
