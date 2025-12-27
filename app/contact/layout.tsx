import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "예약 및 문의",
  description: "예약 우선제로 운영하는 애견 미용실입니다. 방문 전 미리 예약해주시면 더욱 편리하게 이용하실 수 있습니다.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

