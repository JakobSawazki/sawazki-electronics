# Sawazki Electronics Website - Codex Projektdokumentation

Stand: 10. Juni 2026

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

- `index.html`: Startseite mit Hero, Leistungen, Diagnose, Praxisbildern, Ablauf, Detailband, Kontaktformular und Projects-/Sub-Projects-Hinweis
- `projekte.html`: zentrale Projektseite mit PythonLab, BM-Lab und Games Lab
- `produkte.html`: erweiterbares Portfolio fuer Dienstleistungen, Angebote und physische Produkte
- `vhs-digitalisierung.html`: eigenstaendige Angebotsseite fuer alte Videokassetten
- `anfrage-assistent.html`: gefuehrter Anfrage-Assistent als statische, datensparsame Alternative zu einem echten Live-Chatbot
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
- Farbwelt: dunkles Navy, Logo-Blau und Cyan auf weiss/blaugrauen Flaechen.
- Dezente Leiterbahn- und Knotenpunktmuster beleben die hellen Bereiche, ohne Inhalte oder Fotos zu
  ueberlagern.
- Schrift: Systemschriften, fuer die Hero-Ueberschrift bevorzugt `Bahnschrift`, `Segoe UI Variable Display`, `Aptos Display`, `Segoe UI`.
- Keine externen Bild-CDNs und keine externen Fonts. Das reduziert Datenschutz- und Ladezeitrisiken.
- Die Startseite verwendet echte bzw. realistisch wirkende Servicebilder statt abstrakter Vektorgrafiken.
- Das grosse Hero-Logo ist interaktiv und fuehrt mit Lichtlauf- und Tiefeneffekt zu den Leistungen.
- Praxis-Karten verwenden CTA-aehnliche Titelbadges; der Ablauf zeigt grosse Nummern und Pfeile.
- Der alte abstrakte Hintergrund mit moeglicher "Zigarette"-Assoziation wurde nicht geloescht, aber nicht mehr aktiv verwendet.

## Bild- und Logoassets

Aktiv genutzt:

- `assets/images/sawazki-electronics-logo.png`: breites Unternehmenslogo, genutzt im Hero und als OpenGraph-Bild
- `assets/images/sawazki-electronics-mark.png`: quadratisches Logo/Marke, genutzt in Navigation und Favicon
- `assets/images/customer-consulting.jpg`: Beratung/Kundengespraech, Hero-Hintergrund und Diagnosebereich
- `assets/images/repair-laptop.jpg`: neu generiertes Laptop-Reparaturfoto, Praxisbereich und Detailband
- `assets/images/smartphone-repair.jpg`: Elektronik/Kleingeraete
- `assets/images/games-lab-logo.png`: Projects-/Sub-Projects-Logo fuer Games Lab im unteren Startseitenbereich
- `assets/images/pythonwerkstatt-logo.webp`: Logo fuer das sichtbar als PythonLab gefuehrte Lernprojekt
- `assets/images/bm-lernportal-logo.svg`: Logo fuer das sichtbar als BM-Lab gefuehrte Lernprojekt
- `assets/images/vhs-digitalisierung-hero.webp`: fotorealistisches Hero-Bild fuer die
  Videokassetten-Digitalisierung

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
- Der neue Anfrage-Assistent nutzt ebenfalls FormSubmit, bleibt statisch und vermeidet deshalb Backend-, API- und Datenschutzkomplexitaet eines echten Chatbots.

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

### 2. Juni 2026 - Games Lab dezent eingebunden

Commit-Titel: `Add subtle Games Lab side project link`

- Games Lab als unaufdringliches Nebenprojekt im unteren Bereich der Startseite verlinkt.
- Lokales Games-Lab-Logo als Website-Asset unter `assets/images/games-lab-logo.png` ergaenzt.
- Footer-Navigation um einen diskreten `Games Lab`-Link erweitert.

### 2. Juni 2026 - Projects-Bereich und Anfrage-Assistent verfeinert

Commit-Titel: `Refine projects card and add request assistant`

