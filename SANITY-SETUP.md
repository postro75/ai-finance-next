# Sanity CMS Setup (15 min, 1x)

Dodaj edycję treści przez panel (jak WordPress, ale dla developerów).

---

## Krok 1: Załóż konto Sanity
👉 https://www.sanity.io/ → Sign up (free tier: 3 użytkowników, unlimited documents, 10GB bandwidth)

## Krok 2: Utwórz projekt
1. Dashboard → "Create new project"
2. Name: `ai-finance`
3. Dataset: `production` (default)
4. Visibility: Public
5. Framework: **Next.js** (albo Other)
6. Template: **Clean project** (bez starterów)

## Krok 3: Skopiuj Project ID
- Project Settings → Project ID → skopiuj
- To jest Twój `NEXT_PUBLIC_SANITY_PROJECT_ID`

## Krok 4: Dodaj CORS (ważne!)
- API → CORS Origins → Add
- `http://localhost:3000` (development)
- `https://ai-finance-next.vercel.app` (production)
- ☐ Allow credentials

## Krok 5: Dodaj ENV w Vercel
1. https://vercel.com/dashboard → Project `ai-finance-next`
2. Settings → Environment Variables
3. Dodaj 3 zmienne:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = "twoje-project-id"
   NEXT_PUBLIC_SANITY_DATASET = "production"
   NEXT_PUBLIC_SANITY_API_VERSION = "2024-10-01"
   ```
4. Environments: ☑ Production ☑ Preview
5. Save

## Krok 6: Local development
```bash
# W folderze ai-finance-next utwórz .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID="twoje-project-id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

⚠️ Plik `.env.local` NIE commituj (jest w `.gitignore`).

## Krok 7: Redeploy Vercel
- Vercel → Deployments → ostatni → ⋮ → Redeploy
- ☐ Clear build cache (opcjonalnie)

## Krok 8: Test Studio
1. Otwórz https://ai-finance-next.vercel.app/studio
2. Powinien załadować się panel Sanity
3. Zaloguj się kontem Sanity
4. Dodaj treść:
   - **Site Settings** → tytuł, opis, email, telefon, OG image
   - **Hero** → headline, subheadline, CTA, zdjęcie
   - **Usługi** → 4-6 usług z opisami
   - **Opinie** (jeśli dodasz w przyszłości)

## Krok 9: Zobacz zmiany na stronie
Po dodaniu treści w Studio, strona automatycznie pokazuje ją (po ~60s cache).

---

## Schematy (już są w projekcie)

Folder `src/sanity/schemas/`:
- `siteSettings.ts` — globalne ustawienia
- `hero.ts` — sekcja hero
- `service.ts` — usługi
- `testimonial.ts` — opinie (jeśli dodasz w przyszłości)

Dodawanie nowego typu:
1. Utwórz nowy plik `np/faq.ts`
2. Dodaj schemat wg wzoru innych
3. Dodaj do `schemas/index.ts`: `export const schemaTypes = [siteSettings, hero, service, testimonial, faq]`
4. Dodaj GROQ query w `lib/queries.ts`
5. Commit + push → auto-redeploy

---

## Pricing Sanity
- **Free**: 3 użytkowników, unlimited documents, 10GB bandwidth, 100k API requests/mies — wystarczy dla większości stron
- **Team** ($15/mies): unlimited użytkowników, więcej bandwidth
- Więcej: https://www.sanity.io/pricing

---

## Częste problemy

**"Project not found" w Studio**
→ Sprawdź Project ID w Vercel env vars

**"CORS error" w konsoli przeglądarki**
→ Dodaj domenę do CORS origins w Sanity

**Strona pokazuje fallback zamiast treści z Sanity**
→ Sprawdź czy dodałeś dokument w Studio (np. Hero)
→ Poczekaj 60s na cache
→ Sprawdź build logs w Vercel

**"Permission denied" przy edycji w Studio**
→ Sprawdź czy jesteś zalogowany na konto z dostępem do projektu Sanity
