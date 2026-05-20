# Sawazki Electronics Website - Codex Projektdokumentation

Stand: 20. Mai 2026

Diese Dokumentation dient als Arbeitsgrundlage fuer Codex und fuer die Weiterarbeit auf einem anderen Laptop. Sie soll bei kuenftigen Aenderungen fortgeschrieben werden: Was wurde geaendert, warum, in welchen Dateien und wie wurde geprueft.

## Kurzueberblick

- Projekt: Sawazki Electronics Website
- Zweck: professionelle Homepage fuer IT-, PC-, Laptop-, Support- und Elektronikdienstleistungen
- GitHub Repository: `JakobSawazki/sawazki-electronics`
- Live-Seite: <https://jakobsawazki.github.io/sawazki-electronics/>
- Lokaler Arbeitsordner auf dem aktuellen Laptop: `D:\Google Drive\Gewerbe\Sawazki Electronics Website`
- Standard-Branch: `main`
- Backup-Branch vor der Hero-/Hintergrund-Ueberarbeitung: `codex/backup-startseite-2026-05-20`

## Aktueller technischer Aufbau

Die Website ist bewusst statisch gehalten. Es gibt keinen Build-Prozess, keine Framework-Abhaengigkeiten und keine externen Schriftarten.

Wichtige Dateien:

- `index.html`: Startseite mit Hero, Leistungen, Diagnose, Praxisbildern, Ablauf, Detailband und Kontaktformular
- `impressum.html`: Impressum
- `datenschutz.html`: Datenschutzerklaerung
- `agb.html`: Allgemeine Geschaeftsbedingungen
- `danke.html`: Zielseite nach erfolgreichem Formularversand
- `assets/css/styles.css`: gesamtes Layout, Farben, Responsive Design, Hover-Effekte
- `assets/js/main.js`: Navigation, Scroll-Header, Reveal-Animationen, Formular-Betreff
- `assets/images/`: lokale Bild- und Logoassets
- `robots.txt` und `sitemap.xml`: Suchmaschinen-Hinweise
- `.nojekyll`: sorgt dafuer, dass GitHub Pages die Dateien unveraendert ausliefert

## Design- und Inhaltsentscheidungen

- Die Seite soll modern, professionell, ruhig und kundenorientiert wirken.
- Schwerpunkt der Startseite: IT-Service, Laptop-/PC-Dienstleistungen, Beratung, Reparatur und Support.
- Farbwelt: dunkles Technik-Gruen/Anthrazit, Teal-Akzente, weiss/hellgraue Flaechen, dezente warme Akzente.
- Schrift: Systemschriften, fuer die Hero-Ueberschrift bevorzugt `Bahnschrift`, `Segoe UI Variable Display`, `Aptos Display`, `Segoe UI`.
- Keine externen Bild-CDNs und keine externen Fonts. Das reduziert Datenschutz- und Ladezeitrisiken.
- Die Startseite verwendet echte bzw. realistisch wirkende Servicebilder statt abstrakter Vektorgrafiken.
- Der alte abstrakte Hintergrund mit moeglicher "Zigarette"-Assoziation wurde nicht geloescht, aber nicht mehr aktiv verwendet.

## Bild- und Logoassets

Aktiv genutzt:

- `assets/images/sawazki-electronics-logo.png`: breites Unternehmenslogo, genutzt im Hero und als OpenGraph-Bild
- `assets/images/sawazki-electronics-mark.png`: quadratisches Logo/Marke, genutzt in Navigation und Favicon
- `assets/images/customer-consulting.jpg`: Beratung/Kundengespraech, Hero-Hintergrund und Diagnosebereich
- `assets/images/repair-laptop.jpg`: Laptop-Reparatur, Praxisbereich und Detailband
- `assets/images/smartphone-repair.jpg`: Elektronik/Kleingeraete

Noch vorhanden als moegliche Rueckfall- oder Alternativassets:

- `assets/images/hero-workbench.png`
- `assets/images/support-dashboard.png`
- `assets/images/hardware-detail.png`
- `assets/icons/favicon.svg`

Originale Logoquellen auf dem aktuellen Laptop:

