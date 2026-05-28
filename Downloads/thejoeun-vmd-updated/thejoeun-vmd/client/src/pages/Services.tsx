import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ASSETS, SERVICES } from "@/config/assets";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceDetails = [
    {
      id: 1,
      title: "디자인 시안 제안",
      description: "고객의 요구사항과 브랜드 아이덴티티를 반영한 맞춤형 디자인 시안을 제안합니다.",
      benefits: [
        "고객 요구사항 분석",
        "브랜드 아이덴티티 반영",
        "다양한 디자인 옵션 제시",
        "수정 및 보완 지원",
      ],
      image: ASSETS.services.design,
    },
    {
      id: 2,
      title: "맞춤형 도면 설계",
      description: "정밀한 기술 도면을 통해 제작 과정을 명확히 하고 오류를 최소화합니다.",
      benefits: [
        "정밀한 치수 설정",
        "3D 렌더링 제공",
        "제작 공정 최적화",
        "품질 관리 강화",
      ],
      image: ASSETS.services.blueprint,
    },
    {
      id: 3,
      title: "아크릴 가공",
      description: "투명성과 내구성이 뛰어난 아크릴 소재를 정밀하게 가공합니다.",
      benefits: [
        "다양한 색상 선택",
        "정밀 제단 및 가공",
        "고급스러운 마감",
        "UV 인쇄 가능",
      ],
      image: ASSETS.services.acrylic,
    },
    {
      id: 4,
      title: "금속 가공",
      description: "스테인리스 스틸, 알루미늄 등 다양한 금속을 전문적으로 가공합니다.",
      benefits: [
        "스테인리스 스틸 가공",
        "알루미늄 가공",
        "용접 및 조립",
        "다양한 마감 처리",
      ],
      image: ASSETS.services.metal,
    },
    {
      id: 5,
      title: "고해상도 인쇄",
      description: "고품질의 비주얼 인쇄로 완성도 높은 최종 결과물을 제공합니다.",
      benefits: [
        "고해상도 출력",
        "생생한 색감 표현",
        "다양한 인쇄 방식",
        "내구성 강화",
      ],
      image: ASSETS.services.design,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            서비스
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            기획부터 제작까지 모든 과정을 전문적으로 처리합니다
          </p>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              원스톱 VMD 솔루션
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              더조은은 디자인 시안 제안부터 최종 설치까지 모든 과정을 한 곳에서 처리합니다. 
              고객의 브랜드 가치를 극대화하기 위해 각 프로젝트에 최적화된 솔루션을 제공합니다.
            </p>
          </div>

          {/* 서비스 상세 */}
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* 이미지 */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* 텍스트 */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="text-cyan-500 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 프로세스 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            제작 프로세스
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 1, title: "상담", description: "고객 요구사항 파악" },
                { step: 2, title: "디자인", description: "시안 제안 및 수정" },
                { step: 3, title: "제작", description: "정밀 가공 및 조립" },
                { step: 4, title: "완성", description: "품질 확인 및 배송" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-md text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  {/* 화살표 */}
                  {index < 3 && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="text-blue-600" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            더조은과 함께 당신의 아이디어를 현실로 만들어보세요
          </p>
          <a
            href="/inquiry"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            주문제작 의뢰하기
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
