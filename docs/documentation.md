# Sawazki Electronics – Projektdokumentation

Stand: 2. Juli 2026 · Version: v1.16.0

Diese Dokumentation ist die zentrale Wissensbasis fuer alle Mitarbeiter und KI-Agenten
(Codex/ChatGPT, Claude) und fuer die Weiterarbeit auf anderen Geraeten. Sie wird bei jeder
Aenderung fortgeschrieben: Was wurde geaendert, warum, in welchen Dateien und wie wurde geprueft.
(Bis 02.07.2026 hiess diese Datei `CODEX_PROJECT_DOCUMENTATION.md`.)

Weitere Doku: Einstieg/Uebergabe in [`../AGENTS.md`](../AGENTS.md) ·
Aufgaben in [`tasks.md`](tasks.md) · oeffentlicher Ueberblick in [`../README.md`](../README.md).
Am Ende dieser Datei: SEO-/Marketing-Leitfaden, Bildauftrag und Projektgedaechtnis.

## Versionsstand

Die Versionsnummern folgen `MAJOR.MINOR.PATCH`. MINOR = neue Seite/Funktion oder
sichtbares Feature, PATCH = kleinere Korrekturen. Das vollstaendige Aenderungsprotokoll
steht weiter unten.

| Version | Datum | Schwerpunkt |
| --- | --- | --- |
| v1.16.0 | 2026-07-02 | Interaktiver Preis-Schaetzer auf der VHS-Digitalisierungsseite (Staffel, Laufzeit, USB-Option) |
| v1.15.0 | 2026-07-02 | Vollstaendiges Firmenlogo als Hero-Modul der Startseite (optimierte WebP-Variante) |
| v1.14.1 | 2026-07-02 | Doku-Konsolidierung: AGENTS.md als zentrale Uebergabe, `docs/tasks.md`, `docs/documentation.md` |
| v1.14.0 | 2026-07-02 | Branding-Refresh: neues Brand-Symbol, Favicon, Hero-Logo-Modul und groessere Hero-Servicebilder |
| v1.13.0 | 2026-07-02 | UX-/Grafik-Ausbau: Service-Finder auf der Startseite, Energietechnik-Hero-/Kartenbild, neuer kanonischer Gewerbe-Ordner |
| v1.12.0 | 2026-07-02 | Marketing-/UX-Ausbau Startseite: nutzenorientierter Hero, Angebots-Teaser, Warum-Band, Kontakt-/Footer-Ausbau |
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
- Lokaler Arbeitsordner (Acer Nitro 5, via Google Drive Desktop synchronisiert): `D:\Google Drive\Gewerbe\Sawazki Electronics`
- Einzige lokale Kopie. Der aeltere Doppelstand `...\Codex\sawazki-electronics` (Commit `335a5f1`, Vorfahr von `main`) wurde am 02.07.2026 geprueft und geloescht. Der fruehere Ordner `...\Gewerbe\Sawazki Electronics Website` wurde am 02.07.2026 in den obigen Gewerbe-Ordner umbenannt. Auf anderen Geraeten gilt der Google-Drive-Pfad dieses Gewerbe-Ordners (z. B. `G:\Meine Ablage\Gewerbe\Sawazki Electronics`).
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
- `3d-druck.html`, `datenrettung.html`, `energietechnik.html`: weitere Angebotsseiten (Service-Layoutklassen wiederverwendet)
- `ueber-mich.html`: persoenliche Profil-/Vertrauensseite
- `robots.txt` und `sitemap.xml`: Suchmaschinen-Hinweise
- `.nojekyll`: sorgt dafuer, dass GitHub Pages die Dateien unveraendert ausliefert
- `AGENTS.md` (Projektstamm): zentrale Uebergabe und Regeln fuer alle Agenten
- `README.md` (Projektstamm): oeffentlicher Projektueberblick
- `docs/tasks.md`: primaere Aufgabenquelle (offen / in Arbeit / abgeschlossen)
- `docs/documentation.md`: diese Datei
- `docs/tasks.docx` (gitignored, nur lokal): Aufgaben-Eingang fuer private Screenshots

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

