"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useHasMounted, useQuizStore } from "@/store/quizStore";
import { computeScores, getRecommendedProducts } from "@/lib/scoring";
import { PERSONAS } from "@/lib/personas";
import { getProduct } from "@/lib/products";
import { buildEataroundUrl } from "@/lib/utm";
import ProductCard from "@/components/ProductCard";
import ShareButtons from "@/components/ShareButtons";
import CTASection from "@/components/CTASection";

export default function ResultPage() {
  const router = useRouter();
  const mounted = useHasMounted();
  const answers = useQuizStore((s) => s.answers);
  const [shareUrl, setShareUrl] = useState("");
  const captureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.origin);
    }
  }, []);

  const result = useMemo(() => {
    if (!mounted || answers.length < 5) return null;
    return computeScores(answers);
  }, [answers, mounted]);

  useEffect(() => {
    if (mounted && answers.length < 5) {
      router.push("/");
    }
  }, [mounted, answers.length, router]);

  if (!result) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-6">
        <p className="text-brand-gray">결과를 불러오는 중...</p>
      </div>
    );
  }

  const persona = PERSONAS[result.topPersona];
  const mainProduct = getProduct(persona.productIdx);
  const subProducts = getRecommendedProducts(result.ranking).filter(
    (p) => p.code !== persona.code,
  );

  return (
    <div className="px-6 py-8 pb-12">
      {/* Capture area: this is what gets saved as PNG */}
      <div ref={captureRef} className="mb-6 bg-brand-cream pb-6 pt-4">
        <p className="mb-6 text-center text-xs font-bold tracking-[0.2em] text-brand-green">
          마을여행기획전 × 이더라운드
        </p>

        {/* Hero: persona name with strong typography */}
        <div className="rounded-3xl bg-brand-mint px-6 py-10 text-center shadow-sm">
          <p className="mb-3 inline-block rounded-full bg-brand-green/10 px-3 py-1 text-[11px] font-bold tracking-wider text-brand-green">
            당신의 여행 DNA
          </p>
          <h1 className="animate-pop whitespace-nowrap text-[clamp(1.625rem,7.5vw,2.25rem)] font-bold leading-tight tracking-tight text-brand-green">
            {persona.name}
          </h1>
          <p className="mt-4 text-sm italic text-brand-gray">
            “{persona.subtitle}”
          </p>
        </div>

        {/* Matching rate bar */}
        <div className="mt-5 rounded-2xl bg-white px-5 py-4 shadow-sm">
          <div className="mb-2 flex items-baseline justify-between">
            <span className="text-xs font-semibold tracking-wider text-brand-gray">
              매칭률
            </span>
            <span className="font-bold text-brand-green">
              <span className="text-3xl">{result.matchPercent}</span>
              <span className="ml-0.5 text-base">%</span>
            </span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-brand-cream-dark">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-mint to-brand-green transition-all duration-1000 ease-out"
              style={{ width: `${result.matchPercent}%` }}
              role="progressbar"
              aria-valuenow={result.matchPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Quote-style diagnosis */}
        <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
          <p className="mb-1 text-3xl leading-none text-brand-green/40">“</p>
          <p className="leading-relaxed text-brand-black">
            {persona.diagnosis}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-brand-gray">
            {persona.description}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-3 text-lg font-bold text-brand-green">
          🎯 당신에게 추천하는 마을여행
        </h2>
        {mainProduct ? (
          <ProductCard
            product={mainProduct}
            variant="main"
            href={buildEataroundUrl(mainProduct.url)}
          />
        ) : (
          <div className="rounded-2xl border-2 border-brand-green bg-white p-5 shadow-md">
            <span className="mb-2 inline-block rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-bold text-brand-cream">
              곧 오픈
            </span>
            <h3 className="mb-1 text-lg font-bold text-brand-green">
              {persona.code === "IN"
                ? "김녕 해녀훈련소"
                : "세화 2박 3일 해녀 자격증"}
            </h3>
            <p className="text-sm text-brand-gray">
              {persona.code === "IN"
                ? "직접 바다로 들어가는 본격 해녀 입문 체험"
                : "한 번의 체험을 넘어선 가장 깊은 몰입형 자격 과정"}
            </p>
            <div className="mt-3 rounded-xl bg-brand-mint p-3 text-sm font-medium text-brand-green">
              ⏰ 곧 오픈 예정! 아래에서 친구 등록하면 가장 먼저 알려드려요
            </div>
          </div>
        )}
      </div>

      {subProducts.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-3 text-base font-bold text-brand-green">
            ☕ 함께 어울리는 다른 여행
          </h2>
          <div className="space-y-2">
            {subProducts.slice(0, 2).map((p) => {
              const subProduct = getProduct(p.productIdx);
              return (
                <ProductCard
                  key={p.code}
                  product={subProduct}
                  href={buildEataroundUrl(subProduct.url)}
                />
              );
            })}
          </div>
        </div>
      )}

      <a
        href={buildEataroundUrl("https://eataround.co.kr/kareumstay")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mb-6 block aspect-square overflow-hidden rounded-2xl shadow-lg transition active:scale-[0.99]"
      >
        {/* Hero background image — fills entire square */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn-optimized.imweb.me/thumbnail/20250818/bf403ef83dce9.jpg?w=750"
          alt="제주 마을여행"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Dark gradient overlay — bottom 45% only so the photo stays visible */}
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-brand-green via-brand-green/75 to-transparent" />

        {/* Discount badge (top-right) */}
        <span className="absolute right-3 top-3 rounded-full bg-brand-mint px-3 py-1.5 text-xs font-extrabold text-brand-green shadow-md">
          30% OFF
        </span>

        {/* Text content (bottom-left, overlay) */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 pb-5">
          <div>
            <p className="mb-1.5 text-xs font-bold tracking-wider text-brand-mint">
              📍 마을여행기획전
            </p>
            <p className="text-2xl font-bold leading-snug text-brand-cream">
              30% 할인 받고
              <br />
              제주 마을여행 떠나기
            </p>
          </div>
          <span
            className="shrink-0 pb-1 text-2xl font-bold text-brand-cream"
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </a>

      <div className="mb-6">
        <CTASection />
      </div>

      <div className="mb-4">
        <ShareButtons
          url={shareUrl}
          captureRef={captureRef}
          filename={`여행DNA_${persona.name}`}
          personaName={persona.name}
        />
      </div>

      <Link
        href="/"
        className="block w-full rounded-xl border-2 border-brand-cream-dark bg-white py-3 text-center text-sm font-bold text-brand-gray transition active:scale-[0.99]"
      >
        다시 테스트하기
      </Link>
    </div>
  );
}
