# 인수자 가이드 (HANDOFF)

> 안녕하세요! 이 프로젝트를 이어서 진행하시게 되어 반갑습니다.
> 이 문서 하나만 따라가면 시작부터 배포까지 가능하게 정리해뒀습니다.

## 1. 이 프로젝트는 무엇인가요?

**내 여행 DNA 찾기** — 이더라운드 마을여행 상품 프로모션용 미니 웹앱.

- 사용자가 10개 질문에 답하면
- 8개 페르소나(여행 스타일) 중 하나로 분류되어
- 그에 맞는 이더라운드 마을여행 상품이 추천되고
- 카카오 채널 추가 / 인스타 팔로우로 유도하는 **마케팅 깔때기** 구조

직접 한번 돌려보시면 가장 빠르게 이해되실 거예요. ([2번 섹션](#2-5분-안에-로컬에서-실행하기))

## 2. 5분 안에 로컬에서 실행하기

### 사전 준비
- **Node.js 20 이상** (https://nodejs.org)
- **VS Code** 같은 코드 에디터 (선택)

### 실행
```bash
# 프로젝트 폴더로 이동
cd travel-dna

# 패키지 설치 (한 번만)
npm install

# 환경변수 파일 복사 (한 번만)
cp .env.example .env.local

# 개발 서버 실행
npm run dev
```

브라우저에서 http://localhost:3000 접속 → 인트로 → 시작 버튼 → 10문항 → 결과까지 한번 돌려보세요.

`.env.local`은 비어 있어도 동작합니다 (카카오 URL·인스타 URL은 코드에 기본값으로 박아둠).

## 3. 현재 어디까지 됐나요?

### ✅ 완료됨
- 전체 페이지 6개 (인트로 / 퀴즈 1-10 / 게이트 / 결과)
- 8개 페르소나 + 점수 매트릭스 + 1:1 상품 매칭 로직
- 픽셀아트 캐릭터 8종 (SVG 컴포넌트)
- 이더라운드 상품 6개 + 미오픈 2개 데이터
- 질문별 이미지·상품 썸네일 (이더라운드 CDN)
- 브랜드 디자인 시스템 (오렌지/베이지/그린/차콜 + 페이퍼로지/원티드산스)
- 카카오 채널·인스타그램 CTA
- 결과 카드 PNG 다운로드 + URL 복사
- 이더라운드 링크에 UTM 자동 부착 (`offline / quiz / jto_2605`)
- 프로덕션 빌드 검증

### ❌ 남은 일 (당신이 진행할 일)
1. **GitHub repo 생성 + 첫 push** ([5번 섹션](#5-github-올리기))
2. **Vercel 배포** ([6번 섹션](#6-vercel-배포하기))
3. (선택) 커스텀 도메인 연결
4. 콘텐츠 검수 (페르소나 카피·이미지·UTM 캠페인 코드)
5. 미오픈 상품 2개의 정식 URL 입력 (오픈 시점에)
6. 실 사용자 테스트

자세한 목록은 [TODO.md](./TODO.md) 참조.

## 4. 코드 둘러보기

### 핵심 파일 (수정 빈도 높음)

| 파일 | 무엇 |
|---|---|
| `lib/personas.ts` | 8개 페르소나 정의 (이름·부제·진단·매칭 상품 idx) |
| `lib/questions.ts` | 10개 질문 + 보기별 점수 매트릭스 + 질문별 이미지 |
| `lib/products.ts` | 이더라운드 상품 데이터 (idx, 제목, 이미지 등) |
| `lib/utm.ts` | UTM 캠페인 코드 (변경 시 한 곳만) |
| `components/CTASection.tsx` | 카카오/인스타 CTA 버튼 (URL 변경 시) |
| `app/result/page.tsx` | 결과 페이지 레이아웃 |
| `app/pre-result/page.tsx` | 게이트 페이지 (CTA 노출) |

### 점수 매트릭스 동작 원리
1. 사용자가 보기를 선택할 때마다 그 보기의 `scores` 객체대로 페르소나 점수 누적
2. 10문항 다 끝나면 8개 페르소나 중 점수 1위가 결과 페르소나
3. 동점이면 페르소나 정의 순서대로 (`PERSONA_CODES` 배열)
4. 점수 매트릭스 튜닝 시: `lib/questions.ts`에서 각 `choices[].scores` 수정

### 폴더 구조 전체
[README.md](./README.md)의 "폴더 구조" 섹션 참조.

## 5. GitHub 올리기

### 새 repo 생성
1. https://github.com 로그인 → 우측 상단 `+` → `New repository`
2. **Repository name**: `travel-dna` (자유롭게)
3. **Public** 또는 **Private** 선택 (Vercel 무료 플랜은 Private도 OK)
4. ⚠️ **README, .gitignore, license 추가 옵션 모두 체크 해제** (이미 있음)
5. `Create repository`

### 로컬에서 push
이미 로컬에 git 초기화 + 첫 커밋이 되어 있으니, 위에서 만든 repo URL을 연결만 하시면 됩니다.

```bash
# 현재 폴더가 travel-dna 인지 확인
pwd

# GitHub에서 알려준 명령어 그대로 실행
git remote add origin https://github.com/<당신계정>/travel-dna.git
git branch -M main
git push -u origin main
```

처음 push 시 GitHub 로그인이 필요합니다 (브라우저 자동 열림).

## 6. Vercel 배포하기

### 계정 만들기
1. https://vercel.com → `Sign Up` → **Continue with GitHub** 선택
2. GitHub 권한 승인 → 끝

### 배포
1. Vercel 대시보드 → **Add New** → **Project**
2. GitHub 저장소 목록에서 `travel-dna` → **Import**
3. **Framework Preset**: Next.js (자동 감지됨)
4. **Environment Variables** (선택) — 비워둬도 작동:
   - `NEXT_PUBLIC_KAKAO_CHANNEL_URL` — `http://pf.kakao.com/_ptHAs/friend`
   - `NEXT_PUBLIC_INSTAGRAM_URL` — `https://www.instagram.com/hello_eataround/`
   - `NEXT_PUBLIC_SITE_URL` — Vercel이 발급해줄 URL (배포 후 다시 업데이트)
5. **Deploy** 클릭 → 1-2분 대기
6. `https://travel-dna-xxxxx.vercel.app` 같은 URL 자동 발급 → 클릭해서 확인

### 이후 작업
- 코드 수정 → `git push` 만 하면 Vercel이 **자동으로 재배포**합니다
- 배포 로그·도메인 관리·환경변수는 Vercel 대시보드 `Settings`에서

### (선택) 커스텀 도메인 연결
- Vercel → 프로젝트 → `Settings` → `Domains` → `Add`
- 예: `test.eataround.co.kr` 입력
- Vercel이 알려주는 CNAME 레코드를 imweb 또는 가비아 DNS 설정에서 추가
- 5-30분 후 도메인 활성화

## 7. 콘텐츠 수정 가이드

### 페르소나 카피 바꾸고 싶을 때
`lib/personas.ts`의 해당 페르소나 객체에서 `name`, `subtitle`, `diagnosis`, `description` 수정.

### 질문 / 보기 텍스트 바꾸고 싶을 때
`lib/questions.ts`의 해당 질문에서 `prompt`, `choices[].label` 수정.
**점수 매트릭스(`scores`)도 같이 검토** 필요할 수 있음.

### 추천 결과가 한쪽으로 쏠릴 때
점수 매트릭스 튜닝 필요. `lib/questions.ts`의 `scores` 객체 값들을 1씩 조정해보세요.

### 새 상품 추가 / 미오픈 상품 오픈
`lib/products.ts`에서 해당 객체의 `url`, `image`, `isOpen: true`로 변경.
미오픈 → 오픈 전환 시 페르소나(IN, DP)의 `productIdx`도 실제 idx로 업데이트 (`lib/personas.ts`).

### UTM 캠페인 코드 변경 (예: 새 캠페인 시작)
`lib/utm.ts`의 `UTM_BASE.campaign` 한 줄만 수정.

### 카카오 채널 / 인스타 URL 변경
- 코드의 기본값 변경: `components/CTASection.tsx`의 `KAKAO_FALLBACK`, `INSTAGRAM_FALLBACK`
- Vercel 환경변수로 덮어쓰기: 환경변수만 업데이트하고 재배포

## 8. 자주 막힐 수 있는 부분

### `npm install` 실패
- Node.js 버전 확인 (`node -v` → 20 이상이어야 함)
- 캐시 클리어: `rm -rf node_modules package-lock.json && npm install`

### 개발 서버에서 화면이 빈 페이지로 나옴
- `.next` 폴더 삭제 후 재시작: `rm -rf .next && npm run dev`
- (Next.js 캐시가 꼬일 때 가끔 일어남)

### 빌드는 되는데 결과 페이지에서 redirect만 일어남
- 브라우저 콘솔 확인. localStorage에 `travel-dna-quiz` 키가 비어있으면 정상 동작 (퀴즈를 안 풀고 직접 `/result`로 들어가면 홈으로 보냄)

### 이미지가 안 뜸
- 이더라운드 CDN(`cdn-optimized.imweb.me`)에 의존. 네트워크 차단되거나 이미지 URL이 만료되면 빈 박스로 표시됨
- 영구적으로 만들려면 `public/` 폴더로 다운로드해서 로컬 이미지 경로로 변경 권장

### 카카오 채널 / 인스타 / 이미지 저장이 작동 안 함
- 카카오 채널: 채널 URL 끝이 `/friend`로 되어 있어야 함
- 인스타: 단순 프로필 URL이라 단순 새창 이동
- 이미지 저장: 결과 페이지의 페르소나 카드 영역만 PNG로 캡처. 모바일/데스크탑 동일 동작

## 9. 이전 담당자 / 디자인·기획 컨텍스트

이 프로젝트의 모든 디자인·기획 결정은 [DECISIONS.md](./DECISIONS.md)에 정리해뒀습니다.
"왜 이렇게 만들었지?" 의문이 들면 거기 먼저 보세요.

## 10. 참고 문서 색인

- **[README.md](./README.md)** — 프로젝트 개요, 폴더 구조, 빠른 시작
- **[DECISIONS.md](./DECISIONS.md)** — 디자인·기획 결정사항 모음
- **[TODO.md](./TODO.md)** — 남은 작업 목록
- **`.env.example`** — 환경변수 템플릿

---

## 체크리스트 (인계받은 첫날)

- [ ] Node.js 20 이상 설치
- [ ] 이 폴더에서 `npm install`
- [ ] `npm run dev` 로 로컬에서 동작 확인
- [ ] 인트로부터 결과까지 한 번 직접 돌려보기
- [ ] [DECISIONS.md](./DECISIONS.md), [TODO.md](./TODO.md) 한 번씩 훑기
- [ ] GitHub 계정 준비
- [ ] GitHub repo 생성 + push
- [ ] Vercel 계정 만들기
- [ ] Vercel 배포 → 발급받은 URL 공유
