import { PERSONA_CODES, PERSONAS, type PersonaCode } from "./personas";
import { QUESTIONS, type Scores } from "./questions";

export interface Answer {
  questionId: number;
  choiceId: string;
}

export interface ScoreResult {
  scores: Record<PersonaCode, number>;
  ranking: PersonaCode[];
  topPersona: PersonaCode;
  matchPercent: number;
}

export function computeScores(answers: Answer[]): ScoreResult {
  const scores: Record<PersonaCode, number> = {
    ST: 0,
    FR: 0,
    WK: 0,
    SA: 0,
    CU: 0,
    EX: 0,
    IN: 0,
    DP: 0,
  };

  for (const ans of answers) {
    const q = QUESTIONS.find((x) => x.id === ans.questionId);
    if (!q) continue;
    const c = q.choices.find((x) => x.id === ans.choiceId);
    if (!c) continue;
    for (const [code, val] of Object.entries(c.scores) as [
      PersonaCode,
      number,
    ][]) {
      scores[code] += val;
    }
  }

  const ranking = [...PERSONA_CODES].sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    return PERSONA_CODES.indexOf(a) - PERSONA_CODES.indexOf(b);
  });

  const topPersona = ranking[0];
  const top = scores[topPersona];

  // 매칭률 = 사용자가 받은 top 페르소나 점수 / 그 페르소나가 받을 수 있는 이론상 최대 점수
  // 답변한 질문에 대해서만 max를 계산해서 부분 답변 케이스도 정확하게 처리.
  const answeredQuestionIds = new Set(answers.map((a) => a.questionId));
  const maxForTop = QUESTIONS.filter((q) =>
    answeredQuestionIds.has(q.id),
  ).reduce((acc, q) => {
    const bestScoreForTop = Math.max(
      0,
      ...q.choices.map((c) => c.scores[topPersona] ?? 0),
    );
    return acc + bestScoreForTop;
  }, 0);

  const rawPercent = maxForTop > 0 ? (top / maxForTop) * 100 : 0;
  // raw 0~100 을 70~99 로 선형 매핑.
  // 답변이 top 페르소나와 완벽히 맞으면 99%, 완전히 안 맞으면 70%.
  // 70%는 마케팅 floor (너무 낮으면 결과가 시시해 보임), 99%는 100%의 결정적 인상을 피함.
  const matchPercent = Math.min(99, Math.max(70, Math.round(70 + rawPercent * 0.29)));

  return { scores, ranking, topPersona, matchPercent };
}

export function getRecommendedProducts(ranking: PersonaCode[]) {
  return ranking
    .map((code) => PERSONAS[code])
    .filter((p) => p.isOpen)
    .slice(0, 3);
}
