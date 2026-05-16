import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Todo App",
  description: "this is simple todos app with zustand state management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl backdrop-blur-2xl bg-white/50 border border-white/40 shadow-2xl rounded-3xl p-6">
        {children}
      </div>
    </div>
  );
}
