"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "홈", href: "/" },
  { name: "미용 서비스", href: "/services" },
  { name: "미용 사례", href: "/gallery" },
  { name: "샵 소개", href: "/about" },
  { name: "예약 및 문의", href: "/contact" },
  { name: "오시는 길", href: "/location" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-offWhite/95 backdrop-blur-sm border-b border-pastel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-darkGray">
            애견 미용실
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? "text-softBrown font-medium"
                    : "text-darkGray hover:text-softBrown"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-darkGray">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

