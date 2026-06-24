# Bildauftrag: Einheitliche Projekt- und Servicebilder

Stand: 24. Juni 2026 · Status: **offen (für Codex / Bildgenerator)**

## Worum es geht

Die Projektkacheln auf der Startseite (`index.html`, Abschnitt `#projekte`) und die
3D-Druck-Seite (`3d-druck.html`) sollen **echte, fotorealistische Bilder in einem
einheitlichen Stil** erhalten. Aktuell werden gemischte Logos (SVG-Icons und
PNG/WebP-Grafiken) verwendet; das Framing wurde bereits vereinheitlicht (gleiche Größe,
Radius, Rahmen), aber die Bildinhalte selbst sind noch uneinheitlich.

**Warum noch nicht erledigt:** Diese Bilder können nur mit einem Bildgenerator erzeugt
werden (z. B. DALL·E / GPT-Image, Google Imagen, Midjourney, Flux). Die Arbeitsumgebung,
in der dieser Auftrag dokumentiert wurde, hatte keinen Bildgenerator. Codex (oder ein
Agent mit Bildgenerierung) soll die Bilder nach den unten stehenden Prompts erzeugen,
als WebP speichern und gemäß „Einbau" verlinken.

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
- Seitenverhältnis 3D-Druck-Hero: **16:9**, Auflösung **2400×1350** (oder größer).
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
| `3d-druck-card.webp` (optional) | 3D-Karte auf `produkte.html` | Platzhalter ersetzen |
| `datenrettung-hero.webp` | Datenrettung-Hero | wie 3D-Hero, in `datenrettung.html` (Klasse `.recovery-hero`) |
| `datenrettung-card.webp` (optional) | Datenrettung-Karte auf `produkte.html` | Platzhalter ersetzen |

### Einbau Projektkacheln (`index.html`, Abschnitt `#projekte`)

Jede Karte hat aktuell z. B.:

```html
<img src="assets/images/pythonlab-logo.webp" alt="" aria-hidden="true" />
```

Nur das `src` auf die neue Datei umstellen, z. B. `assets/images/project-pythonlab.webp`.
Die CSS-Plate (`.side-project-card img`, 72×72, `object-fit: cover`, Radius 18px) bleibt
unverändert – die neuen quadratischen Fotos passen direkt hinein.

### Einbau 3D-Druck-Hero (`3d-druck.html`)

Der Hero nutzt aktuell den gebrandeten Verlauf `.print-hero` (kein Foto). Sobald
`3d-druck-hero.webp` existiert, im Hero direkt nach dem öffnenden
`<section class="vhs-hero print-hero" ...>` ergänzen:

```html
<img class="vhs-hero-image" src="assets/images/3d-druck-hero.webp" alt="" aria-hidden="true" />
```

Das Bild legt sich automatisch hinter das `.vhs-hero-overlay` (wie auf der VHS-Seite).
Optional danach den `og:image`-Meta-Tag von `sawazki-electronics-logo.png` auf
`3d-druck-hero.webp` umstellen.

### Einbau 3D-Karte (`produkte.html`)

Den Platzhalter

```html
<a class="featured-product-image is-placeholder" href="3d-druck.html" ...>
  <span class="featured-placeholder-label">3D-Druck<small>nach Kundenwunsch</small></span>
</a>
```

durch die bildbasierte Variante (wie bei der VHS-Karte) ersetzen:

```html
<a class="featured-product-image" href="3d-druck.html" aria-label="Zum 3D-Druck-Angebot">
  <img src="assets/images/3d-druck-card.webp" alt="3D-Drucker beim Druck eines Objekts" />
</a>
```

---

## Abnahme-Checkliste

- [ ] Alle fünf Projektbilder im selben Stil (Licht, Hintergrund, Blickwinkel) erzeugt.
- [ ] Quadratisch 1:1, als WebP gespeichert, Dateigröße klein.
- [ ] Kein Text/Logo im Bild.
- [ ] `src`-Pfade in `index.html` umgestellt; Startseite Desktop + Mobile geprüft.
- [ ] 3D-Druck-Hero + ggf. Produkte-Karte eingebaut.
- [ ] Cache-Buster (`?v=`) auf den geänderten Seiten hochgesetzt.
- [ ] Änderungsprotokoll in `docs/CODEX_PROJECT_DOCUMENTATION.md` ergänzt.
- [ ] Live-Prüfung mit `?v=<commit>`.
