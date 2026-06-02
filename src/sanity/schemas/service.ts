// Schemat: usługi
import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Usługa",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nazwa",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Ikona (lucide name)",
      type: "string",
      description: "Np. 'shield', 'trending-up', 'eye' - lista: lucide.dev",
    }),
    defineField({
      name: "order",
      title: "Kolejność",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Kolejność",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
