# Sawazki Electronics – Projektdokumentation

Stand: 10. Oktober 2026 · Version: v1.33.2

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
| v1.33.2 | 2026-10-10 | Startseiten-Navigation in Stahlblau |
| v1.33.1 | 2026-10-10 | Metallische Buttons der Startseite |
| v1.33.0 | 2026-10-10 | Technischer Hintergrund der Startseite wiederhergestellt |
| v1.32.1 | 2026-10-09 | Abschlussprüfung und Reststatus |
| v1.32.0 | 2026-10-09 | Webdesign-Muster und Erklärung zum Website-Betrieb |
| v1.31.1 | 2026-10-09 | Google Search Console vorbereiten |
| v1.31.0 | 2026-10-09 | Datenschutzhinweise und Website-Vertragsumfang präzisiert |
| v1.30.0 | 2026-10-09 | CSS, Bildablage und Dokumentation bereinigt |
| v1.29.0 | 2026-10-09 | Ruhigere Gestaltung und klarere Texte |
| v1.28.0 | 2026-10-08 | Angebotsseiten vereinheitlicht und gekürzt |
| v1.27.0 | 2026-10-08 | Startseite mit sechs Abschnitten (Pakete 3 + 2b) |
| v1.26.0 | 2026-10-08 | Gemeinsamer geführter Anfrage-Assistent (Paket 4) |
| v1.25.2 | 2026-10-08 | Projektübersicht mit kompakten Kacheln |
| v1.25.1 | 2026-10-08 | Fotorealistischer Einstieg für IT-Projekte |
| v1.25.0 | 2026-10-08 | Kompakte Leistungsübersicht (Paket 2) |
| v1.24.2 | 2026-10-08 | Leistungsmenü: Hover und verfeinerte Gestaltung |
| v1.24.1 | 2026-10-08 | Einheitliches Menü und Footer (Paket 1) |
| v1.24.0 | 2026-10-08 | IT-Betreuung und Diagnosepauschale (Paket 1b) |
| v1.23.0 | 2026-10-08 | Einheitliche Sie-Ansprache auf allen Kundenseiten |
| v1.22.1 | 2026-10-08 | Fotorealistisches Webdesign-Motiv in Hero, Servicekarte und Social-Vorschau |
| v1.22.0 | 2026-10-08 | Neues Geschäftsfeld „Webdesign & Digitale Lösungen": Landingpage, Servicekarte, Startseiten-Einbindung, themenabhängiger Anfrage-Assistent |
| v1.21.1 | 2026-10-08 | Projektbereich kompakter; Minus/Plus neben der Überschrift, mobil ohne Überlagerung |
| v1.21.0 | 2026-10-07 | Alle Projektgruppen standardmäßig geöffnet; globale Minus-/Plus-Buttons |
| v1.20.0 | 2026-10-07 | AlgoLab als neuntes Projekt; fünf aufklappbare Gruppen, größere Icons und einheitlicher Bereich IT-Projekte |
| v1.19.1 | 2026-09-26 | Excel-Lab zuerst, WorkbenchLab danach, PythonLab an dritter Stelle; vorbereitetes Excel-Projektbild übernommen |
| v1.19.0 | 2026-09-19 | Excel-Lab als achtes Projekt auf Startseite und Projektübersicht integriert |
| v1.18.1 | 2026-07-21 | Reihenfolge der Projektkarten auf der Startseite nach inhaltlicher Gruppierung angepasst |
| v1.18.0 | 2026-07-21 | Cyberpedia als siebtes Projekt mit eigenem Bild auf Start- und Projektseite integriert |
| v1.17.0 | 2026-07-12 | Solarsystem als sechstes Projekt integriert, eigenes Bild ergänzt und Dark-Mode-Standard bestätigt |
| v1.16.1 | 2026-07-02 | Brand-Asset-Konsolidierung: alte Sawazki-Logo-/Icon-Dateien in `assets/images/brand/` archiviert |
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

Die Website ist statisch: HTML, CSS und JavaScript, ohne Build, Framework, Paketabhängigkeiten oder externe Schriftarten.

- `index.html`: sechs Bereiche – Hero, drei Leistungsgruppen, Arbeitsweise, Ablauf, Kontakt, Projekthinweis.
- `produkte.html`: Leistungsübersicht in IT-Service, Für Unternehmen und Werkstatt & Spezial.
- `it-betreuung.html`, `datenrettung.html`, `webdesign.html`, `3d-druck.html`, `vhs-digitalisierung.html`, `energietechnik.html`: sechs Angebotsseiten nach einem gemeinsamen Muster, mit unveränderten FAQ und den jeweils freigegebenen Preisangaben.
- `projekte.html`: neun Projekte in fünf Gruppen; verlinkte kompakte Bildkacheln und optionale Detailinformationen.
- `ueber-mich.html`: beruflicher Hintergrund und persönliche Arbeitsweise. Ein echtes Porträt ist noch nicht vorhanden.
- `anfrage-assistent.html`: einziges Kontaktformular, geführte Schritte mit themenabhängigen Feldern; `danke.html` ist das Versandziel.
- `impressum.html`, `datenschutz.html`, `agb.html`: Rechtstexte; `404.html`: Fehlerseite mit absoluten URLs, nicht in der Sitemap.
- `assets/css/styles.css`: gemeinsame Komponenten, Dark/Light und Responsive-Regeln. Historische `vhs-*`-Klassennamen bleiben für das gemeinsame Angebotslayout erhalten.
- `assets/js/main.js`: Navigation, Header, Einblendungen, Projektgruppen, Themenfelder, Formularbetreff und VHS-Rechner.
- `assets/js/anfrage.js`: Schrittnavigation, Feldprüfung und sichere Anfragezusammenfassung.
- `assets/js/theme.js`: dunkel als Standard, lokal gespeicherte Theme-Auswahl und Schalter vor „Anfrage starten“.
- `robots.txt`, `sitemap.xml`, `.nojekyll`: Suchmaschinenhinweise und unveränderte statische Auslieferung durch GitHub Pages.
- `AGENTS.md`, `README.md`, `docs/tasks.md`, `docs/claude2codex.md`: Einstieg, öffentlicher Überblick, Aufgabenstatus und abgestimmtes Umbaukonzept.

## Design- und Inhaltsentscheidungen

- Leitbild: einfach, professionell und hochwertig. Eine klare Hauptaktion, kurze Einstiege, nachvollziehbare Gruppen.
- IT-Service bleibt die Kernbotschaft der Startseite. Webdesign und technische Spezialleistungen sind über drei Gruppenkarten erreichbar.
- Einheitliche Sie-Ansprache. Sachliche Überschriften statt austauschbarer Slogans.
- Navy, Logo-Blau und Cyan; dunkel bleibt Standard, hell wird gleichwertig gepflegt. Ruhige Flächen ohne Raster und dekorative Leuchtverläufe. Bilder bleiben die wesentlichen visuellen Akzente.
- Lokale Bilder und Systemschriften. Keine fremden Bild-CDNs oder Schriftendienste.
- Keine erfundenen Kundenstimmen, Firmenreferenzen oder Erfolgsgarantien. Generierte Servicebilder sind Symbolbilder; sie ersetzen kein echtes Porträt oder echte Referenzfotos.
- Eine Anfrage über den Assistenten; Telefon, E-Mail und WhatsApp ergänzen den Kontakt. Die Startseite enthält kein zweites Formular.
- Eigene Domain ist nach Jakobs Entscheidung vom 08.10.2026 zurückgestellt; GitHub Pages und `t1p.de/sawazki` bleiben.

## Bild- und Logoassets

Aktiv eingebunden:

- `brand/sawazki-brand-symbol.webp`, `brand/sawazki-brand-symbol.png`, `brand/favicon.ico`, `brand/favicon.png`: Header, strukturierte Daten und Browsericon.
- `brand/sawazki-brand-logo.png`: Social-Vorschau. Das vollständige Logo als WebP und die originalen Brand-Exporte bleiben als Markenmaterial erhalten.
- `customer-consulting.jpg`: Beratungsbild der Startseite.
- `repair-laptop.jpg`: IT-Angebot und entsprechende Übersichtskarten.
- `leistungen-hero.webp`, `projekte-hero.webp`: fotorealistische Einstiege der Übersichtsseiten.
- `webdesign-hero.webp`, `vhs-digitalisierung-hero.webp`, `3d-druck-hero.webp`, `datenrettung-hero.webp`, `energietechnik-hero.webp`: Angebotsbilder und zugehörige Karten.
- `project-excellab.webp`, `project-workbenchlab.webp`, `project-pythonlab.webp`, `project-algolab.webp`, `project-eclernstudio.webp`, `project-bmlab.webp`, `project-cyberpedia.webp`, `project-gameslab.webp`, `project-solarsystem.jpg`: neun Projekticons.