- `assets/images/brand/sawazki-brand-symbol.webp`: optimierte aktuelle Bildmarke, genutzt in Navigation und Hero-Modul
- `assets/images/brand/sawazki-brand-symbol.png`: PNG-Variante der aktuellen Bildmarke, genutzt in strukturierten Daten
- `assets/images/brand/favicon.ico` und `assets/images/brand/favicon.png`: aktuelles Browser-Favicon
- `assets/images/sawazki-electronics-logo.png`: breites Unternehmenslogo, weiterhin als OpenGraph-/Social-Vorschau genutzt
- `assets/images/customer-consulting.jpg`: Beratung/Kundengespraech, Hero-Hintergrund und Diagnosebereich
- `assets/images/repair-laptop.jpg`: neu generiertes Laptop-Reparaturfoto, Praxisbereich und Detailband
- `assets/images/smartphone-repair.jpg`: Elektronik/Kleingeraete
- `assets/images/vhs-digitalisierung-hero.webp`: fotorealistisches Hero-Bild fuer die
  Videokassetten-Digitalisierung
- `assets/images/3d-druck-hero.webp`: fotorealistisches Hero-Bild fuer die 3D-Druck-Dienstleistung
- `assets/images/datenrettung-hero.webp`: fotorealistisches Hero-Bild fuer die Datenrettung
- `assets/images/energietechnik-hero.webp`: fotorealistisches Hero- und Kartenbild fuer Batteriespeicher und Inselnetzloesungen
- `assets/images/project-pythonlab.webp`, `project-workbenchlab.webp`, `project-bmlab.webp`,
  `project-gameslab.webp`, `project-eclernstudio.webp`: einheitliche, fotorealistische
  Projektbilder fuer Startseite und `projekte.html`

Noch vorhanden als moegliche Rueckfall- oder Alternativassets:

- `assets/images/hero-workbench.png`
- `assets/images/sawazki-electronics-mark.png`
- `assets/images/support-dashboard.png`
- `assets/images/hardware-detail.png`
- `assets/images/games-lab-logo.png`
- `assets/images/pythonlab-logo.webp`
- `assets/images/workbenchlab-logo.webp`
- `assets/images/bm-lernportal-logo.svg`
- `assets/images/ec-lernstudio-logo.svg`
- `assets/icons/favicon.svg`
- `assets/images/brand/brand.png` und `assets/images/brand/brand_symbol.png` als Roh-Exports der neuen Bildmarke

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

### 2. Juli 2026 - VHS-Preis-Schaetzer (v1.16.0)

- Neuer interaktiver **Preis-Schaetzer** im Preisbereich von `vhs-digitalisierung.html`
  (`.price-calc`, `data-price-calc`): Kunden waehlen Kassettenanzahl, Aufnahmezeit je
  Kassette und optional einen neuen USB-Speicher und sehen sofort eine unverbindliche
  Schaetzung - weniger Huerden vor der Anfrage.
- Rechenlogik in `assets/js/main.js` (mit Element-Guard, laeuft nur auf der VHS-Seite):
  exakt die veroeffentlichte Staffel (1: 19,90 / 2: 37,80 / 3: 53,70 / 4-5: 16,90 je /
  6-10: 15,90 je), Laufzeitaufschlaege (+5 bzw. +10 Euro je Kassette), USB ab 12,90 Euro
  (Ergebnis dann als "ab"-Preis). Mehr als 10 Kassetten oder ueber 240 Minuten verweisen
  auf die unverbindliche Anfrage. **Wichtig:** Bei Preisaenderungen auf der Seite muss
  `baseTotal()` in `main.js` mitgezogen werden.
- Ausgabe barrierearm (`role="status"`, `aria-live="polite"`), CTA fuehrt in den
  Anfrage-Assistenten mit vorbefuelltem Thema. Ohne JavaScript bleibt die statische
  Preistabelle unveraendert nutzbar (progressive Enhancement).
- Neue CSS-Bausteine `.price-calc*` im Stil der bestehenden Preiskarten inkl.
  Dark-Mode-Gruppe; responsive (Desktop dreispaltig, mobil einspaltig).
- Cache-Token fuer `styles.css` und `main.js` auf allen 14 Seiten auf
  `20260702-preisrechner` angehoben; `node --check` fuer `main.js` bestanden.
- Lokal geprueft: fuenf Rechenfaelle exakt (19,90 / 87,60 / 194,20 "ab" / individuell /
  nach Pruefung), Dark-/Light-Mode, mobil und Desktop ohne Overflow, Konsole sauber.

### 2. Juli 2026 - Vollstaendiges Firmenlogo im Hero (v1.15.0)

- Wunsch von Jakob: Das komplette Logo `assets/images/brand/brand.png` soll oben auf der
  Startseite erscheinen. Aus der 901-KB-Rohdatei (2172x724) wurde die optimierte
  Web-Variante `assets/images/brand/sawazki-brand-logo.webp` erzeugt
  (1200x400, WebP q82, ~21 KB; per Python/Pillow).