- Games-Lab-Hinweis von einzelnem Nebenprojekt auf `Projects & Sub-Projects` umgestellt, damit spaetere Bereiche wie Learn Lab sauber anschliessen koennen.
- `Designed by Sawazki Electronics` im Projects-Hinweis ergaenzt.
- Professionelle Hover-Effekte fuer Header-Logo, Navigation, CTA und Games-Lab-Symbol umgesetzt.
- CTA `Anfrage starten` auf die neue Seite `anfrage-assistent.html` umgestellt.
- Anfrage-Assistent als statisches FormSubmit-Formular erstellt, damit Kunden Anliegen gefuehrt einsenden koennen, ohne dass ein echter Chatbot oder ein Backend noetig ist.
- Hintergrundflaechen beim Scrollen professioneller und weniger weiss gestaltet.
- Reparaturbild `assets/images/repair-laptop.jpg` durch ein neues fotorealistisches Laptop-Reparaturfoto ersetzt.
- Sitemap und README um den Anfrage-Assistenten erweitert.

### 10. Juni 2026 - BM Lernportal verlinkt

Commit-Titel: `Link BM Lernportal from main homepage`

- BM Lernportal als dritte Karte im Bereich `Projects & Sub-Projects`
  ergänzt.
- Lokales BM-Logo unter `assets/images/bm-lernportal-logo.svg` eingebunden.
- Projektkarten auf drei Spalten am Desktop und zwei Spalten auf Tablets
  erweitert.
- Fußnavigation um den Link zum BM Lernportal ergänzt.

### 10. Juni 2026 - Lokale SEO- und Marketingoptimierung

- Seitentitel und Meta-Beschreibung auf IT-Service, PC- und Laptop-Reparatur in Freudenstadt
  ausgerichtet.
- Canonical-URLs, OpenGraph-/Twitter-Metadaten sowie strukturierte `LocalBusiness`- und
  `WebSite`-Daten ergänzt.
- Neueste Logo- und Icon-Dateien aus den Geschäftsvorlagen eingebunden.
- Hero-Bereich mit lokalem Leistungsversprechen, direktem Anfrage-CTA und Telefon-CTA überarbeitet.
- Lokalen Vertrauensbereich und FAQ mit typischen Kundenfragen ergänzt.
- Rechtliche Seiten auf `noindex, follow` gesetzt und Sitemap auf relevante Einstiegsseiten
  konzentriert.
- SEO- und Marketing-Leitfaden für Google-Unternehmensprofil, Search Console und einheitliche
  Firmendaten unter `docs/SEO_MARKETING_GUIDE.md` angelegt.

### 10. Juni 2026 - Sichtbares Design wiederhergestellt

- Hero, Navigation, Leistungsbereiche, Kontakttexte und Footer auf den Stand vor der
  SEO-Überarbeitung zurückgesetzt.
- Vorherige Website-Logoassets wiederhergestellt.
- Nur unsichtbare SEO-Angaben wie Seitentitel, Beschreibung, Canonical-URLs, Social-Metadaten,
  strukturierte Unternehmensdaten und Sitemap-Optimierung beibehalten.

### 10. Juni 2026 - Hero, Projekte und Footer verfeinert

- Hero-Logo ohne inneren Kartenabstand dargestellt und mit abgerundeten Ecken versehen.
- Servicebilder im Hero vergrößert und höher positioniert, damit das Faktenband die unteren Bilder
  nicht mehr verdeckt.
- Projektkennzeichnung einheitlich auf `Designed by Sawazki Electronics` gesetzt.
- Einzelne Projektlinks aus der Fußnavigation entfernt.
- Copyright und `Alle Rechte vorbehalten.` in zwei getrennte Zeilen gesetzt.

### 10. Juni 2026 - Blaues Elektronik-Designsystem und Prozessführung

- Header-Logo von 48 auf 56 Pixel vergroessert und Navigation daran ausgerichtet.
- Farbwelt von Gruen/Anthrazit auf Navy, Logo-Blau und Cyan umgestellt.
- Helle Hauptbereiche mit einem dezenten Leiterbahn-/Knotenpunktmuster aufgefrischt.
- Grosses Hero-Logo als Link zu `#leistungen` mit Lichtlauf, Tiefeneffekt und Fokuszustand umgesetzt.
- Praxisbilder auf die volle Inhaltsbreite erweitert und Titel als Blau-Cyan-Badges gestaltet.
- Ablaufkarten mit grossen Nummern, kontrastreichen Titeln und Desktop-Pfeilen verbunden.
- Ablauf- und Kontaktueberschrift ab Tabletbreite einzeilig ausgerichtet.
- Bestehende fotorealistische Servicebilder beibehalten; die aelteren Illustrationen bleiben nur
  Rueckfallassets, damit der visuelle Stil einheitlich bleibt.
