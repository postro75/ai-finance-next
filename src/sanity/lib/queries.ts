// GROQ queries - wszystkie zapytania w jednym miejscu
import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0] {
    title,
    description,
    contactEmail,
    phone,
    "ogImage": ogImage.asset->url
  }
`);

export const heroQuery = defineQuery(`
  *[_type == "hero"][0] {
    tagline,
    headline,
    subheadline,
    primaryCta { label, href },
    secondaryCta { label, href },
    "portrait": portrait.asset->url,
    floatingCard1 { label, value },
    floatingCard2 { label, value }
  }
`);

export const servicesQuery = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }
`);

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    authorName,
    authorRole
  }
`);
