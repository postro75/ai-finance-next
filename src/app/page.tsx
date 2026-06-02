import { client } from "@/sanity/lib/client";
import { heroQuery, servicesQuery, testimonialsQuery } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Finance — Inteligentne doradztwo finansowe",
  description: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji.",
  openGraph: {
    title: "AI & Finance — Inteligentne doradztwo finansowe z AI",
    description: "Strategie inwestycyjne wspierane AI. 20+ lat doświadczenia.",
    type: "website",
  },
};

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

// Sprawdzenie czy Sanity jest skonfigurowany
function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return !!projectId && projectId !== "TUTAJ_WKLEJ_PROJECT_ID" && projectId !== "placeholder";
}

// Fallback content (gdy Sanity nie jest jeszcze skonfigurowany)
const FALLBACK_HERO: Hero = {
  tagline: "AI · Doradztwo finansowe",
  headline: "Inteligentny kapitał w służbie Twojego wzrostu",
  subheadline: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji. Strategie inwestycyjne, które widzą więcej, reagują szybciej i pracują 24/7.",
  primaryCta: { label: "Umów konsultację", href: "#kontakt" },
  secondaryCta: { label: "Zobacz demo", href: "#dashboard" },
  portrait: "/images/expert-houndstooth.jpg",
  floatingCard1: { label: "Portfel klienta", value: "+18.4% YTD" },
  floatingCard2: { label: "AI Signal", value: "Kupno · SPX" },
};

const FALLBACK_SERVICES: Service[] = [
  { _id: "1", title: "Optymalizacja portfela", description: "AI dobiera alokację pod Twój profil ryzyka i cel.", icon: "settings" },
  { _id: "2", title: "Zarządzanie ryzykiem", description: "Ciągły monitoring + automatyczne zabezpieczenia przed stratami.", icon: "shield" },
  { _id: "3", title: "Predykcje rynkowe", description: "Sygnały kupna/sprzedaży oparte na analizie 50k+ danych dziennie.", icon: "eye" },
  { _id: "4", title: "Raporty + edukacja", description: "Co miesiąc raport + dostęp do knowledge base i konsultacji.", icon: "file" },
];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    _id: "1",
    quote: "Pierwszy raz mam pełną transparentność — widzę każdą decyzję AI i dlaczego ją podjął. W 18 miesięcy wynik +24% lepszy niż mój poprzedni doradca.",
    authorName: "Marek R.",
    authorRole: "Prezes, sektor tech · portfel 1.2M PLN",
  },
];

