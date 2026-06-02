"use client";

/**
 * Konfiguracja Sanity Studio (osadzona w Next.js pod /studio)
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId } from "./sanity/env";

export default defineConfig({
  name: "ai-finance-studio",
  title: "AI & Finance — Studio",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Treści")
          .items([
            S.listItem()
              .title("Ustawienia strony")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("hero").title("Hero"),
            S.divider(),
            S.documentTypeListItem("service").title("Usługi"),
            S.documentTypeListItem("testimonial").title("Opinie"),
          ]),
    }),
    visionTool(),
  ],
});
