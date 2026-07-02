# AGENTS.md – Sofort-Anleitung für KI-Agenten

Dieses Repository ist die Website von **Sawazki Electronics** (IT-Service, PC/Laptop-Support,
Dienstleistungen). Diese Datei sagt dir in Kürze, was zu tun ist. Details stehen in
[`CODEX_HANDOVER.md`](CODEX_HANDOVER.md) und [`docs/CODEX_PROJECT_DOCUMENTATION.md`](docs/CODEX_PROJECT_DOCUMENTATION.md).

- **Live:** https://jakobsawazki.github.io/sawazki-electronics/
- **Repo:** https://github.com/JakobSawazki/sawazki-electronics · Branch `main`
- **Lokal (Acer Nitro 5, Google-Drive-Sync):** `D:\Google Drive\Gewerbe\Sawazki Electronics Website`
  – dies ist die **einzige** lokale Kopie. Der frühere Doppelstand
  `…\Codex\sawazki-electronics` wurde am 02.07.2026 nach Prüfung (veralteter Vorfahr von
  `main`) endgültig gelöscht. Nicht neu anlegen, nicht referenzieren.
- **Technik:** rein statisch – HTML, CSS, JS. Kein Build, kein Framework, keine Paketabhängigkeiten.

## So startest du (Reihenfolge)

1. **`tasks.docx` lesen** (Word-Datei im Projektstamm) – das ist die priorisierte
   Aufgabenwarteschlange und kann Screenshots enthalten.
   Lesehinweis (PowerShell) steht in `CODEX_HANDOVER.md`, Abschnitt 2.
2. Die **oberste** Aufgabe von oben nach unten abarbeiten – immer nur eine gleichzeitig.
3. Aufgabe vollständig umsetzen: Code → Doku → lokal testen → committen → pushen → live prüfen.
4. Erst nach erfolgreicher Live-Prüfung die erledigte Aufgabe (samt zugehöriger Bilder) aus
   `tasks.docx` entfernen. Vorher erneut lesen, damit neue Einträge erhalten bleiben.
5. Bei Blockade bleibt die Aufgabe stehen.

## Grundregeln

- **Bestehendes Design und CSS-Konventionen weiterverwenden.** Farbwelt: Navy `#082f57`,
  Logo-Blau, Cyan `#20bfd2`. Wirkung: professionell, ruhig, technisch, kundenorientiert.
- **Alles UTF-8.** Umlaute nicht „reparieren", nur weil ein Terminal sie falsch anzeigt.
- **Bilder lokal** unter `assets/images/` halten; keine externen Bild-CDNs oder Fonts ohne guten Grund.
- **Keine internen technischen Erklärungen** auf Kundenseiten.
- **Rechtstexte** (Impressum/Datenschutz/AGB) nur bewusst ändern; bei neuen Diensten,
  Zahlungen, Tracking oder externen Diensten Datenschutz mitdenken.
- **Cache-Buster** `?v=...` an `styles.css`/`theme.js` bei sichtbaren Änderungen hochsetzen.
- Kontaktformular/Anfrage-Assistent laufen über FormSubmit an
  `sawazki.electronics@googlemail.com` – beim Testen **nicht** unnötig echt absenden.

## Lokal starten

```powershell
python -m http.server 4177   # oder: py -m http.server 4177
# danach: http://127.0.0.1:4177/
```

## Veröffentlichen

```powershell
git add <dateien>
git commit -m "Kurze Beschreibung"
git push origin main
```

Danach live prüfen: `https://jakobsawazki.github.io/sawazki-electronics/?v=<commit-kürzel>`.
Bei neuen HTML-Seiten zusätzlich `sitemap.xml`, Navigation, Footer und README pflegen.

## Aktuell offene Aufgaben (Stand 24.06.2026)

- Vor jeder neuen Arbeit `tasks.docx` prüfen. Wenn dort keine Aufgabe steht, gibt es keinen
  bekannten Queue-Auftrag.
- Erzeugte Projekt-, 3D-Druck- und Datenrettungsbilder sind eingebaut; Prompts und Assets stehen in
  [`docs/BILDAUFTRAG_PROJEKTBILDER.md`](docs/BILDAUFTRAG_PROJEKTBILDER.md).
- Die Datenschutzerklärung enthält eine Passage für Reparatur, Datensicherung, Datenrettung und
  Partnerlabore. Bei konkretem Geschäftsbetrieb rechtlich prüfen lassen.
