// Sanity client (server-side, do fetch w Server Components)
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // cache w produkcji
  perspective: "published",
});
