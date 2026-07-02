# Sawazki Electronics Website - Codex Projektdokumentation

Stand: 2. Juli 2026 · Version: v1.11.0

Diese Dokumentation dient als Arbeitsgrundlage fuer Codex und fuer die Weiterarbeit auf einem anderen Laptop. Sie soll bei kuenftigen Aenderungen fortgeschrieben werden: Was wurde geaendert, warum, in welchen Dateien und wie wurde geprueft.

## Versionsstand

Die Versionsnummern folgen `MAJOR.MINOR.PATCH`. MINOR = neue Seite/Funktion oder
sichtbares Feature, PATCH = kleinere Korrekturen. Das vollstaendige Aenderungsprotokoll
steht weiter unten.

| Version | Datum | Schwerpunkt |
| --- | --- | --- |
| v1.11.0 | 2026-07-02 | 404-Fehlerseite, vollstaendiges Service-Schema, CLS-/Performance-Politur, Ordner-Konsolidierung |
| v1.10.0 | 2026-06-24 | Energietechnik-Service (Batteriespeicher & Inselnetz) inkl. Produkte-/Anfrage-/Sitemap-Integration |
| v1.9.0 | 2026-06-24 | Schwebender WhatsApp-Kontaktbutton auf allen Seiten (direkter Draht zu Jakob) |
| v1.8.0 | 2026-06-24 | Neue Seite `ueber-mich.html` (Vertrauen/Profil) inkl. Footer-Verlinkung auf allen Seiten |
| v1.7.1 | 2026-06-24 | FAQ-Schema (FAQPage) auf den Service-Seiten fuer Rich Results; Review + Cleanup |
| v1.7.0 | 2026-06-24 | Services-Navigation; einheitliche Projektbilder; 3D-Druck-/Datenrettungsbilder; Word-Queue finalisiert |
| v1.6.0 | 2026-06-24 | Datenrettung als eigene Dienstleistungsseite (inkl. Partner fuer physische Defekte) |
| v1.5.0 | 2026-06-24 | 3D-Druck-Dienstleistung als eigene Seite; Projektkacheln vereinheitlicht; Bildauftrag fuer Codex dokumentiert |
| v1.4.0 | 2026-06-24 | EC-Lernstudio im Projektbereich ergaenzt |
| v1.3.0 | 2026-06-18 | WorkbenchLab ergaenzt; Projektnavigation + Light-/Dark-Mode; Dark-Mode-Feinschliff |
| v1.2.0 | 2026-06-10 | Produktportfolio + VHS-Digitalisierung; lokale SEO; blaues Elektronik-Designsystem; projekte.html |
| v1.1.0 | 2026-06-02 | Games Lab + BM Lernportal als Projekte; Anfrage-Assistent |
| v1.0.0 | 2026-05-20 | Erste Homepage, rechtliche Seiten, Kontaktformular, Branding |

> Hinweis: Die Versionsnummern wurden am 24. Juni 2026 rueckwirkend aus dem
> Aenderungsprotokoll abgeleitet, um einen klaren Versionsstand zu haben.

## Kurzueberblick

- Projekt: Sawazki Electronics Website
- Zweck: professionelle Homepage fuer IT-, PC-, Laptop-, Support- und Elektronikdienstleistungen
- GitHub Repository: `JakobSawazki/sawazki-electronics`
- Live-Seite: <https://jakobsawazki.github.io/sawazki-electronics/>
- Lokaler Arbeitsordner (Acer Nitro 5, via Google Drive Desktop synchronisiert): `D:\Google Drive\Gewerbe\Sawazki Electronics Website`
- Einzige lokale Kopie. Der aeltere Doppelstand `...\Codex\sawazki-electronics` (Commit `335a5f1`, Vorfahr von `main`) wurde am 02.07.2026 geprueft und geloescht. Auf anderen Geraeten gilt der Google-Drive-Pfad dieses Gewerbe-Ordners (z. B. `G:\Meine Ablage\Gewerbe\Sawazki Electronics Website`).
- Standard-Branch: `main`
- Backup-Branch vor der Hero-/Hintergrund-Ueberarbeitung: `codex/backup-startseite-2026-05-20`

