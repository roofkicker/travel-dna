"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { QUESTIONS, TOTAL_STEPS } from "@/lib/questions";
import { useQuizStore } from "@/store/quizStore";
import ProgressBar from "@/components/ProgressBar";

export default function QuizPage() {
  const router = useRouter();
  const params = useParams<{ step: string }>();
  const step = Math.max(1, Math.min(TOTAL_STEPS, Number(params.step) || 1));

  const question = useMemo(
    () => QUESTIONS.find((q) => q.id === step),
    [step],
  );

  const setAnswer = useQuizStore((s) => s.setAnswer);
  const currentAnswer = useQuizStore((s) =>
    s.answers.find((a) => a.questionId === step),
  );

  // 질문이 바뀔 때마다 활성 요소(focus)를 해제 — 이전 페이지의 클릭된 버튼이
  // 같은 위치의 다음 페이지 버튼으로 focus/hover 상태를 넘기는 것을 방지.
  useEffect(() => {
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement | null)?.blur();
    }
  }, [step]);

  if (!question) {
    return null;
  }

  const handleSelect = (choiceId: string) => {
    // 클릭 즉시 focus 해제 — 라우팅 후 같은 위치 버튼이 :focus 상태 잔존하는 문제 방지
    if (typeof document !== "undefined") {
      (document.activeElement as HTMLElement | null)?.blur();
    }
    setAnswer(step, choiceId);
    setTimeout(() => {
      if (step >= TOTAL_STEPS) {
        router.push("/pre-result");
      } else {
        router.push(`/quiz/${step + 1}`);
      }
    }, 220);
  };

  const handleBack = () => {
    if (step <= 1) {
      router.push("/");
    } else {
      router.push(`/quiz/${step - 1}`);
    }
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 py-6">
      <div className="mb-8 flex items-center gap-3">
        <button
          onClick={handleBack}
          className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-brand-gray transition active:bg-brand-cream-dark"
          aria-label="이전"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex-1">
          <ProgressBar current={step} total={TOTAL_STEPS} />
        </div>
      </div>

      <div className="flex-1 animate-slide-up">
        <h2 className="mb-8 text-2xl leading-snug text-brand-green sm:text-3xl">
          {question.prompt}
        </h2>

        <div className="space-y-3">
          {question.choices.map((choice, i) => {
            const isSelected = currentAnswer?.choiceId === choice.id;
            return (
              <button
                key={choice.id}
                onClick={() => handleSelect(choice.id)}
                className={`flex w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition focus:outline-none active:scale-[0.98] ${
                  isSelected
                    ? "border-brand-green bg-brand-green/10"
                    : "border-brand-cream-dark bg-white hover:border-brand-green/40"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-cream text-2xl"
                  aria-hidden="true"
                >
                  {choice.emoji}
                </div>
                <span className="text-[15px] font-medium leading-snug text-brand-green">
                  {choice.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-brand-gray-light">
        선택하면 자동으로 다음 질문으로 넘어가요
      </p>
    </div>
  );
}
