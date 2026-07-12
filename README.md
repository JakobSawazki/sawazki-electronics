# Sawazki Electronics Website

Statische Homepage für Sawazki Electronics mit Fokus auf IT-, Laptop- und PC-Dienstleistungen.

## Inhalt

- Professionelle Startseite mit nutzenorientiertem Hero („IT-Hilfe in Freudenstadt, die man versteht."), lokalen Bildassets und blauem Sawazki-Electronics-Branding
- Vertrauensband „Warum Sawazki Electronics" und direkter Angebots-Teaser zu allen vier Service-Seiten auf der Startseite
- Dunkler Service-Finder auf der Startseite, damit Besucher schneller zum passenden Einstieg kommen
- Footer mit direktem Telefon- und E-Mail-Kontakt auf allen Seiten; WhatsApp zusätzlich im Kontaktbereich
- Dezente Leiterbahn-/Knotenpunktmuster auf den hellen Flächen statt leerem Weiß
- Interaktives Hero-Logo mit Lichtlauf und direktem Sprung zu den Leistungen
- Vollständiges Firmenlogo als interaktives Hero-Modul (optimierte WebP-Variante aus `assets/images/brand/`); Brand-Symbol in Header und Browser-Favicon
- Zentrale Brand-Ablage: aktive und historische Sawazki-Logo-/Favicon-Dateien liegen unter `assets/images/brand/`
- Größere Hero-Servicebilder auf der Startseite, damit das Kundengespräch stärker wirkt
- Projektkarten mit einheitlichen fotorealistischen Bildkacheln für PythonLab, WorkbenchLab, BM-Lab, Games Lab, Solarsystem und EC-Lernstudio
- Direkter Navigationspunkt `Projekte` mit Sprung zum Projektbereich der Startseite
- Dark Mode als Standard sowie persistent umschaltbarer Light-/Dark-Mode
- PythonLab, WorkbenchLab, Games Lab, Solarsystem und EC-Lernstudio sind auf ihren GitHub-Pages-Projekten verlinkt
- Eigene Projektseite mit Zweck, Zielgruppe und Ziel jedes Labs
- Footer-Link zur zentralen Projektübersicht ohne doppelte Einzelprojektlinks
- Zentraler Servicebereich für Dienstleistungen, Angebote und spätere ausgewählte Produkte
- Eigene Angebotsseite für VHS-, VHS-C- und Camcorder-Kassetten-Digitalisierung inkl. interaktivem Preis-Schätzer nach veröffentlichter Staffel
- Eigene Angebotsseite für 3D-Druck nach Kundenwunsch (individuelle Drucke, Hilfe bei 3D-Modellen, Prototypen, Ersatzteile)
- Eigene Angebotsseite für professionelle Datenrettung (logische und physische Schäden, Partnerlabore für defekte Datenträger)
- Eigene Angebotsseite für Batteriespeicher und Inselnetzlösungen (Energietechnik, netzunabhängig/Off-Grid) mit eigenem Hero-/Kartenbild
- „Über mich"-Seite mit beruflichem Profil (Industrie-Elektronik, Energietechnik, Lehre)
- Schwebender WhatsApp-Kontaktbutton auf allen Seiten (direkt an Jakob, kein Bot)
- Vereinheitlichte Projektkacheln mit einheitlichem „App-Icon"-Framing
- Leistungsübersicht für PC, Laptop, Sicherheit, Backup, Netzwerk und Beratung
- Unsichtbare lokale SEO-Ausrichtung auf IT-Service sowie PC- und Laptop-Reparatur in Freudenstadt
- Strukturierte Unternehmensdaten (inkl. vollständigem Service-Katalog), Canonical-URLs und optimierte Social-Media-Vorschauen
- Gebrandete 404-Fehlerseite und Performance-Feinschliff (Bildmaße gegen Layout-Shift, priorisiertes Hero-Bild, Lazy-Loading)
- Visuell geführter Ablaufbereich mit großen Ziffern und Pfeilen für Anfrage, Analyse, Umsetzung und Übergabe
- Kontaktformular und geführter `Anfrage-Assistent` über FormSubmit
- Einheitlicher Projektbereich mit PythonLab, WorkbenchLab, BM-Lab, Games Lab, Solarsystem und EC-Lernstudio
- Responsive Layout für Desktop, Tablet und Smartphone
- Lokale Bildassets, keine externen Bildabhängigkeiten
- Unternehmenslogo als lokales Website-Asset in Navigation, Favicon, strukturierten Daten und Hero-Bereich

## Wichtige Seiten

- Startseite: `index.html`
- Projektübersicht: `projekte.html`
- Services & Angebote: `produkte.html`
- VHS-Digitalisierung: `vhs-digitalisierung.html`
- 3D-Druck: `3d-druck.html`
- Datenrettung: `datenrettung.html`
- Energietechnik (Batteriespeicher & Inselnetz): `energietechnik.html`
- Über mich: `ueber-mich.html`
- Anfrage-Assistent: `anfrage-assistent.html`
- Danke-Seite nach Formularversand: `danke.html`
- Fehlerseite (GitHub Pages): `404.html`
- Impressum: `impressum.html`
- Datenschutz: `datenschutz.html`
- AGB: `agb.html`

## Dokumentation

Seit dem 02.07.2026 gibt es eine konsolidierte Doku-Struktur (nur noch vier MD-Dateien):

- [`AGENTS.md`](AGENTS.md) (Projektstamm): zentrale Übergabe für alle Mitarbeiter und
  KI-Agenten – Regeln, Arbeitsablauf, Prüfungen, Veröffentlichung. Die frühere
  `CODEX_HANDOVER.md` ist hier integriert.
- [`docs/tasks.md`](docs/tasks.md): primäre Aufgabenquelle – offene, laufende und
  abgeschlossene Aufgaben mit Datum, Version und Bearbeiter.
- [`docs/documentation.md`](docs/documentation.md): ausführliche Projekt- und Firmendoku –
  Versionsstand, Änderungsprotokoll, Design-/Technikentscheidungen, SEO-/Marketing-Leitfaden,
  Bildauftrag (Prompts) und Projektgedächtnis. Hieß früher `CODEX_PROJECT_DOCUMENTATION.md`.
- `README.md` (diese Datei): öffentlicher Überblick.

## Aufgabenwarteschlange

Aufgaben werden in [`docs/tasks.md`](docs/tasks.md) geführt (offen / in Arbeit /
abgeschlossen). `docs/tasks.docx` bleibt als lokaler, nicht versionierter
Eingang für Aufgaben mit privaten Screenshots; solche Aufgaben werden ohne private Details
in `docs/tasks.md` gespiegelt. Details und Regeln stehen in `AGENTS.md`.

## Kontaktformulare

Das Kontaktformular und der Anfrage-Assistent senden über FormSubmit an
`sawazki.electronics@googlemail.com`. Beim ersten echten Absenden kann FormSubmit eine
Aktivierungs-E-Mail an diese Adresse verschicken. Nach Bestätigung werden Formularanfragen direkt
weitergeleitet.

## Rechtliches

Impressum, Datenschutz und AGB sind als eigene Seiten enthalten. Bei Änderungen an Leistungen,
externen Diensten oder geschäftlichen Abläufen sollten die rechtlichen Inhalte mit geprüft werden.