- `D:\Google Drive\Rechnungen\Kunden\Vorlagen\Logo\Sawazki-Electronics-Logo-Neu.jpg`
- `D:\Google Drive\Rechnungen\Kunden\Vorlagen\Logo\Sawazki-Electronics-Logo-Neu-cropped.png`
- `D:\Google Drive\Rechnungen\Kunden\Vorlagen\Logo\Sawazki-Electronics-Logo-Neu.png`

## Kontakt und Formular

Oeffentliche Kontaktdaten auf der Website:

- E-Mail: `sawazki.electronics@googlemail.com`
- Mobil: `+49 1520 2967632`
- Anbieter: Sawazki Electronics, Jakob Sawazki, Moerikestrasse 15, 72250 Freudenstadt

Kontaktformular:

- Formularanbieter: FormSubmit
- Formularziel: `https://formsubmit.co/sawazki.electronics@googlemail.com`
- Danke-Seite: `https://jakobsawazki.github.io/sawazki-electronics/danke.html`
- Hinweis: Beim ersten echten Absenden kann FormSubmit eine Aktivierungs-E-Mail an die Zieladresse senden. Danach werden Anfragen direkt weitergeleitet.

## Rechtliche Seiten

Enthalten sind:

- Impressum
- Datenschutzerklaerung
- AGB

Die zuvor sichtbaren gelben Hinweisboxen mit Formulierungen wie "Arbeitsfassung" und "ersetzt keine Rechtsberatung" wurden aus den Kundenansichten entfernt, damit die Seiten professioneller und weniger irritierend wirken. Fuer interne Weiterarbeit gilt trotzdem: Rechtliche Inhalte bei konkreter Geschaeftspraxis fachlich pruefen lassen, insbesondere wenn neue Leistungen, Zahlungsablaeufe, Tracking, externe Dienste oder Shop-Funktionen hinzukommen.

## Lokale Weiterarbeit auf einem anderen Laptop

Voraussetzungen:

- Git installieren
- Optional, aber praktisch: GitHub CLI installieren und mit dem GitHub-Konto anmelden
- Ein Texteditor oder Codex
- Optional: Python, um lokal einen kleinen Webserver zu starten

Repository klonen:

```powershell
git clone https://github.com/JakobSawazki/sawazki-electronics.git
cd sawazki-electronics
```

Lokal ansehen:

```powershell
python -m http.server 4177
```

Danach im Browser oeffnen:

```text
http://127.0.0.1:4177/
```

Falls `python` nicht gefunden wird, unter Windows alternativ versuchen:

```powershell
py -m http.server 4177
```

## Veroeffentlichungsablauf

Die Live-Seite wird ueber GitHub Pages aus dem Branch `main` ausgeliefert. Nach einem Push auf `main` aktualisiert GitHub Pages die Website automatisch. Das kann kurz dauern.

Empfohlener Ablauf:

```powershell
git status -sb
git pull --ff-only
git add <geaenderte-dateien>
git commit -m "Kurze Beschreibung der Aenderung"
git push origin main
```

Nach dem Push pruefen:

```text
https://jakobsawazki.github.io/sawazki-electronics/?v=<commit-kuerzel>
```

Der Query-Parameter `?v=...` hilft, Browser-Cache zu umgehen.

## Pruef-Checkliste fuer Codex

Vor dem Veröffentlichen:

- `git status -sb` pruefen
- relevante HTML-/CSS-/JS-Dateien kontrollieren
- lokale Seite starten und im Browser pruefen
- Startseite Desktop und Mobile grob ansehen
- Navigation und Sprunglinks testen
- Kontaktformular nicht unnoetig echt absenden
- wichtige Assets mit HTTP-Status `200` pruefen
- bei Rechtstexten keine gelben Warn-/Arbeitsfassungsboxen auf Kundenseiten einfuegen

Nach dem Veröffentlichen:

- Live-URL mit Cache-Buster oeffnen
- pruefen, ob HTML/CSS die neuen Klassen oder Inhalte enthalten
- Commit-Kuerzel in dieser Dokumentation im Aenderungsprotokoll ergaenzen

## Bisheriges Aenderungsprotokoll

