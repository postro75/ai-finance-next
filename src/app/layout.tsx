import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI & Finance — Inteligentne doradztwo finansowe z AI",
  description: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji. Strategie inwestycyjne wspierane AI.",
  openGraph: {
    title: "AI & Finance — Inteligentne doradztwo finansowe z AI",
    description: "Strategie inwestycyjne wspierane AI. 20+ lat doświadczenia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