- Desktop mit 1280 Pixeln, Tablet mit 900 Pixeln und Smartphone mit 390 Pixeln lokal geprueft.

### 10. Juni 2026 - Labs neu geordnet und Projektseite ergänzt

- Projektkarten auf der Startseite in die Reihenfolge PythonLab, BM-Lab und Games Lab gebracht.
- Sichtbare Namen `PythonWerkstatt BG` zu `PythonLab` und `BM Lernportal` zu `BM-Lab` vereinheitlicht.
- Neue Seite `projekte.html` mit Beschreibung, Zielgruppe und Ziel jedes Labs erstellt.
- Bestehende Logos und externe Projektziele weiterverwendet.
- Footer aller Seiten um den zentralen Link `Projekte` ergänzt.
- `projekte.html` in die Sitemap aufgenommen.

### 10. Juni 2026 - Produktportfolio und VHS-Digitalisierung

- Hauptnavigation und Footer um den Bereich `Produkte` erweitert.
- Neue Portfolioseite `produkte.html` fuer Dienstleistungen und spaetere physische Produkte erstellt.
- Neue Seite `vhs-digitalisierung.html` mit Formaten, Leistungsumfang, Ablauf, FAQ und Kontaktweg
  erstellt.
- VHS/VHS-C-Preisstaffel bis 90 Minuten mit Mengenpreisen von 19,90 EUR bis 15,90 EUR je Kassette
  sowie Laufzeitaufschlaegen von 5,00 EUR und 10,00 EUR eingefuehrt.
- Video8, Hi8 und MiniDV werden nach technischer Pruefung ab 24,90 EUR angeboten.
- Preisstruktur gegen aktuelle deutsche Anbieter mit Basispreisen, Mengenstaffeln und
  Ueberlaengenzuschlaegen abgeglichen.
- Anfrage-Assistent und Startseitenformular um das Thema `VHS-Digitalisierung` erweitert.
- Query-Parameter fuer eine automatische Themenvorauswahl im Anfrage-Assistenten ergaenzt.
- Fotorealistisches Bild `assets/images/vhs-digitalisierung-hero.webp` lokal eingebunden.
- Produkt- und VHS-Seite in die Sitemap aufgenommen.

## Aufgabenwarteschlange `tasks.txt`

`tasks.txt` im Projektstamm ist die verbindliche priorisierte Warteschlange fuer neue
Nutzeraufgaben.

1. Datei vor jeder anderen Arbeit als UTF-8 lesen.
2. Aufgaben anhand von Leerzeilen in Bloecke aufteilen.
3. Nur den obersten nicht leeren Block bearbeiten.
4. Aufgabe vollstaendig implementieren, dokumentieren, testen, committen, pushen und live pruefen.
5. Datei unmittelbar vor dem Entfernen erneut lesen.
6. Nur den unveraenderten erledigten ersten Block entfernen; spaetere Bloecke unveraendert lassen.
7. Bei Aenderung, Blockade oder fehlender Live-Pruefung nichts entfernen.
8. Die Datei bleibt auch leer im Repository bestehen.

## Regeln fuer kuenftige Codex-Aenderungen

Wenn Codex kuenftig an diesem Projekt arbeitet:

- Vor allen anderen Schritten `tasks.txt` nach der oben dokumentierten Warteschlangenregel pruefen.
- Diese Datei vor groesseren Aenderungen lesen.
- Nach relevanten Aenderungen den Abschnitt "Bisheriges Aenderungsprotokoll" ergaenzen.
- Bei visuellen Aenderungen lokale Browserpruefung machen.
- Bei Upload auf GitHub den Commit im Protokoll nennen.
- Keine fremden oder unsicheren externen Assets einbinden, wenn lokale Assets ausreichen.
- Kontakt- und Rechtstexte nur bewusst und nachvollziehbar aendern.
- Bestehende Backup-Branches nicht loeschen, solange sie als Rueckfallpunkt dienen.
