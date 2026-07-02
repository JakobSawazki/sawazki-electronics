# Bildauftrag: Einheitliche Projekt- und Servicebilder

Stand: 2. Juli 2026 · Status: **erledigt und eingebaut**

## Worum es geht

Die Projektkacheln auf der Startseite (`index.html`, Abschnitt `#projekte`) und die
Service-Seiten für 3D-Druck (`3d-druck.html`), Datenrettung (`datenrettung.html`) sowie
Energietechnik (`energietechnik.html`) haben echte, fotorealistische Bilder in einem
einheitlichen Stil erhalten.

Die ersten Bilder wurden am 24. Juni 2026 mit dem integrierten Codex-Bildgenerator erzeugt.
Das Energietechnik-Bild wurde am 2. Juli 2026 ergänzt. Alle finalen Bilder sind als WebP
optimiert und lokal unter `assets/images/` eingebunden. Diese Datei bleibt als Stil- und
Prompt-Dokumentation erhalten.

---

## Einheitlicher Stil (für ALLE Bilder gleich)

Damit die Kacheln als Set wirken, gilt für jedes Bild dieselbe „Bildrezeptur".
Nur das **Motiv** ändert sich pro Projekt.

**Gemeinsamer Stil-Baustein (an jeden Prompt anhängen):**

