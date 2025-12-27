import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "사랑으로 돌보는 우리 아이 미용",
    template: "%s | 애견 미용실",
  },
  description: "편안함을 먼저 생각하는 애견 미용실",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "애견 미용실",
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
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

