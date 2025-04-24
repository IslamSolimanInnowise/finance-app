import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Finance App | Track Spending, Budget & Save Money",
  description:
    "A Next.js-powered personal finance dashboard to track expenses, visualize spending, and manage budgets. Responsive, fast, and built with modern web tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable} antialiased bg-Secondary-Purple`}
      >
        {children}
      </body>
    </html>
  );
}
