# Codex-Übergabe: Sawazki Electronics Website

Stand: 10. Juni 2026

Diese Datei ist der Einstiegspunkt für einen neuen Codex-Agenten. Vor Änderungen zuerst diese
Übergabe, anschließend bei Bedarf die ausführliche Projektdokumentation unter
[`docs/CODEX_PROJECT_DOCUMENTATION.md`](docs/CODEX_PROJECT_DOCUMENTATION.md) lesen.

## 1. Projektüberblick

- Projekt: Sawazki Electronics Website
- Zweck: professionelle Firmen-Homepage für IT-, PC-, Laptop- und Support-Dienstleistungen
- Repository: <https://github.com/JakobSawazki/sawazki-electronics>
- Live-Seite: <https://jakobsawazki.github.io/sawazki-electronics/>
- Lokaler Projektordner: `G:\Meine Ablage\Gewerbe\Sawazki Electronics Website`
- Standard-Branch: `main`
- Zuletzt geprüfter Funktionsstand vor dieser Übergabe: Commit `90e42e9`
- Hosting: GitHub Pages direkt aus dem Repository

Die Website ist statisch. Es gibt keinen Build-Prozess, kein Framework und keine Paketabhängigkeiten.
HTML, CSS und JavaScript werden direkt veröffentlicht.

## 2. Wichtige Dateien

- `index.html`: Startseite, Leistungen, Arbeitsablauf, Kontaktformular und Projektbereich
- `anfrage-assistent.html`: geführtes Anfrageformular
- `danke.html`: Zielseite nach erfolgreicher Formularübermittlung
- `impressum.html`: Impressum
- `datenschutz.html`: Datenschutzerklärung
- `agb.html`: Allgemeine Geschäftsbedingungen
- `assets/css/styles.css`: gesamtes Layout, Responsive Design und Interaktionen
- `assets/js/main.js`: Scroll-Header, mobile Navigation, Reveal-Effekte und Formularbetreff
- `assets/images/`: Logos und lokale Website-Bilder
- `sitemap.xml`, `robots.txt`, `.nojekyll`: GitHub-Pages- und Suchmaschinenkonfiguration
- `README.md`: öffentlicher Projektüberblick
- `docs/CODEX_PROJECT_DOCUMENTATION.md`: ausführliche Projekthistorie und technische Dokumentation

## 3. Aktuell eingebundene Projekte

Der Projektbereich befindet sich am Ende der Startseite unter `#projekte`.

| Projekt | Live-Link | Lokales Logo |
| --- | --- | --- |
| Games Lab | <https://jakobsawazki.github.io/games-lab/> | `assets/images/games-lab-logo.png` |
| PythonWerkstatt BG | <https://jakobsawazki.github.io/Python-Lernportal-BG/> | `assets/images/pythonwerkstatt-logo.webp` |
| BM Lernportal | <https://jakobsawazki.github.io/bm-lernportal/> | `assets/images/bm-lernportal-logo.svg` |

Neue Projekte sollen als weitere `.side-project-card` innerhalb von `.side-project-grid` ergänzt
werden. Den passenden Footer-Link ebenfalls ergänzen. Vorhandene Karten und Links nicht umbenennen
oder entfernen, sofern dies nicht ausdrücklich verlangt wurde.

## 4. Formulare und Kontakt

Öffentliche Kontaktdaten:

- E-Mail: `sawazki.electronics@googlemail.com`
- Telefon: `+49 1520 2967632`
- Anbieter: Sawazki Electronics, Jakob Sawazki, Mörikestraße 15, 72250 Freudenstadt

Das normale Kontaktformular und der Anfrage-Assistent verwenden FormSubmit:

```text
https://formsubmit.co/sawazki.electronics@googlemail.com
```

Die Weiterleitung nach dem Absenden erfolgt zu:

```text
https://jakobsawazki.github.io/sawazki-electronics/danke.html
```

Formulare bei Tests nicht unnötig echt absenden. Änderungen an Formularanbieter, Tracking,
Cookies, Datenübertragung oder eingebetteten externen Diensten erfordern auch eine Prüfung der
Datenschutzerklärung.

## 5. Designregeln