export default async function Home() {
  let hero: Hero | null = null;
  let services: Service[] = [];
  let testimonials: Testimonial[] = [];

  // Fetch z Sanity (jeśli skonfigurowany)
  if (isSanityConfigured()) {
    try {
      [hero, services, testimonials] = await Promise.all([
        client.fetch<Hero | null>(heroQuery),
        client.fetch<Service[]>(servicesQuery),
        client.fetch<Testimonial[]>(testimonialsQuery),
      ]);
    } catch (err) {
      console.warn("Sanity fetch failed, using fallback:", err);
    }
  }

  // Użyj fallbacków jeśli Sanity nie zwróciło danych
  if (!hero) hero = FALLBACK_HERO;
  if (services.length === 0) services = FALLBACK_SERVICES;
  if (testimonials.length === 0) testimonials = FALLBACK_TESTIMONIALS;

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 32px",
        background: `radial-gradient(ellipse 80% 50% at 80% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), var(--bg)`,
        overflow: "hidden",
      }}>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 14px", background: "var(--surface-2)",
            border: "1px solid var(--line)", borderRadius: 100,
            fontSize: 12, color: "var(--primary)",
            letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: 28,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--primary)", display: "inline-block",
            }} />
            {hero.tagline}
          </div>
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 400, lineHeight: 1.05,
            margin: "0 0 24px", letterSpacing: "-0.02em",
            maxWidth: 900,
            fontFamily: "Georgia, 'DM Serif Display', serif",
          }}>
            {hero.headline}
          </h1>
          <p style={{
            fontSize: 19, color: "var(--text-2)",
            maxWidth: 640, margin: "0 0 40px", lineHeight: 1.6,
          }}>
            {hero.subheadline}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={hero.primaryCta.href} style={{
              padding: "12px 24px", borderRadius: 10,
              background: "var(--primary)", color: "#06121a",
              fontWeight: 600, textDecoration: "none",
              boxShadow: "0 8px 24px -8px rgba(6, 182, 212, 0.5)",
            }}>
              {hero.primaryCta.label} →
            </a>
            <a href={hero.secondaryCta.href} style={{
              padding: "12px 24px", borderRadius: 10,
              background: "transparent", color: "var(--text)",
              border: "1px solid var(--line)", fontWeight: 600,
              textDecoration: "none",
            }}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="dashboard" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{
              fontFamily: "monospace", fontSize: 13, color: "var(--primary)",
              letterSpacing: "0.1em",
            }}>
              01 / Usługi
            </span>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
              margin: "12px 0 16px", lineHeight: 1.15,
              fontFamily: "Georgia, serif",
            }}>
              Co dokładnie oferujemy
            </h2>
            <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: 640, margin: 0 }}>
              Konkretne usługi, nie ogólniki. Klient od razu widzi, czy jest w dobrym miejscu.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}>
            {services.map((s) => (
              <div key={s._id} style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: 24,
                transition: "all 0.25s",
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{
        padding: "96px 32px",
        background: "var(--bg)",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{
            fontFamily: "monospace", fontSize: 13, color: "var(--primary)",
            letterSpacing: "0.1em",
          }}>
            02 / Social proof
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
            margin: "12px 0 48px", lineHeight: 1.15,
            fontFamily: "Georgia, serif",
          }}>
            Co mówią klienci
          </h2>
          {testimonials.map((t) => (
            <blockquote key={t._id} style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: "40px 48px",
              margin: 0,
            }}>
              <p style={{
                fontSize: 20, lineHeight: 1.5, color: "var(--text)",
                margin: "0 0 24px", fontStyle: "italic",
              }}>
                "{t.quote}"
              </p>
              <footer style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--primary), var(--accent))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#06121a", fontWeight: 700, fontSize: 16,
                }}>
                  {t.authorName.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{t.authorName}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.authorRole}</div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA / KONTAKT */}
      <section id="kontakt" style={{
        padding: "96px 32px", textAlign: "center",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%), var(--bg)",
        borderTop: "1px solid var(--line)",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{
            fontFamily: "monospace", fontSize: 13, color: "var(--primary)",
            letterSpacing: "0.1em",
          }}>
            03 / Kontakt
          </span>
          <h2 style={{
            fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400,
            lineHeight: 1.1, margin: "12px 0 20px",
            fontFamily: "Georgia, serif",
          }}>
            Zacznij od 30-minutowej<br />rozmowy. Bez zobowiązań.
          </h2>
          <p style={{ fontSize: 18, color: "var(--text-2)", margin: "0 0 36px" }}>
            Napisz bezpośrednio: <a href="mailto:kontakt@ai-finance.pl">kontakt@ai-finance.pl</a>
          </p>
          <a href="mailto:kontakt@ai-finance.pl" style={{
            display: "inline-block",
            padding: "14px 28px", borderRadius: 10,
            background: "var(--primary)", color: "#06121a",
            fontWeight: 600, fontSize: 15, textDecoration: "none",
            boxShadow: "0 8px 24px -8px rgba(6, 182, 212, 0.5)",
          }}>
            Zarezerwuj termin →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "32px", textAlign: "center",
        borderTop: "1px solid var(--line)",
        color: "var(--muted)", fontSize: 13,
      }}>
        <p style={{ margin: 0 }}>
          © 2026 AI &amp; Finance · Strona zbudowana z{" "}
          <a href="https://nextjs.org" style={{ color: "var(--primary)" }}>Next.js</a> +{" "}
          <a href="https://sanity.io" style={{ color: "var(--primary)" }}>Sanity CMS</a>
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 11, opacity: 0.7 }}>
          {isSanityConfigured() ? "✓ Połączono z Sanity" : "○ Sanity nie skonfigurowany (używany fallback) · /studio aby edytować"}
        </p>
      </footer>
    </main>
  );
}