- Hero-Modul `.hero-brand-card` zeigt jetzt das vollflaechige Logo statt Symbol+Text:
  neue Klasse `.hero-brand-logo`, Karte ohne Innenabstand mit weissem Hintergrund
  (Logo hat weissen Hintergrund), 430px Desktop / 330px mobil, 3:1-Seitenverhaeltnis,
  `width`/`height`-Attribute (CLS-Schutz) und `fetchpriority="high"`. Lichtlauf-,
  Rahmen- und Hover-Effekte bleiben erhalten; Hover-Zoom dezenter (scale 1.03 statt
  1.065 mit Rotation).
- Nicht mehr genutzte CSS-Regeln `.hero-brand-symbol`/`.hero-brand-text` inkl.
  Mobile-Varianten entfernt.
- Eyebrow unter dem Logo zu "IT, PC & Laptop · Service & Support" geaendert - der
  Markenname steht jetzt gross im Logo, doppelte Nennung vermieden.
- Header-Symbol, Favicon und strukturierte Daten unveraendert; `brand.png` bleibt als
  Rohquelle erhalten und wurde mitversioniert.
- Stylesheet-Cache-Token auf allen 14 Seiten auf `20260702-hero-logo` angehoben.
- Lokal geprueft: Logo laedt (1200x400 nativ), Karte 430x145 Desktop / 330x111 mobil,
  kein horizontaler Overflow, Konsole ohne Fehler.

### 2. Juli 2026 - Doku-Konsolidierung (v1.14.1)

- Neue Doku-Struktur auf Wunsch von Jakob: Ausser `README.md` und `AGENTS.md` (bleiben im
  Projektstamm, weil GitHub bzw. Agenten-Tools sie dort erwarten) liegen alle MD-Dateien
  unter `docs/`.
- `docs/CODEX_PROJECT_DOCUMENTATION.md` per `git mv` in `docs/documentation.md` umbenannt
  und zur zentralen Wissensbasis fuer Firma + Projekte erweitert.
- `CODEX_HANDOVER.md` vollstaendig in `AGENTS.md` integriert und geloescht; `AGENTS.md` ist
  jetzt die einzige Uebergabedatei fuer alle Mitarbeiter/Agenten.
- `docs/SEO_MARKETING_GUIDE.md` und `docs/BILDAUFTRAG_PROJEKTBILDER.md` als Abschnitte in
  diese Datei uebernommen und als Einzeldateien geloescht (Inhalte unveraendert, Git-Historie
  bleibt erhalten).
- Neu: `docs/tasks.md` als **primaere Aufgabenquelle** (offen / in Arbeit / abgeschlossen mit
  Datum, Version, Bearbeiter) inkl. Nutzungskontingent-Regel fuer KI-Agenten. `tasks.docx`
  bleibt nur lokaler Eingang fuer Aufgaben mit privaten Screenshots (gitignored).
- Neu: Abschnitt "Projektgedaechtnis und Firmenkontext" am Ende dieser Datei.
- Keine Aenderung an der Website selbst (nur Markdown, daher Patch-Version).

### 2. Juli 2026 - Branding-Refresh mit neuer Bildmarke (v1.14.0)

- Neue Logo-Rohdateien unter `assets/images/brand/` geprueft: optisch passend fuer den
  edlen, technischen Sawazki-Electronics-Auftritt, aber als Website-Asset zu gross und mit
  eingebettetem Checkerboard-Hintergrund.
- Aus `assets/images/brand/brand_symbol.png` optimierte Web-Assets erzeugt:
  `sawazki-brand-symbol.webp` fuer Header/Hero, `sawazki-brand-symbol.png` fuer
  strukturierte Daten sowie `favicon.ico` und `favicon.png` fuer den Browser-Tab.
- Header-Logo auf allen HTML-Seiten auf die neue Bildmarke umgestellt; Favicon-Links
  ueberall auf die neuen Brand-Dateien aktualisiert. Die 404-Seite nutzt weiterhin absolute
  URLs, damit verschachtelte Fehlerpfade auf GitHub Pages funktionieren.
- Startseiten-Hero: altes breites Logo-Bild durch ein neues Symbol-plus-Text-Modul ersetzt.
  Der Markenname nutzt feste dunkle Brand-Farben, damit er auch im Dark Mode auf der hellen
  Karte lesbar bleibt.
