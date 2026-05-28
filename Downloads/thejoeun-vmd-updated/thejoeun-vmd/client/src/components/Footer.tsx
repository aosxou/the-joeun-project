import { BRAND } from "@/config/assets";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{BRAND.fullName}</h3>
            <p className="text-sm text-gray-400 mb-4">{BRAND.description}</p>
            <p className="text-xs text-gray-500">
              슬로건: <span className="text-cyan-400">{BRAND.tagline}</span>
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-white font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-cyan-400 transition-colors">회사소개</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">서비스</a></li>
              <li><a href="/portfolio" className="hover:text-cyan-400 transition-colors">포트폴리오</a></li>
              <li><a href="/inquiry" className="hover:text-cyan-400 transition-colors">주문의뢰</a></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <a href={`tel:${BRAND.contact.phone}`} className="hover:text-cyan-400 transition-colors">
                  {BRAND.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <a href={`mailto:${BRAND.contact.email}`} className="hover:text-cyan-400 transition-colors">
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-gray-400">서울시 강남구</span>
              </div>
            </div>
          </div>

          {/* SNS */}
          <div>
            <h4 className="text-white font-semibold mb-4">팔로우</h4>
            <div className="flex gap-4">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-500 transition-colors"
                aria-label="인스타그램"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          {/* 사업자 정보 */}
          <div className="text-xs text-gray-500 mb-4 space-y-1">
            <p>회사명: (주)더조은</p>
            <p>대표: 민성웅, 이혜진</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 강남구 테헤란로 123</p>
          </div>

          {/* 저작권 */}
          <div className="text-center text-xs text-gray-600 pt-4 border-t border-gray-800">
            <p>&copy; {currentYear} {BRAND.fullName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