## Aktueller technischer Aufbau

Die Website ist bewusst statisch gehalten. Es gibt keinen Build-Prozess, keine Framework-Abhaengigkeiten und keine externen Schriftarten.

Wichtige Dateien:

- `index.html`: Startseite mit Hero, Leistungen, Diagnose, Praxisbildern, Ablauf, Detailband, Kontaktformular und Projects-/Sub-Projects-Hinweis
- `projekte.html`: zentrale Projektseite mit PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio
- `produkte.html`: sichtbarer Bereich „Services & Angebote" fuer Dienstleistungen, Angebote und spaetere physische Produkte
- `vhs-digitalisierung.html`: eigenstaendige Angebotsseite fuer alte Videokassetten
- `anfrage-assistent.html`: gefuehrter Anfrage-Assistent als statische, datensparsame Alternative zu einem echten Live-Chatbot
- `impressum.html`: Impressum
- `datenschutz.html`: Datenschutzerklaerung
- `agb.html`: Allgemeine Geschaeftsbedingungen
- `danke.html`: Zielseite nach erfolgreichem Formularversand
- `404.html`: gebrandete Fehlerseite fuer GitHub Pages (absolute URLs, noindex, nicht in der Sitemap)
- `assets/css/styles.css`: gesamtes Layout, Farben, Responsive Design, Hover-Effekte
- `assets/js/main.js`: Navigation, Scroll-Header, Reveal-Animationen, Formular-Betreff
- `assets/js/theme.js`: Dark Mode als Standard und lokal gespeicherte Theme-Auswahl
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
- `assets/images/vhs-digitalisierung-hero.webp`: fotorealistisches Hero-Bild fuer die
  Videokassetten-Digitalisierung
- `assets/images/3d-druck-hero.webp`: fotorealistisches Hero-Bild fuer die 3D-Druck-Dienstleistung
- `assets/images/datenrettung-hero.webp`: fotorealistisches Hero-Bild fuer die Datenrettung
- `assets/images/project-pythonlab.webp`, `project-workbenchlab.webp`, `project-bmlab.webp`,
  `project-gameslab.webp`, `project-eclernstudio.webp`: einheitliche, fotorealistische
  Projektbilder fuer Startseite und `projekte.html`

Noch vorhanden als moegliche Rueckfall- oder Alternativassets:

- `assets/images/hero-workbench.png`
- `assets/images/support-dashboard.png`
- `assets/images/hardware-detail.png`
- `assets/images/games-lab-logo.png`
- `assets/images/pythonlab-logo.webp`
- `assets/images/workbenchlab-logo.webp`
- `assets/images/bm-lernportal-logo.svg`
- `assets/images/ec-lernstudio-logo.svg`
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

### 2. Juli 2026 - 404-Seite, Service-Schema komplett, Performance-Politur (v1.11.0)

- Ordner-Konsolidierung: Der alte Doppelstand `...\Codex\sawazki-electronics` (Commit
  `335a5f1`, Vorfahr von `main`) wurde nach Pruefung durch Codex von Jakob geloescht.
  Einzige lokale Kopie ist seitdem dieser Gewerbe-Ordner (in AGENTS.md, CODEX_HANDOVER.md
  und Kurzueberblick dokumentiert).
- Neue `404.html` als gebrandete Fehlerseite fuer GitHub Pages: nutzt die vorhandenen
  `thank-you`-Klassen, noindex, WhatsApp-Button. **Absolute URLs mit Absicht**, weil
  GitHub Pages die Seite auch fuer verschachtelte fehlende Pfade ausliefert und relative
  Pfade dann brechen wuerden. Bewusst nicht in `sitemap.xml` aufgenommen.
- LocalBusiness-`OfferCatalog` auf der Startseite um die drei neueren Dienstleistungen
  ergaenzt: 3D-Druck nach Kundenwunsch, Professionelle Datenrettung sowie
  Batteriespeicher- und Inselnetzloesungen (JSON-LD mit JSON.parse geprueft).