- Hero-Servicebilder auf der Startseite vergroessert, besonders die Kundengespraech-Kachel;
  die Bildgruppe wurde hoeher positioniert, damit sie nicht an das Faktenband stoesst.
- Stylesheet-Cache-Token auf allen HTML-Seiten auf `20260702-brand-refresh` angehoben.

### 2. Juli 2026 - UX-/Grafik-Ausbau und neuer Gewerbe-Ordner (v1.13.0)

- Kanonischer Arbeitsordner ist jetzt `D:\Google Drive\Gewerbe\Sawazki Electronics`.
  Der fruehere Ordner `D:\Google Drive\Gewerbe\Sawazki Electronics Website` wurde in
  diesen Zielordner umbenannt, damit kuenftig nur noch ein Gewerbe-Pfad verwendet wird.
- Neues lokales Bild `assets/images/energietechnik-hero.webp` mit dem integrierten
  Codex-Bildgenerator erzeugt, als WebP optimiert (1672x941 px, ca. 65 KB) und in
  `energietechnik.html` als Hero-Bild sowie OpenGraph-Bild eingebunden.
- Energietechnik-Karte auf `produkte.html` nutzt jetzt ebenfalls das neue Bild; der alte
  CSS-Platzhalter (`.featured-product-image.is-placeholder`, `.featured-placeholder-label`)
  wurde aus `assets/css/styles.css` entfernt.
- Startseite um den dunklen Service-Finder `.service-finder` erweitert: Besucher koennen
  schneller zwischen PC/Laptop-Hilfe, VHS-Digitalisierung, 3D-Druck, Datenrettung und
  Energietechnik navigieren. Ziel: weniger Ratlosigkeit vor dem Formular und direktere
  Wege zu den passenden Angebotsseiten.
- Neue CSS-Bausteine: `.service-finder`, `.service-finder-copy`, `.service-finder-grid`,
  `.finder-card`, `.finder-icon` inkl. Hover-, Grid- und Mobile-Regeln.
- Stylesheet-Cache-Token auf allen HTML-Seiten auf `20260702-ux-graphics` angehoben.
- `docs/BILDAUFTRAG_PROJEKTBILDER.md`, `AGENTS.md`, `CODEX_HANDOVER.md`, README und diese
  Projektdokumentation wurden auf den neuen Stand gebracht.

### 2. Juli 2026 - Marketing-/UX-Ausbau der Startseite (v1.12.0)

- Hero nutzenorientiert umgebaut: Das Eyebrow traegt jetzt die Marke
  (`Sawazki Electronics · IT, PC & Laptop`), die H1 lautet **"IT-Hilfe in Freudenstadt,
  die man versteht."** (lokales Keyword + Kundennutzen statt doppeltem Markennamen direkt
  unter dem Logo). Hero-Text waermer und konkreter formuliert. Der primaere Hero-CTA
  fuehrt jetzt wie der Header-CTA in den gefuehrten Anfrage-Assistenten.
- Neuer Teaser `.service-links` unter der Leistungsuebersicht: Die vier Angebotsseiten
  (VHS-Digitalisierung, 3D-Druck, Datenrettung, Batteriespeicher & Inselnetz) und
  `produkte.html` sind damit direkt von der Startseite erreichbar - vorher gab es dorthin
  keinen sichtbaren Weg aus dem Leistungsbereich.
- Neues Vertrauensband **"Warum Sawazki Electronics"** (`#warum`, Klasse `.why-band`) mit
  drei ehrlichen Nutzenversprechen (persoenlich & lokal, verstaendlich erklaert, ehrlich
  beraten) unter Wiederverwendung der `vhs-value-card`-Klassen; darunter Link zur
  "Ueber mich"-Seite (`.why-more`). Bewusst **keine** erfundenen Testimonials, Preise
  oder Reaktionszeit-Versprechen.
- Kontaktbereich der Startseite: WhatsApp als sichtbarer dritter Kontaktweg in der
  Kontakt-Seitenleiste (gleicher `wa.me`-Link wie der Float-Button).
- Footer aller Seiten: neue Zeile `.footer-contact` mit direktem Telefon- und
  E-Mail-Link (weniger Klicks bis zur Kontaktaufnahme).
- Neue CSS-Bausteine: `.service-links`, `.service-links > p`, `.service-links-row`,
  `.why-more`, `.footer-contact` (alle mit vorhandenen Farb-/Layout-Tokens).
