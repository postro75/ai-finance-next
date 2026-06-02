# AI & Finance — Next.js + Sanity

Wersja 2.0: pełny stack z CMS do edycji treści bez kodowania.

## 🌐 URLs

- **Strona główna:** `/`
- **Sanity Studio (CMS):** `/studio` ← tu edytujesz treści

## 🛠️ Stack

- **Next.js 16** (App Router) + React 19
- **Sanity CMS** (Studio embedded w Next.js)
- **TypeScript**
- **GROQ** queries (server-side, cached)

## 📁 Struktura

```
src/
├── app/
│   ├── layout.tsx          # Root layout (meta, fonty)
│   ├── page.tsx            # Strona główna (fetch z Sanity)
│   ├── globals.css         # Style globalne
│   └── studio/
│       └── [[...tool]]/   # Osadzone Sanity Studio
│           └── page.tsx
├── sanity/
│   ├── env.ts              # Env vars (projectId, dataset)
│   ├── schemas/            # Definicje typów treści
│   │   ├── index.ts
│   │   ├── siteSettings.ts
│   │   ├── hero.ts
│   │   ├── service.ts
│   │   └── testimonial.ts
│   └── lib/
│       ├── client.ts       # Sanity client
│       ├── image.ts        # Image URL builder
│       └── queries.ts      # GROQ queries
sanity.config.ts            # Konfiguracja Studio (root)
.env.local                  # ENV (projectId, dataset)
```

## 🚀 Setup (5 kroków)

### 1. Załóż konto Sanity
- https://www.sanity.io/ → Sign up
- Create new project → "ai-finance"
- Wybierz dataset: `production`

### 2. Pobierz Project ID
- Dashboard → Project settings → Project ID
- Wstaw do `.env.local`:
  ```
  NEXT_PUBLIC_SANITY_PROJECT_ID="abc123xy"
  NEXT_PUBLIC_SANITY_DATASET="production"
  ```

### 3. Dodaj CORS origin (ważne!)
- https://www.sanity.io/manage → API → CORS Origins → Add:
  - `http://localhost:3000` (development)
  - `https://twoja-domena.vercel.app` (production)

### 4. Uruchom lokalnie
```bash
npm run dev
# Otwórz http://localhost:3000
# Studio: http://localhost:3000/studio
```

### 5. Deploy na Vercel
```bash
# Dodaj do Vercel project settings → Environment Variables:
#   NEXT_PUBLIC_SANITY_PROJECT_ID
#   NEXT_PUBLIC_SANITY_DATASET
git push origin master
```

## 📝 Edycja treści

1. Otwórz `/studio` na żywej stronie (lub lokalnie)
2. Zaloguj się kontem Sanity
3. Edytuj:
   - **Ustawienia strony** (tytuł, opis, email, telefon, OG image)
   - **Hero** (nagłówek, podtytuł, CTA, zdjęcie, karty)
   - **Usługi** (lista usług, ikony, kolejność)
   - **Opinie** (cytaty, autorzy)

Zmiany w Sanity = natychmiast widoczne na stronie (cache CDN 60s).

## 🔄 Porównanie z wersją 1 (statyczny HTML)

| Cecha | Wersja 1 (HTML) | Wersja 2 (Next.js + Sanity) |
|---|---|---|
| Edycja treści | Edycja kodu + git push | Panel Sanity Studio |
| Czy działa bez back-endu? | ✅ | ❌ (wymaga Sanity) |
| Szybkość ładowania | ⚡⚡ | ⚡⚡⚡ (Server Components + cache) |
| SEO | Podstawowe | Zaawansowane (per-page meta) |
| Wielojęzyczność | ❌ | ✅ (Sanity ma natywne i18n) |
| Koszt utrzymania | 0 PLN | 0 PLN (free tier Sanity) |
| Setup time | 1 dzień | 2-5 dni |

## 🛡️ Bezpieczeństwo

- `.env.local` NIE commituj
- CORS origins: tylko Twoje domeny
- Sanity token: w dashboard Sanity, nie w kodzie

## 🛣️ Roadmap (opcjonalne)

- [ ] Pełna migracja komponentów z HTML (dashboard, timeline, services)
- [ ] Wielojęzyczność PL/EN
- [ ] Blog z Sanity (marketyng content)
- [ ] Formularz kontaktowy (Formspree + Sanity leads)
- [ ] Custom domain + SSL
- [ ] Analytics (Plausible / GA4)