- Wirkung: professionell, ruhig, technisch und kundenorientiert
- Farbwelt: Anthrazit, Teal, helle Grau-/Grüntöne und sparsame warme Akzente
- Bestehende Gestaltung und CSS-Konventionen weiterverwenden
- Keine externen Schriftarten oder Bild-CDNs ohne guten Grund
- Bilder möglichst lokal unter `assets/images/` speichern
- Firmen-Seite nicht wie eine Spieleseite gestalten; Hover-Effekte bleiben dezent
- CTA `Anfrage starten` soll seine kräftige Teal-Farbe auch im Scroll-Header behalten
- Das Firmenlogo oben links führt zur Startseite und hat einen professionellen Hover-Zustand
- Desktop, Tablet und Smartphone berücksichtigen
- Keine sichtbaren internen technischen Erklärungen auf Kundenseiten

## 6. Technische Besonderheiten

- Alle Dateien sollen UTF-8 verwenden. PowerShell kann Umlaute bei `Get-Content` abhängig von der
  Terminalkodierung fehlerhaft darstellen; deshalb nicht allein aufgrund einer solchen Anzeige
  Texte automatisch neu kodieren.
- `assets/js/main.js` setzt die Klasse `is-scrolled` am Header und steuert die mobile Navigation.
- Reveal-Animationen verwenden `.reveal` und `.is-visible`. Formulare oder sofort benötigte Inhalte
  nicht unnötig mit Reveal verstecken.
- Bilder in der ersten sichtbaren Ansicht nicht lazy laden. Weiter unten liegende große Bilder
  dürfen `loading="lazy"` verwenden.
- GitHub Pages kann nach einem Push kurz verzögert aktualisieren. Zur Kontrolle einen Cache-Buster
  verwenden, zum Beispiel `?v=<commit>`.

## 7. Lokal starten

Im Projektordner:

```powershell
python -m http.server 4177
```

Danach öffnen:

```text
http://127.0.0.1:4177/
```

Falls `python` nicht verfügbar ist:

```powershell
py -m http.server 4177
```

## 8. Prüfungen vor einem Push

1. `git status --short` prüfen und fremde Änderungen nicht verwerfen.
2. Interne Links sowie referenzierte Bilder kontrollieren.
3. JavaScript-Syntax prüfen:

   ```powershell
   node --check assets/js/main.js
   ```

4. Startseite und betroffene Unterseiten lokal im Browser ansehen.
5. Desktop- und mobile Darstellung grob prüfen.
6. Navigation, Projektkarten, Formularfelder und Danke-Link kontrollieren.
7. `git diff --check` ausführen.
8. Nur zusammengehörige Dateien committen und anschließend auf `main` pushen.
9. Live-Seite mit Cache-Buster prüfen.

## 9. Veröffentlichung

```powershell
git add <dateien>
git commit -m "Kurze Beschreibung"
git push origin main
```

Live-Prüfung:

```text
https://jakobsawazki.github.io/sawazki-electronics/?v=<commit-kuerzel>
```

Für neue öffentliche HTML-Seiten außerdem `sitemap.xml`, Navigation, Footer und README prüfen.

## 10. Aktueller Entwicklungsstand

- Firmen-Startseite und rechtliche Seiten sind veröffentlicht.
- Startseite ist lokal auf IT-Service sowie PC- und Laptop-Reparatur in Freudenstadt ausgerichtet.
- Canonical-URLs, OpenGraph-Daten und strukturierte LocalBusiness-Daten sind integriert.
- Das sichtbare Design und die Logoassets entsprechen wieder dem Stand vor der SEO-Überarbeitung.
- SEO-Optimierungen bleiben auf Metadaten, strukturierte Daten und Sitemap beschränkt.
- Kontaktformular und Anfrage-Assistent sind integriert.
- Das Reparaturfoto wurde durch eine realistischere lokale Grafik ersetzt.
- Der Projektbereich unterstützt mehrere Karten.
- Games Lab, PythonWerkstatt BG und BM Lernportal sind verlinkt.
- README und ausführliche Codex-Dokumentation sind vorhanden.

## 11. Prioritäten für zukünftige Änderungen

1. Bestehende Funktionen und Links erhalten.
2. Kundenverständlichkeit vor internen technischen Erklärungen priorisieren.
3. Neue Projekte konsistent in Projektbereich und Footer aufnehmen.
4. Rechtliche Auswirkungen neuer Dienste oder Datenübertragungen mitdenken.
5. Änderungen lokal und anschließend live prüfen.

Zusätzliche SEO- und Marketinghinweise stehen unter `docs/SEO_MARKETING_GUIDE.md`.

Wenn Angaben in dieser Datei und im aktuellen Code voneinander abweichen, gilt der aktuelle Code als
technische Wahrheit. Die Übergabe anschließend aktualisieren.