- Cache-Token auf allen Seiten (inkl. `404.html`) auf `20260702-marketing` angehoben.

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
  fuer die Energie-Servicekarte wieder eingefuehrt (damals noch kein Foto). Stylesheet-Cache-Token auf
  `20260624-energie` angehoben (alle Seiten konsistent). Der Platzhalter wurde in v1.13.0
  durch `assets/images/energietechnik-hero.webp` ersetzt.

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

## Aufgabenverwaltung

Seit dem 02.07.2026 ist [`docs/tasks.md`](tasks.md) die **primaere Aufgabenquelle** mit den
Bereichen "In Arbeit", "Offen" und "Abgeschlossen" (mit Datum, Version, Bearbeiter) sowie den
Pflege- und Nutzungskontingent-Regeln.

`docs/tasks.docx` bleibt als **lokaler Eingang** fuer Aufgaben mit privaten
Screenshots bestehen (gitignored, nie committen; am 02.07.2026 von Jakob aus dem
Projektstamm nach `docs/` verschoben). Fuer die Datei gilt weiterhin:

1. Datei zu Beginn jeder Arbeitssitzung lesen (Lese-Snippet in `AGENTS.md`).
2. Neue Eintraege ohne private Details nach `docs/tasks.md` spiegeln.
3. Erledigte Aufgaben erst nach Live-Pruefung entfernen; vorher erneut lesen, damit
   zwischenzeitlich ergaenzte Aufgaben erhalten bleiben.
4. Die Datei bleibt auch leer im Projektordner bestehen.

## Regeln fuer kuenftige Aenderungen (alle Agenten)

Wenn Codex, Claude oder ein anderer Agent an diesem Projekt arbeitet:

- Vor allen anderen Schritten `docs/tasks.md` (und `tasks.docx`) pruefen.
- Diese Datei vor groesseren Aenderungen lesen.
- Nach relevanten Aenderungen den Abschnitt "Bisheriges Aenderungsprotokoll" ergaenzen.
- Bei visuellen Aenderungen lokale Browserpruefung machen.
- Bei Upload auf GitHub den Commit im Protokoll nennen.
- Keine fremden oder unsicheren externen Assets einbinden, wenn lokale Assets ausreichen.
- Kontakt- und Rechtstexte nur bewusst und nachvollziehbar aendern.
- Bestehende Backup-Branches nicht loeschen, solange sie als Rueckfallpunkt dienen.

---

## SEO- und Marketing-Leitfaden

(uebernommen aus der frueheren `docs/SEO_MARKETING_GUIDE.md`, Stand 24. Juni 2026)

### Zielbegriffe der Website

Die Startseite ist bewusst auf diese Suchabsichten ausgerichtet:

- Sawazki Electronics / Sawazki-Electronics
- IT-Service Freudenstadt
- PC-Reparatur Freudenstadt
- Laptop-Reparatur Freudenstadt
- Computerhilfe Freudenstadt
- Windows-Einrichtung, Datensicherung, WLAN und IT-Beratung

Die Begriffe werden in Seitentitel, Beschreibung, Ueberschriften, Fliesstext und
strukturierten Daten natuerlich verwendet. Ein `meta keywords`-Tag wird nicht eingesetzt,
weil Google ihn nicht fuer das Ranking verwendet.

### Google-Unternehmensprofil

Bei der Pruefung am 10. Juni 2026 war das Unternehmensprofil gut sichtbar. Als Beschreibung
wurde jedoch ein alter Impressums-/Datenschutztext angezeigt. Empfohlener Beschreibungstext:

> Sawazki Electronics bietet persoenlichen IT-Service in Freudenstadt fuer Privatkunden,
> Selbststaendige und kleine Unternehmen. Zum Angebot gehoeren PC- und Laptop-Reparatur,
> Fehlerdiagnose, Windows- und Geraete-Einrichtung, Datensicherung und Datenuebernahme,
> Hilfe bei WLAN, Netzwerk und Druckern sowie verstaendliche IT-Beratung. Unterstuetzung ist
> je nach Anliegen remote oder vor Ort nach Absprache moeglich. Im Mittelpunkt stehen
> transparente Empfehlungen, sorgfaeltige Umsetzung und Loesungen, die im Alltag zuverlaessig
> funktionieren.

Im Profil ausserdem regelmaessig pruefen:

