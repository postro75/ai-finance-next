// Sanity client (lazy, tworzony dopiero przy użyciu)
import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

let _client: SanityClient | null = null;

export function getClient(): SanityClient | null {
  if (!projectId) return null;
  if (!_client) {
    _client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    });
  }
  return _client;
}

// Backward-compat: klient który może być null
export const client = {
  fetch<T>(query: string, params?: Record<string, unknown>): Promise<T> {
    const c = getClient();
    if (!c) {
      throw new Error("Sanity client not configured (missing NEXT_PUBLIC_SANITY_PROJECT_ID)");
    }
    return c.fetch<T>(query, params);
  },
};
