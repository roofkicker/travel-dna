export type PersonaCode =
  | "ST" // 이야기 수집가형
  | "FR" // 동네 친구 사귀기형
  | "WK" // 숲 산책가형
  | "SA" // 발효 애주가형
  | "CU" // 감각 큐레이터형
  | "EX" // 숲 탐험가형
  | "IN" // 직접 뛰어드는형
  | "DP"; // 한 우물 장인형

export interface Persona {
  code: PersonaCode;
  name: string;
  subtitle: string;
  diagnosis: string;
  description: string;
  productIdx: number;
  isOpen: boolean;
  characterColor: string;
}

export const PERSONAS: Record<PersonaCode, Persona> = {
  ST: {
    code: "ST",
    name: "이야기 수집가형",
    subtitle: "한 사람의 시간을 따라 걷는 여행자",
    diagnosis:
      "박물관에서도 작품보다 그 뒤의 이야기에 끌리는 당신. 짧지만 깊은 한 시간이 어울려요.",
    description:
      "겉으로 보이는 풍경보다, 그 안에 살아가는 사람들의 이야기에 마음이 움직이는 사람입니다. 안내판에 적히지 않은 한 사람의 시간을 듣는 것이 가장 큰 여행의 보람이죠.",
    productIdx: 198,
    isOpen: true,
    characterColor: "#F9A2A2",
  },
  FR: {
    code: "FR",
    name: "동네 친구 사귀기형",
    subtitle: "골목에서 정을 나누는 여행자",
    diagnosis:
      "처음 만난 삼춘이 옆집 이모처럼 느껴질 때 진짜 여행이 시작된다 믿는 당신.",
    description:
      "관광지보다 골목, 가이드보다 동네 사람과의 짧은 대화가 더 오래 기억에 남는 사람입니다. 사람과 사람 사이에서 진짜 여행이 시작된다고 믿어요.",
    productIdx: 159,
    isOpen: true,
    characterColor: "#F9A2A2",
  },
  WK: {
    code: "WK",
    name: "숲 산책가형",
    subtitle: "오름의 호흡을 따라가는 여행자",
    diagnosis:
      "무리하지 않으면서도 자연과 깊게 만나고 싶은 당신. 숲 해설이 라디오처럼 옆에 있으면 좋겠죠.",
    description:
      "땀 흘리는 등산보다, 호흡을 가다듬으며 자연의 결을 따라 걷는 산책이 좋은 사람입니다. 풀 한 포기의 이름을 알게 되는 것이 큰 즐거움이죠.",
    productIdx: 171,
    isOpen: true,
    characterColor: "#2A5E42",
  },
  SA: {
    code: "SA",
    name: "애주가형",
    subtitle: "한 잔의 깊이를 음미하는 여행자",
    diagnosis:
      "누룩과 고두밥, 술이 익어가는 시간이 궁금한 당신. 어른의 여행은 한 잔에서 시작된다 믿어요.",
    description:
      "빠른 자극보다 시간을 들여 익어가는 것의 깊이를 즐기는 사람입니다. 한 잔의 술 뒤에 숨은 재료, 시간, 사람의 이야기가 궁금하죠.",
    productIdx: 83,
    isOpen: true,
    characterColor: "#F9A2A2",
  },
  CU: {
    code: "CU",
    name: "감각 큐레이터형",
    subtitle: "한 입의 예술을 빚는 여행자",
    diagnosis:
      "보는 것과 먹는 것 모두 아름다워야 만족하는 당신. 비 와도 즐거운 인도어 체험이라면 더할 나위 없죠.",
    description:
      "모든 감각이 동시에 만족스러울 때 행복한 사람입니다. 비 오는 날도 두렵지 않은, 손끝의 감각을 살리는 여행을 좋아합니다.",
    productIdx: 190,
    isOpen: true,
    characterColor: "#F9A2A2",
  },
  EX: {
    code: "EX",
    name: "숲 탐험가형",
    subtitle: "깊은 숲에서 답을 찾는 여행자",
    diagnosis:
      "가벼운 산책으로는 부족한 당신. 오르고 오른 정상에서 비로소 머리가 맑아지는 타입.",
    description:
      "땀을 충분히 흘려야 하루가 마무리되는 사람입니다. 도시의 소음에서 벗어나 깊은 숲 한가운데서 비로소 자신을 만나는 타입이죠.",
    productIdx: 9,
    isOpen: true,
    characterColor: "#2A5E42",
  },
  IN: {
    code: "IN",
    name: "직접 뛰어드는형",
    subtitle: "구경 말고 주인공이 되는 여행자",
    diagnosis:
      "남이 하는 걸 보는 것보다 내 손으로 해봐야 직성이 풀리는 당신. 평소에도 새로운 일에 가장 먼저 손드는 타입이죠.",
    description:
      "체험 부스에서 가장 먼저 손을 드는 사람, 새로운 활동을 망설이지 않는 사람입니다. 보는 여행이 아니라 하는 여행을 통해 진짜를 느끼죠.",
    productIdx: -1,
    isOpen: false,
    characterColor: "#F9A2A2",
  },
  DP: {
    code: "DP",
    name: "한 우물 장인형",
    subtitle: "한번 빠지면 끝까지 가는 여행자",
    diagnosis:
      "관심사가 생기면 주변에서 \"그만 좀 해\"라고 할 때까지 파고드는 당신. 어설프게 할 바엔 시작도 안 하는 몰입형.",
    description:
      "얕고 넓게보다 좁고 깊게가 어울리는 사람입니다. 한 번 흥미가 생기면 끝장을 봐야 직성이 풀리는, 가장 진심 어린 여행자죠.",
    productIdx: -2,
    isOpen: false,
    characterColor: "#2A5E42",
  },
};

export const PERSONA_CODES: PersonaCode[] = [
  "ST",
  "FR",
  "WK",
  "SA",
  "CU",
  "EX",
  "IN",
  "DP",
];