- Hauptkategorie `Computersupport und -dienste` beibehalten, wenn sie das Kerngeschaeft trifft.
- Weitere Kategorien nur ergaenzen, wenn die jeweilige Leistung tatsaechlich angeboten wird.
- Leistungen einzeln mit denselben Namen wie auf der Website hinterlegen.
- Neues Logo, Titelbild und echte Arbeitsfotos hochladen.
- Nach abgeschlossenen Auftraegen sachlich um ehrliche Bewertungen bitten, ohne Anreize anzubieten.
- Gelegentlich kurze Beitraege zu Reparatur, Datensicherung, Windows oder WLAN veroeffentlichen.

### Einheitliche Firmendaten

Name, Adresse und Telefonnummer sollten auf allen Portalen identisch sein:

```text
Sawazki Electronics
Jakob Sawazki
Moerikestrasse 15
72250 Freudenstadt
+49 1520 2967632
sawazki.electronics@googlemail.com
```

Bei der Pruefung waren ausserhalb des Google-Profils teils abweichende Telefonnummern
sichtbar (Freudenstaedter Unternehmensverzeichnis, Branchenportale). Alte oder falsche
Angaben dort korrigieren, damit Google das Unternehmen eindeutig zuordnen kann.

### Google Search Console

1. URL-Praefix `https://jakobsawazki.github.io/sawazki-electronics/` als Property anlegen.
2. `https://jakobsawazki.github.io/sawazki-electronics/sitemap.xml` einreichen.
3. Die Startseite mit der URL-Pruefung testen und eine Indexierung beantragen.
4. Nach einigen Tagen pruefen, ob Seitentitel und Beschreibung uebernommen wurden.
5. Abdeckungs-, Nutzerfreundlichkeits- und Strukturierte-Daten-Berichte regelmaessig kontrollieren.

### Eigene Domain (naechster strategischer Schritt)

Eine eigene kurze Domain wirkt professioneller und ist leichter zu merken als die
GitHub-Pages-URL. Empfehlung: eigene Domain statt Kurzlink (Bitly u. ae. nur fuer Kampagnen,
Flyer, QR-Codes). Gute Zielvarianten: `sawazki-electronics.de`, `sawazki-electronics.com`.
GitHub Pages kann weiterhin hosten (DNS/CNAME auf die bestehende Seite).

Bei einem Domainwechsel gemeinsam aendern:

1. GitHub-Pages-Custom-Domain und DNS einrichten.
2. Canonical-URLs, `sitemap.xml`, Open-Graph-URLs und strukturierte Daten aktualisieren.
3. Google-Unternehmensprofil und Search Console auf die neue Domain umstellen.
4. Alte GitHub-Pages-URL als funktionierenden Fallback bestehen lassen.

