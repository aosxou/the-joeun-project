import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// 이미지 개수에 따른 grid 레이아웃 결정 함수
const getGridLayout = (imageCount: number) => {
  if (imageCount === 1) return "grid-cols-2";
  if (imageCount === 3) return "grid-cols-3";
  if (imageCount >= 4) return "grid-cols-4";
  return "grid-cols-2";
};

const portfolioItems = [
  // 행사 부스 집기류
  {
    id: 1,
    category: "행사 부스 집기류",
    title: "Cetaphil/Aveeno",
    description: "프리미엄 뷰티 브랜드 VMD 디스플레이 시스템",
    images: ["/portfolio/1. Cetaphil-Aveeno (1).png", "/portfolio/2. Cetaphil-Aveeno (2).png"],
    layout: "grid",
  },
  {
    id: 3,
    category: "행사 부스 집기류",
    title: "LA ROCHEPOSAY",
    description: "럭셔리 스킨케어 브랜드 전시 공간",
    images: ["/portfolio/3. LA ROCHEPOSAY.png"],
    layout: "single",
  },
  {
    id: 4,
    category: "행사 부스 집기류",
    title: "LISTERINE",
    description: "오럴케어 제품 맞춤형 VMD 솔루션",
    images: ["/portfolio/4. LISTERINE.png"],
    layout: "single",
  },
  {
    id: 5,
    category: "행사 부스 집기류",
    title: "BURT'S BEES",
    description: "내추럴 뷰티 브랜드 디스플레이 설계",
    images: ["/portfolio/5. BURT'S BEES(1).png", "/portfolio/6. BURT'S BEES(2).png"],
    layout: "grid",
  },

  // 디스플레이 집기류
  {
    id: 15,
    category: "디스플레이 집기류",
    title: "Dior",
    description: "럭셔리 뷰티 브랜드 디스플레이 집기",
    images: ["/portfolio/디스플레이 집기류1 디올 1.png", "/portfolio/디스플레이 집기류2 디올 2.png", "/portfolio/디스플레이 집기류3 디올 3.png", "/portfolio/디스플레이 집기류4 디올 4.png", "/portfolio/디스플레이 집기류5 디올 5.png", "/portfolio/디스플레이 집기류6 디올 6.png", "/portfolio/디스플레이 집기류7 디올 7.png"],
    layout: "mosaic",
  },
  {
    id: 22,
    category: "디스플레이 집기류",
    title: "Stonehenge",
    description: "고급 화장품 브랜드 집기",
    images: ["/portfolio/디스플레이 집기류8 Stonehenge(1).png", "/portfolio/디스플레이 집기류9 Stonehenge(2).png"],
    layout: "grid",
  },
  {
    id: 24,
    category: "디스플레이 집기류",
    layout: "stacked-side",
    items: [
      {
        title: "Monblanc",
        description: "프리미엄 필기구 브랜드 디스플레이",
        images: ["/portfolio/디스플레이 집기류10 Monblanc(1).png", "/portfolio/디스플레이 집기류11 Monblanc(2).png"],
      },
      {
        title: "Dior",
        description: "럭셔리 브랜드 고급 집기",
        images: ["/portfolio/디스플레이 집기류14 Dior.png"],
      },
      {
        title: "Goldendew",
        description: "뷰티 제품 프리미엄 디스플레이",
        images: ["/portfolio/디스플레이 집기류12 Goldendew(1).png", "/portfolio/디스플레이 집기류13 Goldendew(2).png"],
      },
      {
        title: "Dr.Arrivo",
        description: "뷰티 제품 프로페셔널 디스플레이",
        images: ["/portfolio/디스플레이 집기류20 Dr.Arrivo.png"],
      }
    ],
  },
  {
    id: 30,
    category: "디스플레이 집기류",
    title: "Pola",
    description: "프리미엄 스킨케어 디스플레이",
    images: ["/portfolio/디스플레이 집기류16 Pola(1).png", "/portfolio/디스플레이 집기류17 Pola(2).png", "/portfolio/디스플레이 집기류18 Pola(3).png"],
    layout: "grid",
  },
  {
    id: 33,
    category: "디스플레이 집기류",
    title: "Penhaligon's",
    description: "향수 브랜드 럭셔리 디스플레이",
    images: ["/portfolio/디스플레이 집기류19 Penhaligon's.png", "/portfolio/디스플레이 집기류23 Penhaligon's(2).png"],
    layout: "grid",
  },
  {
    id: 38,
    category: "디스플레이 집기류",
    title: "Shu uemura",
    description: "프로페셔널 뷰티 브랜드 디스플레이",
    images: ["/portfolio/디스플레이 집기류24 Shu uemura.png", "/portfolio/디스플레이 집기류25 Shu uemura(2).png"],
    layout: "grid",
  },

  // 디스플레이 전시물
  {
    id: 7,
    category: "디스플레이 전시물",
    title: "이마트 디스플레이",
    description: "대형 마트 매장용 POP 디스플레이",
    images: ["/portfolio/디스플레이 전시물 1 이마트 디스플레이(1).png", "/portfolio/디스플레이 전시물 2 이마트 디스플레이(2).png"],
    layout: "grid",
  },
  {
    id: 9,
    category: "디스플레이 전시물",
    layout: "group-4",
    items: [
      {
        title: "노브랜드 전시물",
        description: "소비자 중심 브랜드 전시 공간",
        images: ["/portfolio/디스플레이 전시물 3 노브랜드 전시물(1).png"],
      },
      {
        title: "일렉트로마트 POP",
        description: "가전제품 판매점 프로모션 디스플레이",
        images: ["/portfolio/디스플레이 전시물 4 일렉트로마트 POP.png"],
      },
      {
        title: "TRN 디스플레이",
        description: "브랜드 아이덴티티를 살린 전시 설계",
        images: ["/portfolio/디스플레이 전시물 5 TRN 디스플레이.png"],
      },
      {
        title: "Channel 디스플레이",
        description: "명품 브랜드 매장 연출",
        images: ["/portfolio/디스플레이 전시물 6 Channel 디스플레이.png"],
      }
    ],
  },
  {
    id: 13,
    category: "디스플레이 전시물",
    title: "Vedi Vero 쇼케이스",
    description: "럭셔리 쇼케이스 디자인",
    images: ["/portfolio/디스플레이 전시물 7 Vedi Vero 쇼케이스.png"],
    layout: "single",
  },
  {
    id: 14,
    category: "디스플레이 전시물",
    title: "Cartier 크리스마스 조형물",
    description: "시즈널 특별 전시 설치",
    images: ["/portfolio/디스플레이 전시물 8 Cartier 크리스마스 조형물.png"],
    layout: "single",
  },

  // 사인물·안내판
  {
    id: 40,
    category: "사인물·안내판",
    layout: "group-2",
    items: [
      {
        title: "백석대학교",
        description: "교육 기관 웨이파인딩 시스템",
        images: ["/portfolio/사인물, 안내판 1 백석대학교.png"],
      },
      {
        title: "김포대학교",
        description: "캠퍼스 안내 사인물",
        images: ["/portfolio/사인물, 안내판 2 김포대학교.png"],
      }
    ],
  },
  {
    id: 42,
    category: "사인물·안내판",
    title: "동안 이노스",
    description: "병원 의료시설 안내판",
    images: ["/portfolio/사인물, 안내판 3 동안 이노스.png"],
    layout: "single",
  },
  {
    id: 43,
    category: "사인물·안내판",
    title: "백화점 안내판",
    description: "상업시설 네비게이션",
    images: ["/portfolio/사인물, 안내판 4 백화점(1).png", "/portfolio/사인물, 안내판 5 백화점(2).png"],
    layout: "grid",
  },
  {
    id: 45,
    category: "사인물·안내판",
    title: "병원 안내 시스템",
    description: "의료 기관 환자 안내",
    images: ["/portfolio/사인물, 안내판 6 병원(1).png", "/portfolio/사인물, 안내판 7 병원 (2).png", "/portfolio/사인물, 안내판 8 병원 (3).png"],
    layout: "grid",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            포트폴리오
          </h1>
          <p className="text-lg text-blue-50 max-w-2xl mx-auto">
            더조은이 완성한 다양한 VMD 프로젝트들을 감상해보세요
          </p>
        </div>
      </section>

      {/* 포트폴리오 항목 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {portfolioItems.map((item, index) => {
            // 카테고리 변경 감지
            const prevCategory = index > 0 ? portfolioItems[index - 1].category : null;
            const isCategoryChange = index === 0 || item.category !== prevCategory;

            return (
              <div key={item.id}>
                {/* 카테고리 헤더 - 카테고리 변경 시에만 */}
                {isCategoryChange && (
                  <div className="mb-12 mt-12">
                    <p className="text-2xl md:text-3xl text-gray-700 font-semibold mb-4">
                      {item.category}
                    </p>
                    <div className="h-px bg-gray-300 mb-8"></div>
                  </div>
                )}

                {/* 포트폴리오 아이템 */}
                <div className={`mb-20 ${index === portfolioItems.length - 1 ? "mb-0" : ""}`}>
                  {/* group-2 레이아웃 (2개 항목 나란히) */}
                  {item.layout === "group-2" && (
                    <>
                      <div className="mb-8">
                        <div className="grid gap-8" style={{ gridTemplateColumns: '2fr 1fr' }}>
                          {item.items?.map((subItem, subIdx) => (
                            <div key={subIdx}>
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {subItem.title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {subItem.description}
                                </p>
                              </div>
                              <div className="overflow-hidden rounded-lg">
                                <img
                                  src={subItem.images[0]}
                                  alt={subItem.title}
                                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* group-4 레이아웃 (4개 항목 나란히) */}
                  {item.layout === "group-4" && (
                    <>
                      <div className="mb-8">
                        <div className="grid grid-cols-4 gap-8">
                          {item.items?.map((subItem, subIdx) => (
                            <div key={subIdx}>
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {subItem.title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {subItem.description}
                                </p>
                              </div>
                              <div className="overflow-hidden rounded-lg">
                                <img
                                  src={subItem.images[0]}
                                  alt={subItem.title}
                                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* auto-group 레이아웃 (stacked-side 스타일) */}
                  {item.layout === "auto-group" && (
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      {/* 왼쪽: Annasui + 타카미 (세로 배치) */}
                      <div className="space-y-8">
                        {item.items?.slice(0, 2).map((subItem, subIdx) => (
                          <div key={subIdx}>
                            <div className="mb-4">
                              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {subItem.title}
                              </h2>
                              <p className="text-base text-gray-600 font-light">
                                {subItem.description}
                              </p>
                            </div>
                            <div className={`grid gap-3 ${getGridLayout(subItem.images.length)}`}>
                              {subItem.images.map((img, imgIndex) => (
                                <div key={imgIndex} className="overflow-hidden rounded-lg h-96">
                                  <img
                                    src={img}
                                    alt={`${subItem.title} ${imgIndex + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 오른쪽: THREE */}
                      {item.items?.[2] && (
                        <div>
                          <div className="mb-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                              {item.items[2].title}
                            </h2>
                            <p className="text-base text-gray-600 font-light">
                              {item.items[2].description}
                            </p>
                          </div>
                          <div className={`grid gap-3 ${getGridLayout(item.items[2].images.length)}`}>
                            {item.items[2].images.map((img, imgIndex) => (
                              <div key={imgIndex} className="overflow-hidden rounded-lg h-72">
                                <img
                                  src={img}
                                  alt={`${item.items[2].title} ${imgIndex + 1}`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 배치 레이아웃 */}
                  {item.layout !== "auto-group" && (item.layout === "double" || item.layout === "triple" || item.layout === "stacked-side" || item.layout === "side-by-side" || item.layout === "quad" || item.layout === "four-grid") ? (
                    <div className={`grid gap-8 mb-8 ${item.layout === "stacked-side" ? "grid-cols-2" : item.layout === "triple" ? "grid-cols-3" : item.layout === "four-grid" ? "grid-cols-4" : "grid-cols-2"}`}>
                      {item.layout === "stacked-side" ? (
                        <>
                          {/* 왼쪽 열 */}
                          <div className="space-y-8">
                            {/* Monblanc */}
                            <div>
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {item.items[0].title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {item.items[0].description}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {item.items[0].images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="overflow-hidden rounded-lg">
                                    <img
                                      src={img}
                                      alt={`${item.items[0].title} ${imgIndex + 1}`}
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Goldendew */}
                            <div>
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {item.items[2].title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {item.items[2].description}
                                </p>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {item.items[2].images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="overflow-hidden rounded-lg">
                                    <img
                                      src={img}
                                      alt={`${item.items[2].title} ${imgIndex + 1}`}
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Dr.Arrivo */}
                            {item.items[3] && (
                              <div>
                                <div className="mb-4">
                                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                    {item.items[3].title}
                                  </h2>
                                  <p className="text-sm text-gray-600 font-light">
                                    {item.items[3].description}
                                  </p>
                                </div>
                                <div className="overflow-hidden rounded-lg">
                                  <img
                                    src={item.items[3].images[0]}
                                    alt={item.items[3].title}
                                    className="w-full h-auto object-contain"
                                  />
                                </div>
                              </div>
                            )}
                          </div>

                          {/* 오른쪽 열 - Dior */}
                          <div>
                            <div className="mb-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {item.items[1].title}
                              </h2>
                              <p className="text-sm text-gray-600 font-light">
                                {item.items[1].description}
                              </p>
                            </div>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={item.items[1].images[0]}
                                alt={item.items[1].title}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </div>
                        </>
                      ) : item.layout === "side-by-side" ? (
                        <div className="grid grid-cols-2 gap-8">
                          {/* 왼쪽: Penhaligon's 이미지 세로 배치 */}
                          <div className="space-y-4">
                            <div className="mb-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {item.items[0].title}
                              </h2>
                              <p className="text-sm text-gray-600 font-light">
                                {item.items[0].description}
                              </p>
                            </div>
                            {item.items[0].images.map((img, imgIndex) => (
                              <div key={imgIndex} className="overflow-hidden rounded-lg">
                                <img
                                  src={img}
                                  alt={`${item.items[0].title} ${imgIndex + 1}`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            ))}
                          </div>

                          {/* 오른쪽: Annasui */}
                          <div>
                            <div className="mb-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {item.items[1].title}
                              </h2>
                              <p className="text-sm text-gray-600 font-light">
                                {item.items[1].description}
                              </p>
                            </div>
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={item.items[1].images[0]}
                                alt={item.items[1].title}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      ) : item.layout === "quad" ? (
                        <div className="grid grid-cols-4 gap-8">
                          {/* Penhaligon's - 첫 번째 열 (2개 이미지 세로) */}
                          <div className="space-y-4">
                            <div className="mb-4">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                {item.items[0].title}
                              </h2>
                              <p className="text-sm text-gray-600 font-light">
                                {item.items[0].description}
                              </p>
                            </div>
                            {item.items[0].images.map((img, imgIndex) => (
                              <div key={imgIndex} className="overflow-hidden rounded-lg">
                                <img
                                  src={img}
                                  alt={`${item.items[0].title} ${imgIndex + 1}`}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Annasui, THREE, 타카미 - 각각 한 열씩 */}
                          {[1, 2, 3].map((idx) => (
                            <div key={idx}>
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {item.items[idx].title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {item.items[idx].description}
                                </p>
                              </div>
                              <div className="overflow-hidden rounded-lg">
                                <img
                                  src={item.items[idx].images[0]}
                                  alt={item.items[idx].title}
                                  className="w-full h-auto object-contain"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : item.layout === "four-grid" ? (
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                          {item.items.map((subItem, subIdx) => (
                            <div key={subIdx} className="break-inside-avoid">
                              <div className="mb-4">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                  {subItem.title}
                                </h2>
                                <p className="text-base text-gray-600 font-light">
                                  {subItem.description}
                                </p>
                              </div>
                              <div className="space-y-4">
                                {subItem.images.map((img, imgIndex) => (
                                  <div key={imgIndex} className="overflow-hidden rounded-lg break-inside-avoid">
                                    <img
                                      src={img}
                                      alt={`${subItem.title} ${imgIndex + 1}`}
                                      className="w-full h-auto object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.items.map((subItem, subIndex) => (
                            <div key={subIndex}>
                              {/* 제목 & 설명 */}
                              <div className="mb-4">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                  {subItem.title}
                                </h2>
                                <p className="text-sm text-gray-600 font-light">
                                  {subItem.description}
                                </p>
                              </div>

                              {/* 이미지 */}
                              {subItem.images.length === 1 ? (
                                <div className="overflow-hidden rounded-lg">
                                  <img
                                    src={subItem.images[0]}
                                    alt={subItem.title}
                                    className="w-full h-auto object-contain"
                                  />
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 gap-2">
                                  {subItem.images.map((img, imgIndex) => (
                                    <div key={imgIndex} className="overflow-hidden rounded-lg">
                                      <img
                                        src={img}
                                        alt={`${subItem.title} ${imgIndex + 1}`}
                                        className="w-full h-auto object-contain"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))
                      )}
                    </div>
                  ) : (
                    <>
                      {/* 제목 & 설명 */}
                      {item.title && (
                        <div className="mb-8">
                          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h2>
                          <p className="text-lg text-gray-600 font-light">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {/* 레이아웃별 이미지 표시 */}
                  {item.layout === "overlap" && (
                    <div className="relative mb-8" style={{ paddingBottom: "60%" }}>
                      {item.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="absolute overflow-hidden rounded-lg shadow-lg"
                          style={{
                            left: `${imgIndex * 15}%`,
                            top: `${imgIndex * 10}%`,
                            width: "75%",
                            zIndex: imgIndex,
                          }}
                        >
                          <img
                            src={img}
                            alt={`${item.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {(item.layout === "grid" || item.layout === "auto") && (
                    <div className={`grid gap-6 mb-8 ${
                      item.images.length === 1 ? "grid-cols-2" :
                      item.images.length === 2 ? "grid-cols-2" :
                      item.images.length === 3 ? "grid-cols-3" :
                      "grid-cols-4"
                    }`}>
                      {item.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden rounded-lg">
                          <img
                            src={img}
                            alt={`${item.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.layout === "vertical" && (
                    <div className="space-y-6 mb-8">
                      {item.images.map((img, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden rounded-lg">
                          <img
                            src={img}
                            alt={`${item.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.layout === "mosaic" && (
                    <div className="mb-8 columns-2 md:columns-3 lg:columns-5 gap-4 space-y-4">
                      {item.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="overflow-hidden rounded-lg break-inside-avoid bg-gray-100"
                        >
                          <img
                            src={img}
                            alt={`${item.title} ${imgIndex + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {item.layout === "single" && (
                    <div className="overflow-hidden rounded-lg mb-8">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            당신의 프로젝트를 시작하세요
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            더조은과 함께 멋진 VMD 프로젝트를 만들어보세요
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
