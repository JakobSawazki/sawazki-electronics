# AGENTS.md – Zentrale Übergabe für alle Mitarbeiter & KI-Agenten

Dieses Repository ist die Website von **Sawazki Electronics** (IT-Service, PC/Laptop-Support,
Dienstleistungen in Freudenstadt). Diese Datei ist die **einzige Einstiegs- und
Übergabedatei**: Sie sagt dir, was gilt, was zu tun ist und wo alles Weitere steht.
(Die frühere `CODEX_HANDOVER.md` wurde am 02.07.2026 hier integriert.)

## Fakten

- **Live:** https://jakobsawazki.github.io/sawazki-electronics/
- **Repo:** https://github.com/JakobSawazki/sawazki-electronics · Branch `main`
- **Hosting:** GitHub Pages direkt aus dem Repository (Workflow „pages build and deployment")
- **Lokal (Acer Nitro 5, Google-Drive-Sync):** `D:\Google Drive\Gewerbe\Sawazki Electronics`
  – **einzige lokale Kopie.** Der Doppelstand `…\Codex\sawazki-electronics` wurde am
  02.07.2026 gelöscht; der frühere Ordner `…\Gewerbe\Sawazki Electronics Website` wurde in
  den obigen Ordner umbenannt. Alte Pfade nicht neu anlegen, nicht referenzieren.
  Auf anderen Geräten gilt der Google-Drive-Pfad (z. B. `G:\Meine Ablage\Gewerbe\Sawazki Electronics`).
- **Technik:** rein statisch – HTML, CSS, JS. Kein Build, kein Framework, keine Paketabhängigkeiten.
- **Aktives Branding:** alles unter `assets/images/brand/` – Header/Favicon nutzen
  `sawazki-brand-symbol.webp` bzw. `favicon.ico`/`favicon.png`; das Hero-Modul der
  Startseite zeigt das vollständige Logo `sawazki-brand-logo.webp` (optimiert aus der
  Rohquelle `brand.png`).

## Doku-Landkarte (Stand 02.07.2026)

| Datei | Zweck |
| --- | --- |
| `AGENTS.md` (diese Datei, Projektstamm) | Übergabe, Regeln, Arbeitsablauf |
| `README.md` (Projektstamm) | öffentlicher Projektüberblick auf GitHub |
| [`docs/tasks.md`](docs/tasks.md) | **primäre Aufgabenquelle**: offen / in Arbeit / abgeschlossen (mit Datum + Version) |
| [`docs/documentation.md`](docs/documentation.md) | ausführliche Projekt- und Firmendoku: Versionsstand, Änderungsprotokoll, Design-/Technikentscheidungen, SEO-/Marketing-Leitfaden, Bildauftrag, Projektgedächtnis |

`AGENTS.md` und `README.md` bleiben bewusst im Projektstamm (Werkzeuge und GitHub erwarten
sie dort); alle übrigen MD-Dateien liegen unter `docs/`.

## So startest du (Reihenfolge)

1. [`docs/tasks.md`](docs/tasks.md) lesen: erst „In Arbeit" (nichts doppelt anfangen),
   dann die oberste offene Aufgabe übernehmen und dort eintragen.
2. Zusätzlich `docs/tasks.docx` prüfen (lokaler Eingang für Aufgaben mit
   privaten Screenshots; gitignored, nie committen). Neue Einträge dort nach `docs/tasks.md`
   spiegeln (ohne private Details). `.docx` lesen per PowerShell:

   ```powershell
   Add-Type -AssemblyName System.IO.Compression.FileSystem
   $zip = [System.IO.Compression.ZipFile]::OpenRead("docs/tasks.docx")
   $e = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
   $sr = New-Object System.IO.StreamReader($e.Open()); $xml = $sr.ReadToEnd(); $sr.Close()
   [System.Text.RegularExpressions.Regex]::Replace(($xml -replace '</w:p>', "`n"), '<[^>]+>', '')
   $zip.Dispose()
   ```

3. Immer nur **ein** Arbeitspaket gleichzeitig. Vollständig umsetzen:
   Code → Doku (`docs/documentation.md`-Änderungsprotokoll) → lokal testen → committen →
   pushen → live prüfen → `docs/tasks.md` umtragen.
4. Bei Blockade: Aufgabe bleibt in `docs/tasks.md` unter „In Arbeit" stehen, mit Notiz, was fehlt.

## Nutzungskontingent (für KI-Agenten)

Das verbleibende Kontingent ist programmatisch nicht abfragbar. Deshalb: Pakete klein und
abschließbar schneiden, nach jedem Schritt `docs/tasks.md` aktualisieren, bei absehbarem
Limit kein neues Paket beginnen, sondern den laufenden Stand konsistent machen und pushen.
Details: `docs/tasks.md`, Abschnitt „Nutzungskontingent-Regel".

## Grundregeln

- **Bestehendes Design und CSS-Konventionen weiterverwenden.** Farbwelt: Navy `#082f57`,
  Logo-Blau, Cyan `#20bfd2`. Wirkung: professionell, ruhig, technisch, kundenorientiert.
  Keine Spieleseiten-Optik, Hover-Effekte dezent.
- **Alles UTF-8.** Umlaute nicht „reparieren", nur weil ein Terminal sie falsch anzeigt.
- **Bilder lokal** unter `assets/images/` halten; keine externen Bild-CDNs oder Fonts ohne guten Grund.
- **Keine internen technischen Erklärungen** auf Kundenseiten; Kundenverständlichkeit zuerst.
- **Keine erfundenen Inhalte:** keine ausgedachten Testimonials, Preise, Reaktionszeiten
  oder Leistungsversprechen.
- **Rechtstexte** (Impressum/Datenschutz/AGB) nur bewusst ändern; bei neuen Diensten,
  Zahlungen, Tracking oder externen Diensten Datenschutz mitdenken.
- **Cache-Buster** `?v=...` an `styles.css`/`theme.js` bei sichtbaren Änderungen auf allen
  Seiten einheitlich hochsetzen.
- Kontaktformular/Anfrage-Assistent laufen über FormSubmit an
  `sawazki.electronics@googlemail.com` – beim Testen **nicht** unnötig echt absenden.
- Öffentliche Kontaktdaten: Sawazki Electronics, Jakob Sawazki, Mörikestraße 15,
  72250 Freudenstadt · +49 1520 2967632. Formular-Weiterleitung nach Versand: `danke.html`.
- Neue öffentliche HTML-Seiten: zusätzlich `sitemap.xml`, Navigation, Footer und README pflegen.
  Neue Projekte als `.side-project-card` im Projektbereich ergänzen und auf `projekte.html`
  vorstellen; keine Einzelprojektlinks im Footer.
- Bei Widerspruch zwischen Doku und Code gilt der **Code** als technische Wahrheit –
  danach die Doku aktualisieren.

## Technik-Hinweise

- `assets/js/theme.js`: Dark Mode ist Standard; Auswahl liegt unter
  `sawazki-electronics-theme` im localStorage. Theme-Schalter steht rechts neben `Impressum`.
- `assets/js/main.js`: Scroll-Header (`is-scrolled`), mobile Navigation, Reveal-Animationen
  (`.reveal`/`.is-visible` – Formulare nicht unnötig verstecken), Query-Parameter `topic`
  füllt das Anfrage-Thema vor (z. B. `?topic=VHS-Digitalisierung`).
- Bilder: erste sichtbare Ansicht nicht lazy laden; weiter unten `loading="lazy"
  decoding="async"`. Bilder haben `width`/`height`-Attribute (CLS-Schutz) – bei neuen
  Bildern beibehalten.
- `404.html` nutzt **absichtlich absolute URLs** (GitHub Pages liefert sie für beliebige
  Pfadtiefen aus) und steht nicht in der Sitemap.
- **Google-Drive-Falle:** Google Drive legt `desktop.ini`-Dateien an – auch in `.git/`.
  Symptom: `fatal: bad object refs/desktop.ini`. Lösung:
  `Get-ChildItem .git -Recurse -Force -Filter desktop.ini | Remove-Item -Force`.
  Im Arbeitsbaum sind sie gitignored.

## Lokal starten

```powershell
python -m http.server 4177   # oder: py -m http.server 4177
# danach: http://127.0.0.1:4177/
```

## Prüfungen vor einem Push

1. `git status --short` prüfen und fremde Änderungen nicht verwerfen.
2. Interne Links sowie referenzierte Bilder kontrollieren.
3. Bei JS-Änderungen: `node --check assets/js/main.js` bzw. `theme.js`.
4. Startseite und betroffene Unterseiten lokal ansehen (Desktop + mobil, Dark + Light).
5. `git diff --check` ausführen.
6. Nur zusammengehörige Dateien committen.

## Veröffentlichen

```powershell
git add <dateien>
git commit -m "Kurze Beschreibung"
git push origin main
```

Danach live prüfen: `https://jakobsawazki.github.io/sawazki-electronics/?v=<commit-kürzel>`.
Wenn das Deployment hängt (Status `deployment_queued`): Workflow-Lauf per
`gh run rerun <id>` neu starten oder notfalls einen kleinen Trigger-Commit pushen –
beides hat am 02.07.2026 funktioniert.

## Aktueller Stand & offene Punkte

Versionsstand, Änderungsprotokoll und Entwicklungsstand: [`docs/documentation.md`](docs/documentation.md).
Offene Aufgaben: [`docs/tasks.md`](docs/tasks.md). Die Datenschutzerklärung enthält eine
Passage für Reparatur/Datensicherung/Datenrettung/Partnerlabore – bei konkretem
Geschäftsbetrieb rechtlich prüfen lassen.
