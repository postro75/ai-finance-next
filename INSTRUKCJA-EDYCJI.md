# INSTRUKCJA EDYCJI — AI & Finance Landing Page

Kompletny przewodnik: jak edytować stronę, deployować zmiany, rozwiązywać problemy.

---

## 1. KIEDY CO EDYTOWAĆ

| Chcesz zmienić... | Plik |
|---|---|
| Treść hero, sekcje, FAQ, case studies, kolory | `vercel-deploy/index.html` |
| Konfigurację Vercel (cache, security headers) | `vercel-deploy/vercel.json` |
| SEO (sitemap, robots) | `vercel-deploy/robots.txt`, `vercel-deploy/sitemap.xml` |
| Formularz kontaktowy (Formspree) | `vercel-deploy/index.html` → szukaj `PLACEHOLDER` |
| Wersję Next.js z CMS | `ai-finance-next/src/app/page.tsx` |
| Schematy CMS (Sanity) | `ai-finance-next/src/sanity/schemas/` |

---

## 2. WORKFLOW (3 SPOSOBY)

### 🅰️ Przez GitHub w przeglądarce (najprostszy)

Dla drobnych zmian tekstu.

1. Otwórz https://github.com/postro75/ai-finance-landing
2. Kliknij `index.html`
3. Ikona ołówka ✏️ (Edit this file)
4. Zmień co chcesz
5. Na dole: opisz zmianę + **Commit changes**
6. ⏳ Czekaj 30s — Vercel auto-deploy
7. Odśwież stronę https://ai-finance-landing-five.vercel.app

### 🅱️ VS Code + Git (rekomendowane)

Dla większych zmian, pracy offline, eksperymentów.

**Instalacja (jednorazowo):**
1. Pobierz **VS Code**: https://code.visualstudio.com/
2. Zainstaluj **Git for Windows** (już masz, sprawdź: `git --version` w PowerShell)
3. Otwórz VS Code → Extensions → zainstaluj:
   - **Live Server** (autoreload preview)
   - **Prettier** (formatowanie)
   - **ESLint** (błędy w kodzie)

**Workflow:**
```powershell
# Otwórz folder projektu
cd C:\Users\postr\.minimax-agent\projects\vercel-deploy

# Lub w VS Code: File → Open Folder → wybierz folder

# 1. Edytuj pliki w VS Code
# 2. Preview: kliknij prawym na index.html → "Open with Live Server"
# 3. Sprawdź zmiany
git status                    # co się zmieniło
git diff                      # szczegóły zmian

# 4. Zapisz wersję
git add .
git commit -m "Poprawka nagłówka hero"
git push origin master

# 5. Vercel auto-deploy w 30s
```

### 🅲️ Vercel Dashboard (bez Git)

Dla szybkich testów:
1. Vercel → Project `ai-finance-landing` → Settings → Deploy Hooks
2. Dodaj nowy hook → skopiuj URL
3. Zapisz URL jako bookmark
4. Po edycji (gdziekolwiek) → kliknij bookmark → deploy

---

## 3. CZĘSTE ZMIANY — gotowe fragmenty

### Zmiana nagłówka hero

Znajdź w `index.html`:
```html
<h1>
  <span class="word">Bring</span>
  <span class="word">AI</span>
  ...
  <span class="word"><em>the risk</em>.</span>
</h1>
```

Zamień na swój tekst (każde słowo jako `<span class="word">`):
```html
<h1>
  <span class="word">Twoje</span>
  <span class="word">nowe</span>
  <span class="word">otwarte</span>
  <span class="word">zdanie.</span>
</h1>
```

### Zmiana koloru akcentu (niebieski → np. zielony)

W `index.html` w sekcji `:root`:
```css
:root {
  --primary: #5b8cff;    /* zmień na #10b981 (zielony) */
  --primary-glow: rgba(91, 140, 255, 0.35);  /* dopasuj RGB */
}
```

Popularne kolory:
- Niebieski (teraz): `#5b8cff` / `rgba(91, 140, 255, 0.35)`
- Zielony: `#10b981` / `rgba(16, 185, 129, 0.35)`
- Pomarańczowy: `#f97316` / `rgba(249, 115, 22, 0.35)`
- Czerwony: `#ef4444` / `rgba(239, 68, 68, 0.35)`
- Fioletowy: `#8b5cf6` / `rgba(139, 92, 246, 0.35)`

### Zmiana emaila kontaktowego

Znajdź i zamień (3 miejsca):
```html
contact@ai-finance.example  →  twoj-prawdziwy@email.pl
```

### Dodanie nowego zdjęcia

1. Wrzuć zdjęcie do `vercel-deploy/images/nazwa.jpg`
2. W HTML użyj: `<img src="images/nazwa.jpg" alt="opis">`
3. Commit + push

### Zmiana Case Study

Znajdź sekcję `<!-- CASE STUDIES -->` w `index.html`. Każdy case to jeden `<div class="case-card">` z:
- `case-sector` (np. FINANCIAL SERVICES)
- `case-stage` (np. PILOT → PRODUCTION)
- `case-head h3` (tytuł)
- `case-story-item` (Client/Problem/Approach)
- `case-outcome` (wynik)
- `case-metrics` (3 metryki)

Skopiuj cały `<div class="case-card">...</div>` i zmień dane.

### Zmiana FAQ

