# Sawazki Electronics Website

Statische Homepage für Sawazki Electronics mit Fokus auf IT-, Laptop- und PC-Dienstleistungen.

## Inhalt

- Professionelle Startseite mit nutzenorientiertem Hero („IT-Hilfe in Freudenstadt, die man versteht."), lokalen Bildassets und blauem Sawazki-Electronics-Branding
- Vertrauensband „Warum Sawazki Electronics" und direkter Angebots-Teaser zu allen vier Service-Seiten auf der Startseite
- Dunkler Service-Finder auf der Startseite, damit Besucher schneller zum passenden Einstieg kommen
- Footer mit direktem Telefon- und E-Mail-Kontakt auf allen Seiten; WhatsApp zusätzlich im Kontaktbereich
- Dezente Leiterbahn-/Knotenpunktmuster auf den hellen Flächen statt leerem Weiß
- Interaktives Hero-Logo mit Lichtlauf und direktem Sprung zu den Leistungen
- Neues einheitliches Brand-Symbol aus `assets/images/brand/` in Header, Hero-Bereich und Browser-Favicon
- Größere Hero-Servicebilder auf der Startseite, damit das Kundengespräch stärker wirkt
- Projektkarten mit einheitlichen fotorealistischen Bildkacheln für PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio
- Direkter Navigationspunkt `Projekte` mit Sprung zum Projektbereich der Startseite
- Dark Mode als Standard sowie persistent umschaltbarer Light-/Dark-Mode
- PythonLab, WorkbenchLab und EC-Lernstudio sind auf ihren GitHub-Pages-Lernportalen verlinkt
- Eigene Projektseite mit Zweck, Zielgruppe und Ziel jedes Labs
- Footer-Link zur zentralen Projektübersicht ohne doppelte Einzelprojektlinks
- Zentraler Servicebereich für Dienstleistungen, Angebote und spätere ausgewählte Produkte
- Eigene Angebotsseite für VHS-, VHS-C- und Camcorder-Kassetten-Digitalisierung
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
- Einheitlicher Projektbereich mit PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio
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

Für den schnellen Einstieg eines KI-Agenten gibt es die kompakte Sofort-Anleitung
[`AGENTS.md`](AGENTS.md) im Projektstamm.

Für die schnelle Weitergabe an einen neuen Codex-Agenten gibt es die
[`CODEX_HANDOVER.md`](CODEX_HANDOVER.md). Sie enthält den aktuellen technischen Stand,
Arbeitsregeln, Prüfungen und den Veröffentlichungsablauf.

Die laufende Codex-Projektdokumentation liegt unter
[`docs/CODEX_PROJECT_DOCUMENTATION.md`](docs/CODEX_PROJECT_DOCUMENTATION.md).
Sie enthält Projektstand, Versionsstand, lokale Weiterarbeit, Veröffentlichungsablauf,
Designentscheidungen und ein Änderungsprotokoll.

Die erzeugten Projekt- und Servicebilder sowie die finalen Prompts sind in
[`docs/BILDAUFTRAG_PROJEKTBILDER.md`](docs/BILDAUFTRAG_PROJEKTBILDER.md) dokumentiert.

Konkrete Empfehlungen für Google-Unternehmensprofil, Search Console und einheitliche Firmendaten
stehen im [`docs/SEO_MARKETING_GUIDE.md`](docs/SEO_MARKETING_GUIDE.md).

## Aufgabenwarteschlange

Neue Arbeitsaufträge werden in `tasks.docx` (Word) im Projektstamm hinterlegt. Diese Datei
ist seit dem 24. Juni 2026 die primäre Warteschlange; in Word lassen sich auch Screenshots
zu einer Aufgabe einfügen.

Für jede neue Arbeitssitzung gilt:

1. `tasks.docx` vor anderen Aufgaben prüfen (Lesehinweis in `CODEX_HANDOVER.md`, Abschnitt 2).
2. Immer nur die oberste Aufgabe bearbeiten (von oben nach unten).
3. Die Aufgabe vollständig umsetzen, dokumentieren, testen, veröffentlichen und live prüfen.
4. Erst danach die erledigte Aufgabe (samt zugehöriger Bilder) aus `tasks.docx` entfernen.
5. Später hinzugefügte Aufgaben und ihre Reihenfolge unverändert erhalten.
6. Bei einer Blockade bleibt die Aufgabe in `tasks.docx` stehen.

## Kontaktformulare

Das Kontaktformular und der Anfrage-Assistent senden über FormSubmit an
`sawazki.electronics@googlemail.com`. Beim ersten echten Absenden kann FormSubmit eine
Aktivierungs-E-Mail an diese Adresse verschicken. Nach Bestätigung werden Formularanfragen direkt
weitergeleitet.

## Rechtliches

Impressum, Datenschutz und AGB sind als eigene Seiten enthalten. Bei Änderungen an Leistungen,
externen Diensten oder geschäftlichen Abläufen sollten die rechtlichen Inhalte mit geprüft werden.
