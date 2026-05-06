const KAKAO_FALLBACK = "http://pf.kakao.com/_ptHAs/friend";
const INSTAGRAM_FALLBACK = "https://www.instagram.com/hello_eataround/";

export default function CTASection() {
  const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || KAKAO_FALLBACK;
  const instaUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || INSTAGRAM_FALLBACK;

  return (
    <section className="rounded-2xl border-2 border-brand-green bg-white p-5 text-brand-green shadow-sm">
      <div className="mb-4 text-center">
        <p className="mb-1 text-xs font-bold tracking-wider text-brand-green">
          이더라운드 친구되기
        </p>
        <h3 className="text-xl font-bold">신상품·할인 시작 시 가장 먼저</h3>
        <p className="mt-1 text-sm text-brand-green/80">
          마을여행자만을 위한 우선 알림
        </p>
      </div>

      <div className="space-y-2">
        <a
          href={kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] py-3 text-base font-bold text-[#191600] transition active:scale-[0.98]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.48 3 2 6.58 2 11c0 2.84 1.84 5.34 4.62 6.78l-1.18 4.34c-.07.27.22.49.46.34l5.18-3.42c.31.02.62.04.92.04 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
          </svg>
          카카오채널 추가하기
        </a>
        <a
          href={instaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-cream-dark bg-brand-cream py-3 text-base font-bold text-brand-black transition active:scale-[0.98]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
          </svg>
          인스타그램 팔로우
        </a>
      </div>
    </section>
  );
}
