// Schemat: testimonial
import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Opinia klienta",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Cytat",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Imię (inicjały)",
      type: "string",
    }),
    defineField({
      name: "authorRole",
      title: "Stanowisko / opis",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Kolejność",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "authorName", subtitle: "quote" },
  },
});
