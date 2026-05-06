"use client";

import { useState, type RefObject } from "react";
import { toPng } from "html-to-image";

interface ShareButtonsProps {
  url: string;
  captureRef: RefObject<HTMLDivElement>;
  filename?: string;
  personaName?: string;
}

export default function ShareButtons({
  url,
  captureRef,
  filename = "여행DNA결과",
  personaName,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);

  const shareText = personaName
    ? `내 여행 DNA는 "${personaName}" — 너도 해봐!`
    : "내 여행 DNA 찾기 — 이더라운드 마을여행";

  const handleKakaoShare = async () => {
    // Mobile (iOS/Android) — uses native share sheet which surfaces KakaoTalk
    // when installed. Desktop fallback: copy link.
    const shareData = {
      title: "내 여행 DNA 찾기",
      text: shareText,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User dismissed sheet — silent
        if ((err as Error).name === "AbortError") return;
      }
    }

    // Desktop fallback: copy link to clipboard
    try {
      await navigator.clipboard.writeText(url);
      alert("링크가 복사되었어요! 카카오톡에 붙여넣어 공유해보세요.");
    } catch {
      alert("공유에 실패했어요. 주소창에서 URL을 복사해주세요.");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  const handleSaveImage = async () => {
    if (!captureRef.current || saving) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(captureRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#F8F4EE",
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${filename}.png`;
      link.click();
    } catch (err) {
      console.error("이미지 저장 실패:", err);
      alert("이미지 저장에 실패했어요. 다시 시도해주세요.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-2">
      {/* Primary: KakaoTalk share */}
      <button
        onClick={handleKakaoShare}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] py-3.5 text-base font-bold text-[#191600] shadow-sm transition active:scale-[0.98]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 11c0 2.84 1.84 5.34 4.62 6.78l-1.18 4.34c-.07.27.22.49.46.34l5.18-3.42c.31.02.62.04.92.04 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
        </svg>
        카카오톡으로 친구에게 공유
      </button>

      {/* Secondary: 이미지 저장 + 링크 복사 */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleSaveImage}
          disabled={saving}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-brand-cream-dark bg-white py-3 text-sm font-bold text-brand-black transition active:scale-[0.98] disabled:opacity-60"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15V3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {saving ? "저장 중..." : "이미지로 저장"}
        </button>
        <button
          onClick={handleCopy}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-brand-cream-dark bg-white py-3 text-sm font-bold text-brand-black transition active:scale-[0.98]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M10 13C10.4295 13.5741 10.9774 14.0492 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9404 15.7513 14.6898C16.4231 14.4392 17.0331 14.0471 17.54 13.54L20.54 10.54C21.4508 9.59695 21.955 8.33392 21.9436 7.02296C21.9322 5.71201 21.4061 4.45794 20.4791 3.53087C19.552 2.60381 18.298 2.07775 16.987 2.06633C15.6761 2.05492 14.4131 2.55906 13.47 3.46985L11.75 5.17985"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11C13.5705 10.4259 13.0226 9.95084 12.3935 9.60707C11.7643 9.26329 11.0685 9.05889 10.3534 9.00768C9.63821 8.95646 8.92041 9.05963 8.24867 9.31021C7.57694 9.5608 6.96687 9.95288 6.46 10.4599L3.46 13.4599C2.54921 14.4029 2.04507 15.6659 2.05649 16.9769C2.0679 18.2879 2.59396 19.5419 3.52102 20.469C4.44808 21.396 5.70214 21.9221 7.0131 21.9335C8.32406 21.9449 9.58709 21.4408 10.53 20.5299L12.24 18.8199"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {copied ? "복사됨!" : "링크 복사"}
        </button>
      </div>
    </div>
  );
}