### 20. Mai 2026 - Erste Homepage erstellt

Commit: `6e088cc` - `Create Sawazki Electronics homepage`

- Statische Website fuer Sawazki Electronics erstellt.
- Startseite mit Hero, Leistungen, Ablauf und Kontaktbereich angelegt.
- Grundlegendes CSS, responsive Layout und JavaScript fuer Navigation/Animationen erstellt.
- GitHub Pages vorbereitet.

### 20. Mai 2026 - Rechtliche Seiten, Kontaktformular und Servicebilder

Commit: `b812d2b` - `Add legal pages contact form and service imagery`

- Impressum, Datenschutzerklaerung, AGB und Danke-Seite angelegt.
- Kontaktformular mit FormSubmit angebunden.
- Servicebilder fuer Beratung, Reparatur und Elektronik ergaenzt.
- Sitemap und Robots-Datei angelegt.

### 20. Mai 2026 - Oeffentliche Kontaktdaten aktualisiert

Commit: `15fb660` - `Update public contact details`

- E-Mail auf `sawazki.electronics@googlemail.com` gesetzt.
- Mobilnummer auf `+49 1520 2967632` gesetzt.
- FormSubmit-Zieladresse und sichtbare Kontaktdaten angepasst.

### 20. Mai 2026 - Logo und Bildlayout optimiert

Commit: `40b8e87` - `Use brand logo and refine homepage imagery`

- Offizielles Sawazki-Electronics-Logo als Website-Asset eingefuegt.
- Logo in Navigation, Favicon, Hero und OpenGraph eingebunden.
- Hero-Bereich um Logo-Card und drei kompakte Servicebilder erweitert.
- Ueberschrift typografisch moderner gestaltet.
- Praxisbilder kleiner, zentriert und mit staerkeren Beschriftungen gestaltet.

Backup-Branch:

- `codex/backup-startseite-2026-05-20`
- Zweck: Rueckfallpunkt fuer den Stand mit altem abstraktem Hintergrund und Logo-/Bildlayout vor der naechsten Optimierungsrunde.

### 20. Mai 2026 - Homepage-Visuals und Rechtshinweise verfeinert

Commit: `c8ae248` - `Refine homepage visuals and legal presentation`

- Startseiten-Servicebilder klickbar gemacht.
- Hover-Zustand mit leichter Vergroesserung und Fokusrahmen ergaenzt.
- Sprungziele fuer `#beratung`, `#reparatur` und `#elektronik` gesetzt.
- Hero-Hintergrund von abstrakter Grafik auf reales Beratungsfoto umgestellt.
- Zigarette-aehnliche abstrakte Grafik aus dem sichtbaren Startbereich entfernt.
- Diagnosebereich mit realem Beratungsfoto und erklaerender Caption ersetzt.
- Detailband "Saubere Technik, verstaendlich erklaert" mit realem Reparaturbild ersetzt.
- Footer dunkler und hochwertiger gestaltet.
- Copyright-Zeile `© 2026 Sawazki Electronics. Alle Rechte vorbehalten.` ergaenzt.
- Gelbe Arbeitsfassungs-/Rechtsberatungs-Hinweise aus Impressum, Datenschutz und AGB entfernt.

### 20. Mai 2026 - Projektdokumentation fuer Codex

Commit-Titel: `Add Codex project documentation`

- Diese Dokumentation angelegt.
- README mit Verweis auf die Dokumentation erweitert.

## Regeln fuer kuenftige Codex-Aenderungen

Wenn Codex kuenftig an diesem Projekt arbeitet:

- Diese Datei vor groesseren Aenderungen lesen.
- Nach relevanten Aenderungen den Abschnitt "Bisheriges Aenderungsprotokoll" ergaenzen.
- Bei visuellen Aenderungen lokale Browserpruefung machen.
- Bei Upload auf GitHub den Commit im Protokoll nennen.
- Keine fremden oder unsicheren externen Assets einbinden, wenn lokale Assets ausreichen.
- Kontakt- und Rechtstexte nur bewusst und nachvollziehbar aendern.
- Bestehende Backup-Branches nicht loeschen, solange sie als Rueckfallpunkt dienen.
