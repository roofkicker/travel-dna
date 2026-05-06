"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useHasMounted, useQuizStore } from "@/store/quizStore";
import CTASection from "@/components/CTASection";

export default function PreResultPage() {
  const router = useRouter();
  const mounted = useHasMounted();
  const answers = useQuizStore((s) => s.answers);

  useEffect(() => {
    if (mounted && answers.length < 5) {
      router.push("/");
    }
  }, [mounted, answers.length, router]);

  if (!mounted || answers.length < 5) {
    return (
      <div className="flex min-h-dvh items-center justify-center px-6">
        <p className="text-brand-gray">잠시만요...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh flex-col px-6 py-10">
      <div className="mb-8 animate-slide-up text-center">
        <p className="mb-3 text-xs font-bold tracking-wider text-brand-pink">
          ✨ 결과 분석 완료
        </p>
        <h1 className="text-3xl font-bold leading-tight text-brand-green">
          당신의 여행 DNA가
          <br />
          곧 공개됩니다
        </h1>
        <p className="mt-3 text-sm text-brand-gray">
          결과를 보러 가기 전에 한 가지만 더!
        </p>
      </div>

      <div className="mb-6 flex-1 animate-slide-up" style={{ animationDelay: "200ms" }}>
        <CTASection />
      </div>

      <Link
        href="/result"
        className="block w-full rounded-xl border-2 border-brand-green bg-white py-3.5 text-center text-base font-bold text-brand-green shadow-sm transition active:scale-[0.99] hover:bg-brand-cream"
      >
        건너뛰고 결과 보기 →
      </Link>
    </div>
  );
}
