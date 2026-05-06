export const UTM_BASE = {
  source: "offline",
  medium: "quiz",
  campaign: "jto_2605",
} as const;

export function buildEataroundUrl(baseUrl: string): string {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("utm_source", UTM_BASE.source);
    url.searchParams.set("utm_medium", UTM_BASE.medium);
    url.searchParams.set("utm_campaign", UTM_BASE.campaign);
    return url.toString();
  } catch {
    return baseUrl;
  }
}
