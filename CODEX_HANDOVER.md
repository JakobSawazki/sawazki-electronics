# Codex-Übergabe: Sawazki Electronics Website

Stand: 2. Juli 2026 · Version: v1.11.0

Diese Datei ist der Einstiegspunkt für einen neuen Codex-Agenten. Vor Änderungen zuerst diese
Übergabe, anschließend bei Bedarf die ausführliche Projektdokumentation unter
[`docs/CODEX_PROJECT_DOCUMENTATION.md`](docs/CODEX_PROJECT_DOCUMENTATION.md) lesen.

> **Schnelleinstieg / sofort wissen, was zu tun ist:** Eine kompakte Sofort-Anleitung steht
> in [`AGENTS.md`](AGENTS.md) im Projektstamm. Vor neuen Änderungen immer zuerst
> `tasks.docx` prüfen.

## 1. Projektüberblick

- Projekt: Sawazki Electronics Website
- Zweck: professionelle Firmen-Homepage für IT-, PC-, Laptop- und Support-Dienstleistungen
- Repository: <https://github.com/JakobSawazki/sawazki-electronics>
- Live-Seite: <https://jakobsawazki.github.io/sawazki-electronics/>
- Lokaler Projektordner (Acer Nitro 5, via Google Drive Desktop synchronisiert): `D:\Google Drive\Gewerbe\Sawazki Electronics Website` — **einzige lokale Kopie.** Der frühere Doppelstand unter `…\Codex\sawazki-electronics` (Commit `335a5f1`, Vorfahr von `main`) wurde am 02.07.2026 geprüft und gelöscht; auf anderen Geräten entspricht der Ordner dem Google-Drive-Pfad dieses Gewerbe-Ordners (z. B. `G:\Meine Ablage\Gewerbe\Sawazki Electronics Website`).
- Standard-Branch: `main`
- Zuletzt geprüfter Funktionsstand: 404-Fehlerseite, vollständiges Service-Schema und CLS-/Performance-Politur vom 2. Juli 2026 (v1.11.0)
- Hosting: GitHub Pages direkt aus dem Repository

Die Website ist statisch. Es gibt keinen Build-Prozess, kein Framework und keine Paketabhängigkeiten.
HTML, CSS und JavaScript werden direkt veröffentlicht.

## 2. Verbindliche Aufgabenwarteschlange

Die priorisierte Aufgabenwarteschlange des Nutzers ist seit dem 24. Juni 2026 die
**Word-Datei `tasks.docx`** im Projektstamm, weil dort auch Screenshots zu einer Aufgabe
eingefügt werden können.

Vor jeder inhaltlichen oder technischen Arbeit zuerst `tasks.docx` lesen. Da `.docx` ein
ZIP-Archiv ist, kann der Text z. B. unter Windows PowerShell so extrahiert werden (auch
eingebettete Bilder liegen unter `word/media/`):