Alle Bilder liegen unter `assets/images/`. Originale und historische Brand-Dateien bleiben in `assets/images/brand/`; ersetzte Projektlogos und ungenutzte frühere Servicebilder wurden aus dem aktuellen Arbeitsbaum entfernt. Sie sind über die Git-Historie wiederherstellbar. Frühere Bildaufträge und Dateinamen im Änderungsprotokoll dokumentieren historische Stände.

## Kontakt und Formular

Oeffentliche Kontaktdaten auf der Website:

- E-Mail: `sawazki.electronics@googlemail.com`
- Mobil: `+49 1520 2967632`
- Anbieter: Sawazki Electronics, Jakob Sawazki, Moerikestrasse 15, 72250 Freudenstadt

Gemeinsames Anfrageformular:

- Formularanbieter: FormSubmit
- Formularziel: `https://formsubmit.co/sawazki.electronics@googlemail.com`
- Danke-Seite: `https://jakobsawazki.github.io/sawazki-electronics/danke.html`
- Hinweis: Beim ersten echten Absenden kann FormSubmit eine Aktivierungs-E-Mail an die Zieladresse senden. Danach werden Anfragen direkt weitergeleitet.
- Der Anfrage-Assistent ist das einzige Formular. Er nutzt FormSubmit, themenabhängige Felder, Honeypot und eine Vorschau vor dem Versand; es gibt keinen Chatbot.

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

## Gestaltungsvorschlag Startseiten-Einstieg (8. Oktober 2026, noch nicht umgesetzt)

- Eigene lokale Vorschau außerhalb des veröffentlichten Repositorys erstellt und auf Desktop (1440 px) sowie Mobil (390 px) kontrolliert.
- IT-Hilfe in Freudenstadt bleibt Kernbotschaft; bestehende H1 beibehalten, Absatz verkürzt: „Persönliche Hilfe bei PC- und Laptop-Problemen – verständlich erklärt, vor Ort oder per Fernhilfe nach Absprache."
- Ein einzelnes Beratungsbild neben dem Text, mehr Freiraum, eine primäre Anfrage-Schaltfläche und ein dezenter Link zu den Leistungen.
- Große zusätzliche Logo-Karte, drei Bildkarten und Faktenbox im Hero entfallen im Vorschlag. Inhalte zu Arbeitsweise und Service bleiben in den passenden Abschnitten vorhanden.
- Laufband durch eine ruhige Leistungszeile ersetzt. Markenlogo bleibt im Header.
- Vorschlag wartet gemäß Benutzerauftrag auf Jakobs Freigabe. Codex 3 (gesamte Website) bleibt das nachfolgende Arbeitspaket.

## Bisheriges Aenderungsprotokoll

### 10. Oktober 2026 – v1.33.2: Edlere Startseiten-Navigation

- Jakobs Wunsch: auch die oberen Menüpunkte an den neuen hochwertigen Auftritt anpassen.
- Navigation der Startseite als zusammenhängende stahlblaue Leiste mit feiner Metallkante, abgestimmten Abständen und dezenten hinterlegten Hover-/Fokusflächen. Helle Schrift auf Navy sorgt in beiden Themes für klare Kontraste.
- Leistungsmenü mit passender Navy-/Stahlblau-Oberfläche, feinen Spaltentrennern und Cyan-/Silber-Akzenten; mobile Navigation verwendet dieselbe Formensprache. Gestaltung bleibt für diesen Schritt auf der Startseite.
- Gefundene Bedienungskorrektur in `main.js`: Beim Wechsel über den Mobil-/Desktop-Breakpoint werden Leistungsgruppen neu gesetzt (Desktop offen, Mobil geschlossen) und das Panel geschlossen. Dadurch bleiben nach einem Größenwechsel keine leeren Desktopspalten stehen.
- Geprüft: Desktop 1280 px und Mobil 390 px, Hell/Dunkel; Leistungsmenü, Tastatur-Enter/Escape, mobile Gruppenauswahl und beide Breakpoint-Wechsel; kein horizontaler Überlauf. JS-Syntax, HTML-/Link-/FAQ-Prüfung und `git diff --check` ohne Fehler.
- Cache-Buster aller Seiten einheitlich: `20261010-nav-final`.


### 10. Oktober 2026 – v1.33.1: Metallische Buttons der Startseite

- Veröffentlicht: `17b89a7`, GitHub-Pages-Lauf `38048042707` erfolgreich. Metalloberfläche und CSS-Cache-Buster live bestätigt.

- Jakobs Wunsch: deutlich schönere, realistisch metallisch wirkende Buttons in edlem Blau.
- Hauptaktionen, Header-Anfrage und WhatsApp auf der Startseite erhalten eine Oberfläche aus gebürstetem Stahlblau, Lichtreflexen, feiner Metallkante und flachem räumlichem Schatten. Theme- und mobile Menüschalter passen sich mit einer zurückhaltenderen Metalloberfläche an.
- Native CSS-Verläufe statt Bildbeschriftungen: scharfer Text und Icons bei jeder Größe, keine neuen Bilddownloads. Auf die Startseite begrenzt als nächster Gestaltungsschritt.
- Hover hebt die Oberfläche leicht an, Drücken senkt sie ab; gut sichtbarer Cyan-Fokusring für Tastaturbedienung. Bei reduzierter Bewegung entfällt die Hover-Bewegung. Helle Menülinien bleiben auch im hellen Modus erkennbar.
- Geprüft: Desktop 1280 px und Mobil 390 px, jeweils Hell/Dunkel, keine horizontalen Überläufe; Theme- und Menübedienung, sichtbarer Tastaturfokus. HTML-/Link-/FAQ-Prüfung und `git diff --check` ohne Fehler.
- Einheitlicher Cache-Buster auf allen Seiten: `20261010-metall`.


### 10. Oktober 2026 – v1.33.0: Technischer Hintergrund der Startseite

- Veröffentlicht: `c4b4aba`, GitHub-Pages-Lauf `38047825151` erfolgreich; Live-Ansicht und aktueller CSS-Cache-Buster bestätigt.

- Jakob empfindet den stark reduzierten Stand als karg und wünscht wieder einen edlen, erkennbar technischen Auftritt. Erster ausdrücklich gewünschter Schritt: Hintergrund der Startseite, angelehnt an die früheren Punkt-Linien-Muster.
- `assets/images/home-circuit-pattern.svg`: eigenes leichtes Vektormuster aus Raster, Knotenpunkten und abgewinkelten Leiterbahn-Verbindungen. Keine externen Ressourcen, keine Animation oder JavaScript nötig.
- Startseiten-Hintergrund in Navy mit sanften Cyan-/Blau-Lichtflächen. Das Muster ist zur Mitte abgeschwächt und auf kleinen Bildschirmen angepasst; im hellen Modus erscheint es dezenter.
- Umsetzung ausschließlich innerhalb `.home-page main`; übrige Seiten behalten ihre Gestaltung. Inhalte, Hero-Foto und Seitenaufbau bleiben für diesen ersten Schritt erhalten. Die pauschale Reduktion aller technischen Muster ist für die Startseite durch Jakobs neue Entscheidung aufgehoben.
- Cache-Buster für CSS, theme.js und main.js auf allen Seiten einheitlich `20261010-technik`.
- Lokal geprüft: Desktop 1280 px und Mobil 390 px, jeweils Hell/Dunkel; Muster sichtbar, Texte lesbar, kein horizontaler Überlauf. Mobile Menü-/Theme-Bedienung funktioniert. HTML-/Link-/FAQ-Prüfung ohne Fehler (19 Dateien, 35 FAQ), SVG gültig, `git diff --check` sauber.


### 9. Oktober 2026 – v1.32.1: Abschlussprüfung und Reststatus

- Gesamter Website-Umbau einschließlich Claude-Paketen 0–7, Webdesign-Motiv, Leistungsmenü, Übersichts-/Projektmotiven und kompakten Projektkacheln ist veröffentlicht. Webdesign-Ergänzungen aus P2 sind ebenfalls fertig.
- Datenschutz nennt die vier tatsächlich erforderlichen Formularangaben ausdrücklich; Zusatzangaben freiwillig. Diagnosebedingungen auf IT-Seite und AGB unverändert identisch. Alle drei JavaScript-Dateien syntaxgeprüft.
- Abschluss: 48 echte Live-URLs einschließlich Seiten, CSS/JS, Bilddateien, Sitemap und robots.txt HTTP 200. 19 HTML-Dateien/35 FAQ ohne interne Link-/Schemafehler. Neue Inhalte bei 1280/390 px Dark/Light geprüft. Repo vor Abschluss sauber.
- Frühere WorkbenchLab-Profilwünsche zusätzlich live bestätigt: Profilbutton 140 px breit, Abschluss „Ok“ mit Häkchen, separates Hilfefenster mit eigenem Schließen; Hilfe/Profil ohne Änderung von Eingaben wieder geschlossen.
- Search Console: Inhaberschaft erfolgreich bestätigt, Sitemap nach finalem Ausbau erneut eingereicht. Google meldet beim Abruf weiterhin einen Fehler; öffentliche Datei ist korrekt erreichbar (12 URLs), robots.txt erlaubt Abruf. Kein Erfolg des Google-Crawlings behauptet.
- Unternehmensprofil: neuer Beschreibungstext übernommen; acht Leistungen übernommen, bei erneuter Prüfung kein ausstehender Prüfhinweis mehr.
- Restaufgaben bewusst als abhängig geführt: echte Fotos, freigegebene Kundenstimmen, FormSubmit-Vertragsunterlagen sowie Sitemap-Verarbeitung durch Google. Keine erfundenen Referenzen, kein eigenständiger Versand an Kunden/Anbieter. Eigene Domain bleibt gemäß Jakobs Entscheidung zurückgestellt.


