import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MakeLandingPage",
  description:
    "비즈니스 성장을 위한 맞춤형 랜딩 페이지 제작 서비스를 제공합니다.",
  openGraph: {
    title: "MakeLandingPage",
    description:
      "비즈니스 성장을 위한 맞춤형 랜딩 페이지 제작 서비스를 제공합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="bg-blob" />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
