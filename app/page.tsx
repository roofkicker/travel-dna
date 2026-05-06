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
        <div className="rounded-3xl bg-brand-mint px-6 py-12 text-center">
          <p className="text-7xl">🧬</p>
          <p className="mt-6 text-xl font-bold text-brand-green">
            나는 어떤 여행자일까?
          </p>
          <p className="mt-2 text-sm text-brand-gray">
            8가지 여행 DNA 중 하나로 분류돼요
          </p>
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