Quellen: GitHub Docs zu Custom Domains
(<https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site>),
Bitly Support (<https://support.bitly.com/hc/en-us>).

### Dropshipping-/Shopify-Einschaetzung

Ein generisches Dropshipping-Modell passt aktuell nur begrenzt zur lokalen Vertrauensmarke,
erzeugt zusaetzliche Pflichten im Onlinehandel und konkurriert schnell ueber Preis,
Lieferzeit und Support. Staerker waere ein service-naher Produktansatz:

- kleine 3D-gedruckte Technikhelfer nach Bedarf (Kabelhalter, Adapterhalter, Wandhalterungen,
  Ordnungssysteme fuer Schreibtisch/Netzwerk/Backup)
- Ersatz- und Funktionsteile, die aus konkreten Kundenproblemen entstehen
- kleine Sets rund um Datensicherung, Kabelmanagement oder Arbeitsplatz-Einrichtung
- erst Nachfrage lokal testen, dann wiederkehrende Produkte als Shop-Kategorie aufnehmen

Shopify kann spaeter sinnvoll sein, wenn es mindestens ein klar validiertes Produkt mit
wiederholbarer Nachfrage, belastbarer Marge, sauberem Lieferprozess und rechtlich geklaerten
Shop-Texten gibt. Bis dahin behandelt die Website die Produktkategorie bewusst als
"spaetere ausgewaehlte Produkte".

Quellen: Shopify Dropshipping-Guide (<https://www.shopify.com/blog/dropshipping-guide>),
Shopify DE Produktbeschaffung (<https://www.shopify.com/de/blog/produktbeschaffung>),
IHK Stuttgart E-Commerce-Recht
(<https://www.ihk.de/stuttgart/fuer-unternehmen/recht-und-steuern/it-recht/ecommerce/ecommerce-impressum-4633698>).

---

## Bildauftrag: Einheitliche Projekt- und Servicebilder (erledigt)

(uebernommen aus der frueheren `docs/BILDAUFTRAG_PROJEKTBILDER.md`, Stand 2. Juli 2026,
Status: **erledigt und eingebaut** – bleibt als Stil- und Prompt-Dokumentation erhalten)

Die Projektkacheln auf der Startseite (`#projekte`) und die Service-Seiten fuer 3D-Druck,
Datenrettung und Energietechnik haben echte, fotorealistische Bilder in einheitlichem Stil.
Die ersten Bilder entstanden am 24.06.2026 mit dem integrierten Codex-Bildgenerator, das
Energietechnik-Bild am 02.07.2026. Alle finalen Bilder sind als WebP optimiert und liegen
lokal unter `assets/images/`.

### Einheitlicher Stil (fuer ALLE Bilder gleich)

Gemeinsamer Stil-Baustein (an jeden Prompt anhaengen):

> Premium product photography, single hero subject centered, dark navy studio backdrop
> (#041d34 to #0a4a73 gradient), cyan rim light (#20bfd2), soft cinematic lighting,
> shallow depth of field, subtle tech bokeh, glossy modern finish, high detail,
> photorealistic, 1:1 square composition, no text, no letters, no logos, no watermark.

Verbindliche Vorgaben:

- Projektkacheln **1:1**, mindestens **1024x1024**; Service-Heros **16:9** (final 1672x941 px).
- Format **WebP** (Qualitaet ~82), Kacheln idealerweise < 80 KB.
- Farbwelt strikt: Navy `#082f57`, Logo-Blau, Cyan `#20bfd2`.
- **Kein Text, keine Buchstaben, keine Logos** im Bild.
- Gleicher Bildausschnitt, gleiche Lichtstimmung und gleicher Blickwinkel bei allen Kacheln.

### Motiv-Prompts je Projekt

| Projekt | Motiv-Prompt (Englisch) |
| --- | --- |
| PythonLab | `A sleek dark tablet on a studio surface displaying colorful flowing program code and a clean flowchart diagram, glowing cyan accents` |
| WorkbenchLab | `Three glowing translucent database cylinders stacked and connected by thin light nodes and lines, futuristic data concept` |
| BM-Lab | `A tidy modern office flat-lay: a neat folder, a few documents, a pen and a small calculator, organized and minimal` |
| Games Lab | `A premium matte game controller glowing softly with cyan light, a few floating geometric game tokens, playful but elegant` |
| EC-Lernstudio | `A small clean cardboard parcel with a glowing scan line and floating data points, modern e-commerce logistics concept` |
| 3D-Druck (Hero) | `A precise FDM 3D printer mid-print creating a smooth object on the print bed, glowing cyan rim light, dark workshop, 16:9 cinematic` |
| Datenrettung (Hero) | `An opened hard drive (HDD) on a clean workbench with a soft glowing cyan data stream rising from the platter, dark studio, 16:9 cinematic` |
| Energietechnik (Hero) | `A neat LiFePO4 battery storage unit with a solar panel and a charge controller, glowing cyan accents, off-grid energy concept, dark studio, 16:9 cinematic` |

### Dateinamen und Einbau

- Kacheln: `assets/images/project-pythonlab.webp`, `project-workbenchlab.webp`,
  `project-bmlab.webp`, `project-gameslab.webp`, `project-eclernstudio.webp`
  (eingebaut in `index.html` `#projekte` und `projekte.html`; CSS-Plate
  `.side-project-card img`, 78x78, `object-fit: cover`).
- Service-Heros: `3d-druck-hero.webp`, `datenrettung-hero.webp`, `energietechnik-hero.webp`
  als `.vhs-hero-image` in der jeweiligen Angebotsseite sowie als Kartenbild auf
  `produkte.html`; `og:image` zeigt jeweils auf das Hero-Bild.
- Bestehende Logos bleiben als Rueckfall erhalten.

---

## Projektgedaechtnis und Firmenkontext

Dieser Abschnitt fasst den Kontext zusammen, der sonst nur in Chats mit den KI-Agenten
steckt, damit jeder Mitarbeiter/Agent ohne Vorwissen einsteigen kann. Stand: 02.07.2026.

### Firma

- **Sawazki Electronics**, Inhaber Jakob Sawazki, Moerikestrasse 15, 72250 Freudenstadt
  (Kleingewerbe neben dem Hauptberuf). Oeffentliches Profil siehe `ueber-mich.html`:
  Elektroniker fuer Geraete und Systeme (Industrie), Ingenieurstudium
  Elektrotechnik/Informationstechnik, Lehrer fuer Elektrotechnik und Informatik an einer
  beruflichen Schule.
- Leistungen: IT-Service (PC/Laptop, Windows, Datensicherung, WLAN, Beratung),
  VHS-/Camcorder-Digitalisierung, 3D-Druck nach Kundenwunsch, professionelle Datenrettung
  (physische Schaeden ueber Partnerlabore), Energietechnik = Batteriespeicher (z. B. LiFePO4)
  und Inselnetz-/Off-Grid-Loesungen. **Wichtig:** netzgekoppelte PV-Anlagen werden bewusst
  NICHT als eigene Leistung versprochen (regulatorisch: eingetragener Installateur +
  Netzbetreiber-Anmeldung), sondern nur "in Zusammenarbeit/Absprache".
- Positionierung/Tonalitaet: persoenlich, lokal, verstaendlich ("IT-Hilfe in Freudenstadt,
  die man versteht."), Du-Ansprache, ruhig-professionelles Blau-Design, keine Spieleseiten-Optik.

### Arbeitsmodell

- Jakob arbeitet mit mehreren KI-Agenten am selben Repo: **Codex/ChatGPT** (hat einen
  integrierten Bildgenerator – alle fotorealistischen Bilder stammen daher) und
  **Claude (Claude Code)** (kein Bildgenerator, dafuer lokale Browser-Verifikation,
  Godot-/Web-Entwicklung, Doku). Bildwuensche gehen deshalb immer als Prompt-Paket an Codex
  (siehe Bildauftrag oben).
- Einstieg fuer jeden Agenten: `AGENTS.md` → `docs/tasks.md` → diese Datei.
- Veroeffentlichung: Commit + Push auf `main`, GitHub Pages deployt automatisch.
  Bekannte Stoerung am 02.07.2026: Deployment blieb in `deployment_queued` haengen;
  Loesung war `gh run rerun <id>` bzw. ein kleiner Trigger-Commit.
- Google Drive synchronisiert den Projektordner zwischen Geraeten; daher die
  `desktop.ini`-Falle (siehe `AGENTS.md`, Technik-Hinweise).

### Grundsatzentscheidungen (mit Begruendung)

- **Statische Website ohne Backend/Framework:** wartungsarm, datensparsam, kostenlos auf
  GitHub Pages; Formulare ueber FormSubmit statt eigenem Server.
- **Keine externen Fonts/CDNs:** Datenschutz und Ladezeit.
- **Dark Mode als Standard** mit persistentem Umschalter.
- **Keine erfundenen Inhalte:** Testimonials, Referenzfotos und Portraet warten auf echtes
  Material von Jakob; keine Fantasiepreise oder Reaktionszeit-Versprechen.
- **Versionierung** MAJOR.MINOR.PATCH seit 24.06.2026, rueckwirkend ab v1.0.0 (20.05.2026).
- **Ordner-Historie:** Der Doppelstand `...\Codex\sawazki-electronics` wurde am 02.07.2026
  geloescht; `...\Gewerbe\Sawazki Electronics Website` wurde in
  `...\Gewerbe\Sawazki Electronics` umbenannt – einzige lokale Kopie.

### Verwandte Projekte (eigene Repos, auf der Website verlinkt)

| Projekt | Inhalt | Live |
| --- | --- | --- |
| PythonLab | Python lernen, Struktogramme | <https://jakobsawazki.github.io/PythonLab/> |
| WorkbenchLab | Datenbanken/SQL ueben | <https://jakobsawazki.github.io/WorkbenchLab/> |
| BM-Lab | Bueromanagement-Lernportal | <https://jakobsawazki.github.io/bm-lernportal/> |
| Games Lab | Spiele und Experimente | <https://jakobsawazki.github.io/games-lab/> |
| EC-Lernstudio | E-Commerce-Lernfelder (LF2/LF7) | <https://jakobsawazki.github.io/ec-lernstudio-lf7/> |

Alle Kacheln tragen einheitlich "Designed by Sawazki Electronics". Neue Projekte: Karte im
Projektbereich der Startseite + Vorstellung auf `projekte.html`, nicht im Footer duplizieren.

### Offene strategische Themen

Siehe `docs/tasks.md` (Abschnitt "Offen"): eigene Domain, Google-Unternehmensprofil,
Search Console, echte Testimonials/Fotos, rechtliche Pruefung der Datenschutzerklaerung
bei konkretem Geschaeftsbetrieb.
