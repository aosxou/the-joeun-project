import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BRAND } from "@/config/assets";
import { CheckCircle } from "lucide-react";

export default function About() {
  const strengths = [
    {
      title: "기획부터 제작까지",
      description: "디자인 시안 제안부터 최종 제작까지 모든 과정을 한 곳에서 처리합니다.",
    },
    {
      title: "다양한 소재 활용",
      description: "아크릴, 금속 등 다양한 소재에 대한 깊이 있는 이해와 활용 능력을 갖추고 있습니다.",
    },
    {
      title: "정밀한 가공 기술",
      description: "소재별 정밀 제단, 가공, 고급스러운 증착 등 최고 수준의 기술력을 보유합니다.",
    },
    {
      title: "고해상도 인쇄",
      description: "고해상도 비주얼 인쇄로 완성도 높은 최종 결과물을 제공합니다.",
    },
  ];

  const history = [
    { year: "2016", event: "더조은 설립" },
    { year: "2018", event: "아크릴 가공 설비 확충" },
    { year: "2020", event: "금속 가공 전문화" },
    { year: "2022", event: "고해상도 인쇄 시설 도입" },
    { year: "2024", event: "VMD 원스톱 솔루션 제공 시작" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            회사소개
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            {BRAND.fullName}는 기획부터 제작까지 한 번에 처리하는 VMD 원스톱 솔루션 전문 기업입니다
          </p>
        </div>
      </section>

      {/* 브랜드 스토리 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              더조은의 이야기
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                {BRAND.fullName}는 2016년 설립 이래 <strong>최고의 기술력과 제품을 선보이겠습니다</strong>라는 철학으로 
                VMD(Visual Merchandising Display) 분야에서 선도적인 역할을 해오고 있습니다.
              </p>
              <p>
                저희는 단순한 제조 기업이 아닙니다. 고객의 브랜드 가치를 극대화하기 위해 
                <strong>기획 단계부터 최종 설치까지 모든 과정에 참여</strong>하며, 
                각 프로젝트에 최적화된 솔루션을 제공합니다.
              </p>
              <p>
                아크릴, 금속, LED, CNC, 레이저, 실크인쇄 등 다양한 소재와 기술을 활용하여 
                고객의 상상을 현실로 만드는 것이 저희의 목표입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 역량 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            핵심 역량
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-cyan-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 연혁 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            연혁
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < history.length - 1 && (
                      <div className="w-1 h-16 bg-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-2xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </p>
                    <p className="text-lg text-gray-700">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            문의하기
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              전화: <a href={`tel:${BRAND.contact.phone}`} className="text-cyan-400 hover:underline">{BRAND.contact.phone}</a>
            </p>
            <p className="text-lg">
              이메일: <a href={`mailto:${BRAND.contact.email}`} className="text-cyan-400 hover:underline">{BRAND.contact.email}</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