```powershell
Add-Type -AssemblyName System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead("tasks.docx")
$e = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$sr = New-Object System.IO.StreamReader($e.Open()); $xml = $sr.ReadToEnd(); $sr.Close()
[System.Text.RegularExpressions.Regex]::Replace(($xml -replace '</w:p>', "`n"), '<[^>]+>', '')
$zip.Dispose()
```

Regeln (wie zuvor, nur Quelle ist jetzt `tasks.docx`):

- Aufgaben sind durch Absätze/Leerzeilen getrennt; Bilder gehören zur jeweiligen Aufgabe.
- Immer zuerst die oberste Aufgabe von oben nach unten bearbeiten.
- Nur eine Warteschlangenaufgabe gleichzeitig beginnen.
- Die Aufgabe einschließlich Code, Dokumentation, Tests, Commit, Push und Live-Prüfung abschließen.
- Erst nach erfolgreicher Live-Prüfung die erledigte Aufgabe (samt zugehöriger Bilder) aus
  `tasks.docx` entfernen.
- Vor dem Entfernen `tasks.docx` erneut lesen, damit zwischenzeitlich ergänzte Aufgaben erhalten bleiben.
- Wenn die Aufgabe blockiert oder nicht vollständig abgeschlossen ist, bleibt sie unverändert stehen.
- Eine leere `tasks.docx` bleibt als Warteschlangendatei im Repository erhalten.

> Einträge aus `tasks.docx` (Stand 24. Juni 2026): keine bekannte offene Aufgabe nach Abschluss
> der v1.7.0-Arbeiten.

## 3. Wichtige Dateien

- `index.html`: Startseite, Leistungen, Arbeitsablauf, Kontaktformular und Projektbereich
- `projekte.html`: zentrale Vorstellung von PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio
- `produkte.html`: sichtbarer Bereich „Services & Angebote" mit Dienstleistungen und späteren physischen Produkten
- `vhs-digitalisierung.html`: Angebotsseite für die Digitalisierung alter Videokassetten
- `3d-druck.html`: Angebotsseite für 3D-Druck nach Kundenwunsch (Service-Layoutklassen wiederverwendet)
- `datenrettung.html`: Angebotsseite für professionelle Datenrettung (Service-Layoutklassen wiederverwendet)
- `energietechnik.html`: Angebotsseite für Batteriespeicher & Inselnetzlösungen (Service-Layoutklassen wiederverwendet)
- `ueber-mich.html`: persönliche Profil-/Vertrauensseite (Industrie-Elektronik, Energietechnik, Lehre)
- `anfrage-assistent.html`: geführtes Anfrageformular
- `danke.html`: Zielseite nach erfolgreicher Formularübermittlung
- `404.html`: gebrandete Fehlerseite für GitHub Pages (absolute URLs mit Absicht, noindex, nicht in der Sitemap)
- `impressum.html`: Impressum
- `datenschutz.html`: Datenschutzerklärung
- `agb.html`: Allgemeine Geschäftsbedingungen
- `assets/css/styles.css`: gesamtes Layout, Responsive Design und Interaktionen
- `assets/js/main.js`: Scroll-Header, mobile Navigation, Reveal-Effekte und Formularbetreff
- `assets/js/theme.js`: standardmäßiger Dark Mode und lokal gespeicherte Theme-Auswahl
- `assets/images/`: Logos und lokale Website-Bilder
- `sitemap.xml`, `robots.txt`, `.nojekyll`: GitHub-Pages- und Suchmaschinenkonfiguration
- `AGENTS.md`: kompakte Sofort-Anleitung für KI-Agenten (Schnelleinstieg)
- `README.md`: öffentlicher Projektüberblick
- `docs/CODEX_PROJECT_DOCUMENTATION.md`: ausführliche Projekthistorie, Versionsstand und technische Dokumentation
- `docs/BILDAUFTRAG_PROJEKTBILDER.md`: erledigter Bildauftrag mit finalen Prompts und Asset-Liste
- `tasks.docx`: priorisierte Aufgabenwarteschlange (Word, erlaubt Screenshots) — **primäre Quelle**

## 4. Aktuell eingebundene Projekte

Der Projektbereich befindet sich am Ende der Startseite unter `#projekte`.

| Projekt | Live-Link | Lokales Bild |
| --- | --- | --- |
| PythonLab | <https://jakobsawazki.github.io/PythonLab/> | `assets/images/project-pythonlab.webp` |
| WorkbenchLab | <https://jakobsawazki.github.io/WorkbenchLab/> | `assets/images/project-workbenchlab.webp` |
| BM-Lab | <https://jakobsawazki.github.io/bm-lernportal/> | `assets/images/project-bmlab.webp` |
| Games Lab | <https://jakobsawazki.github.io/games-lab/> | `assets/images/project-gameslab.webp` |
| EC-Lernstudio | <https://jakobsawazki.github.io/ec-lernstudio-lf7/> | `assets/images/project-eclernstudio.webp` |

