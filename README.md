# 내 여행 DNA 찾기 (이더라운드)

이더라운드 마을여행 상품 프로모션용 페르소나 테스트 웹앱.
10개 질문 → 8가지 페르소나 결과 → 마을여행 상품 추천 → 카카오 채널·인스타그램 친구되기.

> 📌 **처음 인계받으셨다면**: [HANDOFF.md](./HANDOFF.md) 부터 읽어주세요.

## 빠른 시작

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 접속.

## 환경변수 (.env.local)

| 키 | 설명 | 비고 |
|---|---|---|
| `NEXT_PUBLIC_KAKAO_CHANNEL_URL` | 카카오 채널 추가 URL | 비어 있으면 코드 기본값 사용 |
| `NEXT_PUBLIC_INSTAGRAM_URL` | 인스타 프로필 URL | 비어 있으면 코드 기본값 사용 |
| `NEXT_PUBLIC_SITE_URL` | 배포 사이트 URL | 공유 링크 생성용 |

전부 비어 있어도 빌드/실행은 됩니다.

## 페이지 플로우

```
/  (인트로: 캐릭터 8종 미리보기 + 시작 버튼)
   ↓
/quiz/1 ~ /quiz/10  (질문별 이미지 + 4지선다)
   ↓
/pre-result  (게이트 페이지: 카카오/인스타 CTA + 건너뛰기)
   ↓
/result  (페르소나 결과 + 매칭률 + 추천 상품 + 이미지 저장 + URL 복사)
```

## 페르소나 ↔ 상품 매핑

| 코드 | 페르소나 | 상품 idx |
|---|---|---|
| ST | 이야기 수집가형 | 198 |
| FR | 동네 친구 사귀기형 | 159 |
| WK | 숲 산책가형 | 171 |
| SA | 발효 애주가형 | 83 |
| CU | 감각 큐레이터형 | 190 |
| EX | 숲 탐험가형 | 9 |
| IN | 직접 뛰어드는형 | 김녕 해녀훈련소 (곧 오픈) |
| DP | 한 우물 장인형 | 세화 2박3일 자격증 (곧 오픈) |

## 폴더 구조

```
app/
├── layout.tsx           # 루트 레이아웃 (폰트, 메타데이터)
├── globals.css          # 전역 스타일 (브랜드 컬러, 폰트)
├── page.tsx             # 인트로
├── quiz/[step]/page.tsx # 질문 1~10 동적 라우트
├── pre-result/page.tsx  # 결과 직전 카카오·인스타 CTA 게이트
└── result/page.tsx      # 결과 + 추천 + 공유

components/
├── PixelCharacter.tsx   # 픽셀아트 캐릭터 (8종 grid 데이터 포함)
├── ProgressBar.tsx      # 진행 게이지
├── ProductCard.tsx      # 상품 카드 (메인/서브)
├── CTASection.tsx       # 카카오 채널 + 인스타 팔로우 묶음
└── ShareButtons.tsx     # 결과 이미지 저장 + URL 복사

lib/
├── personas.ts          # 페르소나 8종 메타데이터
├── questions.ts         # 질문 10개 + 보기별 점수 매트릭스
├── products.ts          # 상품 데이터 (idx, 이미지 포함)
├── scoring.ts           # 점수 합산 → 1위 페르소나 결정
└── utm.ts               # 이더라운드 상품 링크 UTM 자동 부착

store/
└── quizStore.ts         # zustand (응답 누적, localStorage 저장)
```

## UTM 규칙 (이더라운드 상품 링크)

결과 페이지에서 이더라운드로 나가는 모든 상품 링크에 자동 부착됩니다 (`lib/utm.ts`).

| 파라미터 | 값 |
|---|---|
| `utm_source` | `offline` |
| `utm_medium` | `quiz` |
| `utm_campaign` | `jto_2605` |

**예시**: `https://eataround.co.kr/trip-jeju/?idx=198&utm_source=offline&utm_medium=quiz&utm_campaign=jto_2605`

값 변경 시 `lib/utm.ts`의 `UTM_BASE` 객체 한 곳만 수정.

## 기술 스택

- Next.js 14 (App Router) + TypeScript
- TailwindCSS (브랜드 디자인 시스템)
- zustand (퀴즈 응답 상태 + localStorage persist)
- html-to-image (결과 카드 PNG 다운로드)

## 배포

[HANDOFF.md](./HANDOFF.md)의 "Vercel 배포하기" 섹션 참조.

## 추가 문서

- **[HANDOFF.md](./HANDOFF.md)** — 인수자 가이드 (시작점)
- **[DECISIONS.md](./DECISIONS.md)** — 그동안의 디자인·기획 결정사항
- **[TODO.md](./TODO.md)** — 남은 작업 목록
