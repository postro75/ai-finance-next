import { client } from "@/sanity/lib/client";
import { heroQuery, servicesQuery, testimonialsQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Finance — Inteligentne doradztwo finansowe",
  description: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji.",
};

// Wymuszenie dynamicznego renderowania (dane z Sanity)
export const dynamic = "force-dynamic";

type Hero = {
  tagline: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  portrait: string;
  floatingCard1: { label: string; value: string };
  floatingCard2: { label: string; value: string };
};

type Service = { _id: string; title: string; description: string; icon: string };
type Testimonial = { _id: string; quote: string; authorName: string; authorRole: string };

export default async function Home() {
  // Fetch równoległy
  const [hero, services, testimonials] = await Promise.all([
    client.fetch<Hero | null>(heroQuery),
    client.fetch<Service[]>(servicesQuery),
    client.fetch<Testimonial[]>(testimonialsQuery),
  ]);

  return (
    <main style={{ minHeight: "100vh", padding: "64px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <header style={{ marginBottom: 64 }}>
          <div style={{
            display: "inline-block", padding: "6px 14px",
            background: "var(--surface)", border: "1px solid var(--line)",
            borderRadius: 100, fontSize: 12, color: "var(--primary)",
            marginBottom: 24, letterSpacing: "0.08em", textTransform: "uppercase"
          }}>
            ● Powered by Sanity CMS
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
            {hero?.headline || "AI & Finance — Twój tekst z Sanity"}
          </h1>
          <p style={{ fontSize: 19, color: "var(--text-2)", maxWidth: 640, marginTop: 20 }}>
            {hero?.subheadline || "Dodaj treść Hero w Sanity Studio (/studio)"}
          </p>
          {hero?.portrait && (
            <img
              src={hero.portrait}
              alt="Ekspert"
              style={{ marginTop: 32, maxWidth: 300, borderRadius: 12 }}
            />
          )}
        </header>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 32, marginBottom: 32 }}>Usługi</h2>
          {services.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>
              Brak usług. Dodaj w <a href="/studio" style={{ color: "var(--primary)" }}>Sanity Studio</a>.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {services.map((s) => (
                <div key={s._id} style={{
                  padding: 24, background: "var(--surface)",
                  border: "1px solid var(--line)", borderRadius: 12
                }}>
                  <h3 style={{ fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)" }}>{s.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 32, marginBottom: 32 }}>Opinie klientów</h2>
          {testimonials.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>
              Brak opinii. Dodaj w <a href="/studio" style={{ color: "var(--primary)" }}>Sanity Studio</a>.
            </p>
          ) : (
            testimonials.map((t) => (
              <blockquote key={t._id} style={{
                padding: 24, background: "var(--surface)",
                border: "1px solid var(--line)", borderRadius: 12, marginBottom: 12
              }}>
                <p style={{ fontSize: 16, fontStyle: "italic", marginBottom: 12 }}>"{t.quote}"</p>
                <footer style={{ fontSize: 14, color: "var(--muted)" }}>
                  — {t.authorName}, {t.authorRole}
                </footer>
              </blockquote>
            ))
          )}
        </section>

        <footer style={{
          padding: 32, textAlign: "center",
          background: "var(--surface)", borderRadius: 12,
          border: "1px solid var(--line)"
        }}>
          <p style={{ color: "var(--muted)", marginBottom: 16 }}>
            Strona napędzana przez Next.js + Sanity CMS
          </p>
          <a href="/studio" style={{
            display: "inline-block", padding: "10px 20px",
            background: "var(--primary)", color: "#06121a",
            borderRadius: 8, textDecoration: "none", fontWeight: 600
          }}>
            Otwórz Sanity Studio →
          </a>
        </footer>
      </div>
    </main>
  );
}