Neue Projekte sollen als weitere `.side-project-card` innerhalb von `.side-project-grid` ergänzt
und zusätzlich auf `projekte.html` ausführlich vorgestellt werden. Im Footer steht nur der zentrale
Link `Projekte`; einzelne Lab-Links werden dort nicht dupliziert. Die Kennzeichnung auf der Startseite
lautet einheitlich `Designed by Sawazki Electronics`.

## 5. Formulare und Kontakt

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

## 6. Designregeln

- Wirkung: professionell, ruhig, technisch und kundenorientiert
- Farbwelt: Navy, Logo-Blau, Cyan sowie helle blau-graue Flächen
- Helle Hauptbereiche verwenden ein dezentes Leiterbahn-/Knotenpunktmuster
- Bestehende Gestaltung und CSS-Konventionen weiterverwenden
- Keine externen Schriftarten oder Bild-CDNs ohne guten Grund
- Bilder möglichst lokal unter `assets/images/` speichern
- Firmen-Seite nicht wie eine Spieleseite gestalten; Hover-Effekte bleiben dezent
- CTA `Anfrage starten` soll seinen Blau-Cyan-Verlauf auch im Scroll-Header behalten
- Das Firmenlogo oben links führt zur Startseite und hat einen professionellen Hover-Zustand
- Das große Hero-Logo führt zu `#leistungen` und besitzt Lichtlauf, Tiefeneffekt und Fokuszustand
- Desktop, Tablet und Smartphone berücksichtigen
- Der Hauptmenüpunkt `Projekte` springt direkt zum Projektbereich `#projekte` der Startseite
- Der Theme-Schalter steht rechts neben `Impressum` und bleibt auf allen Seiten verfügbar
- Header und Navigationsblock bleiben durch ihre dunklen Glasflächen auch über Bildern gut lesbar
- Keine sichtbaren internen technischen Erklärungen auf Kundenseiten

## 7. Technische Besonderheiten

- Alle Dateien sollen UTF-8 verwenden. PowerShell kann Umlaute bei `Get-Content` abhängig von der
  Terminalkodierung fehlerhaft darstellen; deshalb nicht allein aufgrund einer solchen Anzeige
  Texte automatisch neu kodieren.
- `assets/js/main.js` setzt die Klasse `is-scrolled` am Header und steuert die mobile Navigation.
- `assets/js/theme.js` setzt `data-theme` auf dem Wurzelelement. Die Auswahl wird unter
  `sawazki-electronics-theme` im lokalen Browserspeicher abgelegt; ohne Auswahl gilt Dark Mode.
- Reveal-Animationen verwenden `.reveal` und `.is-visible`. Formulare oder sofort benötigte Inhalte
  nicht unnötig mit Reveal verstecken.
- Bilder in der ersten sichtbaren Ansicht nicht lazy laden. Weiter unten liegende große Bilder
  dürfen `loading="lazy"` verwenden.
- GitHub Pages kann nach einem Push kurz verzögert aktualisieren. Zur Kontrolle einen Cache-Buster
  verwenden, zum Beispiel `?v=<commit>`.
- `assets/js/main.js` übernimmt den Query-Parameter `topic`, wenn ein passender Wert im
  Anfrageformular existiert. Die VHS-Seite nutzt `topic=VHS-Digitalisierung`.

## 8. Lokal starten

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

## 9. Prüfungen vor einem Push

1. `git status --short` prüfen und fremde Änderungen nicht verwerfen.
2. Interne Links sowie referenzierte Bilder kontrollieren.
3. JavaScript-Syntax prüfen:

   ```powershell
   node --check assets/js/main.js
   node --check assets/js/theme.js
   ```

4. Startseite und betroffene Unterseiten lokal im Browser ansehen.
5. Desktop- und mobile Darstellung grob prüfen.
6. Navigation, Projektkarten, Formularfelder und Danke-Link kontrollieren.
7. `git diff --check` ausführen.
8. Nur zusammengehörige Dateien committen und anschließend auf `main` pushen.
9. Live-Seite mit Cache-Buster prüfen.

