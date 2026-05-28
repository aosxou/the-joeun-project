import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/config/assets";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "회사소개", href: "/about" },
    { label: "서비스", href: "/services" },
    { label: "소재안내", href: "/materials" },
    { label: "포트폴리오", href: "/portfolio" },
    { label: "고객센터", href: "/contact" },
  ];

  const inquiryItem = { label: "주문제작의뢰", href: "/inquiry" };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 relative">
          {/* 로고 - 왼쪽 고정 */}
          <Link href="/" className="absolute left-0">
            <span className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                더
              </div>
              <span className="text-gray-900">{BRAND.name}</span>
            </span>
          </Link>

          {/* 데스크톱 네비게이션 - 중앙 */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* 주문제작의뢰 버튼 - 오른쪽 */}
          <Link href={inquiryItem.href} className="absolute right-0 hidden md:block">
            <span className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer px-4 py-2 rounded-2xl">
              {inquiryItem.label}
            </span>
          </Link>

          {/* 모바일 메뉴 버튼 - 오른쪽 고정 */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors absolute right-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴 토글"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 네비게이션 */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href={inquiryItem.href}>
              <span
                className="block px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-2xl transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {inquiryItem.label}
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
