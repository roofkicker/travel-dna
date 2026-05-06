import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 여행 DNA는?! | 이더라운드",
  description:
    "10개 질문으로 알아보는 나의 여행 DNA. 나는 어떤 유형의 여행자일까?",
  openGraph: {
    title: "나의 여행 DNA는?! | 이더라운드",
    description:
      "10개 질문으로 알아보는 나의 여행 DNA. 나는 어떤 유형의 여행자일까?",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "나의 여행 DNA는?! | 이더라운드",
    description: "10개 질문으로 알아보는 나의 여행 DNA",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2A5E42",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto min-h-dvh max-w-md bg-brand-cream">
          {children}
        </main>
      </body>
    </html>
  );
}
