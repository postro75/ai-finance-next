export const dynamic = "force-static";

export const metadata = {
  title: "AI & Finance — Inteligentne doradztwo finansowe",
  description: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji.",
};

const FALLBACK_HERO = {
  tagline: "AI · Doradztwo finansowe",
  headline: "Inteligentny kapitał w służbie Twojego wzrostu",
  subheadline: "Łączymy 20+ lat doświadczenia w finansach z modelami AI nowej generacji. Strategie inwestycyjne, które widzą więcej, reagują szybciej i pracują 24/7.",
};

const FALLBACK_SERVICES = [
  { id: 1, title: "Optymalizacja portfela", desc: "AI dobiera alokację pod Twój profil ryzyka i cel." },
  { id: 2, title: "Zarządzanie ryzykiem", desc: "Ciągły monitoring + automatyczne zabezpieczenia przed stratami." },
  { id: 3, title: "Predykcje rynkowe", desc: "Sygnały kupna/sprzedaży oparte na analizie 50k+ danych dziennie." },
  { id: 4, title: "Raporty + edukacja", desc: "Co miesiąc raport + dostęp do knowledge base i konsultacji." },
];

const FALLBACK_TESTIMONIAL = {
  quote: "Pierwszy raz mam pełną transparentność — widzę każdą decyzję AI i dlaczego ją podjął. W 18 miesięcy wynik +24% lepszy niż mój poprzedni doradca.",
  author: "Marek R.",
  role: "Prezes, sektor tech · portfel 1.2M PLN",
};

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 32px",
        background: `radial-gradient(ellipse 80% 50% at 80% 20%, rgba(6, 182, 212, 0.12) 0%, transparent 50%), #0a0f1c`,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div style={{
            display: "inline-block", padding: "6px 14px",
            background: "#1a2236", border: "1px solid #1f2a44",
            borderRadius: 100, fontSize: 12, color: "#06b6d4",
            marginBottom: 28, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            ● {FALLBACK_HERO.tagline}
          </div>
          <h1 style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            fontWeight: 400, lineHeight: 1.05,
            margin: "0 0 24px", color: "#f1f5f9",
            fontFamily: "Georgia, serif",
          }}>
            {FALLBACK_HERO.headline}
          </h1>
          <p style={{
            fontSize: 19, color: "#cbd5e1",
            maxWidth: 640, margin: "0 0 40px",
          }}>
            {FALLBACK_HERO.subheadline}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#kontakt" style={{
              padding: "12px 24px", borderRadius: 10,
              background: "#06b6d4", color: "#06121a",
              fontWeight: 600, textDecoration: "none",
            }}>
              Umów konsultację →
            </a>
            <a href="#uslugi" style={{
              padding: "12px 24px", borderRadius: 10,
              background: "transparent", color: "#f1f5f9",
              border: "1px solid #1f2a44", fontWeight: 600,
              textDecoration: "none",
            }}>
              Zobacz usługi
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="uslugi" style={{ padding: "96px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
            margin: "0 0 48px", color: "#f1f5f9",
            fontFamily: "Georgia, serif",
          }}>
            Co dokładnie oferujemy
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}>
            {FALLBACK_SERVICES.map((s) => (
              <div key={s.id} style={{
                background: "#111827",
                border: "1px solid #1f2a44",
                borderRadius: 14, padding: 24,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 8px", color: "#f1f5f9" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13, color: "#94a3b8", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "96px 32px", background: "#0a0f1c" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400,
            margin: "0 0 48px", color: "#f1f5f9",
            fontFamily: "Georgia, serif",
          }}>
            Co mówią klienci
          </h2>
          <blockquote style={{
            background: "#111827",
            border: "1px solid #1f2a44",
            borderRadius: 18,
            padding: "40px 48px", margin: 0,
          }}>
            <p style={{
              fontSize: 20, lineHeight: 1.5, color: "#f1f5f9",
              margin: "0 0 24px", fontStyle: "italic",
            }}>
              "{FALLBACK_TESTIMONIAL.quote}"
            </p>
            <footer style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, #06b6d4, #d4af37)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#06121a", fontWeight: 700, fontSize: 16,
              }}>
                {FALLBACK_TESTIMONIAL.author.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "#f1f5f9" }}>
                  {FALLBACK_TESTIMONIAL.author}
                </div>
                <div style={{ fontSize: 13, color: "#94a3b8" }}>
                  {FALLBACK_TESTIMONIAL.role}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" style={{
        padding: "96px 32px", textAlign: "center",
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%), #0a0f1c",
        borderTop: "1px solid #1f2a44",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400,
            lineHeight: 1.1, margin: "0 0 20px", color: "#f1f5f9",
            fontFamily: "Georgia, serif",
          }}>
            Zacznij od 30-minutowej<br />rozmowy. Bez zobowiązań.
          </h2>
          <p style={{ fontSize: 18, color: "#cbd5e1", margin: "0 0 36px" }}>
            Napisz bezpośrednio: <a href="mailto:kontakt@ai-finance.pl" style={{ color: "#06b6d4" }}>kontakt@ai-finance.pl</a>
          </p>
          <a href="mailto:kontakt@ai-finance.pl" style={{
            display: "inline-block",
            padding: "14px 28px", borderRadius: 10,
            background: "#06b6d4", color: "#06121a",
            fontWeight: 600, fontSize: 15, textDecoration: "none",
          }}>
            Zarezerwuj termin →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "32px", textAlign: "center",
        borderTop: "1px solid #1f2a44",
        color: "#94a3b8", fontSize: 13,
      }}>
        <p style={{ margin: 0 }}>
          © 2026 AI &amp; Finance · Next.js + Sanity CMS
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 11 }}>
          Sanity Studio: <a href="/studio" style={{ color: "#06b6d4" }}>/studio</a> (po skonfigurowaniu)
        </p>
      </footer>
    </main>
  );
}
