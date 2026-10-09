# Sawazki Electronics

Statische Website für IT-Service, Webdesign und technische Dienstleistungen in Freudenstadt.

[Website öffnen](https://jakobsawazki.github.io/sawazki-electronics/)

## Aufbau

- Startseite mit kurzem Einstieg, drei Leistungsgruppen, Arbeitsweise, Ablauf, Kontakt und einem Hinweis auf eigene IT-Projekte.
- Einheitliches Leistungsmenü mit Desktop-Hover und mobiler Gruppenauswahl; Dark Mode als Standard und gespeicherte Light-/Dark-Auswahl.
- Sechs Angebotsseiten mit gemeinsamem Aufbau: Leistungen, Ablauf, Preis & Aufwand, FAQ und Anfrage. Die freigegebene IT-Diagnosepauschale beträgt 50 € Endpreis; VHS hat eine eigene Staffel und einen Preis-Schätzer.
- Neun verlinkte Projekte in fünf aufklappbaren Gruppen. Grafik, Name und Kurzbeschreibung sind direkt sichtbar; weitere Informationen optional.
- Ein Anfrageformular in vier Schritten: Thema, Anliegen, Kontakt und Prüfung. Themenlinks wählen passende Felder vor.
- Lokale Bilder, Systemschriften und ruhige Navy-/Blau-Flächen. Kein Framework, kein Build-Prozess, keine Paketabhängigkeiten.
- Responsive Darstellung, Tastaturbedienung, sichtbarer Fokus, reduzierte Bewegung, strukturierte Daten und Sitemap.

## Seiten

| Bereich | Datei |
| --- | --- |
| Startseite | `index.html` |
| Leistungsübersicht | `produkte.html` |
| IT-Betreuung | `it-betreuung.html` |
| Datenrettung | `datenrettung.html` |
| Webdesign & Digitale Lösungen | `webdesign.html` |
| Domain, Hosting & Wartung | `website-betrieb.html` |
| Fiktives Gestaltungsbeispiel (noindex) | `webdesign-muster.html` |
| 3D-Druck | `3d-druck.html` |
| VHS-Digitalisierung | `vhs-digitalisierung.html` |
| Batteriespeicher & Inselnetz | `energietechnik.html` |
| Eigene IT-Projekte | `projekte.html` |
| Über mich | `ueber-mich.html` |
| Anfrage | `anfrage-assistent.html` |
| Versandbestätigung / Fehlerseite | `danke.html` / `404.html` |
| Rechtliches | `impressum.html`, `datenschutz.html`, `agb.html` |

## Lokal ansehen und veröffentlichen

```powershell
python -m http.server 4177
```

Danach `http://127.0.0.1:4177/` öffnen. Ein Push auf `main` veröffentlicht die Website über GitHub Pages. Vorher Links, Bilder, Desktop/Mobil, Dark/Light und `git diff --check` prüfen; bei JavaScript-Änderungen zusätzlich `node --check` ausführen.

Das Formular sendet über FormSubmit an `sawazki.electronics@googlemail.com` und leitet nach `danke.html` weiter. Beim Testen keine echten Anfragen absenden. Beim ersten tatsächlichen Versand kann eine Aktivierung durch FormSubmit erforderlich sein.

## Dokumentation

- [AGENTS.md](AGENTS.md): Einstieg, Regeln und Veröffentlichung.
- [docs/tasks.md](docs/tasks.md): einzige Aufgabenquelle und Abschlussnachweise.
- [docs/documentation.md](docs/documentation.md): aktueller Aufbau, Entscheidungen, Änderungsprotokoll und Bildaufträge.
- [docs/claude2codex.md](docs/claude2codex.md): abgestimmtes Leitbild, Umbaupakete und Rückmeldungen.

Rechtliche Inhalte bei Änderungen an Leistungen, externen Diensten oder Abläufen bewusst mitprüfen. Keine erfundenen Referenzen, Preise oder Leistungsversprechen ergänzen.