- CLS-/Ladezeit-Politur auf der Startseite: alle 16 Bilder haben jetzt `width`/`height`-
  Attribute (Seitenverhaeltnis vor dem Laden bekannt, weniger Layout-Shift), das
  Hero-Bild laedt mit `fetchpriority="high"`, unterhalb liegende Bilder mit
  `loading="lazy" decoding="async"`; die Projektkacheln laden jetzt ebenfalls lazy.
- Neue Basisregeln in `styles.css`: `img:where([width][height]) { height: auto; }`
  (CLS-Schutz; `:where()` haelt die Spezifitaet bei 0, Komponentenregeln behalten
  Vorrang) und `text-wrap: balance` fuer `h1`-`h3` (ruhigere Umbrueche, progressive
  Enhancement).
- Stylesheet-/Theme-Cache-Token auf allen Seiten einheitlich auf `20260702-polish`
  angehoben. `main.js` blieb unveraendert (Token unveraendert).
- `.gitignore` ergaenzt: `desktop.ini` (Windows-/Google-Drive-Sync-Artefakte) bleibt
  kuenftig aus `git status` heraus.

### 24. Juni 2026 - Energietechnik-Service: Batteriespeicher & Inselnetz (v1.10.0)

- Neue Seite `energietechnik.html` mit Schwerpunkt Batteriespeicher (z. B. LiFePO4) und
  netzunabhaengige Inselnetz-/Off-Grid-Loesungen (Beratung, Auslegung, Aufbau). Reuse der
  Service-Layoutklassen; Hero-Klasse `.energy-hero` nutzt den gemeinsamen gebrandeten Verlauf.
- Bewusst **kein** netzgekoppelter PV-Anschluss als Versprechen (regulatorisch: eingetragener
  Installateur + Netzbetreiber-Anmeldung); klar als „nur in Zusammenarbeit/Absprache"
  ausgewiesen (Hero/Optionen/FAQ). Keine erfundenen Pauschalpreise.
- Integriert: vierte Servicekarte auf `produkte.html` (+ JSON-LD Position 4), Thema
  „Energietechnik" im Anfrage-Assistenten, Eintrag in `sitemap.xml`. `Service`- und
  `FAQPage`-Structured-Data ergaenzt (mit ConvertFrom-Json geprueft).
- Platzhalter-CSS (`.featured-product-image.is-placeholder`/`.featured-placeholder-label`)
  fuer die Energie-Servicekarte wieder eingefuehrt (noch kein Foto). Stylesheet-Cache-Token auf
  `20260624-energie` angehoben (alle Seiten konsistent).
- **Offen:** Hero-/Kartenbild `energietechnik-hero.webp` (im Bildauftrag ergaenzt).

### 24. Juni 2026 - WhatsApp-Kontaktbutton (v1.9.0)

- Schwebender WhatsApp-Button (`.wa-float`) unten rechts auf allen Seiten ergaenzt. Er oeffnet
  `https://wa.me/4915202967632` mit vorbefuellter Nachricht. Kunden schreiben damit **direkt an
  Jakob** (kein Bot/keine KI).
- CSS in `styles.css` (`.wa-float`, mobil als reiner Icon-Button ab 460px, `prefers-reduced-motion`
  beruecksichtigt). Button-Markup per Skript byte-/UTF-8-sicher vor `</body>` auf allen Seiten
  eingefuegt (reines ASCII, daher keine Umlaut-Probleme).
- Stylesheet-Cache-Token von `20260624-services-images` auf `20260624-whatsapp` angehoben
  (alle Seiten konsistent).
- Hinweis: Falls die WhatsApp-Nutzung beworben wird, ggf. Datenschutzhinweis zu WhatsApp/Meta
  pruefen. Die Telefonnummer ist bereits oeffentlich (Impressum/Kontakt).

### 24. Juni 2026 - "Ueber mich"-Seite fuer Vertrauen (v1.8.0)

