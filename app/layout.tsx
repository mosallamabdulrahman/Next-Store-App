import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@app/globals.css";

import { FetchWooCategories } from "@/lib/woocommerce";
import { Header } from "@app/components/common/Header";
import { Footer } from "@app/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WoodMart - Electronics & Household Appliances Mega Store",
  description:
    "Explore the latest smartphones, laptops, electronics, gaming gear, and home appliances with fast shipping and warranty.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = (await FetchWooCategories()) || [];
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fafafa] text-gray-900 font-sans">
        <Header categories={categories} />
        <main className="flex-1 p-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