## 10. Veröffentlichung

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

## 11. Aktueller Entwicklungsstand

- Firmen-Startseite und rechtliche Seiten sind veröffentlicht.
- Startseite ist lokal auf IT-Service sowie PC- und Laptop-Reparatur in Freudenstadt ausgerichtet.
- Canonical-URLs, OpenGraph-Daten und strukturierte LocalBusiness-Daten sind integriert.
- Das sichtbare Design baut auf dem vertrauten Seitenaufbau auf und nutzt die Logo-Blauwelt als
  durchgängiges Designsystem.
- SEO-Optimierungen bleiben auf Metadaten, strukturierte Daten und Sitemap beschränkt.
- Hero-Logo füllt seine abgerundete weiße Fläche ohne inneren Rahmen aus.
- Das Header-Logo ist größer, ohne mit der Navigation zu kollidieren.
- Helle Seitenbereiche tragen ein dezentes technisches Leiterbahn-/Knotenpunktmuster.
- Praxisüberschriften erscheinen als Blau-Cyan-Badges über den Fotokarten.
- Der Ablauf verwendet größere Nummern, kontrastreiche Titel und Pfeile auf dem Desktop.
- Ablauf- und Kontaktüberschrift bleiben ab Tabletbreite einzeilig.
- Hero-Servicebilder sind größer und überdecken das Faktenband nicht.
- Projektkarten verwenden einheitlich `Designed by Sawazki Electronics`.
- Die Projektübersicht enthält PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio.
- `projekte.html` erklärt für jedes Lab Zweck, Zielgruppe und Ziel; der Footer verweist zentral
  auf diese Seite.
- Der Hauptmenüpunkt `Services` führt zum erweiterbaren Service- und Angebotsbereich unter `produkte.html`.
- Der Hauptmenüpunkt `Projekte` führt auf allen Seiten direkt zum Projektbereich der Startseite.
- Ein kompakter, barrierearm beschrifteter Theme-Schalter bietet einen persistenten Light- und
  Dark-Mode. Dark Mode ist die Standardansicht.
- `vhs-digitalisierung.html` beschreibt Formate, Ablauf, Preisstaffeln, FAQ und Anfrageweg.
- Das lokale Bild `assets/images/vhs-digitalisierung-hero.webp` wurde speziell für die
  Digitalisierungsleistung erstellt.
- Kontaktformular und Anfrage-Assistent sind integriert.
- Das Reparaturfoto wurde durch eine realistischere lokale Grafik ersetzt.
- Der Projektbereich unterstützt mehrere Karten.
- PythonLab, WorkbenchLab, BM-Lab, Games Lab und EC-Lernstudio sind verlinkt.
- PythonLab verweist auf die neue GitHub-Pages-Adresse `/PythonLab/`.
- README und ausführliche Codex-Dokumentation sind vorhanden.

## 12. Prioritäten für zukünftige Änderungen

1. Vor allem anderen `tasks.docx` prüfen und die oberste Aufgabe abarbeiten.
2. Bestehende Funktionen und Links erhalten.
3. Kundenverständlichkeit vor internen technischen Erklärungen priorisieren.
4. Neue Projekte konsistent im Projektbereich aufnehmen, aber nicht zusätzlich im Footer duplizieren.
5. Rechtliche Auswirkungen neuer Dienste oder Datenübertragungen mitdenken.
6. Änderungen lokal und anschließend live prüfen.

Zusätzliche SEO- und Marketinghinweise stehen unter `docs/SEO_MARKETING_GUIDE.md`.

Wenn Angaben in dieser Datei und im aktuellen Code voneinander abweichen, gilt der aktuelle Code als
technische Wahrheit. Die Übergabe anschließend aktualisieren.