- Neue Seite `ueber-mich.html` mit dem beruflichen Profil von Jakob Sawazki (Ingenieur-Mindset,
  ausgebildeter Elektroniker fuer Geraete und Systeme, Studium Elektrotechnik/Informationstechnik
  mit Lehramt, Berufsschullehrer fuer Elektrotechnik und Informatik). Reuse der Service-
  Layoutklassen; Hero-Klasse `.about-hero` nutzt den gemeinsamen gebrandeten Verlauf.
- Bewusst **nur berufliches Profil**, keine privaten Daten aus Lebenslauf/Zeugnissen (Datenschutz).
- `AboutPage`/`Person`-Structured-Data ergaenzt (mit `ConvertFrom-Json` geprueft).
- Footer-Link "Ueber mich" auf allen Seiten ergaenzt (zeilenenden-/UTF-8-sicher per Skript;
  `datenschutz.html`/`impressum.html` ueber den AGB-Anker, da ohne Selbstlink). `ueber-mich.html`
  in `sitemap.xml` aufgenommen.
- **Offen:** echtes Portraitfoto (`assets/images/jakob-sawazki.webp`) fuer den Hero; bis dahin
  greift der gebrandete `.about-hero`-Verlauf. Optional spaeter in die Hauptnavigation aufnehmen.

### 24. Juni 2026 - FAQ-Schema auf Service-Seiten (v1.7.1)

- `3d-druck.html`, `datenrettung.html` und `vhs-digitalisierung.html` um `FAQPage`-Structured-Data
  (JSON-LD) ergaenzt. Inhalt entspricht 1:1 den sichtbaren FAQ-Bereichen (Voraussetzung fuer
  gueltige Rich Results). Jede Service-Seite hat nun zwei JSON-LD-Bloecke (`Service` + `FAQPage`);
  alle mit `ConvertFrom-Json` als gueltig geprueft.
- Naechste Marketing-Schritte in Vorbereitung (brauchen echte Inhalte vom Inhaber): Kundenstimmen,
  `Ueber mich`-Bereich mit Foto, Referenz-Galerie sowie ein optionaler WhatsApp-Kontaktbutton.
  Google-Unternehmensprofil + Bewertungen sammeln siehe `docs/SEO_MARKETING_GUIDE.md`.

### 24. Juni 2026 - Review der v1.7.0-Aenderungen (Claude)

Unabhaengige Pruefung der von Codex ergaenzten Aenderungen (Commits `e7cab37`, `7432f61`, `187a146`):

- Geprueft und in Ordnung: alle fuenf Projektbilder und beide Service-Hero-Bilder live mit
  HTTP 200; Projektkacheln in `index.html` und `projekte.html` auf die neuen `project-*.webp`
  umgestellt; 3D-Druck- und Datenrettungs-Hero mit lokalem Foto; Servicekarten auf
  `produkte.html` mit echten Bildern statt Platzhalter.
- Konsistenz ok: Nav-Label `Services` einheitlich auf allen elf Seiten; `produkte.html` als
  `Services & Angebote` gefuehrt; Cache-Token einheitlich (styles.css `20260624-services-images`,
  theme.js `20260624-3d-print`); Datenschutz um Abschnitt 4 (Datenverarbeitung bei
  Dienstleistungen inkl. Datenrettung/Partnerlabore) ergaenzt.
- Nach Ruecksprache umgesetzt:
  1. `tasks.docx` aus dem Repository entfernt (`git rm --cached`, Datei bleibt lokal erhalten) und
     per `.gitignore` ausgeschlossen, damit die interne Aufgabenliste samt Screenshot nicht mehr
     oeffentlich ist. Hinweis: In der aelteren Historie (Commit `7432f61`) bleibt sie einsehbar;
     fuer eine vollstaendige Tilgung waere ein History-Rewrite + Force-Push noetig.
  2. Ungenutztes Platzhalter-CSS (`.featured-product-image.is-placeholder`,
     `.featured-placeholder-label`) aus `assets/css/styles.css` entfernt.

### 24. Juni 2026 - Services-Navigation, Bildassets und Word-Queue (v1.7.0)

