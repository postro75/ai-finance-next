# Recommended Tools Setup (Windows)

Kompletna lista narzędzi do edycji strony, w kolejności instalacji.

---

## 1. Visual Studio Code (edytor kodu) — OBOWIĄZKOWE

**Po co:** Najlepszy darmowy edytor, ma kolorowanie składni, autouzupełnianie, preview.

**Instalacja:**
1. Pobierz: https://code.visualstudio.com/
2. Uruchom installer → Next → Next → Install
3. ☐ Dodaj "Open with Code" do menu kontekstowego (recommended)

**Pierwsze uruchomienie:**
1. Zainstaluj rozszerzenia (Ctrl+Shift+X):
   - **Live Server** (ritwickdey.liveserver) — podgląd HTML w przeglądarce
   - **Prettier** (esbenp.prettier-vscode) — autoformatowanie kodu
   - **ESLint** (dbaerewede.eslint) — wykrywanie błędów
   - **Polish Language Pack** (ms-ceintl.polish) — polski interfejs (opcja)
   - **Material Icon Theme** (pkief.material-icon-theme) — ładniejsze ikony plików

**Konfiguracja Git w VS Code:**
1. Otwórz Source Control (Ctrl+Shift+G)
2. "Clone Repository" → wklej URL: `https://github.com/postro75/ai-finance-landing`
3. Wybierz folder docelowy
4. Gotowe — możesz edytować i pushować z poziomu VS Code

**Tip:** Zainstaluj GitHub CLI dla łatwiejszego logowania (sekcja 4).

---

## 2. GitHub Desktop (opcjonalne, do Git bez terminala)

**Po co:** Commit/push jednym klikiem, bez komend.

**Instalacja:**
1. Pobierz: https://desktop.github.com/
2. Zaloguj się kontem GitHub (`postro75`)
3. File → Clone Repository → `postro75/ai-finance-landing`
4. Edytuj pliki w VS Code → GitHub Desktop pokaże zmiany → "Commit to main" + "Push origin"

**Dla kogo:** Nie lubisz terminala.

---

## 3. GitHub CLI (zaawansowane, do push z terminala)

**Po co:** `gh` commands zamiast `git` — login, repo create, PR, issues.

**Instalacja:**
1. Pobierz: https://cli.github.com/
2. Lub: `winget install GitHub.cli` w PowerShell (Admin)
3. Sprawdź: `gh --version`
4. Login: `gh auth login` → GitHub.com → HTTPS → Yes → Login with browser

**Tip:** Mam już to zainstalowane, używam do push.

---

## 4. Node.js (dla v2 Next.js developmentu)

**Po co:** Żeby uruchomić `npm run dev` lokalnie dla wersji Next.js.

**Instalacja:**
1. Pobierz LTS: https://nodejs.org/
2. Sprawdź: `node --version` (powinno być 20+)
3. Sprawdź: `npm --version`

**Już masz** (z naszych poprzednich kroków).

---

## 5. Google Drive (backup + sync)

**Po co:** Automatyczny backup folderu projektu.

Patrz: **GOOGLE-DRIVE-SYNC.md** (osobny plik z instrukcjami).

---

## 6. Notion / Obsidian (notatki, TODO)

**Po co:** Tracking zmian, pomysły, listy.

**Notion** (online, ma darmowy tier): https://www.notion.so/
**Obsidian** (offline, pliki Markdown): https://obsidian.md/

**Tip:** Utwórz stronę "AI & Finance — Project Hub" z:
- Live URLs
- Login info (Vercel, GitHub, Formspree)
- TODO list
- Editorial calendar (jeśli dodasz blog)

---

## 7. Calendar Reminder (miesięczny check)

**Po co:** Nie zapomnieć o stronie.

W Google Calendar / Outlook:
- Powtarzalne: 1. dnia każdego miesiąca, godzina 10:00
- Tytuł: "AI & Finance — monthly check"
- Opis: Sprawdź stronę, testuj formularz, sprawdź Vercel logs, sprawdź czy obrazy się ładują, przeczytaj feedback od gości

---

## 8. Browser Extensions (przydatne)

| Extension | Do czego |
|---|---|
| **Lighthouse** (Chrome) | Audit strony — performance, SEO, accessibility |
| **Wappalyzer** | Sprawdź jakie technologie używa inna strona |
| **JSON Viewer** | Ładnie formatuje JSON (np. odpowiedzi z API) |
| **ColorZilla** | Pobierz kolor z dowolnej strony (eyedropper) |
| **WhatFont** | Sprawdź jaką czcionkę używa strona |

---

## 9. Backup (opcjonalne, ale polecam)

### Automatyczny backup do chmury
- **OneDrive** (wbudowany w Windows 10/11) — włącz synchronizację folderu `C:\Users\postr\.minimax-agent\projects\`
- **Google Drive** — patrz osobna instrukcja
- **Dropbox** — synchronizacja folderu

### Co tydzień
- ZIP całego folderu → data w nazwie
- Trzymaj 5 ostatnich ZIPów

### Co miesiąc
- ZIP → zewnętrzny dysk
- Lub backup do chmury (OneDrive / Drive)

---

## 10. Konto Formspree (dla formularza kontaktowego)

**Po co:** Prawdziwe zbieranie leadów zamiast mailto.

**Setup:** Patrz **FORMSPREE-SETUP.md**

**TL;DR:**
1. https://formspree.io → Sign up
2. New Form → email
3. Skopiuj Form ID
4. Podmień w `index.html`
5. Commit + push

---

## 🛠️ QUICK SETUP (15 min)

Jeśli chcesz mieć wszystko gotowe w 15 minut:

```powershell
# 1. Sprawdź co masz
git --version
node --version
code --version   # zainstaluje się przy VS Code

# 2. Zainstaluj brakujące (wymaga Admin PowerShell)
winget install GitHub.cli
winget install Microsoft.VisualStudioCode

# 3. VS Code Extensions (z poziomu VS Code Ctrl+Shift+X)
# - Live Server
# - Prettier
# - ESLint

# 4. Restart VS Code, otwórz projekt
code C:\Users\postr\.minimax-agent\projects\vercel-deploy

# 5. Sprawdź Git
gh auth status
```

---

## 📋 CHECKLIST — co powinieneś mieć

- [ ] VS Code zainstalowany
- [ ] Git działa (`git --version`)
- [ ] GitHub CLI zalogowany (`gh auth status`)
- [ ] Konto Formspree (dla formularza)
- [ ] Konto Vercel (masz już)
- [ ] Backup lokalny (ZIP co tydzień)
- [ ] Cloud backup (Drive/OneDrive)
- [ ] Miesięczny reminder w kalendarzu

**Optional:**
- [ ] GitHub Desktop (dla nie-technicznych)
- [ ] Notion/Obsidian (notatki)
- [ ] Custom domain kupiony
