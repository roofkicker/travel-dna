# Vercel 배포 가이드

이 프로젝트는 GitHub push할 때마다 Vercel이 자동으로 새 버전을 배포합니다.

## 라이브 URL
- **Production**: https://travel-dna-peach.vercel.app
- **Vercel 대시보드**: https://vercel.com/roofkickers-projects/travel-dna
- **GitHub Repo**: https://github.com/roofkicker/travel-dna

## 코드 수정 → 자동 배포 흐름
```bash
# 1. 코드 수정 후
git add .
git commit -m "수정 내용"
git push

# 2. 약 1-2분 후 자동으로 새 버전이 라이브 URL에 반영됨
```

## 환경변수 (Vercel 대시보드에서 설정)
- `NEXT_PUBLIC_KAKAO_CHANNEL_URL` — 카카오 채널 추가 URL
- `NEXT_PUBLIC_INSTAGRAM_URL` — 인스타그램 프로필 URL
- `NEXT_PUBLIC_SITE_URL` — https://travel-dna-peach.vercel.app

대시보드 → Settings → Environment Variables 에서 설정 후 재배포.
