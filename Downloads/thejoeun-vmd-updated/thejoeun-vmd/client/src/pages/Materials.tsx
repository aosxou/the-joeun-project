import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ASSETS, MATERIAL_INFO } from "@/config/assets";
import { CheckCircle } from "lucide-react";

export default function Materials() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            소재 안내
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            다양한 소재별 특성과 활용 방법을 소개합니다
          </p>
        </div>
      </section>

      {/* 소재 상세 정보 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {MATERIAL_INFO.map((material, index) => (
              <div
                key={material.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                {/* 이미지 */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg overflow-hidden h-80">
                    <img
                      src={ASSETS.materials[material.image as keyof typeof ASSETS.materials]}
                      alt={material.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* 정보 */}
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {material.name}
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {material.description}
                  </p>

                  {/* 특성 */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      특성
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {material.characteristics.map((char) => (
                        <div key={char} className="flex items-center gap-2">
                          <CheckCircle className="text-cyan-500 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 활용 예시 */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      활용 예시
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {material.applications.map((app) => (
                        <div
                          key={app}
                          className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-gray-700"
                        >
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 소재 비교 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            소재 비교
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">특성</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">아크릴</th>
                  <th className="border border-gray-300 px-4 py-3 text-center">금속</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">투명성</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">높음</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">낮음</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">내구성</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">높음</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">매우 높음</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">가공용이</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">매우 높음</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">중간</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">색상 다양성</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">매우 높음</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">낮음</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">고급스러움</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">높음</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">매우 높음</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">비용</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">중간</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">높음</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            최적의 소재를 선택하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            더조은의 전문가와 상담하여 당신의 프로젝트에 가장 적합한 소재를 선택할 수 있습니다
          </p>
          <a
            href="/inquiry"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            상담 신청하기
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
