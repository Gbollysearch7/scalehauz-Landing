import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scale Hauz - Minimalist Monolith",
  description: "AI-Powered Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased bg-monolith-bg text-monolith-fg font-display selection:bg-white selection:text-black`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