- Sichtbaren Hauptmenuepunkt von `Produkte` auf `Services` umgestellt, weil die aktuellen Angebote
  VHS-Digitalisierung, 3D-Druck und Datenrettung Dienstleistungen sind. Die Datei `produkte.html`
  bleibt aus Link-Kompatibilitaet bestehen, wird in Titel, Text und Metadaten aber als
  `Services & Angebote` gefuehrt.
- `3d-druck.html` und `datenrettung.html` um lokale fotorealistische Hero-Bilder ergaenzt:
  `assets/images/3d-druck-hero.webp` und `assets/images/datenrettung-hero.webp`. Beide werden
  auch auf `produkte.html` in den Servicekarten genutzt.
- Einheitliche Projektbilder erstellt und in `index.html` sowie `projekte.html` eingebunden:
  `project-pythonlab.webp`, `project-workbenchlab.webp`, `project-bmlab.webp`,
  `project-gameslab.webp`, `project-eclernstudio.webp`.
- Hero-Service-Text `Remote oder vor Ort nach Absprache` per CSS einzeilig gehalten
  (`.hero-facts dd { white-space: nowrap; }`).
- `datenschutz.html` um eine Passage zur Datenverarbeitung bei Reparatur, Datensicherung,
  Datenrettung und Partnerlaboren ergaenzt.
- `docs/SEO_MARKETING_GUIDE.md` um Kurzlink-/Domain-Einschaetzung und Dropshipping-/Shopify-
  Empfehlung ergaenzt. Ergebnis: eigene Domain bevorzugen, Bitly nur fuer Kampagnen; statt
  generischem Dropshipping service-nahe, validierte Technikprodukte pruefen.
- `tasks.docx` als alleinige Aufgabenwarteschlange finalisiert; `tasks.txt` entfernt.
  Bildauftrag und alte Word-Aufgaben wurden aus `tasks.docx` geloescht.

### 24. Juni 2026 - Datenrettung als Dienstleistung (v1.6.0)

- Neue Seite `datenrettung.html` fuer professionelle Datenrettung erstellt (Hero, Leistungen,
  Optionen/Aufwand, Ablauf, FAQ, CTA). Reuse der Service-Layoutklassen wie bei `3d-druck.html`;
  Hero-Klasse `.recovery-hero` nutzt den gemeinsamen gebrandeten Verlauf.
- Inhalt bewusst ehrlich und kundenorientiert: logische Wiederherstellung selbst, bei
  **physischen Defekten** (z. B. defekter Schreib-/Lesekopf) Abwicklung ueber spezialisierte
  **Partnerlabore** – ein Ansprechpartner fuer den Kunden. Keine Erfolgsgarantie, „erst Diagnose,
  dann Angebot", Hinweis „Datentraeger nicht weiter benutzen". Die verwendete Software wird
  bewusst **nicht** namentlich genannt.
- Datenrettung als dritte `featured-product`-Karte auf `produkte.html` eingebunden (Platzhalter-
  Kachel) inkl. JSON-LD-`ItemList`-Eintrag (Position 3).
- Thema „Datenrettung (geloeschte/verlorene Daten)" (`value="Datenrettung"`) im Anfrage-Assistenten
  ergaenzt; CTA-Links nutzen `anfrage-assistent.html?topic=Datenrettung#assistent`.
- `datenrettung.html` in `sitemap.xml` aufgenommen; CSS-Selektor `.print-hero` zu
  `.print-hero, .recovery-hero` erweitert (gemeinsamer Service-Hero-Verlauf).
- Datenschutz und Bildauftrag wurden in v1.7.0 nachgezogen.

### 24. Juni 2026 - 3D-Druck-Dienstleistung, einheitliche Projektkacheln, Bildauftrag (v1.5.0)

- Neue Seite `3d-druck.html` fuer die Dienstleistung 3D-Druck nach Kundenwunsch erstellt:
  Hero, Leistungen, Optionen/Aufwand, Ablauf, FAQ und CTA. Sie nutzt bewusst die bereits
  vorhandenen Service-Layoutklassen (`.vhs-hero`, `.vhs-trust-strip`, `.vhs-value-*`,
  `.vhs-process-*`, `.vhs-cta` sowie generische `.section`-, `.format-grid`-, `.price-`-
  und `.faq`-Klassen), damit kein doppeltes CSS entsteht.
