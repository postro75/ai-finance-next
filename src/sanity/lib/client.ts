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

// Lazy client wrapper - bezpieczny do importowania nawet bez projectId
export const client = {
  async fetch<T = unknown>(query: string, params?: Record<string, unknown>): Promise<T> {
    const c = getClient();
    if (!c) {
      throw new Error("Sanity client not configured");
    }
    return c.fetch<T>(query, params || {});
  },
};
