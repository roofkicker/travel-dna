"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.min(100, Math.round((current / total) * 100));
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs text-brand-gray">
        <span className="font-medium">
          {current} <span className="text-brand-gray-light">/ {total}</span>
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-brand-cream-dark">
        <div
          className="h-full rounded-full bg-brand-green transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
