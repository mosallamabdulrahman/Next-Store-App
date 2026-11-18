import type { Metadata, Viewport } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "@app/globals.css";

import { getCategories } from "@/lib/woocommerce/categories";
import { Header } from "@app/components/common/Header";
import { Footer } from "@app/components/common/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mosalam Store — Curated Modern Tech & Home Essentials",
  description:
    "Discover curated smartphones, studio audio, computing gear, and refined home appliances at Mosalam Store. Fast shipping and official warranty.",
};

export const viewport: Viewport = {
  themeColor: "#0F3D3E",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategories();
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${ibmPlexArabic.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-dvh flex flex-col bg-[#FAF9F6] text-[#18181B] font-sans selection:bg-[#0F3D3E] selection:text-[#FAF9F6]">
        <Header categories={categories} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
