/**
 * 웹사이트 에셋 및 이미지 URL 설정
 * 모든 이미지는 S3 CDN에 호스팅되며, 웹사이트 생명주기와 함께 유지됩니다.
 */

export const ASSETS = {
  // 히어로 배경
  hero: {
    background: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/hero-background-cfb3hv8RSUPAqLzgZqneuR.webp",
  },

  // 서비스 아이콘
  services: {
    design: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/service-design-3os4tNG4VJjzQv5kbt9Ain.webp",
    blueprint: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/service-blueprint-iHgnaKx2PQiZAs2uV2hT5P.webp",
    acrylic: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/service-acrylic-kL5A6xYg4rE2bAntPDZ5ai.webp",
    metal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/service-metal-k8Kk8acL4b8m2d5k5SdVn5.webp",
  },

  // 포트폴리오 샘플
  portfolio: {
    sample1: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/portfolio-sample-1-6XB3zFV4BvHqUBmLmB92ao.webp",
    sample2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/portfolio-sample-2-PCDtkJrhof7kyjEeAeQvUb.webp",
  },

  // 소재 샘플
  materials: {
    acrylic: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/material-acrylic-QTv4p6Fw3ZTrcsYtVTaXH9.webp",
    metal: "https://d2xsxph8kpxj0f.cloudfront.net/310519663677930404/KC6kt7VyN36FLNPkK7v8o8/material-metal-SRhUCGazRWxuHEPHxJYNHV.webp",
  },
};

/**
 * 브랜드 정보
 */
export const BRAND = {
  name: "더조은",
  fullName: "(주)더조은",
  tagline: "기획부터 제작까지 한번에",
  description: "VMD 원스톱 제작 전문 브랜드",
  contact: {
    phone: "02-441-0725",
    email: "taing725@daum.net",
  },
  social: {
    instagram: "https://instagram.com", // 실제 인스타그램 링크로 변경 필요
  },
};

/**
 * 색상 팔레트
 */
export const COLORS = {
  primary: "#0066CC", // 진한 파란색
  secondary: "#00A8A8", // 청록색
  accent: "#FF6B35", // 주황색 (CTA용)
  dark: "#1A1A1A", // 거의 검은색
  light: "#F5F5F5", // 거의 흰색
  border: "#E0E0E0", // 보더 색상
};

/**
 * 서비스 정보
 */
export const SERVICES = [
  {
    id: 1,
    title: "디자인 시안 제안",
    description: "고객의 요구사항을 반영한 맞춤형 디자인 시안을 제안합니다.",
    icon: "design",
  },
  {
    id: 2,
    title: "맞춤형 도면 설계",
    description: "정밀한 기술 도면을 통해 제작 과정을 명확히 합니다.",
    icon: "blueprint",
  },
  {
    id: 3,
    title: "아크릴 가공",
    description: "투명성과 내구성이 뛰어난 아크릴 소재를 정밀 가공합니다.",
    icon: "acrylic",
  },
  {
    id: 4,
    title: "금속 가공",
    description: "스테인리스 스틸, 알루미늄 등 다양한 금속을 전문적으로 가공합니다.",
    icon: "metal",
  },
  {
    id: 5,
    title: "고해상도 인쇄",
    description: "고품질의 비주얼 인쇄로 완성도 높은 결과물을 제공합니다.",
    icon: "design",
  },
];

/**
 * 소재 정보
 */
export const MATERIAL_INFO = [
  {
    id: 1,
    name: "아크릴",
    description: "투명성과 내구성이 뛰어난 소재로 다양한 색상과 두께로 제공됩니다.",
    characteristics: ["투명성", "내구성", "가공용이", "다양한 색상"],
    applications: ["디스플레이", "사이니지", "조명", "소품"],
    features: ["투명성과 내구성이 뛰어남", "다양한 색상 선택 가능", "정밀한 절단 및 가공", "UV 차단 옵션 제공"],
    image: "acrylic",
  },
  {
    id: 2,
    name: "금속",
    description: "스테인리스 스틸과 알루미늄으로 고급스러운 마감을 구현합니다.",
    characteristics: ["고급스러움", "내구성", "정밀 가공", "다양한 마감"],
    applications: ["프레임", "구조물", "장식", "기계부품"],
    features: ["스테인리스 스틸 및 알루미늄 사용", "고급스러운 표면 마감", "정밀한 용접 및 가공", "다양한 색상 도금 가능"],
    image: "metal",
  },
];
