export interface Product {
  idx: number;
  title: string;
  subtitle: string;
  region: string;
  duration: string;
  difficulty: string;
  highlight: string;
  url: string;
  image: string;
  isOpen: boolean;
}

export const PRODUCTS: Record<number, Product> = {
  198: {
    idx: 198,
    title: "인턴해녀와 해녀유산 탐구생활",
    subtitle: "세화마을 해녀문화 투어",
    region: "제주 구좌 세화",
    duration: "약 1시간",
    difficulty: "입문",
    highlight: "안내판에 없는 인턴해녀의 깊은 이야기",
    url: "https://eataround.co.kr/trip-jeju/?idx=198",
    image: "https://cdn-optimized.imweb.me/thumbnail/20260319/d74ed3fe96952.jpg?w=750",
    isOpen: true,
  },
  159: {
    idx: 159,
    title: "금능 해녀 블루스",
    subtitle: "해녀 마을 이야기와 갯닦이",
    region: "제주 한림 금능",
    duration: "약 2.5시간",
    difficulty: "쉬움",
    highlight: "60여 명 해녀 마을 골목 깊숙이",
    url: "https://eataround.co.kr/trip-jeju/?idx=159",
    image: "https://cdn-optimized.imweb.me/thumbnail/20251111/9ae53c6194d1b.jpg?w=750",
    isOpen: true,
  },
  171: {
    idx: 171,
    title: "다랑쉬오름 웰니스 트레킹",
    subtitle: "숲 해설가와 함께하는 힐링 트레킹",
    region: "제주 구좌 세화",
    duration: "약 2시간",
    difficulty: "입문~중급",
    highlight: "가벼운 자연 산책 + 숲 해설",
    url: "https://eataround.co.kr/trip-jeju/?idx=171",
    image: "https://cdn-optimized.imweb.me/thumbnail/20250818/bf403ef83dce9.jpg?w=750",
    isOpen: true,
  },
  83: {
    idx: 83,
    title: "찹쌀 막걸리 빚으며, 전통주 곁들이기",
    subtitle: "술도가제주바당 막걸리빚기 체험",
    region: "제주 한동",
    duration: "약 2시간",
    difficulty: "실내 체험",
    highlight: "내가 만든 찹쌀막걸리 가져가기",
    url: "https://eataround.co.kr/trip-jeju/?idx=83",
    image: "https://cdn-optimized.imweb.me/thumbnail/20230714/42b8976db97d2.jpg?w=750",
    isOpen: true,
  },
  190: {
    idx: 190,
    title: "테라리움 디저트 만들기",
    subtitle: "곶자왈을 닮은 테라리움 디저트 만들기",
    region: "제주 선흘",
    duration: "약 2시간",
    difficulty: "실내 체험",
    highlight: "시각·미각 모두 자극, 비 오는 날 OK",
    url: "https://eataround.co.kr/trip-jeju/?idx=190",
    image: "https://cdn-optimized.imweb.me/thumbnail/20251106/da9b56fc69c2a.jpg?w=750",
    isOpen: true,
  },
  9: {
    idx: 9,
    title: "노로오름 트레킹 + 유기농 간식",
    subtitle: "한라산 1100m 고지 본격 등산",
    region: "제주 애월/수산",
    duration: "약 4시간",
    difficulty: "중상급",
    highlight: "깊은 숲, 본격 자연체험",
    url: "https://eataround.co.kr/trip-jeju/?idx=9",
    image: "https://cdn-optimized.imweb.me/thumbnail/20230713/a90fd62039562.jpg?w=750",
    isOpen: true,
  },
  "-1": {
    idx: -1,
    title: "김녕 해녀훈련소",
    subtitle: "본격 해녀 입문 체험 (곧 오픈)",
    region: "제주 김녕",
    duration: "TBD",
    difficulty: "입문",
    highlight: "직접 바다로 들어가는 해녀 입문",
    url: "https://eataround.co.kr/trip-jeju/",
    image: "https://cdn-optimized.imweb.me/thumbnail/20260319/d74ed3fe96952.jpg?w=750",
    isOpen: false,
  },
  "-2": {
    idx: -2,
    title: "세화 2박 3일 해녀 자격증",
    subtitle: "가장 깊은 몰입형 (곧 오픈)",
    region: "제주 구좌 세화",
    duration: "2박 3일",
    difficulty: "심화",
    highlight: "한 번의 체험을 넘어선 자격 과정",
    url: "https://eataround.co.kr/trip-jeju/",
    image: "https://cdn-optimized.imweb.me/thumbnail/20260319/d74ed3fe96952.jpg?w=750",
    isOpen: false,
  },
};

export function getProduct(idx: number): Product {
  return PRODUCTS[idx];
}
