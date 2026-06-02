// Schemat: sekcja Hero
import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "tagline",
      title: "Tag (mały tekst nad tytułem)",
      type: "string",
    }),
    defineField({
      name: "headline",
      title: "Nagłówek (HTML dozwolony dla kolorów)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheadline",
      title: "Podtytuł",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "primaryCta",
      title: "Przycisk główny",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Tekst" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      title: "Przycisk drugorzędny",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "Tekst" },
        { name: "href", type: "string", title: "Link" },
      ],
    }),
    defineField({
      name: "portrait",
      title: "Zdjęcie portretowe",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "floatingCard1",
      title: "Pływająca karta 1 (wynik)",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "value", type: "string" },
      ],
    }),
    defineField({
      name: "floatingCard2",
      title: "Pływająca karta 2 (sygnał)",
      type: "object",
      fields: [
        { name: "label", type: "string" },
        { name: "value", type: "string" },
      ],
    }),
  ],
  preview: {
    select: { title: "headline", media: "portrait" },
  },
});