> Premium product photography, single hero subject centered, dark navy studio backdrop
> (#041d34 to #0a4a73 gradient), cyan rim light (#20bfd2), soft cinematic lighting,
> shallow depth of field, subtle tech bokeh, glossy modern finish, high detail,
> photorealistic, 1:1 square composition, no text, no letters, no logos, no watermark.

**Verbindliche Vorgaben:**

- Seitenverhältnis Projektkacheln: **1:1**, Auflösung **1024×1024** (oder größer).
- Seitenverhältnis Service-Hero: **16:9**. Die finalen WebP-Hero-Dateien liegen bei
  1672×941 px und sind für die aktuelle Website ausreichend scharf.
- Format: **WebP** (Qualität ~82). Dateien klein halten (Kacheln idealerweise < 80 KB).
- Farbwelt strikt einhalten: Navy `#082f57`, Logo-Blau, Cyan `#20bfd2`.
- **Kein Text, keine Buchstaben, keine Logos** im Bild (die Kachel zeigt den Namen separat).
- Gleicher Bildausschnitt, gleiche Lichtstimmung und gleicher Blickwinkel bei allen fünf
  Projektkacheln, damit sie als Serie zusammenpassen.

---

## Motive je Projekt (Prompt-Bausteine)

Jeweils Motiv + gemeinsamen Stil-Baustein kombinieren.

| Projekt | Thema | Motiv-Prompt (Englisch, gut für Bildgeneratoren) |
| --- | --- | --- |
| **PythonLab** | Learning & Education | `A sleek dark tablet on a studio surface displaying colorful flowing program code and a clean flowchart diagram, glowing cyan accents` |
| **WorkbenchLab** | Databases & SQL | `Three glowing translucent database cylinders stacked and connected by thin light nodes and lines, futuristic data concept` |
| **BM-Lab** | Learning & Exam Prep | `A tidy modern office flat-lay: a neat folder, a few documents, a pen and a small calculator, organized and minimal` |
| **Games Lab** | Games & Experiments | `A premium matte game controller glowing softly with cyan light, a few floating geometric game tokens, playful but elegant` |
| **EC-Lernstudio** | E-Commerce & Daten | `A small clean cardboard parcel with a glowing scan line and floating data points, modern e-commerce logistics concept` |
| **3D-Druck (Hero)** | Dienstleistung | `A precise FDM 3D printer mid-print creating a smooth object on the print bed, glowing cyan rim light, dark workshop, 16:9 cinematic` |
| **Datenrettung (Hero)** | Dienstleistung | `An opened hard drive (HDD) on a clean workbench with a soft glowing cyan data stream rising from the platter, dark studio, 16:9 cinematic` |
| **Energietechnik (Hero)** | Dienstleistung | `A neat LiFePO4 battery storage unit with a solar panel and a charge controller, glowing cyan accents, off-grid energy concept, dark studio, 16:9 cinematic` |

---

## Dateinamen & Einbau

Bilder unter `assets/images/` ablegen. **Vorgeschlagene Namen** (bestehende Logos bleiben
als Rückfall erhalten):

| Datei | Verwendung | Einbau |
| --- | --- | --- |
| `project-pythonlab.webp` | PythonLab-Kachel | `index.html` → `img src` in der PythonLab-`.side-project-card` ersetzen |
| `project-workbenchlab.webp` | WorkbenchLab-Kachel | dito in WorkbenchLab-Karte |
| `project-bmlab.webp` | BM-Lab-Kachel | dito in BM-Lab-Karte |
| `project-gameslab.webp` | Games-Lab-Kachel | dito in Games-Lab-Karte |
| `project-eclernstudio.webp` | EC-Lernstudio-Kachel | dito in EC-Lernstudio-Karte |
| `3d-druck-hero.webp` | 3D-Druck-Hero | siehe unten |
| `3d-druck-hero.webp` | 3D-Karte auf `produkte.html` | wird auch dort als Kartenbild genutzt |
| `datenrettung-hero.webp` | Datenrettung-Hero | wie 3D-Hero, in `datenrettung.html` (Klasse `.recovery-hero`) |
| `datenrettung-hero.webp` | Datenrettung-Karte auf `produkte.html` | wird auch dort als Kartenbild genutzt |
| `energietechnik-hero.webp` | Energietechnik-Hero | in `energietechnik.html` als `.vhs-hero-image` eingebaut (Klasse `.energy-hero`) |
| `energietechnik-hero.webp` | Energietechnik-Karte auf `produkte.html` | nutzt dieselbe bildbasierte Variante wie 3D-Druck und Datenrettung |

### Einbau Projektkacheln (`index.html`, Abschnitt `#projekte`)

Jede Karte hat aktuell z. B.:

```html
<img src="assets/images/pythonlab-logo.webp" alt="" aria-hidden="true" />
```

Die `src`-Pfade wurden auf die neuen Dateien umgestellt, z. B.
`assets/images/project-pythonlab.webp`. Die CSS-Plate (`.side-project-card img`, 78×78,
`object-fit: cover`, Radius 20px) bleibt bewusst kompakt und einheitlich.

### Einbau 3D-Druck-Hero (`3d-druck.html`)

Der Hero nutzt `assets/images/3d-druck-hero.webp` direkt nach dem öffnenden
`<section class="vhs-hero print-hero" ...>`:

```html
<img class="vhs-hero-image" src="assets/images/3d-druck-hero.webp" alt="" aria-hidden="true" />
```

Das Bild liegt hinter dem `.vhs-hero-overlay`; der `og:image`-Meta-Tag zeigt ebenfalls auf
`3d-druck-hero.webp`.

### Einbau Servicekarten (`produkte.html`)

Die früheren Platzhalter für 3D-Druck, Datenrettung und Energietechnik wurden durch
bildbasierte Varianten ersetzt. Für die Karten werden jeweils die Hero-Bilder wiederverwendet:

```html
<a class="featured-product-image" href="3d-druck.html" aria-label="Zum 3D-Druck-Angebot">
  <img src="assets/images/3d-druck-hero.webp" alt="3D-Drucker beim Drucken eines technischen Bauteils" />
</a>
```

---

## Abnahme-Checkliste

- [x] Alle fünf Projektbilder im selben Stil (Licht, Hintergrund, Blickwinkel) erzeugt.
- [x] Quadratisch 1:1, als WebP gespeichert, Dateigröße klein.
- [x] Kein Text/Logo im Bild.
- [x] `src`-Pfade in `index.html` und `projekte.html` umgestellt.
- [x] 3D-Druck-Hero und Datenrettungs-Hero eingebaut.
- [x] Energietechnik-Hero und Energietechnik-Servicekarte eingebaut.
- [x] Servicekarten auf `produkte.html` auf echte Bilder umgestellt.
- [x] Cache-Buster (`?v=20260624-services-images`) auf den geänderten Seiten hochgesetzt.
- [x] Änderungsprotokoll in `docs/CODEX_PROJECT_DOCUMENTATION.md` ergänzt.
- [x] Live-Prüfung mit `?v=<commit>` erfolgt nach Commit/Push.
