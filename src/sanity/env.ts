// Sanity environment variables (lazy, nie rzuca błędów jeśli nie ustawione)

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// Helper: czy Sanity jest w pełni skonfigurowany?
export function isSanityReady(): boolean {
  return !!projectId && projectId !== "TUTAJ_WKLEJ_PROJECT_ID" && projectId !== "placeholder";
}
