/**
 * /studio/[[...tool]] - osadzona Sanity Studio
 * Pokazuje info page jeśli Sanity nie jest skonfigurowany
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityReady } from "@/sanity/env";

export const dynamic = "force-static";

export const metadata = {
  title: "AI & Finance — Sanity Studio",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  if (!isSanityReady()) {
    return (
      <main style={{
        minHeight: "100vh", display: "flex",
        alignItems: "center", justifyContent: "center",
        padding: 32, background: "#0a0f1c", color: "#f1f5f9",
        fontFamily: "-apple-system, sans-serif",
      }}>
        <div style={{ maxWidth: 600, textAlign: "center" }}>
          <div style={{
            display: "inline-block", padding: "6px 14px",
            background: "rgba(6, 182, 212, 0.1)",
            border: "1px solid rgba(6, 182, 212, 0.3)",
            borderRadius: 100, fontSize: 12, color: "#06b6d4",
            marginBottom: 24, letterSpacing: "0.08em",
          }}>
            SANITY STUDIO
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 600, margin: "0 0 16px" }}>
            Wymagana konfiguracja
          </h1>
          <p style={{ fontSize: 16, color: "#94a3b8", lineHeight: 1.6, marginBottom: 24 }}>
            Aby uruchomić Sanity Studio, musisz:
          </p>
          <ol style={{ textAlign: "left", color: "#cbd5e1", lineHeight: 1.8 }}>
            <li>Założyć konto na <a href="https://www.sanity.io" style={{ color: "#06b6d4" }}>sanity.io</a></li>
            <li>Utworzyć nowy projekt "ai-finance"</li>
            <li>Skopiować <code style={{ background: "#1a2236", padding: "2px 6px", borderRadius: 4 }}>NEXT_PUBLIC_SANITY_PROJECT_ID</code> z dashboardu</li>
            <li>Dodać go do <code style={{ background: "#1a2236", padding: "2px 6px", borderRadius: 4 }}>.env.local</code> w projekcie <code>ai-finance-next</code></li>
            <li>W Vercel → Project Settings → Environment Variables dodać tę samą zmienną</li>
            <li>Deploy ponownie</li>
          </ol>
          <p style={{ marginTop: 32, fontSize: 14, color: "#94a3b8" }}>
            Pełna instrukcja: <a href="/README.md" style={{ color: "#06b6d4" }}>README projektu</a>
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