Każde pytanie to:
```html
<div class="faq-item">
  <button class="faq-question">
    Twoje pytanie?
    <svg class="faq-toggle">...</svg>
  </button>
  <div class="faq-answer">
    <p>Twoja odpowiedź.</p>
  </div>
</div>
```

---

## 4. PODMIENIENIE FORMULARZA NA REALNY BACKEND (Formspree)

Formularz ma teraz `mailto:` fallback (otwiera klienta pocztowego). Aby zbierać leady:

1. Załóż konto na https://formspree.io (free tier: 50/mies)
2. New Form → podaj email
3. Skopiuj **Form ID** (np. `xyzabc123`)
4. W `index.html` zamień **3 miejsca**:
   - `action="https://formspree.io/f/PLACEHOLDER"` → `action="https://formspree.io/f/xyzabc123"`
   - W JavaScript: `if (!action.includes('PLACEHOLDER'))` → `if (!action.includes('xyzabc123'))`
5. Commit + push → formularz gotowy

Szczegóły: patrz `FORMSPREE-SETUP.md`

---

## 5. CUSTOM DOMAIN

Gdy kupisz domenę (np. `ai-finance.pl`):

1. Kup domenę u rejestratora (nazwa.pl, ovh.pl, GoDaddy, Cloudflare ~50-100 PLN/rok)
2. Vercel → Project → Settings → Domains → Add
3. Podaj domenę → Vercel pokaże rekordy DNS do dodania
4. W panelu rejestratora dodaj rekordy (CNAME lub A)
5. Czekaj 5-30 min na propagację
6. HTTPS auto-setup

Częsty problem: strona wskazuje na starą domenę po zmianie → Vercel Settings → Domains → ustaw nową jako primary.

---

## 6. ROLLBACK (cofanie zmiany)

Każdy `git push` = nowy deployment. Vercel trzyma je wszystkie.

**Cofnij przez Vercel Dashboard:**
1. Vercel → Project → Deployments
2. Znajdź poprzednią działającą wersję (Status: Ready)
3. ⋮ menu → "Promote to Production"
4. ✅ Strona wraca do tamtej wersji w 30s

**Cofnij przez Git:**
```bash
# Znajdź ostatni działający commit
git log --oneline

# Cofnij zmiany (tworzy nowy commit)
git revert HEAD
git push
```

---

## 7. DEBUGOWANIE

### Strona wyświetla starą wersję
- **Vercel cache** → odczekaj 1-2 min, albo otwórz w trybie incognito
- **Twój cache przeglądarki** → Ctrl+Shift+R (hard refresh)

### Layout się rozjechał
- Otwórz DevTools (F12) → Console → szukaj czerwonych błędów
- Najczęstsze: literówka w CSS class, brakujący tag zamykający

### Zdjęcia nie ładują się
- Sprawdź czy plik jest w `images/` (wielkość liter ma znaczenie!)
- Sprawdź URL: `https://twoja-domena.vercel.app/images/nazwa.jpg`
- Hard refresh (Ctrl+Shift+R)

### Push odrzucony
```bash
git pull origin master   # pobierz zmiany
git push origin master   # spróbuj jeszcze raz
```

### Build error w Vercel
- Vercel → Project → kliknij failed deployment → "Build Logs"
- Najczęstsze: literówka w JSON, brak zamkniętego tagu HTML, niedozwolony znak w pliku

---

## 8. BACKUP

```powershell
# Skopiuj cały folder na dysk zewnętrzny / OneDrive
Copy-Item C:\Users\postr\.minimax-agent\projects\* D:\Backup\Projects\ -Recurse -Force

# Albo zrób ZIP
Compress-Archive -Path C:\Users\postr\.minimax-agent\projects\* `
  -DestinationPath C:\Users\postr\ai-finance-landing-backup-2026-06-02.zip -Force
```

---

## 9. KIEDY ZWRÓCIĆ SIĘ DO AI ASSISTANTA

Warto mnie zapytać gdy:
- 🔄 Duże zmiany strukturalne (nowa sekcja, redesign)
- 🆕 Nowa funkcjonalność (i18n, blog, animacje)
- 🐛 Nie działa coś, czego nie umiesz debugować
- 🎨 Zmiana designu / brand colors / typography
- 📊 Dodanie analytics, A/B testów
- 🔌 Integracja z CRM, email marketing
- 🌍 Custom domain + DNS

Nie potrzebujesz AI do:
- Zmiana tekstu / koloru
- Dodanie zdjęcia
- Poprawienie literówki
- Commit + push

---

## 10. CHECKLIST NOWEGO PROJEKTU (gdybyś chciał podobną stronę dla innej firmy)

- [ ] Sklonuj repo v1: `git clone https://github.com/postro75/ai-finance-landing.git twoja-firma`
- [ ] Zmień nazwę w `package.json` i `vercel.json`
- [ ] Podmień zdjęcia w `images/`
- [ ] Przepisz treść w `index.html` (zachowaj klasy CSS)
- [ ] Push do nowego repo
- [ ] Import w Vercel
- [ ] Skonfiguruj Formspree
- [ ] Custom domain

**Szacowany czas: 1-2 dni dla nowej strony w podobnym stylu.**

---

## 📞 Awaryjny kontakt

Jeśli coś się rozwali i nie wiesz jak naprawić:
1. Wróć do poprzedniej wersji (Vercel → Deployments → Promote)
2. Sprawdź Build Logs w Vercel
3. Zapytaj AI asystenta z tymi logami + opisem co się stało

---

*Powodzenia! 🚀*
