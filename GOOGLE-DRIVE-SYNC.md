# Google Drive Sync — 3 metody

Zsynchronizuj folder projektu z Google Drive automatycznie.

---

## Metoda 1: Google Drive for Desktop (NAJPROSTSZA) ⭐

Aplikacja od Google — synchronizuje wybrany folder z chmurą.

**Instalacja:**
1. Pobierz: https://www.google.com/drive/download/
2. Zainstaluj, zaloguj się kontem Google
3. Po instalacji pojawi się panel — kliknij ⚙️ → "Preferences" → "Folders from your computer"
4. Kliknij "Add folder"
5. Wybierz `C:\Users\postr\.minimax-agent\projects`
6. ☑️ "Sync with Google Drive"
7. Gotowe — folder jest w `G:\My Drive\projects` (lub podobnej ścieżce)

**Plusy:**
- Auto-sync w tle (każda zmiana w pliku → upload do chmury)
- Dwukierunkowa (edytujesz na innym komputerze → widzisz lokalnie)
- Działa offline (sync'uje gdy wracasz online)

**Minusy:**
- 15 GB limit na darmowym Google Drive
- Cały folder liczy się w quota (Twój projekt to ~10 MB, więc OK)

---

## Metoda 2: rclone (dla zaawansowanych, command line)

**Po co:** Sync z dowolną chmurą (Drive, OneDrive, Dropbox, S3), bardziej kontrolowany.

**Instalacja:**
1. Pobierz: https://rclone.org/downloads/
2. Rozpakuj do `C:\rclone`
3. Dodaj `C:\rclone` do PATH (opcjonalnie)
4. Konfiguracja:
   ```powershell
   rclone config
   # n) New remote
   # name> gdrive
   # Storage> drive (Google Drive)
   # ... (postępuj zgodnie z instrukcjami, w przeglądarce autoryzuj)
   ```

**Sync:**
```powershell
# Jednorazowy sync
rclone sync C:\Users\postr\.minimax-agent\projects gdrive:ai-finance-backup

# Auto-sync co godzinę (Task Scheduler)
# Albo utwórz skrypt sync.bat i dodaj do Task Scheduler
```

**Sync script** (`sync-projects.bat`):
```bat
@echo off
"C:\rclone\rclone.exe" sync "C:\Users\postr\.minimax-agent\projects" "gdrive:ai-finance-backup" --progress
echo Sync complete at %date% %time%
```

**Task Scheduler:**
1. Win+R → `taskschd.msc`
2. "Create Basic Task" → Name: "Sync projects to Drive"
3. Trigger: Daily, repeat every 1 hour
4. Action: Start program → `C:\path\to\sync-projects.bat`

---

## Metoda 3: Backup do ZIP + upload (najprostsze bez instalacji)

Jeśli nie chcesz nic instalować, po prostu:

**PowerShell one-liner:**
```powershell
$date = Get-Date -Format "yyyy-MM-dd"
Compress-Archive -Path C:\Users\postr\.minimax-agent\projects\* `
  -DestinationPath "$env:USERPROFILE\Desktop\ai-finance-backup-$date.zip"
```

**Co tydzień:**
1. Uruchom powyższą komendę
2. ZIP pojawi się na pulpicie
3. Przeciągnij do Google Drive (w przeglądarce) lub OneDrive

**Albo scheduled task:**
1. Task Scheduler → Create Task
2. Trigger: Weekly, Sunday 22:00
3. Action: `powershell.exe -File C:\scripts\weekly-backup.ps1`

**Script** (`C:\scripts\weekly-backup.ps1`):
```powershell
$date = Get-Date -Format "yyyy-MM-dd-HHmm"
$source = "C:\Users\postr\.minimax-agent\projects"
$dest = "$env:USERPROFILE\OneDrive\Backups\ai-finance-$date.zip"
Compress-Archive -Path "$source\*" -DestinationPath $dest -Force
# Stare backupy (>30 dni) usuwaj automatycznie
Get-ChildItem "$env:USERPROFILE\OneDrive\Backups\ai-finance-*.zip" |
  Where-Object { $_.LastWriteTime -lt (Get-Date).AddDays(-30) } |
  Remove-Item -Force
```

---

## Porównanie metod

| Metoda | Trudność | Auto-sync | Koszt | Najlepsza dla |
|---|---|---|---|---|
| **1. Drive for Desktop** | ⭐ Łatwa | ✅ Tak | Free (15 GB) | Większość ludzi |
| **2. rclone** | ⭐⭐⭐ Trudna | ✅ Tak (script) | Free | Wielu chmur, kontrola |
| **3. ZIP + upload** | ⭐ Łatwa | ❌ Ręcznie/tygodniowo | Free | Backup, nie sync |

**Rekomendacja:** Zacznij od **Metody 1** (Drive for Desktop). Zero konfiguracji, działa od razu.

---

## Po skonfigurowaniu

**Sprawdź czy działa:**
1. Edytuj dowolny plik w `C:\Users\postr\.minimax-agent\projects`
2. Poczekaj 30s
3. Otwórz Google Drive w przeglądarce
4. Znajdź folder `projects`
5. Plik powinien mieć nową datę modyfikacji

**Struktura w Google Drive:**
```
Google Drive/
└── projects/                              ← mirror lokalnego folderu
    ├── vercel-deploy/                     ← v1
    │   ├── index.html
    │   ├── images/
    │   └── INSTRUKCJA-EDYCJI.md
    └── ai-finance-next/                    ← v2
        ├── src/
        └── package.json
```

---

## Wersjonowanie (dodatkowa wskazówka)

Google Drive ma wersjonowanie plików:
1. Kliknij prawym na plik → "Manage versions"
2. Widzisz historię 30 dni / 100 wersji
3. Możesz przywrócić starą wersję

Ale **GitHub jest lepszy do wersjonowania kodu** (nieograniczona historia + diff + branching).

**Rekomendacja:**
- **GitHub** = wersjonowanie kodu
- **Google Drive** = backup plików binarnych (zdjęcia, ZIPy, dokumenty)

---

## Co zrobić TERAZ (5 min)

```powershell
# 1. Zainstaluj Google Drive for Desktop
# https://www.google.com/drive/download/

# 2. Po instalacji dodaj folder do sync:
# Settings → Folders from your computer → Add folder
# → C:\Users\postr\.minimax-agent\projects

# 3. Gotowe!
```

**Bonus:** Jeśli masz już Google Drive for Desktop, sprawdź czy inny ważny folder (np. `Documents`) też jest synchronizowany.

---

## Problemy?

**"Folder zajmuje za dużo"** — sprawdź w Preferences czy nie sync'ujesz `node_modules` (powinno być ignorowane — jest w `.gitignore`).

**"Pliki nie pojawiają się w chmurze"** — sprawdź połączenie internetowe i czy ikona Google Drive w tray nie ma błędu.

**"Konflikt wersji"** — jeśli edytujesz plik offline i online jednocześnie, Drive trzyma obie wersje z sufiksem "(Conflicting copy)".

**"Nie widzę folderu w Drive"** — upewnij się że synchronizujesz do tego samego konta co oglądasz w przeglądarce.
