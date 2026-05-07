"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useQuizStore } from "@/store/quizStore";

export default function HomePage() {
  const reset = useQuizStore((s) => s.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 py-12">
      <div className="w-full text-center">
        <p className="mb-3 text-sm font-medium tracking-wider text-brand-green">
          마을여행기획전 × 이더라운드
        </p>
        <h1 className="mb-5 text-4xl leading-tight text-brand-green sm:text-5xl">
          내 여행 DNA 찾기
        </h1>
        <p className="text-base leading-relaxed text-brand-gray">
          10가지 질문으로 알아보는 <br />
          나에게 딱 맞는 여행 DNA
        </p>
      </div>

      <div className="my-10 w-full">
        <div className="relative overflow-hidden rounded-3xl shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn-optimized.imweb.me/thumbnail/20251111/9ae53c6194d1b.jpg?w=750"
            alt="제주 마을여행"
            className="aspect-[4/3] w-full object-cover"
            loading="eager"
          />
          {/* 하단 그라데이션 오버레이 — 사진 위쪽은 그대로 보이도록 */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-brand-green via-brand-green/70 to-transparent" />
          {/* 카피 오버레이 */}
          <div className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center">
            <p className="text-xl font-bold text-brand-cream">
              나는 어떤 여행자일까?
            </p>
            <p className="mt-1 text-sm text-brand-cream/80">
              8가지 여행 DNA 중 하나로 분류돼요
            </p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <Link
          href="/quiz/1"
          className="block w-full rounded-2xl bg-brand-mint py-4 text-center text-lg font-bold text-brand-green shadow-md transition active:scale-[0.98]"
        >
          테스트 시작하기
        </Link>
        <p className="text-center text-xs text-brand-gray-light">
          소요시간 약 1-2분
        </p>
      </div>
    </div>
  );
}
