import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ASSETS, BRAND, SERVICES, MATERIAL_INFO } from "@/config/assets";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: ASSETS.hero.background,
      title: "기획부터 제작까지",
      subtitle: "한번에",
      description: "기획부터 제작까지 모든 과정을 한 곳에서 완성하는 VMD 원스톱 솔루션",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 히어로 섹션 - 슬라이더 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg md:text-xl text-gray-200 mb-4 font-light">
            Your Story, Our Creation
          </p>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            {slides[currentSlide].title}
            <br />
            {slides[currentSlide].subtitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 font-light">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="/about">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg rounded-none font-semibold">
                더 알아보기
              </Button>
            </a>
          </div>
        </div>

        {/* 슬라이더 네비게이션 */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-gray-300 transition"
        >
          <ChevronRight size={40} />
        </button>
      </section>

      {/* 포트폴리오 섹션 1 - 이미지 좌측, 텍스트 우측 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={ASSETS.portfolio.sample1}
                alt="포트폴리오"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-gray-500 font-semibold mb-4">PORTFOLIO</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                프리미엄 VMD
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                더조은과 함께한 프리미엄 프로젝트들은 브랜드의 가치를 극대화하고 고객의 경험을 혁신합니다.
              </p>
              <a href="/portfolio">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-none font-semibold">
                  전체 포트폴리오 보기
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 클라이언트 섹션 */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-sm text-gray-500 font-semibold mb-4">CLIENTS</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              더조은과 함께한 기업들
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "삼성전자",
              "LG전자",
              "현대자동차",
              "SK하이닉스",
              "롯데그룹",
              "CJ그룹",
              "한국항공",
              "신한은행",
            ].map((company) => (
              <div
                key={company}
                className="flex items-center justify-center h-32 bg-white rounded-lg border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <p className="text-center font-semibold text-gray-700 text-sm md:text-base">
                  {company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 섹션 - 이미지 우측, 텍스트 좌측 */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-4">SERVICES</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                원스톱 VMD 솔루션
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                디자인부터 제작, 설치까지 모든 과정을 전문적으로 처리합니다. 더조은은 고객의 요구사항을 정확히 이해하고 최고의 결과물을 제공합니다.
              </p>
              <a href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-none font-semibold">
                  서비스 상세 보기
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
            <div>
              <img
                src={ASSETS.services.design}
                alt="서비스"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* 서비스 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="flex flex-col">
                <div className="mb-6 h-20 flex items-center">
                  <img
                    src={ASSETS.services[service.icon as keyof typeof ASSETS.services]}
                    alt={service.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 소재 섹션 - 이미지 좌측, 텍스트 우측 */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src={ASSETS.materials.acrylic}
                alt="소재"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-gray-500 font-semibold mb-4">MATERIALS</p>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                다양한 소재 안내
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                아크릴, 금속 등 다양한 소재로 고급스러운 결과물을 완성합니다. 각 소재의 특성을 최대한 활용하여 최적의 디자인을 구현합니다.
              </p>
              <a href="/materials">
                <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-6 text-base rounded-none font-semibold">
                  소재 상세 정보
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
          </div>

          {/* 소재 상세 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {MATERIAL_INFO.map((material) => (
              <div key={material.id} className="flex flex-col">
                <div className="h-80 overflow-hidden bg-gray-200 mb-8">
                  <img
                    src={ASSETS.materials[material.image as keyof typeof ASSETS.materials]}
                    alt={material.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {material.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {material.description}
                </p>
                <ul className="space-y-2">
                  {material.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-3 font-bold">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold mb-4 opacity-90">GET STARTED</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            프리미엄 VMD 제작을 시작하세요
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            더조은과 함께 당신의 브랜드를 새롭게 표현해보세요
          </p>
          <a href="/inquiry">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-lg rounded-none font-semibold">
              지금 의뢰하기
              <ArrowRight className="ml-3" size={20} />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
