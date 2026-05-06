import type { PersonaCode } from "./personas";

export type Scores = Partial<Record<PersonaCode, number>>;

export interface Choice {
  id: string;
  label: string;
  emoji: string;
  scores: Scores;
}

export interface Question {
  id: number;
  prompt: string;
  choices: Choice[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "제주 도착 첫날, 가장 끌리는 장소는?",
    choices: [
      { id: "1a", label: "안개 낀 숲길", emoji: "🌲", scores: { WK: 2, EX: 2 } },
      { id: "1b", label: "골목에서 마주치는 마을 풍경", emoji: "🏘️", scores: { FR: 2, ST: 1 } },
      { id: "1c", label: "박물관·전시관", emoji: "🏛️", scores: { ST: 2, CU: 1, DP: 1 } },
      { id: "1d", label: "양조장이나 작은 공방", emoji: "🍶", scores: { SA: 2, CU: 2 } },
    ],
  },
  {
    id: 2,
    prompt: "여행에 함께 가는 사람은?",
    choices: [
      { id: "2a", label: "혼자", emoji: "🙋‍♀️", scores: { ST: 1, EX: 1, SA: 1, DP: 1 } },
      { id: "2b", label: "둘 (커플/친구)", emoji: "💕", scores: { SA: 1, CU: 1, WK: 1 } },
      { id: "2c", label: "여러명", emoji: "🧑‍🤝‍🧑", scores: { FR: 2, IN: 2 } },
      { id: "2d", label: "가족 (아이 동반)", emoji: "👶", scores: { ST: 1, FR: 1, WK: 1 } },
    ],
  },
  {
    id: 3,
    prompt: "여행을 준비하며 꺼낼 신발은?",
    choices: [
      { id: "3a", label: "트레킹화", emoji: "🥾", scores: { EX: 2, DP: 1 } },
      { id: "3b", label: "운동화", emoji: "👟", scores: { WK: 1, FR: 1, IN: 2 } },
      { id: "3c", label: "편한 단화·스니커즈", emoji: "👞", scores: { ST: 2, CU: 1, SA: 1 } },
      { id: "3d", label: "샌들·슬리퍼", emoji: "🩴", scores: { CU: 1, SA: 1, FR: 1 } },
    ],
  },
  {
    id: 4,
    prompt: "여행 중 점심 메뉴를 고른다면?",
    choices: [
      { id: "4a", label: "해녀의 밥상", emoji: "🤿", scores: { FR: 2, ST: 1, IN: 1, DP: 2 } },
      { id: "4b", label: "막걸리와 안주 한 상", emoji: "🍶", scores: { SA: 2, CU: 1 } },
      { id: "4c", label: "디저트 한 접시", emoji: "🍰", scores: { CU: 2, ST: 1 } },
      { id: "4d", label: "유기농 도시락", emoji: "🥗", scores: { EX: 2, WK: 1 } },
    ],
  },
  {
    id: 5,
    prompt: "비 오는 날의 제주, 뭐 할래?",
    choices: [
      { id: "5a", label: "그래도 숲길 산책", emoji: "🌳", scores: { EX: 2, WK: 2, DP: 1 } },
      { id: "5b", label: "카페에서 책 한 권", emoji: "☕", scores: { ST: 1, CU: 1 } },
      { id: "5c", label: "실내 워크숍 가기", emoji: "🎨", scores: { SA: 2, CU: 2, IN: 2 } },
      { id: "5d", label: "박물관·작은 전시", emoji: "🖼️", scores: { ST: 2, DP: 1 } },
    ],
  },
  {
    id: 6,
    prompt: "SNS에 올리고 싶은 컷은?",
    choices: [
      { id: "6a", label: "광활한 자연 풍경", emoji: "🏔️", scores: { EX: 2, WK: 1 } },
      { id: "6b", label: "손으로 만든 작품/요리", emoji: "🍳", scores: { CU: 2, SA: 1, IN: 1 } },
      { id: "6c", label: "사람과 함께 찍은 추억", emoji: "📸", scores: { FR: 2, IN: 1, DP: 1 } },
      { id: "6d", label: "디테일이 살아있는 한 컷", emoji: "🔍", scores: { ST: 2, CU: 1 } },
    ],
  },
  {
    id: 7,
    prompt: "여행이 끝난 후, 가장 기억에 남는 장면은?",
    choices: [
      { id: "7a", label: "로컬의 이야기를 듣던 시간", emoji: "💬", scores: { ST: 2, FR: 1, DP: 1 } },
      { id: "7b", label: "내 손으로 만들어낸 무언가", emoji: "💡", scores: { IN: 2, CU: 2, SA: 1 } },
      { id: "7c", label: "풍경 앞에 오래 멈춰 섰던 순간", emoji: "🌅", scores: { WK: 1, EX: 1, CU: 1 } },
      { id: "7d", label: "낯선 곳에서 마주한 누군가의 다정함", emoji: "💝", scores: { FR: 2, ST: 1 } },
    ],
  },
  {
    id: 8,
    prompt: "여행에서 피하고 싶은 것은?",
    choices: [
      { id: "8a", label: "빡빡한 일정", emoji: "⏰", scores: { ST: 2, WK: 1 } },
      { id: "8b", label: "너무 많이 걷기", emoji: "👣", scores: { SA: 1, CU: 2, ST: 1 } },
      { id: "8c", label: "낯선 사람과의 어색함", emoji: "😶", scores: { WK: 1, CU: 1 } },
      {
        id: "8d",
        label: "너무 평범한 관광지",
        emoji: "🗺️",
        scores: { EX: 2, FR: 1, DP: 2, IN: 2 },
      },
    ],
  },
  {
    id: 9,
    prompt: "제주 식재료 중 가장 끌리는 것은?",
    choices: [
      { id: "9a", label: "메밀", emoji: "🌾", scores: { SA: 2 } },
      { id: "9b", label: "뿔소라·톳", emoji: "🐚", scores: { FR: 2, IN: 2, DP: 2 } },
      { id: "9c", label: "곶자왈 식물·식용꽃", emoji: "🌿", scores: { CU: 2, ST: 1 } },
      { id: "9d", label: "유기농 채소·산나물", emoji: "🥬", scores: { EX: 2, WK: 1 } },
    ],
  },
  {
    id: 10,
    prompt: "여행 후 가져가고 싶은 것은?",
    choices: [
      { id: "10a", label: "잊지 못할 이야기", emoji: "📖", scores: { ST: 2, DP: 2 } },
      { id: "10b", label: "새로 사귄 사람", emoji: "🥰", scores: { FR: 2, IN: 1 } },
      { id: "10c", label: "직접 만든 무언가", emoji: "🎁", scores: { CU: 2, SA: 2, IN: 2 } },
      { id: "10d", label: "푹 쉰 마음", emoji: "🌙", scores: { WK: 2, EX: 1 } },
    ],
  },
];

export const TOTAL_STEPS = QUESTIONS.length;