- Inhalte bewusst kundenorientiert und ohne erfundene Pauschalpreise gehalten
  (individuelles Angebot, „nach Aufwand"/„nach Absprache"). Konkrete Drucker-, Material-
  und Groessenangaben sollten vom Inhaber noch ergaenzt/bestaetigt werden.
- 3D-Druck als zweite `featured-product`-Karte auf `produkte.html` eingebunden inkl.
  JSON-LD-`ItemList`-Eintrag (Position 2). Das urspruengliche Platzhalterbild wurde in v1.7.0
  durch `assets/images/3d-druck-hero.webp` ersetzt.
- Thema „3D-Druck nach Kundenwunsch" (`value="3D-Druck"`) im Anfrage-Assistenten ergaenzt;
  CTA-Links nutzen `anfrage-assistent.html?topic=3D-Druck#assistent`.
- `3d-druck.html` in `sitemap.xml` aufgenommen.
- Projektkacheln auf der Startseite vereinheitlicht: `.side-project-card img` auf eine
  einheitliche „App-Icon"-Plate umgestellt (72x72, Radius 18px, einheitlicher Rahmen via
  `box-shadow`, dezenter Marken-Gradient als Hintergrund). Das vereinheitlicht das Framing
  der bisher gemischten Logos; die Bildinhalte selbst werden ueber den Bildauftrag ersetzt.
- Neuer CSS-Baustein `.print-hero`: gebrandeter Verlauf, damit der 3D-Hero auch ohne Foto
  fertig wirkt.
- Cache-Buster fuer Theme-/Stylesheet-Referenzen von `20260618-dark-polish` auf
  `20260624-3d-print` aktualisiert (alle bestehenden HTML-Seiten + neue 3D-Seite).
- **Bildauftrag dokumentiert:** `docs/BILDAUFTRAG_PROJEKTBILDER.md` enthaelt einen
  einheitlichen Stil-Leitfaden, Motiv-Prompts je Projekt + 3D-Hero, Zieldateinamen, Masse
  und exakte Einbauhinweise. Die Bilder wurden in v1.7.0 erzeugt und eingebaut.

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

### 17. Juni 2026 - PythonLab-Link aktualisiert

- PythonLab-Links von `/Python-Lernportal-BG/` auf `/PythonLab/` umgestellt.
- JSON-LD auf `projekte.html` an die neue PythonLab-Adresse angepasst.
- Logo-Datei von `pythonwerkstatt-logo.webp` zu `pythonlab-logo.webp` umbenannt.

### 18. Juni 2026 - WorkbenchLab eingebunden

Commit-Titel: `Add WorkbenchLab to project showcase`

- WorkbenchLab direkt neben PythonLab in den Projektbereich der Startseite aufgenommen.
- Eigenes, lokal optimiertes Datenbank- und SQL-Symbol unter
  `assets/images/workbenchlab-logo.webp` ergänzt.
- Startseitenraster für vier gleichwertige Karten als responsives 2×2-Raster gestaltet.
- WorkbenchLab mit Zweck, Zielgruppe und Lernziel auf `projekte.html` dokumentiert.
- Metadaten und strukturierte Daten der Projektseite um WorkbenchLab erweitert.

### 24. Juni 2026 - EC-Lernstudio in Projektbereich aufgenommen

- EC-Lernstudio als weitere Projektkarte im Bereich `#projekte` der Startseite ergänzt.
- Eigene Projektprofilkarte auf `projekte.html` mit Zweck, Zielgruppe und Ziel ergänzt.
- Neues lokales SVG-Logo `assets/images/ec-lernstudio-logo.svg` erstellt.
- Metadaten und strukturierte Daten der Projektseite um EC-Lernstudio erweitert.
- Startseite und Projektseite bei 1440, 1280 und 390 Pixeln geprüft: richtige
  Reihenfolge, geladene Logos, gültige Links, kein horizontaler Überlauf und
  keine Browserfehler.

