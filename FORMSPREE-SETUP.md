# Formspree Setup (5 min, 1x)

Formularz kontaktowy na stronie używa Formspree (free tier: 50 submissions/mies).

## Krok 1: Załóż konto
👉 https://formspree.io/ → Sign up (email + password, darmowe)

## Krok 2: Utwórz nowy form
- Dashboard → "New Form"
- Email: `twoj-email@domena.pl` (tu będą przychodzić leady)
- Form name: `ai-finance-landing`
- Kliknij "Create"

## Krok 3: Skopiuj Form Endpoint
Zobaczysz URL w stylu:
```
https://formspree.io/f/xyzabc123
```
Skopiuj końcówkę `xyzabc123` (to jest Twój **Form ID**).

## Krok 4: Podmień PLACEHOLDER w kodzie

### W v1 (HTML)
Otwórz `vercel-deploy/index.html`, znajdź:
```html
<form class="cta-form reveal" id="contactForm" action="https://formspree.io/f/PLACEHOLDER" method="POST">
```
Zamień na:
```html
<form class="cta-form reveal" id="contactForm" action="https://formspree.io/f/TWOJE-ID" method="POST">
```

Znajdź też (w JavaScript):
```js
if (!action.includes('PLACEHOLDER')) {
```
Zamień na:
```js
if (!action.includes('TWOJE-ID')) {
```

Zapisz, commit, push:
```bash
cd vercel-deploy
git add index.html
git commit -m "feat: configure Formspree endpoint"
git push origin master
```

### W v2 (Next.js) - lepsze: przez Vercel env vars
1. https://vercel.com/dashboard → Project `ai-finance-next` → Settings → Environment Variables
2. Dodaj:
   - Name: `NEXT_PUBLIC_FORMSPREE_ID`
   - Value: `xyzabc123` (Twoje Form ID)
   - Environments: Production + Preview
3. W `src/app/page.tsx` zamień `PLACEHOLDER` na:
   ```jsx
   <form action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`} method="POST">
   ```
4. Commit, push, redeploy

## Krok 5: Test
1. Otwórz stronę
2. Wypełnij formularz
3. Sprawdź email (powinieneś dostać lead)

## Krok 6: Konfiguracja Formspree
- Formspree Dashboard → Forms → Twój form → Settings
- **Notifications:** email przy każdym lead (domyślnie włączone)
- **Auto-responder:** włącz jeśli chcesz automatyczną odpowiedź do klienta
- **reCAPTCHA:** dodaj dla ochrony przed spamem (opcjonalnie, free tier 50/msc to mało)
- **Webhooks:** jeśli chcesz integrować z CRM (np. HubSpot, Pipedrive)

## Troubleshooting

**Formularz nadal otwiera mailto?**
- Sprawdź czy `PLACEHOLDER` (lub `TWOJE-ID`) zostało faktycznie zamienione
- Sprawdź Console przeglądarki (F12) — mogą być błędy CORS

**Leady nie dochodzą?**
- Sprawdź spam w emailu
- Formspree → Forms → zakładka "Submissions" - czy są rekordy?
- Sprawdź czy Form ID jest poprawny

**Rate limit?**
- Free tier: 50 submissions/mies
- Potrzebujesz więcej? Plan Gold ($8/mies) = 1000/mies
- https://formspree.io/plans

## Alternatywy dla Formspree

| Service | Free tier | Koszt paid | Uwagi |
|---|---|---|---|
| **Formspree** | 50/mies | $8/mies (1000) | Najprostsze |
| **Resend** | 100/dzień | $20/mies (50k) | Lepszy do emaili transakcyjnych |
| **Web3Forms** | Unlimited | $0 | Brak konta, tylko klucz |
| **Netlify Forms** | 100/mies | $19/mies (1k) | Tylko na Netlify |
| **Mailchimp embed** | Free do 500 | $13/mies | Głównie do newslettera |

Dla Twojego use case (B2B consulting, 1-5 leadów/mies) **Formspree free tier wystarczy na zawsze**.
