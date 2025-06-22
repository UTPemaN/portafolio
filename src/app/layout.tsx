import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmanuellDev - Desarrollador Frontend & Backend",
  description: "Portafolio profesional de Emanuel Muñoz Lopez, desarrollador especializado en React, Next.js, TypeScript y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