### 18. Juni 2026 - Projektsprung und Light-/Dark-Mode

Commit-Titel: `Add project navigation and theme switcher`

- Hauptnavigation aller Seiten um `Projekte` erweitert; der Link springt direkt zum Bereich
  `#projekte` am Ende der Startseite.
- Kompakten Theme-Schalter unmittelbar rechts neben `Impressum` integriert.
- Light- und Dark-Mode fuer Startseite, Unterseiten, Karten, Formulare und rechtliche Seiten
  gestalterisch ausgearbeitet.
- Auswahl im lokalen Browserspeicher unter `sawazki-electronics-theme` persistiert; ohne manuelle
  Auswahl wird die Systemvorgabe des Browsers verwendet.
- Tablet-Navigation bereits ab 1080 Pixeln kompakt dargestellt, damit die erweiterte Navigation
  ohne Ueberlauf funktioniert.
- Lokal bei 1440, 1024 und 390 Pixeln geprueft: Sprungziel, Moduswechsel, Seitenpersistenz,
  mobiles Menue, sichtbare Bedienelemente, kein horizontaler Ueberlauf und keine Browserfehler.

### 18. Juni 2026 - Dark Mode und Header verfeinert

Commit-Titel: `Refine dark mode and header contrast`

- Dark Mode als Standardansicht festgelegt; eine gespeicherte manuelle Auswahl bleibt erhalten.
- Header bereits am Seitenanfang mit einer dunklen Glasflaeche, Rand und Schatten klar vom Inhalt
  getrennt.
- Navigationsreiter in einem eigenen, eingerahmten Hintergrund zusammengefasst, der auch beim
  Scrollen lesbar bleibt.
- Bild-Badges `Einrichtung`, `Sicherheit` und `Backup` im Dark Mode mit kontrastreichem
  Navy-Cyan-Stil versehen.
- Cache-Version fuer Theme-JavaScript und Stylesheet auf `20260618-dark-polish` aktualisiert.

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

## Aufgabenwarteschlange `tasks.docx`

`tasks.docx` im Projektstamm ist die verbindliche priorisierte Warteschlange fuer neue
Nutzeraufgaben. Die Word-Datei ersetzt die fruehere Textdatei, weil dort auch Screenshots zu
Aufgaben abgelegt werden koennen.

1. Datei vor jeder anderen Arbeit lesen.
2. Aufgaben anhand von Absaetzen/Leerzeilen in Bloecke aufteilen; eingebettete Bilder gehoeren zur
   jeweiligen Aufgabe.
3. Nur den obersten nicht leeren Block bearbeiten.
4. Aufgabe vollstaendig implementieren, dokumentieren, testen, committen, pushen und live pruefen.
5. Datei unmittelbar vor dem Entfernen erneut lesen.
6. Nur die erledigte erste Aufgabe samt zugehoeriger Bilder entfernen; spaetere Aufgaben erhalten.
7. Bei Aenderung, Blockade oder fehlender Live-Pruefung nichts entfernen.
8. Die Datei bleibt auch leer im Repository bestehen.

## Regeln fuer kuenftige Codex-Aenderungen

Wenn Codex kuenftig an diesem Projekt arbeitet:

- Vor allen anderen Schritten `tasks.docx` nach der oben dokumentierten Warteschlangenregel pruefen.
- Diese Datei vor groesseren Aenderungen lesen.
- Nach relevanten Aenderungen den Abschnitt "Bisheriges Aenderungsprotokoll" ergaenzen.
- Bei visuellen Aenderungen lokale Browserpruefung machen.
- Bei Upload auf GitHub den Commit im Protokoll nennen.
- Keine fremden oder unsicheren externen Assets einbinden, wenn lokale Assets ausreichen.
- Kontakt- und Rechtstexte nur bewusst und nachvollziehbar aendern.
- Bestehende Backup-Branches nicht loeschen, solange sie als Rueckfallpunkt dienen.
