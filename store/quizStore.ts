import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useEffect, useState } from "react";
import type { Answer } from "@/lib/scoring";

interface QuizState {
  answers: Answer[];
  setAnswer: (questionId: number, choiceId: string) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      answers: [],
      setAnswer: (questionId, choiceId) =>
        set((s) => {
          const others = s.answers.filter((a) => a.questionId !== questionId);
          return { answers: [...others, { questionId, choiceId }] };
        }),
      reset: () => set({ answers: [] }),
    }),
    { name: "travel-dna-quiz" },
  ),
);

export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
