import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Air Jernih Indonesia - Maintenance Kolam Renang Profesional",
  description: "Layanan maintenance kolam renang profesional untuk rumah pribadi dan proyek konstruksi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} h-full bg-white text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