- Veröffentlichung: `b6e5c80`, GitHub Pages erfolgreich und live geprüft.

- Ergänzende Google-Diagnose 09.10.2026, 07:09: URL-Prüfung bestätigt „URL ist auf Google“ / „Seite ist indexiert“. Aktueller Live-Test erfolgreich: „URL ist für Google verfügbar“, „Seite kann indexiert werden“. Der erneute Indexierungsantrag für den überarbeiteten Stand wurde mit „Indexierung wurde beantragt“ bestätigt (bevorzugte Crawling-Warteschlange). Keine wiederholten Anträge; keine Rang-/Zeitgarantie. Sitemap-Fehler bleibt separat offen, kein allgemeiner Abrufblocker der Startseite.

### 9. Oktober 2026 – v1.32.0: Webdesign-Muster und Erklärung zum Website-Betrieb

- `webdesign-muster.html`: klar fiktives Gestaltungsbeispiel für eine Holzwerkstatt, keine Kundenreferenz, keine Preise/Erfolgsbehauptungen oder fingierten Kontaktdaten. Ein fotorealistisches Motiv (integriertes Imagegen; Prompt in webdesign-muster-bildprompt.md), ruhige Typografie, drei kurze Leistungen, echter Anfrageweg zu Sawazki Electronics. Noindex, deshalb bewusst nicht in Sitemap.
- `website-betrieb.html`: Domain, Hosting, Wartung, laufende Kosten, Zugänge, Sicherung und Rechtstexte verständlich erklärt. Details aufklappbar; in Sitemap und README ergänzt.
- Beide Inhalte direkt von `webdesign.html` verlinkt, einheitlicher Header/Footer, kein zusätzlicher Hauptmenüpunkt. Die vorhandene Gruppe „Für Unternehmen“ erfüllt den optionalen Navigationswunsch bereits.
- CMS/Shop/Buchung bleiben wie bereits auf der Angebotsseite erklärt eine Einzelprüfung ohne pauschale Zusage. Referenzen bleiben an echtes Material und Erlaubnis gebunden. Damit ist der umsetzbare P2-Backlog erledigt; keine unbeauftragten Systeme oder Anbieterabos eingerichtet.
- Cache-Buster einheitlich 20261009-webbeispiele. Kein neuer externer Dienst, keine zusätzlichen Formulare.
- Geprüft: 19 HTML-Dateien/35 FAQ ohne Link-/Schemafehler; Webdesign, Muster und Ratgeber bei 1280 und 390 px jeweils Dark/Light ohne horizontalen Überlauf, je eine H1. Hinweis sichtbar unter festem Header; Ratgeber-Details per Enter bedienbar, Bild geladen.


- Veröffentlichung: `e154005`, GitHub Pages erfolgreich und live geprüft.

### 9. Oktober 2026 – v1.31.1: Google Search Console vorbereiten

- Öffentliche Google-HTML-Bestätigungsdatei für die vorhandene Website und Jakobs angemeldetes Konto ergänzt. Kein Analytics oder Tag Manager eingebunden. Sitemap-Änderungsdaten an den tatsächlichen Umbau angeglichen. Inhaberschaft nach Deployment erfolgreich bestätigt; Sitemap eingereicht (Google-Erfolgsmeldung). Erster Abrufstatus noch „Sitemap konnte nicht gelesen werden“; öffentliche Datei HTTP 200/application/xml, XML gültig, 11 URLs, kein robots-Verbot. Offener Folgepunkt zur Verarbeitung bei Google, keine Indexierungszusage.


- Veröffentlichung: `6db730c`, GitHub Pages erfolgreich und live geprüft.

### 9. Oktober 2026 – v1.31.0: Datenschutzhinweise und Website-Vertragsumfang präzisiert

