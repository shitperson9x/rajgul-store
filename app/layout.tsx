import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "epos*rajgul store - Jasa Naikin Rank Mobile Legends",
  description: "Jasa rank boosting Mobile Legends terpercaya dan aman. Tingkatkan rank ML kamu dengan cepat!",
  keywords: ["mobile legends", "jasa boosting", "rank ml", "joki ml", "naikin bintang ml", "mabar vip ml"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#667eea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
