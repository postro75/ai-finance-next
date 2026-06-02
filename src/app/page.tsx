import { client } from "@/sanity/lib/client";
import { isSanityReady } from "@/sanity/env";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "AI Process Automation — Safe, Measurable, Cost-Controlled",
  description: "We help operations leaders adopt AI safely: assess the current state, identify what can be responsibly automated, and ship it under tight cost control. No hype, no risk theatre.",
  openGraph: {
    title: "AI Process Automation — Safe, Measurable, Cost-Controlled",
    description: "Operations leaders: assess where you stand, see what AI can safely take over, ship under cost control.",
    type: "website",
  },
};

export default function Home() {
  const sanityReady = isSanityReady();

  return (
    <main>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        background: "#0a0e1a",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(91, 140, 255, 0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 85% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "relative", zIndex: 2,
          padding: "160px 64px 80px",
          display: "flex", flexDirection: "column", justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "monospace", fontSize: 11, color: "#5b8cff",
            letterSpacing: "0.16em", textTransform: "uppercase",
            display: "inline-flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ width: 28, height: 1, background: "#5b8cff" }} />
            AI PROCESS AUTOMATION · CONSULTING
          </span>
          <h1 style={{
            fontFamily: "Georgia, 'DM Serif Display', serif",
            fontSize: "clamp(44px, 6.5vw, 96px)",
            lineHeight: 1.02, fontWeight: 400,
            color: "#f5f5f7", margin: "28px 0 32px",
            maxWidth: 800, letterSpacing: "-0.01em",
          }}>
            Bring AI into your operations. <em style={{ color: "#5b8cff", fontStyle: "italic" }}>Without the risk.</em>
          </h1>
          <p style={{ fontSize: 19, color: "#c7c9d1", maxWidth: 560, margin: "0 0 40px", lineHeight: 1.6 }}>
            We help operations leaders adopt AI the way senior consultants should: assess the
            current state, identify what can be safely automated, and ship it under tight
            cost control. No hype. No risk theatre.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 28px", borderRadius: 100,
              background: "#f5f5f7", color: "#0a0e1a",
              fontWeight: 500, fontSize: 14, textDecoration: "none",
            }}>Book a 30-min assessment →</a>
            <a href="#approach" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "14px 28px", borderRadius: 100,
              background: "transparent", color: "#f5f5f7",
              border: "1px solid rgba(255,255,255,0.14)",
              fontWeight: 500, fontSize: 14, textDecoration: "none",
            }}>See how we work</a>
          </div>
        </div>
        <div style={{
          position: "relative", zIndex: 2, overflow: "hidden",
          background: "#0e1322",
        }}>
          <img src="/images/expert-fullbody.jpg" alt="AI Process Automation Expert" style={{
            width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%",
          }} />
        </div>
      </section>

      {/* MANIFESTO */}
      <section style={{
        padding: "140px 48px",
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>POSITION</span>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 64px)",
                lineHeight: 1.05, fontWeight: 400,
                color: "#f5f5f7", margin: "24px 0 0",
              }}>
                AI is not a strategy. <em style={{ color: "#5b8cff", fontStyle: "italic" }}>It is a lever</em> &mdash; and like any lever, it breaks the system if you pull it without knowing where the load is.
              </h2>
              <p style={{ fontSize: 17, color: "#c7c9d1", marginTop: 32, maxWidth: 640, lineHeight: 1.6 }}>
                Most "AI transformations" fail not because the technology is wrong, but
                because the organisation hasn't done the unglamorous work: documented
                workflows, identified decision boundaries, mapped data flows, agreed what
                "good" looks like. We start there.
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
              {[
                { l: "Average pilot failure rate (industry)", v: "~70%" },
                { l: "Time-to-value with our process", v: "8-12 weeks" },
                { l: "Cost variance vs. plan", v: "< 10%" },
                { l: "Engagements reaching production", v: "9 of 10" },
              ].map((s, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "baseline",
                  padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}>
                  <span style={{ fontSize: 14, color: "#c7c9d1" }}>{s.l}</span>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 32, color: "#f5f5f7" }}>{s.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section id="approach" style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>01 / CURRENT-STATE ASSESSMENT</span>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400,
              color: "#f5f5f7", margin: "24px 0 0",
            }}>Before any code, we map the <em style={{ color: "#5b8cff" }}>actual</em> state of the operation.</h2>
            <p style={{ fontSize: 18, color: "#c7c9d1", marginTop: 24, lineHeight: 1.6 }}>
              A two-week diagnostic. We sit with the people who actually run the process,
              trace data, document decisions, and produce a clear, evidence-based picture
              of what is automatable &mdash; and what is not.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: 64, borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { n: "A · 01", t: "Process archaeology", p: "We reconstruct the real flow &mdash; not the documented one. Shadow the operators, capture screen recordings, pull system logs." },
              { n: "A · 02", t: "Data lineage audit", p: "Where does the data come from, who touches it, what is the quality? We map it on one page, identify the bottlenecks and integrity risks." },
              { n: "A · 03", t: "Decision boundaries", p: "Which decisions can be safely delegated to a model, which need a human in the loop, which should never be automated? We define these explicitly." },
              { n: "A · 04", t: "Risk & cost surface", p: "A scorecard of what could go wrong, the blast radius, and the cost. Delivered in a single document, ranked, with clear go / no-go thresholds." },
            ].map((c, i) => (
              <div key={i} style={{
                padding: "48px 40px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontFamily: "monospace", fontSize: 12, color: "#5b8cff", letterSpacing: "0.1em", marginBottom: 24 }}>{c.n}</div>
                <h3 style={{ fontSize: 24, fontWeight: 500, color: "#f5f5f7", margin: "0 0 12px" }}>{c.t}</h3>
                <p style={{ fontSize: 15, color: "#c7c9d1", margin: 0, lineHeight: 1.6 }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE AUTOMATE */}
      <section style={{
        padding: "140px 48px",
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>02 / WHAT WE AUTOMATE</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              We work where the leverage is highest &mdash; and the <em style={{ color: "#5b8cff" }}>blast radius</em> is manageable.
            </h2>
            <p style={{ fontSize: 18, color: "#c7c9d1", marginTop: 24, lineHeight: 1.6 }}>
              Six areas where AI automation has the strongest track record. We pick one or two &mdash;
              not all six.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: 56, borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            {[
              { n: "C · 01", t: "Document & data extraction", items: ["Invoices → ERP", "CVs → ATS", "Customer emails → ticket", "Contracts → clause library"] },
              { n: "C · 02", t: "Customer support augmentation", items: ["Thread summarisation", "First-draft replies", "Sentiment detection", "Knowledge gap discovery"] },
              { n: "C · 03", t: "Reporting & analysis", items: ["Weekly business review", "Anomaly explanation", "Cohort & funnel analysis", "Board-deck narratives"] },
              { n: "C · 04", t: "Sales & revenue ops", items: ["Lead scoring with rationale", "Personalised outreach", "CRM hygiene & dedup", "Proposal first-drafts"] },
              { n: "C · 05", t: "Compliance & quality", items: ["AML / KYC screening", "Communication review", "Policy compliance", "Audit evidence"] },
              { n: "C · 06", t: "Internal knowledge ops", items: ["Internal search & Q&A", "Onboarding copilots", "Meeting summarisation", "Knowledge graphs"] },
            ].map((cat, i) => (
              <div key={i} style={{
                padding: "48px 32px",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: "#0e1322",
              }}>
                <div style={{ fontFamily: "monospace", fontSize: 13, color: "#8a8e9b", letterSpacing: "0.1em", marginBottom: 32 }}>{cat.n}</div>
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#f5f5f7", margin: "0 0 16px", fontWeight: 400 }}>{cat.t}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0" }}>
                  {cat.items.map((item, j) => (
                    <li key={j} style={{ fontSize: 14, color: "#c7c9d1", padding: "8px 0 8px 18px", position: "relative", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <span style={{ position: "absolute", left: 0, color: "#5b8cff", fontSize: 12 }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>03 / METHODOLOGY</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              A four-phase engagement. <em style={{ color: "#5b8cff" }}>No surprise invoices.</em>
            </h2>
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0, marginTop: 64, position: "relative",
          }}>
            {[
              { n: "01", d: "2 weeks", t: "Assessment", p: "Diagnostic. Current-state map, prioritised opportunities, risk register, cost envelope." },
              { n: "02", d: "3-5 weeks", t: "Pilot", p: "One workflow, scoped tightly. Shadow mode first, then gradual rollout with human review." },
              { n: "03", d: "2-3 weeks", t: "Hardening", p: "Observability, evaluation, guardrails, cost controls, rollback. The boring engineering." },
              { n: "04", d: "Ongoing", t: "Hand-off", p: "Either transition to your team, or stay on retainer for the first six months." },
            ].map((step, i) => (
              <div key={i} style={{ padding: "0 20px" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  border: "1px solid #5b8cff", background: "#0a0e1a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "Georgia, serif", fontSize: 28, color: "#5b8cff",
                  marginBottom: 28,
                }}>{step.n}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>{step.d}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "#f5f5f7", margin: "0 0 10px" }}>{step.t}</h3>
                <p style={{ fontSize: 14, color: "#c7c9d1", margin: 0, lineHeight: 1.6 }}>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST CONTROL */}
      <section style={{
        padding: "140px 48px",
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>04 / COST CONTROL</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              AI spend has a way of <em style={{ color: "#5b8cff" }}>surprising</em> finance teams. We make it boring.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginTop: 64, alignItems: "start" }}>
            <div style={{ display: "grid", gap: 24 }}>
              {[
                { l: "TYPICAL PER-USER RUN COST", v: "< $2/day", d: "Most workflows land between $0.40 and $1.80 per user per day at steady state." },
                { l: "BUILD COST CEILING (PILOT)", v: "$15-40k", d: "Fixed price. Includes assessment, pilot, and hardening. No surprise change orders." },
                { l: "RUN-RATE TRANSPARENCY", v: "100%", d: "Live dashboard. Per-workflow, per-day, per-token. Alerted before it hurts." },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "28px 32px", background: "#131a2c",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12,
                  position: "relative", overflow: "hidden",
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#5b8cff" }} />
                  <div style={{ fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.l}</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: 48, color: "#f5f5f7", marginTop: 8, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 13, color: "#c7c9d1", marginTop: 8 }}>{s.d}</div>
                </div>
              ))}
            </div>
            <div>
              {[
                { n: "P · 01", t: "Pre-agreed cost ceiling", p: "Per-engagement and per-month hard caps. We stop and call you before we cross them." },
                { n: "P · 02", t: "Model selection matched to value", p: "Strongest model where the cost of being wrong is highest. Cheapest capable model everywhere else." },
                { n: "P · 03", t: "Caching & batching by default", p: "Idempotent prompts, response caching, async batch. 40-70% cost reduction on repetitive flows." },
                { n: "P · 04", t: "Monthly cost review", p: "30-minute call. Actual vs. plan, what drove variance, what's off-rail." },
                { n: "P · 05", t: "Exit at any phase", p: "You keep everything we built: code, docs, runbooks, vendor relationships." },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "64px 1fr auto",
                  gap: 24, padding: "24px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  alignItems: "center",
                }}>
                  <div style={{ fontFamily: "monospace", fontSize: 14, color: "#5b8cff", letterSpacing: "0.1em" }}>{p.n}</div>
                  <div>
                    <h4 style={{ fontSize: 18, fontWeight: 500, color: "#f5f5f7", margin: "0 0 4px" }}>{p.t}</h4>
                    <p style={{ fontSize: 14, color: "#c7c9d1", margin: 0 }}>{p.p}</p>
                  </div>
                  <div style={{ color: "#5b8cff", fontSize: 20 }}>→</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        padding: "140px 48px",
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16, height: 700 }}>
              <div style={{ gridRow: "span 2", position: "relative", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/images/expert-shirt.jpg" alt="Expert" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }} />
              </div>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/images/expert-houndstooth.jpg" alt="Expert" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
              </div>
              <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/images/expert-portrait.jpg" alt="Expert" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%" }} />
              </div>
            </div>
            <div>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "6px 14px", background: "rgba(91,140,255,0.08)",
                border: "1px solid rgba(91,140,255,0.2)", borderRadius: 100,
                fontFamily: "monospace", fontSize: 11, color: "#5b8cff",
                letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
              }}>● FOUNDING PARTNER</span>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "0 0 24px" }}>
                Twenty years in operations. <em style={{ color: "#5b8cff" }}>Ten with AI.</em> One conviction.
              </h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#f5f5f7", lineHeight: 1.4, margin: "0 0 24px", fontWeight: 400 }}>
                The technology is not the bottleneck. The bottleneck is the discipline to
                do the boring parts well &mdash; the assessment, the guardrails, the cost
                controls, the hand-off.
              </p>
              <p style={{ fontSize: 17, color: "#c7c9d1", lineHeight: 1.6, margin: "0 0 18px" }}>
                Before this, I ran operations and transformation work in mid-market
                organisations across financial services, logistics, and professional
                services. I have seen the failure mode from the inside: ambitious AI
                programmes that delivered a demo and a PowerPoint, and nothing the
                business could actually use.
              </p>
              <p style={{ fontSize: 17, color: "#c7c9d1", lineHeight: 1.6, margin: 0 }}>
                This practice exists to do it differently &mdash; smaller, cheaper, with
                the operators in the room and the finance team in the loop.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { l: "EXPERIENCE", v: "20+ yrs" },
                  { l: "ENGAGEMENTS", v: "40+ shipped" },
                  { l: "AVG. TENURE", v: "3.4 yrs" },
                  { l: "VERTICAL", v: "Ops & Finance" },
                ].map((c, i) => (
                  <div key={i} style={{ padding: "18px 20px", background: "#131a2c", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8 }}>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#8a8e9b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.l}</div>
                    <div style={{ fontFamily: "Georgia, serif", fontSize: 26, color: "#f5f5f7", marginTop: 4 }}>{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" style={{
        padding: "140px 48px",
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>05 / CASE STUDIES</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              What this looks like <em style={{ color: "#5b8cff" }}>in production</em> &mdash; not on a slide.
            </h2>
            <p style={{ fontSize: 18, color: "#c7c9d1", marginTop: 24, lineHeight: 1.6 }}>
              Two real engagements, anonymised, with the actual numbers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 56 }}>
            {[
              {
                sector: "FINANCIAL SERVICES", stage: "PILOT → PRODUCTION",
                title: "Compliance review: 5% manual → 100% AI-assisted",
                client: "Mid-market lender, ~800 staff, 6-person compliance team",
                problem: "Team reviewed ~5% of communications. 95% of risk sat unseen.",
                approach: "AI reviews 100%, flags top 8% for human. Two-person sign-off on edge cases.",
                outcome: "5x risk coverage with the same headcount. Two misconduct cases caught in the first month.",
                metrics: [{ l: "RISK COVERAGE", v: "5x", pos: true }, { l: "HEADCOUNT", v: "same" }, { l: "TIME TO PROD", v: "11 wks" }],
              },
              {
                sector: "LOGISTICS", stage: "ASSESSMENT → PILOT",
                title: "Support first-draft: response time 4h → 11min",
                client: "B2B freight forwarder, 40-person CS team, 12k tickets/month",
                problem: "Median first response: 4h 12min. CSAT declining for 3 quarters.",
                approach: "AI drafts replies in brand voice, agent edits & sends. Rollout in 3 waves.",
                outcome: "Median first response: 11 min. CSAT up 18 points. Agents report less burnout.",
                metrics: [{ l: "FIRST RESPONSE", v: "−95%", pos: true }, { l: "CSAT", v: "+18", pos: true }, { l: "MONTHLY COST", v: "$1.4k" }],
              },
            ].map((c, i) => (
              <div key={i} style={{ background: "#131a2c", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ padding: 32, borderBottom: "1px solid rgba(255,255,255,0.08)", background: "#0a0e1a" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                    <span style={{
                      padding: "4px 10px", background: "rgba(91,140,255,0.1)",
                      border: "1px solid rgba(91,140,255,0.2)", borderRadius: 4,
                      fontFamily: "monospace", fontSize: 10, color: "#5b8cff",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                    }}>{c.sector}</span>
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#8a8e9b", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.stage}</span>
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#f5f5f7", margin: 0, fontWeight: 400, lineHeight: 1.2 }}>{c.title}</h3>
                </div>
                <div style={{ padding: 32 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {[{ l: "CLIENT", v: c.client }, { l: "PROBLEM", v: c.problem }, { l: "APPROACH", v: c.approach }].map((s, j) => (
                      <div key={j}>
                        <div style={{ fontFamily: "monospace", fontSize: 10, color: "#8a8e9b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{s.l}</div>
                        <div style={{ fontSize: 14, color: "#c7c9d1", lineHeight: 1.5 }}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "rgba(74,222,128,0.06)", borderLeft: "2px solid #4ade80", padding: "16px 20px", borderRadius: 4 }}>
                    <div style={{ fontFamily: "monospace", fontSize: 10, color: "#4ade80", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>OUTCOME</div>
                    <div style={{ fontSize: 15, color: "#f5f5f7", lineHeight: 1.5 }}>{c.outcome}</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "24px 32px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "#0e1322" }}>
                  {c.metrics.map((m, j) => (
                    <div key={j}>
                      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#8a8e9b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{m.l}</div>
                      <div style={{ fontFamily: "Georgia, serif", fontSize: 28, color: m.pos ? "#4ade80" : "#f5f5f7" }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>06 / FAQ</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              The questions <em style={{ color: "#5b8cff" }}>senior</em> buyers actually ask.
            </h2>
          </div>

          <div style={{ marginTop: 56, maxWidth: 920 }}>
            {[
              { q: "How is this different from hiring a Big Four or a global systems integrator?", a: "Big Four and GSIs are the right call when the problem is organisational change at scale &mdash; we send you to them. We work where the gap is technical execution of AI in production with tight cost and risk controls: small senior team, no junior pyramid, fixed scope per phase, and you own the codebase and runbooks from day one. Most of our clients have used the big firms. They come to us for the part that wasn't getting done." },
              { q: "What does an engagement actually cost?", a: "Assessment: $8-15k fixed (2 weeks). Pilot: $15-40k fixed (5-8 weeks, one production workflow). Retainer: $4-12k/month. Hard cap per month on the run cost. We stop and call you before we cross it. No surprise invoices, ever." },
              { q: "How do you keep AI costs from blowing up?", a: "Three things in the default build: (1) right-sized models &mdash; strongest where the cost of being wrong is highest, cheapest capable everywhere else, (2) caching/batching/async for 40-70% cost reduction on repetitive flows, (3) live cost dashboard with monthly review." },
              { q: "What about data privacy and IP?", a: "You own everything &mdash; code, data, prompts, runbooks, vendor relationships. We don't hold you hostage. For data: no training on your data, EU/US data residency, no PII to external models without explicit consent. For regulated data, self-hosted or VPC-deployed models." },
              { q: "What if the pilot doesn't work?", a: "We tell you in writing in the second week. About 10% of pilots don't make it &mdash; usually data quality or scope. We say so early so you can stop the meter, not at the end of an 8-week build. Either way, you keep the assessment, lineage work, and cost analysis." },
              { q: "Do we need to be AI-ready first?", a: "No. Most of the work we do IS the readiness work &mdash; documenting workflows, mapping data, defining decision boundaries. The technology is the smallest part. What you need: a sponsor with authority, a frontline team willing to be involved, and willingness to do the boring parts well." },
              { q: "Can you work with our existing vendors?", a: "Yes. We don't replace systems, we sit between them. Most of our work is integration &mdash; reading from systems of record, writing back enriched data, alerting humans when needed. Salesforce, HubSpot, ServiceNow, Zendesk, NetSuite, Snowflake, BigQuery, Postgres, plus in-house systems." },
              { q: "What happens after you leave?", a: "You have a working production system, full documentation, runbooks, and the ability to operate it. Most clients take over with one ops engineer after a 2-week shadow. If you don't have that capability, we offer the retainer; if you do, you walk away clean and we wish you well." },
            ].map((item, i) => (
              <details key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "28px 0" }} open={i === 0}>
                <summary style={{ cursor: "pointer", fontSize: 19, fontWeight: 500, color: "#f5f5f7", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
                  {item.q}
                  <span style={{ color: "#5b8cff", fontSize: 24, fontWeight: 300 }}>+</span>
                </summary>
                <p style={{ fontSize: 16, color: "#c7c9d1", lineHeight: 1.65, marginTop: 16 }}>{item.a}</p>
              </details>
            ))}
            <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }} />
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section style={{ padding: "140px 48px" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>07 / ENGAGEMENT MODELS</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.05, fontWeight: 400, color: "#f5f5f7", margin: "24px 0 0" }}>
              Three ways to <em style={{ color: "#5b8cff" }}>start</em>. One way to scale.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: 64, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { name: "Assessment", duration: "2 weeks · fixed fee", featured: false, items: ["4-6 workshops with your team", "Written report, prioritised", "Risk & cost register", "90-min readout with leadership"] },
              { name: "Pilot", duration: "5-8 weeks · fixed fee", featured: true, items: ["Everything in Assessment", "One production workflow", "Shadow mode → gradual rollout", "Observability & guardrails", "Hand-off documentation"] },
              { name: "Retainer", duration: "Ongoing · monthly", featured: false, items: ["Continuous improvement", "Cost & performance monitoring", "Quarterly capability expansion", "Priority response on incidents"] },
            ].map((e, i) => (
              <div key={i} style={{
                padding: "40px 32px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                background: e.featured ? "#131a2c" : "transparent",
                position: "relative",
              }}>
                {e.featured && (
                  <div style={{
                    position: "absolute", top: -1, right: 16,
                    background: "#5b8cff", color: "#fff",
                    fontFamily: "monospace", fontSize: 10, letterSpacing: "0.08em",
                    textTransform: "uppercase", padding: "5px 10px",
                    borderRadius: "0 0 4px 4px",
                  }}>Most chosen</div>
                )}
                <div style={{ fontFamily: "Georgia, serif", fontSize: 28, color: "#f5f5f7", marginBottom: 8 }}>{e.name}</div>
                <div style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>{e.duration}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {e.items.map((it, j) => (
                    <li key={j} style={{ fontSize: 14, color: "#c7c9d1", padding: "6px 0 6px 18px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#4ade80", fontSize: 12 }}>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" style={{
        padding: "140px 48px", textAlign: "center",
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(91, 140, 255, 0.12) 0%, transparent 60%), #0a0e1a",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <span style={{ fontFamily: "monospace", fontSize: 11, color: "#5b8cff", letterSpacing: "0.16em", textTransform: "uppercase" }}>08 / NEXT STEP</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05, color: "#f5f5f7", margin: "24px 0 28px" }}>
            Start with a conversation.
            <br />
            <em style={{ color: "#5b8cff" }}>Not a sales pitch.</em>
          </h2>
          <p style={{ fontSize: 19, color: "#c7c9d1", maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.6 }}>
            Thirty minutes. We will listen, ask a few specific questions, and tell you
            honestly whether there is a fit.
          </p>

          <form action="https://formspree.io/f/PLACEHOLDER" method="POST" style={{
            maxWidth: 560, margin: "0 auto",
            background: "#131a2c",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 16, padding: 32, textAlign: "left",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Name *</label>
                <input type="text" name="name" required style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14 }} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Work email *</label>
                <input type="email" name="email" required style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14 }} />
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div>
                <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Company</label>
                <input type="text" name="company" style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14 }} />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Your role</label>
                <input type="text" name="role" style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14 }} />
              </div>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>What are you exploring?</label>
              <select name="topic" style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14 }}>
                <option value="assessment">A focused assessment of one workflow</option>
                <option value="pilot">A pilot &mdash; we already know what to automate</option>
                <option value="advisory">Advisory &mdash; second opinion on an in-flight project</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Anything we should know</label>
              <textarea name="message" rows={4} style={{ width: "100%", padding: "14px 16px", background: "#0a0e1a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#f5f5f7", fontSize: 14, fontFamily: "inherit", resize: "vertical" }} />
            </div>
            <button type="submit" style={{
              width: "100%", padding: "16px 24px", background: "#5b8cff", color: "#fff",
              border: "none", borderRadius: 10, fontWeight: 500, fontSize: 15,
              cursor: "pointer", marginTop: 8,
            }}>Request the 30-min call →</button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#8a8e9b", marginTop: 16 }}>
              Or email directly: <a href="mailto:contact@ai-finance.example" style={{ color: "#5b8cff" }}>contact@ai-finance.example</a>
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#0e1322", borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "64px 48px 32px",
      }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 64, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 24, color: "#f5f5f7" }}>AI &amp; Finance<span style={{ color: "#5b8cff" }}>.</span></div>
              <p style={{ fontSize: 14, color: "#c7c9d1", marginTop: 16, maxWidth: 280, lineHeight: 1.6 }}>
                AI process automation for operations leaders. Safe by design, cost-controlled by default, hand-off ready from day one.
              </p>
            </div>
            {[
              { h: "APPROACH", items: [{ l: "Assessment", h: "#approach" }, { l: "What we automate", h: "#approach" }, { l: "Methodology", h: "#methodology" }] },
              { h: "ENGAGE", items: [{ l: "Book a call", h: "#contact" }, { l: "Email directly", h: "mailto:contact@ai-finance.example" }, { l: "LinkedIn", h: "#" }] },
              { h: "LEGAL", items: [{ l: "Privacy", h: "#" }, { l: "Terms", h: "#" }, { l: "Security", h: "#" }] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ fontFamily: "monospace", fontSize: 11, color: "#8a8e9b", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>{col.h}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.items.map((it, j) => (
                    <li key={j} style={{ marginBottom: 10 }}>
                      <a href={it.h} style={{ fontSize: 14, color: "#c7c9d1", textDecoration: "none" }}>{it.l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 32, fontSize: 13, color: "#8a8e9b" }}>
            <div>© 2026 AI &amp; Finance · Independent consulting practice</div>
            <div style={{ display: "flex", gap: 24 }}>
              <a href="#" style={{ color: "#8a8e9b", textDecoration: "none" }}>en</a>
              <a href="#" style={{ color: "#8a8e9b", textDecoration: "none" }}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <div style={{
        position: "fixed", bottom: 16, right: 16, zIndex: 50,
        padding: "8px 14px", background: "rgba(10,14,26,0.9)", backdropFilter: "blur(12px)",
        border: "1px solid rgba(91,140,255,0.3)", borderRadius: 100,
        fontFamily: "monospace", fontSize: 10, color: "#5b8cff",
        letterSpacing: "0.08em", textTransform: "uppercase",
      }}>
        {sanityReady ? "● Sanity: live" : "○ Sanity: fallback"}
      </div>
    </main>
  );
}