- AGB: Website-Pflege, Updates, Sicherung/Restore, Zugänge und erforderliche Auftragsverarbeitung ausdrücklich im vereinbarten Umfang; bestehende Abnahme-/Nutzungsrechte und gesetzliche Rechte bleiben erhalten. Diagnosebedingungen wortgleich zur IT-Seite.
- Datenschutz: tatsächliche Anfragefelder, GitHub-Auslandsverarbeitung mit Anbieterlink, FormSubmit-Archiv (30 Tage laut Dokumentation), Spamprüfung nach Versand, lokale Theme-Auswahl, WhatsApp-Link und Website-Auftragsdaten ergänzt. Stand beider Texte 09.10.2026.
- FormSubmit-Ziel, Honeypot, Danke-Weiterleitung und reCAPTCHA-Konfiguration unverändert; keine Testanfrage abgesendet.
- Quellen geprüft am 09.10.2026: [FormSubmit-Dokumentation](https://formsubmit.co/documentation), [Anbieter-Privacy](https://formsubmit.co/privacy.pdf), [GitHub-Privacy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), [§ 25 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html), [LfDI BW zur Auftragsverarbeitung](https://www.baden-wuerttemberg.datenschutz.de/faq-zur-abgrenzung-der-verantwortlichkeiten-und-des-begriffs-der-auftragsverarbeitung/), [WhatsApp](https://www.whatsapp.com/legal/privacy-policy-eea).
- Offene Anbieterfakten werden nicht erfunden: FormSubmit-Vertragspartner/Anschrift, AVV, Regionen/Unterauftragnehmer und Transfergrundlage sind mit öffentlich vorliegenden Angaben nicht abschließend belegbar. Separater konkreter Restpunkt in tasks.md. Diese Textpflege ist keine Bestätigung vollständiger Rechtskonformität.


- Veröffentlichung: `5981ca7`, GitHub Pages erfolgreich und live geprüft.

### 9. Oktober 2026 – v1.30.0: CSS, Bildablage und Dokumentation bereinigt

- Paket 7: 312 CSS-Selektoren für entfernte Bereiche (alter Hero, Service-Finder, Laufband, Diagnose-/Galerieabschnitte, große Projektprofile und alte Produktübersicht) entfernt. Dynamisch verwendete Klassen und Zustände bleiben erhalten. CSS von 103.724 auf 66.450 Bytes reduziert (rund 36 %).
- Zehn nicht mehr referenzierte frühere Servicebilder, Projektlogos und das ersetzte Excel-SVG entfernt. Alle neun aktuellen Projekticons und aktuellen Hero-Bilder bleiben eingebunden. Originale und historische Brand-Exporte bleiben als Markenmaterial erhalten; entfernte Dateien sind über Git wiederherstellbar.
- README neu auf den tatsächlichen Aufbau ausgerichtet: sechs Angebote, drei Gruppen, neun Projekte, ein Anfrageformular, ruhige Flächen. Aktuelle Technik-, Design-, Bild- und Formularabschnitte der Doku aktualisiert; historische Einträge bleiben als Verlauf bestehen. Domain-Überlegungen ausdrücklich als zurückgestellt gekennzeichnet.
- AGENTS-Doku-Landkarte und Hinweise zu Projektkacheln und Theme-Schalter berichtigt. Historische `vhs-*`-Klassennamen bleiben für das gemeinsame Layout erhalten; kein zusätzlicher Build und keine Paketabhängigkeit.
- Prüfung: berechnete Darstellungen von 2.576 Elementen auf 15 Seiten vor/nach CSS-Bereinigung verglichen (23 Eigenschaften je Element), keine Unterschiede bei Desktop/Dark. Alle 15 Seiten bei 390 px/Light ohne horizontalen Überlauf; Projektgruppen auf/zu und optionale Informationen per Enter geprüft. 16 HTML-Dateien/35 FAQ ohne Link-/Schemafehler. Keine verwaisten Nicht-Brand-Bilder, JavaScript-Syntax und `git diff --check` fehlerfrei.
- Cache-Buster einheitlich `20261009-cleanup`.


- Veröffentlichung: `ca4194b`, GitHub Pages erfolgreich und live geprüft.

### 9. Oktober 2026 – v1.29.0: Ruhigere Gestaltung und klarere Texte

- Paket 6: Rasterhintergründe, radiale Leuchteffekte und Kartenschatten auf den öffentlichen Seiten zurückgenommen. Fotos bleiben die visuellen Akzente; Hauptaktionen sind einfarbig in Logo-Blau. Nummerierte Abläufe bleiben als Orientierung erhalten, dekorative Zahlen im Profil entfallen.
- Angebotsabläufe nutzen ruhige Trennlinien; FAQ, Formulare, Preisbereiche und Footer passen sich mit denselben Flächen und Textfarben an Dark/Light an. Kontrast der sekundären Texte im hellen Modus verbessert. Native Details, Fokusmarkierungen und Menübedienung bleiben erhalten.
- Über-mich-Einstieg auf einen Satz und eine Hauptaktion gekürzt, Schlagwort- und Vertrauensleisten entfernt. Hintergrund und Arbeitsweise kürzer und sachlicher beschrieben. Ein echtes Porträt bleibt offen, bis entsprechendes Material vorliegt.
- Projektüberschrift, Seitentitel und Schema einheitlich „Eigene IT-Projekte“. Doppelte FAQ-Vorüberschriften entfernt. Lange AGB-Überschrift bricht mobil ohne Überlauf um; Rechtstexte inhaltlich unverändert.
- Prüfung: 15 lokal verlinkte Seiten bei 1280 px und 390 × 844 in Dark/Light, je eine H1 und kein horizontaler Überlauf; AGB-Überlauf entdeckt und in beiden Themes behoben. Sichtprüfung von Profil, Anfrage, Preis/FAQ und Menü. 16 HTML-Dateien/35 FAQ ohne Link-/Schemafehler, Rechtstext-Inhalte gegen Git verglichen. 404 verwendet absichtlich absolute Live-Assets und wird nach Veröffentlichung zusätzlich geprüft.
- Cache-Buster einheitlich `20261009-gestaltung`.


- Veröffentlichung: `5526cdb`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.28.0: Angebotsseiten vereinheitlicht und gekürzt

- Paket 5: Alle sechs Angebote folgen Hero → Leistungen → Ablauf → Preis & Aufwand → FAQ → Anfrage. Doppelte Einführungen und Vertrauensleisten entfernt; Bilder und konkrete Leistungsinformationen bleiben erhalten.
- Ein kurzer Hero mit einer Hauptaktion und einem Preislink. Bei 1440 × 768 liegt die erste Inhaltsüberschrift auf allen sechs Seiten bei rund 651 px; mobil bleibt der Einstieg übersichtlich.
- Webdesign-Beispiele und Leistungsmodelle sind optional aufklappbar. Ergänzende Hinweise zu Originalkassetten, Datenverlust und Netzanschluss bleiben sichtbar. Alle bisherigen Anker bleiben vorhanden.
- Keine Änderung an Preistabellen, Diagnosebedingungen oder FAQ-Antworten; FAQ-Schema weiterhin identisch mit sichtbaren Antworten. Zwei verbliebene VHS-Hinweise auf Sie korrigiert.
- Prüfung: sechs Abschnitte je Seite, sämtliche alten IDs erhalten, Preistabellen und FAQ-Texte gegen Git-Stand verglichen, 16 HTML-Seiten/35 FAQ ohne Link-/Schemafehler. Desktop 1440 × 768 und Mobil 390 × 844 in Dark/Light ohne horizontalen Überlauf. Aufklappen per Maus/Enter und VHS-Rechner geprüft: drei Kassetten + Laufzeitaufschlag + USB ergeben 81,60 €, ab elf Kassetten individuelles Angebot. Kein Formular versendet.
- Einheitlicher Cache-Buster: `20261008-angebote`.


- Veröffentlichung: `e1b184c`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.27.0: Startseite mit sechs Abschnitten (Pakete 3 + 2b)

- Vereinfachter Hero auf Basis des bestehenden Entwurfs: eine H1, ein Satz, ein Anfragebutton, ein Beratungsbild. IT bleibt Kernbotschaft; Logo im Header. Logo-Karte, Bildsammlung, Faktenband und Laufband entfallen.
- Drei Bildkarten ersetzen Leistungskarten, Button-Leiste und Service-Finder. Sie verlinken die drei Gruppen der Leistungsübersicht; individuelle Angebote werden nicht mehrfach aufgezählt.
- Insgesamt sechs Abschnitte: Hero, Leistungsgruppen, drei Vertrauenspunkte, vier Ablauf-Schritte, Kontakt und schmaler Projektverweis. Diagnose-/Praxis-/Detailbänder und Projektkachelverzeichnis entfallen auf der Startseite.
- Projektverzeichnis mit fünf Gruppen und neun Kacheln auf projekte.html inhaltlich unverändert. Alte gruppen-/inhalt-Sprunglinks auf index.html werden dort hin weitergeleitet. Alle bisherigen IDs bleiben als Ankerersatz vorhanden; ohne JS führen alte Projektanker zum Hinweis mit Projektlink.
- OfferCatalog an die drei Gruppen und sechs eigenständigen Angebotsseiten angepasst. Keine neuen Preise, Referenzen oder Leistungsversprechen. Sachliche Texte, einfarbige Überschriften, ruhige Flächen und Bilder ohne Wiederholung.
- Lokale Prüfung: 1440 px Desktop, 390 und 320 px Mobil, Dark/Light; Tastaturlink zur Leistungsgruppe, Kontaktanker sowie zwei Projektgruppen-Weiterleitungen im Browser bestätigt. Alle bisherigen IDs und alle zehn Weiterleitungsziele geprüft. 16 Seiten/35 FAQ-Schemaeinträge ohne Link- oder Konsistenzfehler; JS-Syntax fehlerfrei.
- Cache-Buster auf allen Seiten: 20261008-startseite2. Unsichtbare alte Projektanker nehmen keinen Platz im Projekthinweis ein. Git-Pull zunächst durch Drive-desktop.ini unter .git blockiert; nur diese OS-Dateien in eine temporäre Sicherung verschoben, Pull danach erfolgreich.


- Veröffentlichung: `6f419bb`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.26.0: Gemeinsamer geführter Anfrage-Assistent (Paket 4)

- Ein einziger Anfrageweg: Das Startseiten-Formular ist durch einen Einstieg in den Assistenten ersetzt. Die Themenliste wird ausschließlich dort gepflegt.
- Vier Schritte: Thema → Anliegen → Kontakt → Prüfen. Zurückgehen erhält Eingaben, Pflichtfelder werden pro Schritt geprüft. Erst im letzten Schritt erscheint der Versandbutton.
- Webdesign zeigt seine Vorhabenfelder, IT seine Geräte- und Hilfeangaben. VHS, 3D-Druck und Energietechnik erhalten passende Beschreibungsfragen ohne irrelevante Geräte-/Remote-Felder. Ausgeblendete Themenfelder bleiben deaktiviert und fehlen in der Sendung.
- Zusammenfassung mit sicheren Textknoten, keine Interpretation von eingegebenem HTML. Fokus und Fortschrittsanzeige bleiben nach einem Schrittwechsel unterhalb des fixierten Headers sichtbar.
- Formularziel, Betreffpräfix, Honeypot und danke.html-Rückleitung erhalten. Keine neue Datenspeicherung. Ohne JavaScript bleibt das vollständige Formular verwendbar; optionale Themenfelder werden dann gemeinsam angezeigt.
- Geprüft: alle zwölf Themen, vorbelegter Webdesign-Link, leeres Thema/Beschreibung, ungültige E-Mail, Hin-/Zurückwechsel und Ausschluss fremder Themenfelder in FormData; Tastatur, Desktop 1440 und Mobil 390, Dark/Light ohne Überlauf. Keine echte Anfrage versendet. 16 HTML-Seiten und 35 FAQ-Schemaeinträge ohne Link-/Inhaltsfehler; beide JS-Syntaxprüfungen bestanden.
- Cache-Buster auf allen Seiten: 20261008-anfrage. Neuer Schritt-Controller: assets/js/anfrage.js.


- Veröffentlichung: `8e5609f`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.25.2: Projektübersicht mit kompakten Kacheln

- Veröffentlichung: `a0406ab`, GitHub Pages erfolgreich (Lauf 37842809643); neun Kacheln, geschlossene Informationsbereiche und entfernte Öffnen-Buttons online bestätigt.

- Jakobs Wunsch: Die neun Projekte erscheinen als kompakte Kacheln mit Grafik, Name und kurzer Beschreibung, zweispaltig am Desktop und einspaltig mobil. Die fünf Gruppen bleiben sichtbar zugeordnet und einzeln/global aufklappbar.
- Grafik und Kurzbeschreibung führen direkt zum jeweiligen Projekt (neuer Tab). Die bisherigen separaten Öffnen-Buttons entfallen.
- Alle ausführlichen Texte bleiben in nativen, standardmäßig geschlossenen Details erhalten, erreichbar über ein dezentes Info-Symbol mit Mehr Informationen. Ohne JavaScript und per Tastatur bedienbar.
- Einheitlicher Cache-Stand `20261008-projektkacheln` auf allen Seiten.
- Prüfung: alle neun vollständigen Beschreibungen und Ziel-URLs erhalten, Details zunächst geschlossen; Desktop/Mobil und Dark/Light, Tastaturbedienung und Gruppensteuerung geprüft. Klick auf Excel-Grafik öffnet Excel-Lab im neuen Tab.


### 8. Oktober 2026 – v1.25.1: Fotorealistischer Einstieg für IT-Projekte

- Veröffentlichung: `eb1f50f`, GitHub Pages erfolgreich (Lauf 37842076588); Bild und Projektgruppen online bestätigt.

- Jakobs Wunsch: Eigenes fotorealistisches Motiv für die Projektseite. Der bisherige Logo-Kasten wird durch ein symbolisches Entwicklungs- und Lernstudio ersetzt.
- Gleiche ruhige Einstiegsstruktur wie auf der Leistungsübersicht; mobil untereinander. Alle fünf Projektgruppen, neun Projekte und die Auf-/Zuklappsteuerung bleiben erhalten.
- Hero und Social-Vorschaubild verwenden `assets/images/projekte-hero.webp` (1672 × 941, 142 KB). Bildauftrag/Prompt: [`projekte-bildprompt.md`](projekte-bildprompt.md). Generierung über das integrierte Imagegen-Werkzeug; keine Personen, Fremdmarken oder erfundenen Kundenreferenzen.
- Einheitlicher Cache-Stand `20261008-projekte-hero` auf allen Seiten.
- Geprüft: Desktop/Mobil, Dark/Light, Bild geladen, kein horizontaler Überlauf, Gruppen ein-/ausklappen, interne Links und Schema. Projektverzeichnis per Vergleich unverändert (fünf Gruppen, neun Projekte).


### 8. Oktober 2026 – v1.24.2: Leistungsmenü verfeinert

- Veröffentlichung: `b024053`, GitHub Pages erfolgreich (Lauf 37840815962); Menü und Cache-Stand online bestätigt.

- Jakobs Wunsch: Das Leistungsmenü öffnet beim Darüberfahren mit der Maus (Desktop). Kurze Schließverzögerung verhindert versehentliches Zuklappen beim Wechsel in die Liste. Touch bleibt per Tippen bedienbar; Escape und Tastatursteuerung bleiben erhalten.
- Feiner abgerundeter Chevron mit dezenter Drehung, ruhige Menüfläche, klare Spaltentrennung, zurückhaltende Typografie und mobile Plus/Minus-Gruppensteuerung. Bewegungsreduktion berücksichtigt.
- Einheitlicher Cache-Stand `20261008-menu-polish` auf allen 16 Seiten. JavaScript-Syntax, interne Links/FAQ-Schema, lokale Desktop-/Mobilansicht, Dark/Light und Event-Tests für Hover, Touch-Abgrenzung, Schließverzögerung und Escape geprüft.



### 8. Oktober 2026 – v1.25.0: Kompakte Leistungsübersicht (Paket 2)

- Bestehende URL produkte.html erhalten; drei Leistungsgruppen und sieben kompakte Bildkarten (IT-Betreuung zusätzlich für Betriebe). Keine Neu-Labels, Portfolio-Kästen oder internen Ausbauankündigungen.
- Suchmaschinen-ItemList mit sechs eindeutigen Leistungen aktualisiert; Bilder bleiben lokal.
- Jakobs Ergänzung: fotorealistisches Einstiegsmotiv `assets/images/leistungen-hero.webp` (1672 × 941), mit dem integrierten Imagegen-Werkzeug erzeugt und als WebP optimiert. Generierungs-Prompt: [`leistungen-bildprompt.md`](leistungen-bildprompt.md). Symbolischer Arbeitsplatz mit Laptop/Smartphone für Webdesign, offenem Gerät und Werkzeugen für IT-Service sowie 3D-Drucker für technische Projekte. Keine Personen, Logos oder dargestellten Kundenreferenzen.
- Kurzer Text links, großzügiges Bild rechts; mobil untereinander. Alle drei Leistungsbereiche mit Sprunglinks erreichbar. Das neue Motiv dient auch als Social-Vorschaubild. Einheitlicher Cache-Stand `20261008-leistungen-hero`.
- Interne Links und Schema, Bilddimensionen, Desktop/Mobil und Dark/Light vor Veröffentlichung geprüft.


- Veröffentlichung: `b80f541`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.24.1: Einheitliches Menü und Footer (Paket 1)

- Alle Seiten mit identischem Hauptmenü und Footer, Unterzeile IT · Web · Technik, direktem Projektlink und Über-mich-Einstieg. 404 bleibt mit absoluten URLs ausgestattet.
- Drei Leistungsgruppen im aufklappbaren Bereich; normaler Übersichtslink bleibt ohne JavaScript erreichbar. Mobile Gruppen als native Details, Escape/Tab/Fokus und geschlossener Zustand berücksichtigt.
- Header-Kontrast in beiden Farbschemata korrigiert.


- Veröffentlichung: `7831032`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.24.0: IT-Betreuung und Diagnosepauschale (Paket 1b)

- Neue IT-Betreuungsseite für Privatkunden und Betriebe, sechs Abschnitte, eigenes Thema und Sitemap-Eintrag. Bestehendes hochwertiges Laptopmotiv verwendet.
- Diagnosepauschale wortgleich auf IT-Seite und in den AGB: kostenlose erste Einschätzung, ausdrücklich beauftragte Diagnose 50 € Endpreis, Angebot vor weiteren Arbeiten, vollständige Anrechnung bei Reparatur.
- AGB gezielt um Website-Projekte (Umfang, Abnahme, Materialrechte, Drittanbieter, Betreuung) ergänzt; keine Einschränkung gesetzlicher Rechte und keine Erfolgsversprechen.
- Der bisherige AGB-/Impressum-Stand enthielt keinen §-19-Hinweis. Preisabschnitt der AGB und IT-Seite jetzt mit dem von Jakob bestätigten Kleinunternehmerstatus; Impressum inhaltlich erhalten.
- Amtliche Quellen geprüft: https://www.gesetze-im-internet.de/ustg_1980/__19.html, https://www.gesetze-im-internet.de/bgb/__632.html und https://www.gesetze-im-internet.de/pangv_2022/__3.html. Die öffentliche Anfrage bleibt unverbindlich; eine kostenpflichtige Diagnose bedarf gesonderter Beauftragung.


- Veröffentlichung: `cd7d2aa`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.23.0: Sie-Ansprache (Paket 0)

- Kundentexte, Formularhinweise, Metadaten, FAQ-Antworten und Bestätigungs-/Fehlerseiten auf Sie umgestellt. Datenschutzerklärung nur in der Ansprache angepasst, ohne Änderung der Verarbeitung.
- Prüfung: Suche nach verbliebener Du-Ansprache und Konjugationen; Schema/FAQ-Abgleich, lokale Desktop-/Mobilansicht. Cache-Version vereinheitlicht.


- Veröffentlichung: `e1af8db`, GitHub Pages erfolgreich und live geprüft.

### 8. Oktober 2026 – v1.22.1: Webdesign-Motiv

- Eingebauter Bildgenerator: moderner Arbeitsplatz mit Laptop und Smartphone, dieselbe abstrakte Unternehmenswebsite in Desktop-/Mobilansicht; Navy/Cyan, linke Hälfte ruhig und dunkel; ohne Schrift, Logos oder Personen.
- Finales Asset: `assets/images/webdesign-hero.webp`, 1672 × 941, WebP-Qualität 82. Hero in `webdesign.html`, Servicekarte in `produkte.html`, Open-Graph-Bild und Bildmaße angepasst.
- Ersetzte SVG-Motive entfernt; Cache-Version auf allen HTML-Seiten vereinheitlicht.
- Bildgenerator-Prompt: "Premium modern workspace with unbranded laptop and smartphone showing the same corporate website using abstract layout blocks. Devices in the right half, calm dark navy left half; cyan rim light, cinematic product photography, 16:9. No text, letters, logos, people, identifiable company or watermark."
- Lokal geprüft: Hero auf Desktop/Mobil, Dark/Light, geladenes Kartenbild und interne Verweise; keine Formularsendung. Veröffentlicht mit `bfa5e6e`; GitHub Pages erfolgreich, Live-Hero mit 1672 × 941 und Social-Bild bestätigt.

### 8. Oktober 2026 – v1.22.0: Geschaeftsfeld „Webdesign & Digitale Lösungen"

Auftrag von Jakob (Briefing vom 08.10.2026): Sawazki Electronics soll wirtschaftlich breiter
aufgestellt werden und kuenftig Erstellung, Modernisierung und Betreuung von
Unternehmenswebsites anbieten. Umsetzung als Ergaenzung der bestehenden Seite, kein Relaunch.

**Neu: `webdesign.html`**

- Aufbau: Hero → Leistungsversprechen → Zielgruppen → sechs Leistungskarten → drei
  beispielhafte Ausgangslagen (ausdruecklich als Szenarien gekennzeichnet, keine
  Kundenprojekte) → Zusammenarbeit in sechs Schritten → vier Leistungsmodelle (Website-Start,
  Website-Modernisierung, Individuelle Unternehmenslösung, Pflege & Betreuung) → Vertrauen →
  acht FAQ → CTA.
- Wiederverwendet: `vhs-hero`, `vhs-trust-strip`, `vhs-intro`/`vhs-value-grid`, `vhs-formats`/
  `format-grid`, `vhs-pricing`, `vhs-process-grid`, `vhs-faq`/`faq-grid`, `vhs-cta`,
  `product-label`, `why-more`. Neu in `styles.css` nur: `.web-hero` (Marken-Verlauf wie die
  anderen Service-Heros, kleinere H1), die Rastervarianten `.format-grid--three` und
  `.vhs-process-grid--three` fuer sechs Elemente sowie eine `[hidden]`-Regel fuer den
  Anfrage-Assistenten. Die Varianten stehen direkt hinter den Basisregeln, damit die
  bestehenden Responsive-Regeln weiter greifen.
- Metadaten: eigener Titel/Description, Canonical, Open Graph (Social-Bild = Firmenlogo-PNG,
  da SVG von Vorschau-Diensten nicht unterstuetzt wird), `Service`- und `FAQPage`-Schema.
- Bild: Claude hat keinen Bildgenerator, deshalb eine eigene SVG-Illustration. Ein
  fotorealistisches Motiv im Stil der anderen Service-Seiten ist als offene Aufgabe fuer Codex
  in `tasks.md` eingetragen.

**Inhaltliche Leitplanken (bewusst so entschieden)**

- Keine Euro-Preise und keine Inklusivleistungen: ueberall „individuelles Angebot nach Aufwand".
- Keine Referenzkunden, keine Testimonials, keine Ranking-, Umsatz- oder Reaktionszeit-
  Versprechen. Der Vertrauensabschnitt nennt offen, dass Webdesign ein neuer Geschaeftsbereich
  ist und verweist auf die eigenen Webprojekte (`projekte.html`).
- Online-Shop, Buchungssystem, Redaktionssystem und Schnittstellen sind nur als Erweiterung
  „nach Pruefung, gesondert kalkuliert" erwaehnt, nicht als Standardleistung.
- Das Unternehmen, das Anlass der Geschaeftsidee war, wird nirgends genannt oder abgebildet.
- Du-Ansprache wie auf der uebrigen Website (einheitliche Tonalitaet). Falls fuer
  Geschaeftskunden „Sie" gewuenscht ist, betrifft das nur `webdesign.html` und die
  Webdesign-Texte auf `produkte.html`/`index.html`.

**Einbindung**

- `produkte.html`: fuenfte Servicekarte mit „Angebot ansehen" und „Direkt anfragen"
  (vorbelegtes Thema), `ItemList` um Position 5 ergaenzt, Meta-Description aktualisiert.
- `index.html`: Hero unveraendert. Neuer Button „Webdesign für Unternehmen" in der Leiste der
  Angebotsseiten, sechste Karte im Service-Finder (Raster deshalb von 5 auf 3 Spalten →
  zwei gleichmaessige Reihen), `OfferCatalog` um den Service ergaenzt, Thema im
  Kontaktformular waehlbar.
- Navigation: kein neuer Top-Level-Punkt; Erreichbarkeit ueber „Services", Startseite und
  Service-Finder. Footer unveraendert.
- `sitemap.xml`: neue URL; `lastmod` von Startseite, `produkte.html` und
  `anfrage-assistent.html` auf 2026-10-08.

**Anfrage-Assistent**

- Neues Thema mit dem Wert `Webdesign & Digitale Lösungen`; Links kodieren es als
  `?topic=Webdesign%20%26%20Digitale%20L%C3%B6sungen#assistent`. Die vorhandene
  Vorbelegung ueber `URLSearchParams` dekodiert `&` und Umlaut korrekt (geprueft).
- Themenabhaengige Bereiche ueber `data-topic-show` / `data-topic-hide` in `main.js`. Bei
  Webdesign erscheinen „Art des Vorhabens", „Unternehmen", „Bestehende Website / Domain",
  „Wichtigste Ziele" und „Zeitrahmen" (alle optional); „Gerät", „Dringlichkeit" und
  „Gewünschte Hilfe" werden ausgeblendet. Ausgeblendete Felder sind `disabled` und werden
  nicht mitgesendet. Platzhalter der Beschreibung und die Hinweisliste rechts wechseln mit.
- Ohne JavaScript bleiben die Zusatzfelder verborgen; das Formular funktioniert wie bisher.
- Unveraendert: FormSubmit-Ziel, `_next` auf `danke.html`, Honeypot, Pflichtfelder Name,
  E-Mail, Thema, Beschreibung, Datenschutz-Hinweis. Fieldset-Titel jetzt neutral
  „Anliegen & Details", Seitentitel/Description nennen zusaetzlich Webdesign.

**Rechtliche Review-Punkte (nichts eigenmaechtig geaendert)**

- `impressum.html`: kein Aenderungsbedarf erkennbar (Anbieterangaben gelten unveraendert).
- `datenschutz.html`: Das Formular nutzt weiterhin nur FormSubmit; keine neuen Drittanbieter,
  kein Tracking, keine Cookies. Neu erhoben werden optional Unternehmensname, Domain, Ziele
  und Zeitrahmen. Pruefen lassen, ob die Formular-Passage das abdeckt.
- `agb.html`: auf IT-/Reparaturleistungen zugeschnitten. Fuer Website-Projekte fehlen
  Regelungen zu Abnahme, Nutzungsrechten, Mitwirkungspflichten (Texte/Bilder/Bildrechte),
  Domain/Hosting, Wartung und Backups. Bis zur Klaerung gehoeren diese Punkte in das jeweilige
  Einzelangebot.
- Die Seite sagt ausdruecklich, dass Rechtstexte in der Verantwortung des Website-Betreibers
  liegen und keine Rechtsberatung erfolgt.
- BFSG: fuer Kundenprojekte je nach Geschaeftsmodell und Unternehmensgroesse im Einzelfall
  zu pruefen.

**Organisation**

- `docs/tasks.docx` wurde von Jakob geloescht. `docs/tasks.md` ist die einzige
  Aufgabenquelle, diese Datei die zentrale Dokumentation. Verweise in `AGENTS.md`, `README.md`,
  `tasks.md` und `.gitignore` angepasst; `.claude/` (lokale Vorschauserver-Konfiguration) ist
  gitignored.
- Cache-Version fuer CSS und Skripte auf allen HTML-Seiten: `20261008-webdesign`.

**Geprueft (lokal, `http://localhost:4177`)**

- `webdesign.html`, `produkte.html`, `index.html`, `anfrage-assistent.html` bei 1440, 1280,
  1024 und 360 px ohne horizontales Ueberlaufen; Dark und Light Mode; keine Konsolenfehler.
- Weg Landingpage → Anfrage-Assistent mit einem Klick, Thema vorbelegt, Zusatzfelder sichtbar.
  Themenwechsel auf „3D-Druck" und zurueck auf leer stellt die Geraetefelder wieder her; die
  gesendeten Feldnamen wurden ueber `FormData` kontrolliert. **Kein Formular abgesendet.**
- JSON-LD aller geaenderten Seiten geparst (5 Eintraege im `ItemList`, 10 im `OfferCatalog`),
  lokale Links, Anker, Bilder und eindeutige IDs per Skript geprueft, `git diff --check`.
  `node --check` war nicht moeglich (Node.js ist auf diesem Geraet nicht installiert);
  `main.js` lief stattdessen im Browser auf allen vier Seiten fehlerfrei.
- Veroeffentlicht: Code-Stand `1505253`, GitHub-Pages-Lauf `37810530314` erfolgreich. Live geprueft:
  `webdesign.html` laedt mit Illustration und neuem CSS, `produkte.html`, `index.html`,
  `sitemap.xml` und `main.js` enthalten die Aenderungen; Klick auf den Hero-CTA oeffnet den
  Anfrage-Assistenten mit vorbelegtem Thema und Webdesign-Feldern; keine Konsolenfehler.

### 8. Oktober 2026 – v1.21.1: Kompakter Projektbereich

Die Minus-/Plus-Steuerung steht auf der Startseite rechts neben der Projektueberschrift.
Damit entfaellt die eigene Werkzeugzeile und die Lern-Labs ruecken nach oben.
Mobil bleibt die Steuerung unter dem Text, damit nichts ueberlappt.
Gruppensteuerung auf Start- und Projektseite, Desktop/Mobil und Dark/Light lokal
und live geprueft; Pages-Deployment des Codes c4c83bd erfolgreich.

### 7. Oktober 2026 – v1.21.0: Globale Gruppensteuerung

- Alle fünf Projektgruppen starten auf `index.html` und `projekte.html` geöffnet, auch ohne JavaScript. Der frühere Einstieg mit nur geöffneten Lern-Labs ist damit ersetzt.
- Zwei dezente 40-px-Buttons oberhalb der Gruppen: Minus für „Alle Gruppen zuklappen“, Plus für „Alle Gruppen aufklappen“. Beschriftungen als zugänglicher Name und Tooltip; Fokusmarkierung und Navy-/Cyan-Metalloptik im bestehenden Stil.
- Gemeinsame Zustandssteuerung für einzelne und globale Aktionen verwendet die vorhandene Animation. Bereits passende Zustände bleiben unverändert; schnelle Richtungswechsel funktionieren. Enter/Leertaste, reduzierte Bewegung und Browser ohne Animation-API werden unterstützt. Globale Buttons werden ohne JavaScript verborgen; einzelne native Gruppen bleiben bedienbar.
- Cache-Version für CSS und Skripte auf allen HTML-Seiten: `20261007-it-project-controls`.
- Lokal geprüft: beide Seiten mit fünf offenen Gruppen beim Laden; alle schließen/öffnen; gemischte Zustände und schnelle Mehrfachklicks; Enter/Leertaste; Desktop und 390-px-Smartphone, Hell-/Dunkelmodus ohne horizontales Überlaufen; keine JavaScript-Fehler; Syntaxprüfung, lokale HTML-Verweise/Bilder, IDs, JSON-LD und `git diff --check`. GitHub Pages erfolgreich veröffentlicht (Code `7dfd435`, Lauf `37677624626`); live auf beiden Seiten fünf offene Gruppen und beide globale Aktionen inklusive Tastatursteuerung bestätigt, keine JavaScript-Fehler.


### 7. Oktober 2026 – v1.20.0: IT-Projekte und AlgoLab

- Auf Startseite und `projekte.html` neun Projekte in fünf unabhängige, aufklappbare Bereiche geordnet: Lern-Labs (Excel-Lab, WorkbenchLab, PythonLab, AlgoLab), Berufsschule (EC-Lernstudio, BM-Lab), Schülerprojekte (Cyberpedia), Gaming (GamesLab) und Wissen & Bildung (Solarsystem). Lern-Labs ist beim Einstieg geöffnet, die übrigen Gruppen geschlossen.
- Überschrift „IT-Projekte“; Beschreibung „Digitale Lernangebote, Software-Entwicklung, IT-Engineering“ mit einmaligem zentralem „Designed by Sawazki Electronics“. Wiederholte Urheberzeilen aus den Kacheln entfernt. Excel-Lab behält den Bindestrich; GamesLab wird als zusammenhängender Name angezeigt, die Zieladresse bleibt bestehen.
- AlgoLab rechts neben PythonLab auf dem Desktop verlinkt. Eigenes Profil auf der Projektseite, neun Einträge im CollectionPage-Schema. Bestehende Profiltexte erhalten.
- Größere Projekticons: 112 px auf dem Desktop, 90 px auf der mobilen Startseite und 100 px in mobilen Profilen. Kategoriezeilen mit blauen Metalleffekten, Mengenanzeige und rotierendem Pfeil. Native `details`/`summary` funktionieren ohne JavaScript; JavaScript ergänzt 300-ms-Höhen-/Deckkraftanimationen, schnelle Richtungswechsel, `aria-expanded` und Unterstützung für reduzierte Bewegung. Enter und Leertaste bedienen die Gruppen.
- Neues Motiv `assets/images/project-algolab.webp` (1254 × 1254, ca. 120 KiB). Mit eingebautem Imagegen im Referenzmodus aus dem bestehenden PythonLab-Icon als Stilvorlage erzeugt, anschließend nur als WebP komprimiert. Das Motiv zeigt geordnete Metallbausteine und ein leuchtendes Knotenmodell; keine Schrift. Lokales Original: `C:/Users/Jakob/.codex/generated_images/01a112ba-3602-7e33-a3d1-93f851c588b6/exec-ae85bfe9-7778-4083-887e-ad34365b2062.png`.
- Bildprompt: “Use case: product-mockup. Asset type: square website project app icon for AlgoLab, matching an existing family of photorealistic navy and cyan technology icons. Reference image: existing PythonLab tablet image used as style reference only. Create a distinct photorealistic premium 3D still life of a small brushed-metal algorithm and data-structure model on a dark reflective laboratory desk: five ordered blue and silver blocks of differing heights in the foreground and a compact branching tree of polished silver connecting rods and cyan-blue nodes behind. Main objects large and readable at 112 pixels, centered with safe margin. Deep navy background, restrained cyan edge lighting, blue glow and shallow depth of field, realistic polished metal texture, cinematic professional tech product photography. The scene must clearly differ from the tablet icon and suggest ordering data and connections. Full square image, no built-in rounded border (CSS will round corners), no letters, no text, no logo, no watermark, no people. The model is symbolic, not a specific mathematical tree diagram.”
- Cache-Version für CSS, Theme und Hauptskript auf allen HTML-Seiten vereinheitlicht: `20261007-it-projects-v1200`.
- Lokal geprüft: Start- und Projektseite mit 1440/390 px, hell/dunkel, ohne horizontales Überlaufen; Maus, Enter, Leertaste und schnelle Mehrfachklicks; Gruppenzuordnung und AlgoLab-Link; Bildladung; JavaScript-Syntax; alle lokalen HTML-Verweise, eindeutige IDs und JSON-LD; `git diff --check`. Kein Kontaktformular abgesendet. Veröffentlicht auf GitHub Pages: Code-Stand `d10678e`, erfolgreicher Lauf `37674894461`. Live auf Startseite und Projektübersicht geprüft: fünf Gruppen, neun Angebote, AlgoLab rechts neben PythonLab, geladene Icons, Tastaturbedienung und finaler CSS-Stand; keine JavaScript-Fehler.


### 26. September 2026 – Projekt-Reihenfolge und Excel-Projektbild (v1.19.1)

- Excel-Lab auf der Startseite an die erste Position gesetzt; WorkbenchLab steht oben rechts, PythonLab in der nächsten Zeile links.
- Excel-Lab auch auf der ausführlichen Projektseite an die erste Position verschoben und die sichtbare Projektnummerierung angepasst.
- Neues fotorealistisches 1024×1024-WebP `assets/images/project-excellab.webp` im bestehenden dunkelblauen Projektstil eingebunden; das frühere SVG bleibt als unreferenziertes Bestandsasset erhalten.
- Linkziel bleibt die öffentliche Excel-Lab-Seite. Am 26. September veröffentlicht (2d4ffca); GitHub-Pages-Deployment erfolgreich. Live-Reihenfolge und Desktop-Positionen im Browser bestätigt; lokale Referenzen, mobile Reihenfolge und heller/dunkler Modus geprüft.

### 19. September 2026 – Excel-Lab als Teilprojekt (v1.19.0)

- Neue Projektkarte vor Games Lab im bestehenden Layout; andere Karten behalten ihre Reihenfolge.
- Eigenes Profil auf `projekte.html#excel-lab` mit Zweck, Zielgruppe, Lernzielen und direktem Link.
- Vorhandenes grünes Excel-Lab-Symbol als lokales SVG übernommen; keine externe Bildabhängigkeit.
- Acht Projekte im Seitentext und Excel-Lab in den strukturierten Daten; Cache-Buster auf allen Seiten vereinheitlicht.
- Excel-Lab umfasst nun eigene Lernseiten L1.1 bis L1.5, aufklappbare Informationen und Aufgaben sowie die temporäre Entwicklervorschau.
- Veröffentlichung ausdrücklich von Jakob beauftragt: Website-Commit `699853f`, Excel-Lab-Commit `fe43558`; beide Pages-Deployments erfolgreich.
- Lokal: Desktop/Mobil, Hell/Dunkel, 1440/768/390/320 Pixel ohne Überbreite, Bilder und interne Links, acht Projektkarten, JSON-LD und eindeutige IDs geprüft.
- Live: Projektkarte und Projektprofil sichtbar, grünes Symbol eingebunden, Excel-Lab 0.7.0 sowie L1.5 mit sieben Abschnitten und fünf Ausgangsdatensätzen geprüft. Entwicklervorschau öffnet L1.5 schreibgeschützt und endet beim Reload.
- Öffentliche Browserprüfung über das Browserwerkzeug abgeschlossen; ein zuvor versuchter Shell-Browseraufruf wurde automatisch blockiert.
- Durch Google Drive erzeugte desktop.ini-Dateien innerhalb der lokalen Git-Metadaten wurden außerhalb der Repositories gesichert; Fetch funktioniert wieder. Kanonische Arbeitsordner bleiben maßgeblich.


### 21. Juli 2026 - Reihenfolge der Projektkarten (v1.18.1)

- Startseitenkarten neu angeordnet: PythonLab und WorkbenchLab, BM-Lab und EC-Lernstudio,
  Cyberpedia und Solarsystem sowie Games Lab als abschließende Karte.
- Inhalte, Bilder und Ziel-Links der sieben Projektkarten unverändert beibehalten.
- Mit Commit `d65de8b` auf `main` veröffentlicht; die gewünschte Reihenfolge anschließend
  auf GitHub Pages live bestätigt.

### 21. Juli 2026 - Cyberpedia als Teilprojekt (v1.18.0)

- Cyberpedia als siebte Projektkarte am Ende des Startseitenbereichs `#projekte` ergänzt und
  direkt mit `https://jakobsawazki.github.io/Cyberpedia-EK2/` verlinkt.
- Ausführliches Projektprofil auf `projekte.html` mit Zweck, Zielgruppe und Lernziel ergänzt;
  Seitentitel, Beschreibung, OpenGraph-Text und strukturierte Projektdaten aktualisiert.
- Neues lokales Projektbild `assets/images/project-cyberpedia.webp` im bestehenden
  Navy-Cyan-Fotostil erzeugt, auf 1024 × 1024 Pixel und rund 67 KB optimiert.
- Mit Commit `ae68344` auf `main` veröffentlicht; GitHub Pages, Startseitenkarte,
  Projektprofil, Zielseite und Bilddatei anschließend live mit HTTP 200 geprüft.

### 12. Juli 2026 - Solarsystem als Teilprojekt (v1.17.0)

- Das interaktive Solarsystem ist als gleichwertige Projektkarte auf der Startseite ergänzt und
  direkt neben Games Lab platziert.
- Die ausführliche Projektseite beschreibt Zweck, Zielgruppe und Maßstabslogik; Metadaten und
  strukturierte Projektdaten enthalten den Live-Link `https://jakobsawazki.github.io/solarsystem/`.
- Neues lokales Projektbild `assets/images/project-solarsystem.jpg` im einheitlichen Navy-Cyan-Stil
  erzeugt und für schnelle Darstellung auf 1024 × 1024 Pixel optimiert.
- Dark Mode als Standardstart geprüft: Ohne gespeicherte individuelle Auswahl startet die Website
  dunkel; manuell gespeicherte Nutzerentscheidungen bleiben absichtlich erhalten.
- Mit Commit `42f464f` auf `main` veröffentlicht; GitHub Pages sowie Startseite, Projektseite und
  Bilddatei anschließend mit HTTP 200 live geprüft.

### 2. Juli 2026 - Brand-Asset-Konsolidierung (v1.16.1)

- Alte ersetzte Sawazki-Brand-Dateien aus den Root-Asset-Ordnern in den zentralen Brand-Bereich
  verschoben: `legacy-sawazki-electronics-logo.png`, `legacy-sawazki-electronics-mark.png`
  und `legacy-favicon.svg` liegen jetzt unter `assets/images/brand/`.
- Neue Social-Preview-PNG `assets/images/brand/sawazki-brand-logo.png` aus dem optimierten
  vollstaendigen Logo erzeugt (1200x400 px) und die OpenGraph-/Twitter-Referenzen auf
  `index.html`, `projekte.html` und `ueber-mich.html` darauf umgestellt.
- Ergebnis: aktive und historische Sawazki-Logo-/Favicon-Dateien sind konsistent im
  Brand-Ordner gebuendelt; der alte Root-Pfad `assets/images/sawazki-electronics-logo.png`
  wird nicht mehr verwendet.

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

Seit dem 08.10.2026 gibt es keinen zweiten Aufgaben-Eingang mehr: `docs/tasks.docx` wurde
geloescht. Aufgaben stehen ausschliesslich in `docs/tasks.md`, Hintergruende und
Entscheidungen in dieser Datei.

## Regeln fuer kuenftige Aenderungen (alle Agenten)

Wenn Codex, Claude oder ein anderer Agent an diesem Projekt arbeitet:

- Vor allen anderen Schritten `docs/tasks.md` pruefen.
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

Aktualisierung 09.10.2026: Das vorhandene bestätigte Profil ist zugänglich. Die bisherige IT-Beschreibung war bereits gepflegt; ergänzt wurden die aktuellen Bereiche Webdesign und technische Spezialleistungen. Acht eigene Dienstleistungen gespeichert: IT-Betreuung, Netzwerk & WLAN, Datensicherung, Datenrettung, Webdesign & Digitale Lösungen, 3D-Druck, VHS-Digitalisierung, Batteriespeicher & Inselnetz – Beratung. Die Beschreibung wurde bei der erneuten Prüfung bereits von Google übernommen. Alle acht Leistungen waren bei der abschließenden erneuten Prüfung vorhanden; der ausstehende Prüfhinweis war entfernt. Keine Preise, neuen Kategorien oder Öffnungszeiten geändert.

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

### Eigene Domain (zurückgestellt)

Entscheidung vom 08.10.2026: vorerst GitHub Pages und `t1p.de/sawazki`, kein Domainwechsel. Die folgenden Überlegungen sind für einen möglichen späteren Wechsel archiviert.

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
| Solarsystem | `A radiant warm sun with eight recognizable planets on delicate orbital arcs, midnight navy studio background, cyan rim light, cinematic astronomy scene` |
| EC-Lernstudio | `A small clean cardboard parcel with a glowing scan line and floating data points, modern e-commerce logistics concept` |
| Cyberpedia | `A sleek open dark laptop displaying an abstract glowing network topology, with a modern security key and magnifying lens, educational cybersecurity and media-literacy concept` |
| 3D-Druck (Hero) | `A precise FDM 3D printer mid-print creating a smooth object on the print bed, glowing cyan rim light, dark workshop, 16:9 cinematic` |
| Datenrettung (Hero) | `An opened hard drive (HDD) on a clean workbench with a soft glowing cyan data stream rising from the platter, dark studio, 16:9 cinematic` |
| Energietechnik (Hero) | `A neat LiFePO4 battery storage unit with a solar panel and a charge controller, glowing cyan accents, off-grid energy concept, dark studio, 16:9 cinematic` |

### Dateinamen und Einbau

- Kacheln: `assets/images/project-pythonlab.webp`, `project-workbenchlab.webp`,
  `project-bmlab.webp`, `project-gameslab.webp`, `project-eclernstudio.webp`,
  `project-solarsystem.jpg`, `project-cyberpedia.webp`
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
  Webdesign & Digitale Lösungen fuer gewerbliche Kunden (seit v1.22.0, neuer Bereich –
  keine Referenzen/Preise veroeffentlichen, solange Jakob sie nicht freigibt),
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
| AlgoLab | BPE7: Algorithmen und Datenstrukturen | <https://jakobsawazki.github.io/AlgoLab/> |
| WorkbenchLab | Datenbanken/SQL ueben | <https://jakobsawazki.github.io/WorkbenchLab/> |
| BM-Lab | Bueromanagement-Lernportal | <https://jakobsawazki.github.io/bm-lernportal/> |
| GamesLab | Spiele und Experimente | <https://jakobsawazki.github.io/games-lab/> |
| Solarsystem | Interaktive 3D-Entdeckung von Sonne und Planeten | <https://jakobsawazki.github.io/solarsystem/> |
| EC-Lernstudio | E-Commerce-Lernfelder (LF2/LF7) | <https://jakobsawazki.github.io/ec-lernstudio-lf7/> |
| Cyberpedia | Netzwerke, Cybersicherheit und Medienkompetenz | <https://jakobsawazki.github.io/Cyberpedia-EK2/> |

Alle Kacheln tragen einheitlich "Designed by Sawazki Electronics". Neue Projekte: Karte im
Projektbereich der Startseite + Vorstellung auf `projekte.html`, nicht im Footer duplizieren.

### Offene strategische Themen

Siehe `docs/tasks.md`: Google-Unternehmensprofil,
Search Console, echte Testimonials/Fotos, rechtliche Pruefung der Datenschutzerklaerung
bei konkretem Geschaeftsbetrieb.
