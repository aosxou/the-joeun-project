import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BRAND } from "@/config/assets";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            고객센터
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            언제든지 편하게 연락주세요. 신속하고 친절하게 답변해드리겠습니다.
          </p>
        </div>
      </section>

      {/* 연락처 정보 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* 전화 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">전화</h3>
              <a
                href={`tel:${BRAND.contact.phone}`}
                className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {BRAND.contact.phone}
              </a>
              <p className="text-gray-600 mt-4">평일 09:00 ~ 18:00</p>
            </div>

            {/* 이메일 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-cyan-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">이메일</h3>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors break-all"
              >
                {BRAND.contact.email}
              </a>
              <p className="text-gray-600 mt-4">24시간 접수 가능</p>
            </div>

            {/* 위치 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">위치</h3>
              <p className="text-lg text-gray-700">
                서울특별시 강남구 테헤란로 123
              </p>
              <p className="text-gray-600 mt-4">(주)더조은</p>
            </div>

            {/* 업무시간 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">업무시간</h3>
              <div className="text-gray-700 space-y-1">
                <p>평일: 09:00 ~ 18:00</p>
                <p>토요일: 10:00 ~ 14:00</p>
                <p className="text-gray-600">일요일, 공휴일 휴무</p>
              </div>
            </div>
          </div>

          {/* 지도 */}
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.2839509999998!2d127.06421!3d37.49801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f4e0000001%3A0x0!2z7ZWc6rWt!5e0!3m2!1sko!2skr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            자주 묻는 질문
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "주문 후 제작 기간은 얼마나 걸리나요?",
                a: "프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 2~4주 정도 소요됩니다. 상담 시 정확한 일정을 안내해드립니다.",
              },
              {
                q: "최소 주문 수량이 있나요?",
                a: "특별한 최소 주문 수량 제한은 없습니다. 소규모 프로젝트도 환영합니다. 상담을 통해 최적의 솔루션을 제시해드립니다.",
              },
              {
                q: "샘플 제작이 가능한가요?",
                a: "네, 가능합니다. 샘플 제작을 통해 최종 결과물을 미리 확인할 수 있습니다. 추가 비용이 발생할 수 있으니 상담 시 문의해주세요.",
              },
              {
                q: "A/S는 어떻게 되나요?",
                a: "제품 배송 후 1년간 무상 A/S를 제공합니다. 제조 결함으로 인한 손상은 무상으로 교체 또는 수리해드립니다.",
              },
              {
                q: "해외 배송이 가능한가요?",
                a: "네, 해외 배송도 가능합니다. 배송지역과 제품에 따라 배송료가 상이하니 상담 시 문의해주세요.",
              },
              {
                q: "디자인 수정은 몇 번까지 가능한가요?",
                a: "계약 단계에서 수정 횟수를 협의합니다. 일반적으로 3회까지 무상 수정을 제공하며, 추가 수정은 별도 비용이 발생할 수 있습니다.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Q. {item.q}
                </h3>
                <p className="text-gray-700">
                  A. {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            언제든지 편하게 연락주세요. 더조은이 성실하게 답변해드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BRAND.contact.phone}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              전화하기
            </a>
            <a
              href="/inquiry"
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              주문 의뢰하기
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
