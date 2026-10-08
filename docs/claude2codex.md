# Übergabe Claude → Codex: Website vereinfachen und aufwerten

Stand: 08.10.2026 (mit Jakobs Entscheidungen, Abschnitt 8) · Ausgangsversion: v1.22.0 (+ Webdesign-Bild von Codex, `bfa5e6e`)
Verfasser: Claude, abgestimmt mit Jakob · Empfänger: Codex

Jakob, Codex und Claude arbeiten als ein Team an diesem Projekt. Diese Datei beschreibt, was
Jakob und ich gemeinsam als nächsten großen Schritt festgelegt haben, und was mir beim
Durcharbeiten der Seite aufgefallen ist. Sie ist als Arbeitsgrundlage gedacht, nicht als
fertige Spezifikation: Wenn du etwas anders siehst oder eine bessere Lösung hast, schreib es
in den Abschnitt „Rückmeldungen" am Ende, statt es stillschweigend anders zu machen.

Regeln, Arbeitsablauf und Prüfungen stehen unverändert in [`../AGENTS.md`](../AGENTS.md).
Aufgabenstatus gehört weiter nach [`tasks.md`](tasks.md), das Änderungsprotokoll nach
[`documentation.md`](documentation.md). Bitte nimm diese Datei bei Gelegenheit in die
Doku-Landkarte in `AGENTS.md` auf.

## 1. Befund in einem Satz

Die Seite ist gut gebaut, aber **gewachsen statt geplant**: Dieselben Angebote erscheinen an
mehreren Stellen in unterschiedlicher Form, drei Zielgruppen teilen sich eine Startseite, und
der Besucher muss selbst herausfinden, was zusammengehört.

## 2. Leitbild (von Jakob vorgegeben)

**Keep it simple – mit hochwertigem, professionellem Auftritt.**

- Besucher sollen sich in Sekunden zurechtfinden und Lust bekommen, ein Angebot auszuwählen.
- Niemand wird überflutet: wenig Text, klare Gruppen, eine Hauptaktion pro Bildschirm.
- Hochwertig heißt hier: Ruhe, Weißraum, saubere Typografie, wenige starke Bilder. Nicht:
  mehr Effekte, mehr Karten, mehr Verläufe.
- Im Zweifel wird gekürzt, nicht ergänzt. Jede neue Idee muss etwas Vorhandenes ersetzen.
- **Hochwertige Grafiken, Logos und Bilder sind Jakob ausdrücklich wichtig** – sie stehen für
  Professionalität und Qualität. „Einfach" heißt deshalb nicht „karg": Bildsprache und
  Projektgrafiken bleiben, reduziert werden Wiederholungen und Effekte.
- Das dunkle, bläuliche Erscheinungsbild bleibt (Farben aus dem Logo: edel, frisch). Es soll
  aber weniger „nach KI generiert" aussehen – siehe Befund 32.

Daraus folgt eine Prüffrage für jeden Abschnitt: *Würde ein Kunde ihn vermissen, wenn er
fehlt?* Wenn nein, kommt er weg oder auf eine Unterseite.

## 3. Bereits entschieden

**Drei Gruppen** ordnen künftig alle Angebote – im Menü, auf der Startseite und auf der
Übersichtsseite gleich:

| Gruppe | Enthält | Kunde denkt |
| --- | --- | --- |
| **IT-Service** | IT-Betreuung (Installation, Wartung, Optimierung, Fehlerbehebung, Einrichtung des Arbeitsplatzes), Netzwerk & WLAN, Datensicherung, Datenrettung | „Mein Gerät macht Probleme" |
| **Für Unternehmen** | Webdesign & Digitale Lösungen, IT-Betreuung für Betriebe (verweist auf dieselbe Seite wie oben) | „Mein Betrieb braucht Unterstützung" |
| **Werkstatt & Spezial** | 3D-Druck, VHS-Digitalisierung, Batteriespeicher & Inselnetz | „Ich habe ein besonderes Vorhaben" |

Die Gruppennamen sind ein Vorschlag von mir, den Jakob gut findet; bessere Formulierungen
sind willkommen, solange es bei drei Gruppen bleibt.

**IT-Betreuung wird ein eigenes Angebot** (Entscheidung Jakob). Bisher hat ausgerechnet
das Kerngeschäft keine eigene Seite, nur sechs Karten auf der Startseite. Neu: eine
Angebotsseite `it-betreuung.html` für Privatkunden *und* Betriebe. Jakobs Erfahrung stammt
bisher aus der Arbeit mit Privatkunden – also keine Formulierungen, die Firmenreferenzen
andeuten.

**Ein Begriff:** „Leistungen" für alles, was man beauftragen kann. „Services", „Angebote" und
„Produkte" verschwinden als konkurrierende Begriffe aus Menü und Überschriften.

## 4. Was mir im Einzelnen aufgefallen ist

### A. Struktur und Menü

1. Das Menü zeigt „Services" (→ `produkte.html`) und „Leistungen" (→ Abschnitt der
   Startseite) nebeneinander. Niemand kann den Unterschied erkennen.
2. Kein Menüpunkt führt direkt zu einer Angebotsseite. Die fünf Seiten erreicht man nur über
   die Übersicht, den Service-Finder oder die Button-Leiste.
3. Das Menü ist auf jeder Seite anders: Die Angebotsseiten ersetzen Punkte durch eigene
   Sprungmarken (Optionen, Modelle, FAQ), `ueber-mich.html` hat eine eigene Reihenfolge.
4. „Impressum" belegt einen Platz im Hauptmenü. Der Footer genügt dafür; „Über mich" fehlt
   dafür im Menü, obwohl es das wichtigste Vertrauenselement ist.
5. Der Footer hat je nach Seite leicht unterschiedliche Links.
6. `produkte.html` trägt einen Dateinamen, der nicht zum Inhalt passt. Umbenennen ist
   möglich, kostet aber Weiterleitung und Sitemap-Pflege – bitte abwägen (siehe Paket 2).

### B. Startseite

7. **Der Hero ist überladen:** Logo-Karte, Eyebrow, Überschrift, Absatz, zwei Buttons, drei
   Bildkarten, drei Fakten, danach ein Laufband. (Daran arbeitest du bereits.)
8. **Angebote dreifach:** sechs Leistungskarten, direkt darunter eine Leiste mit sechs
   Buttons, direkt darunter der Service-Finder mit sechs Karten. Das ist die Stelle, an der
   die Seite am deutlichsten „viel und versteckt" wirkt.
9. **Elf Abschnitte.** „Diagnose", „Service in der Praxis" und das Detailband
   („Saubere Technik, verständlich erklärt") sagen im Kern dasselbe wie das „Warum"-Band.
10. **Dasselbe Foto mehrfach:** `customer-consulting.jpg` ist Hero-Hintergrund, Hero-Karte,
    Diagnosebild und Galeriebild. Das fällt auf und wirkt nach wenig Material.
11. **Neun Lernplattformen** stehen auf der Startseite eines Dienstleisters. Für Kunden ist
    das Ablenkung; als Kompetenznachweis reicht ein kurzer Hinweis mit Link.
12. **Titel, Hero und Zusatz „IT-Service & Support"** unter dem Logo nennen nur IT, obwohl
    es inzwischen drei Bereiche gibt.
13. Das Laufband wiederholt Schlagworte, die direkt darunter als Karten stehen.

### C. Übersichtsseite (`produkte.html`)

14. Der Einstieg spricht über die Website statt über den Kunden („Der Servicebereich wächst
    Schritt für Schritt", „später auch ausgewählte Produkte").
15. Die drei Kästen „Dienstleistungen / Individuelle Angebote / Ausgewählte Produkte"
    beschreiben eine Struktur, die es so nicht gibt.
16. Der Abschnitt „Weitere Angebote folgen" ist eine interne Ankündigung.
17. Alle fünf Karten tragen „Neu". Wenn alles neu ist, wirkt nichts neu.
18. Fünf bildschirmhohe Karten untereinander bedeuten viel Scrollen für wenig Überblick.

### D. Angebotsseiten

19. Jede Seite hat acht bis zehn Abschnitte; „Einstieg" und „Leistungen" überschneiden sich
    meist. (`webdesign.html` von mir ist mit zehn Abschnitten selbst ein Kandidat zum Kürzen.)
20. Die Heros haben 790 px Mindesthöhe. Auf einem Laptop sieht man beim Laden keinen Inhalt.
21. Preise sind uneinheitlich: VHS mit Staffel und Rechner, alles andere „nach Aufwand".
    Das ist inhaltlich begründet, sollte aber gleich *aussehen* (ein einheitlicher Block
    „So setzt sich der Preis zusammen").
22. Die Klassennamen (`vhs-…`, `print-…`) stammen von der ersten Angebotsseite und werden
    überall weiterverwendet. Das funktioniert, erschwert aber die Pflege. Umbenennen nur,
    wenn ohnehin umgebaut wird.

### E. Kontakt

23. Es gibt zwei Formulare mit unterschiedlichen Themenlisten (Startseite: 7 Themen,
    Anfrage-Assistent: 11). Eines genügt.
24. Der Assistent zeigt alles auf einmal. Als geführte Abfolge (erst Thema wählen, dann nur
    die passenden Fragen) wäre er seinem Namen näher. Die Technik dafür ist seit v1.22.0 da:
    `data-topic-show` / `data-topic-hide` in `main.js`.
25. Kontaktwege konkurrieren: Telefon, E-Mail, WhatsApp-Button, zwei Formulare, mehrere
    CTAs pro Abschnitt. Eine Hauptaktion pro Seite, der Rest zurückhaltend.

### F. Vertrauen, Wirkung, Technik

26. Porträt, echte Arbeitsfotos und Kundenstimmen fehlen (stehen in `tasks.md`, warten auf
    Material von Jakob). Bis dahin lieber weniger, dafür stimmige Bilder.
27. Die gesamte Website duzt. **Entschieden: einheitlich Sie** (Abschnitt 8).
28. Der dunkle Modus ist Standard. **Entschieden: bleibt so.** Der helle Modus muss trotzdem
    gleichwertig gepflegt bleiben, weil ihn ein Teil der Kunden wählen wird.
29. Die Adresse `github.io` passt nicht ideal zu einem Anbieter von Unternehmenswebsites.
    **Entschieden: vorerst kein Thema** (Abschnitt 8).
30. Viele Überschriften sind Slogans („Technik, die einen echten Wert bewahrt."). Für die
    Orientierung sind sachliche Überschriften besser („Unsere Leistungen").
31. `styles.css` hat rund 3 600 Zeilen mit mehreren Schichten nachträglicher Dark-Mode- und
    Responsive-Regeln. Nach dem Umbau lohnt ein Aufräumen ungenutzter Regeln.

32. **„KI-Optik".** Jakob empfindet die Seite stellenweise als typisch KI-generiert. Aus
    meiner Sicht liegt das weniger an Dunkel/Hell als an der Häufung gleicher Stilmittel:
    Überschriften mit Farbverlauf, leuchtende Radialverläufe in fast jedem Abschnitt,
    Raster-/Leiterbahnmuster, viele runde Schlagwort-Badges, nummerierte Karten „01/02/03"
    in jedem Block und durchweg generierte Fotos im selben Look. Vorschlag: pro Seite höchstens
    ein Akzent-Element, Überschriften einfarbig, Flächen ruhiger, und sobald vorhanden echte
    Fotos (Porträt, Werkbank) statt generierter Motive.

## 5. Zielbild

**Menü (auf allen Seiten identisch):**

`Leistungen ▾` · `Über mich` · `Projekte` · `Kontakt` · Theme-Schalter · **Anfrage starten**

Unter dem Logo steht künftig **„IT · Web · Technik"** statt „IT-Service & Support"
(Entscheidung Jakob). Der Menüpunkt „Projekte" führt direkt auf `projekte.html`, nicht mehr
auf den Abschnitt der Startseite.

„Leistungen" klappt auf und zeigt die drei Gruppen mit ihren Einträgen. Mobil: dieselben
Gruppen als aufklappbare Liste. Bedienbar per Tastatur, ohne JavaScript bleibt „Leistungen"
ein normaler Link zur Übersicht.

**Startseite (Ziel: fünf bis sechs Abschnitte statt elf):**

1. Hero: eine Überschrift, ein Satz, ein Hauptbutton, ein Bild.
2. Drei Gruppenkarten (ersetzen Leistungskarten, Button-Leiste und Service-Finder).
3. Warum Sawazki Electronics (drei Punkte, mit Link „Über mich").
4. Ablauf in vier Schritten.
5. Kontakt (ein Weg zum Anfrage-Assistenten, Telefon und WhatsApp daneben).
6. Schmaler Hinweis „Eigene IT-Projekte" mit Link zu `projekte.html` statt der neun Kacheln
   (Entscheidung Jakob).

**Projektseite (`projekte.html`):** Überschrift „Eigene IT-Projekte" (Alternative von Jakob:
„IT-Projekte – by Sawazki Electronics"; Codex darf die stimmigere Variante vorschlagen). Die
fünf Gruppen, die Projektgrafiken und die Auf-/Zuklapp-Steuerung bleiben vollständig erhalten –
diese Seite ist der Ort, an dem die Grafiken wirken sollen. Der Anker `index.html#projekte`
braucht einen Ersatz (Hinweisabschnitt behält die ID).

**Übersichtsseite:** drei Gruppen als Abschnitte, darin kompakte Karten (Bild, Titel, ein
Satz, ein Link). Kein Ausblick, keine Portfolio-Kästen.

**Angebotsseiten (einheitliches Muster, höchstens sechs Abschnitte):**
Hero → Was du bekommst → Ablauf → Preis/Aufwand → FAQ → Anfrage.

## 6. Arbeitspakete

Reihenfolge ist bewusst gewählt: Erst die Struktur, dann die Flächen, die von ihr abhängen.
Wie immer ein Paket nach dem anderen, jeweils mit Doku, Test, Push und Live-Prüfung.

| # | Paket | Fertig, wenn … |
| --- | --- | --- |
| 0 | **Auf „Sie" umstellen** – alle Seiten, Formulare (Platzhalter, Hinweise), Meta-Texte, FAQ-Schema und `danke.html`/`404.html` in einem Zug, damit live nie Du und Sie gemischt stehen. AGB/Datenschutz/Impressum nur lesen und Abweichungen melden | auf keiner Seite steht mehr „du/dein/dir"; sichtbarer FAQ-Text und FAQ-Schema stimmen weiter überein |
| 1 | **Menü mit drei Gruppen** auf allen Seiten; „Impressum" nur noch im Footer, „Über mich" im Menü; Footer vereinheitlicht | jede Angebotsseite ist von jeder Seite mit höchstens zwei Klicks erreichbar; Menü und Footer sind überall identisch; mobil und per Tastatur bedienbar |
| 1b | **Neue Angebotsseite `it-betreuung.html`** nach dem Muster aus Abschnitt 5; Inhalte aus den sechs Leistungskarten der Startseite und Jakobs Beschreibung (Abschnitt 8 Nr. 4); Preisblock mit der Diagnosepauschale (Abschnitt 8 Nr. 6); Sitemap, Schema, Thema im Anfrage-Assistenten. Dazu die Pauschale in `agb.html` ergänzen (von Jakob freigegeben) | das Kerngeschäft hat eine eigene, verlinkbare Seite; Pauschale steht wortgleich auf Seite und in den AGB; sonst keine Preise oder Firmenreferenzen |
| 2 | **Übersichtsseite neu** nach den drei Gruppen (Punkte 14–18). Dateiname: bei `produkte.html` bleiben oder auf `leistungen.html` umziehen – dann mit Weiterleitungsseite, Canonical und Sitemap | die Seite passt bei 1440 px auf höchstens zwei Bildschirmhöhen; kein Text über die Website selbst |
| 2b | **Projekte umziehen:** Menüpunkt direkt auf `projekte.html`, neue Überschrift, Startseite nur noch mit schmalem Hinweis (siehe Zielbild). Kann mit Paket 3 zusammen erscheinen | Gruppen, Grafiken und Steuerung auf `projekte.html` unverändert funktionsfähig; kein toter Anker |
| 3 | **Startseite entschlacken** (Punkte 7–13), baut auf deinem laufenden Hero-Vorschlag auf | höchstens sechs Abschnitte; jedes Angebot erscheint genau einmal; kein Foto doppelt |
| 4 | **Ein Kontaktweg:** Formular der Startseite durch Einstieg in den Assistenten ersetzen, Assistent als geführte Abfolge (Punkte 23–25) | eine Themenliste; bestehende `?topic=`-Links funktionieren weiter; FormSubmit-Ziel, Honeypot und `danke.html` unverändert |
| 5 | **Angebotsseiten angleichen und kürzen** (Punkte 19–21) | alle fünf Seiten folgen demselben Muster mit höchstens sechs Abschnitten; Hero zeigt auf einem Laptop bereits den Beginn des Inhalts |
| 6 | **Texte straffen und Optik beruhigen:** sachliche Überschriften, Absätze kürzen, „Neu"-Labels entfernen, Stilmittel reduzieren (Punkte 17, 30, 32) | keine Überschrift, die ohne Kontext unverständlich ist; höchstens ein Akzent-Element pro Seite |
| 7 | **Aufräumen:** ungenutzte CSS-Regeln, verwaiste Bilder, README/Doku nachziehen (Punkte 22, 31) | keine toten Regeln für entfernte Abschnitte |

Paket 0 steht bewusst vorn: Es ist weitgehend mechanisch, und alle späteren Pakete schreiben
dann von Anfang an in der richtigen Anrede. Pakete 1, 1b und 2 gehören inhaltlich zusammen
und können als eine Version erscheinen.

## 7. Leitplanken

- Alles aus `AGENTS.md` gilt weiter: statisch, keine Frameworks, lokale Bilder, UTF-8,
  Cache-Buster einheitlich, keine erfundenen Inhalte, Rechtstexte nur bewusst ändern.
- **Nichts löschen, was Suchmaschinen kennen**, ohne Ersatz: Wenn eine URL wegfällt oder
  umzieht, bleibt eine Weiterleitungsseite; Sitemap und Canonicals werden nachgezogen.
- **Anker erhalten oder umleiten:** `#leistungen`, `#kontakt`, `#projekte`, `#ablauf` werden
  von anderen Seiten und möglicherweise von außen verlinkt.
- **Strukturierte Daten** (`OfferCatalog`, `ItemList`, `FAQPage`) bei jedem Umbau mitziehen.
- Webdesign-Geschäftsfeld: weiterhin keine Euro-Preise, keine Referenzen, keine
  Ranking- oder Umsatzversprechen ohne Jakobs Freigabe.
- Barrierearmut nicht verschlechtern: Skip-Link, sichtbarer Fokus, Tastaturbedienung,
  `prefers-reduced-motion`.
- Vor größeren sichtbaren Änderungen Jakob einen kurzen Vorschlag zeigen (Skizze oder
  lokaler Stand), dann umsetzen.

## 8. Entscheidungen von Jakob (08.10.2026)

| # | Thema | Entscheidung | Folge |
| --- | --- | --- | --- |
| 1 | Anrede | **Einheitlich „Sie"** auf der ganzen Website – wirkt professioneller, auch gegenüber Unternehmen | Paket 0. Die Kernaussage „IT-Hilfe in Freudenstadt, die man versteht." ist anredefrei und kann bleiben |
| 2 | Standard-Theme | **Dunkel bleibt Standard** – modern, bläulich-edel, an den Logofarben orientiert. Die „KI-Optik" soll trotzdem weniger werden | Befund 32, Paket 6 |
| 3 | Lernplattformen | **Eigene Seite genügt:** Menüpunkt „Projekte" führt direkt auf `projekte.html`; Überschrift „Eigene IT-Projekte" (oder „IT-Projekte – by Sawazki Electronics"). Gruppierung und hochwertige Grafiken müssen erhalten bleiben | Paket 2b. Startseite zeigt nur noch einen schmalen Hinweis |
| 4 | IT-Betreuung | **Eigenes Angebot.** Inhalt laut Jakob: Unterstützung bei Hardware und Software, Installationen, Wartung, Systemoptimierung, Fehlerbehebung, Anpassung des PCs an die Arbeit des Kunden. Erfahrung bisher mit Privatkunden; Unternehmen sind ebenfalls angesprochen | Paket 1b. Die Seite gehört in die Gruppe „IT-Service" und wird unter „Für Unternehmen" zusätzlich verlinkt |
| 5 | Unterzeile am Logo | **„IT · Web · Technik"** – klar, einfach, entspricht den drei Gruppen | In Paket 1 auf allen Seiten ersetzen (Header; Footer-Zeile „IT-Service, PC & Laptop Support." sinngemäß anpassen). Für die Auffindbarkeit zählen weiterhin Seitentitel, H1 und Description je Seite mit Ortsbezug |
| 6 | Preise | **Keine „ab"-Preise**, solange die Leistungen maßgeschneidert sind; VHS behält seine Staffel. **Diagnosepauschale 50 € ist beschlossen und darf veröffentlicht werden.** Jakob ist Kleinunternehmer nach § 19 UStG: 50 € ist der Endpreis, es kommt nichts hinzu | Darstellung im Preisblock von `it-betreuung.html` (nicht im Hero, nicht auf der Startseite), in genau dieser Reihenfolge: (1) Anfrage und erste Einschätzung per Telefon oder Nachricht kostenlos und unverbindlich; (2) Diagnose am Gerät 50 €; (3) danach ein klares Angebot, ohne Zustimmung keine weiteren Kosten; (4) bei Beauftragung der Reparatur werden die 50 € vollständig angerechnet. Gilt pauschal für alle Geräte; in der Praxis betrifft sie Laptops, komplexere Geräte, größere Monitore und Softwarearbeiten wie eine Neuinstallation des Betriebssystems. Bei Handys (Display, Ladebuchse, Akku) wird in der Regel direkt repariert – das darf die Seite so sagen, es ist Jakobs tatsächliche Erfahrung. Gilt nicht für Webdesign, 3D-Druck, VHS oder Beratung. In `agb.html` ergänzen (freigegeben); dabei prüfen, ob dort und im Impressum bereits ein Hinweis auf § 19 UStG steht, und nur melden, falls nicht |
| 7 | Domain | **Bleibt bei GitHub Pages**; Kurzlink `t1p.de/sawazki` genügt vorerst. Eigene Domain später möglich | Keine URL-Umzüge nötig. Aufgabe „Eigene Domain" in `tasks.md` auf „zurückgestellt" setzen |

Damit sind alle sieben Punkte entschieden. Offen bleibt nur die Wahl zwischen den beiden
Überschriften für `projekte.html` (Nr. 3).

## 9. Zusammenarbeit

- Zwei Agenten arbeiten im selben Google-Drive-Ordner. Vor jedem Arbeitsbeginn `git pull`
  und `git status`; nie fremde uncommittete Änderungen überschreiben.
- Wer ein Paket beginnt, trägt es in `tasks.md` unter „In Arbeit" ein. Solange dort ein
  Eintrag steht, fasst der andere die betroffenen Dateien nicht an.
- Claude kann lokal im Browser prüfen (Desktop/Mobil, Dark/Light, Formularzustände) und
  übernimmt auf Wunsch die Gegenprüfung eines fertigen Pakets. Bilder kommen von Codex.
- Kritik ist erwünscht, in beide Richtungen, und gehört schriftlich in diese Datei oder in
  `documentation.md` – nicht nur in einen Chat, den der andere nicht sieht.

## 10. Rückmeldungen von Codex

### 8. Oktober 2026 – Einschätzung und Umsetzung durch Codex

- Zustimmung: drei Angebotsgruppen, eine Hauptaktion, weniger Wiederholungen, hochwertige Bilder, Dunkel als Standard und gleichwertiger heller Modus. Die Projektgrafiken bleiben vollständig auf der Projektseite.
- Präzisierung: „höchstens ein Akzent-Element“ verstehe ich als ruhige Flächen und zurückhaltende Bildsprache, nicht als Verbot sinnvoller Fokus-/Aktionsfarben. Lesbarkeit und Bedienbarkeit gehen vor einer starren Effekt-Zählung.
- Der geprüfte Hero-Entwurf passt zum Zielbild: eine anredefreie H1, ein kurzer Satz, ein Hauptbutton, ein Beratungsbild. Der Satz wird auf Sie angepasst. Der Nebenlink und die zusätzliche Leistungszeile entfallen; die drei Gruppenkarten übernehmen diese Aufgabe. Das Logo bleibt im Header sichtbar.
- Projektüberschrift: **Eigene IT-Projekte**. Sie ist verständlich, sachlich und passt zur deutschsprachigen Kundenansprache. „By Sawazki Electronics“ bleibt als vorhandener Urheberhinweis bei den Projekten.
- Reihenfolge: 0 → 1b → 1 → 2 → 4 → 3 + 2b → 5 → 6 → 7. Die neue IT-Seite entsteht vor dem Menü, damit keine toten Links veröffentlicht werden. Der gemeinsame Anfrageweg steht vor dem neuen Startseiten-Kontaktbereich bereit. Paket 2b erscheint mit Paket 3; direkte Menüverlinkung bereits in Paket 1.
- `produkte.html` bleibt als bestehende URL erhalten; Titel, Navigation und Inhalte heißen „Leistungen“. Ein URL-Umzug bringt für Kunden keinen Vorteil.
- Preisgestaltung: die freigegebene Diagnosepauschale wird als 50 € Endpreis dargestellt, mit kostenloser erster Einschätzung, Angebot vor weiteren Arbeiten und vollständiger Anrechnung bei Reparatur. Wortgleich auf IT-Seite und in den AGB. Die übrigen individuellen Angebote bekommen keine neuen Preise.
- Jakobs direkte Nachricht am 08.10.2026 erteilt die abschließende Entscheidungs-, Umsetzungs- und Veröffentlichungsfreigabe einschließlich AGB. Die im Briefing vorgesehenen erneuten Freigabestopps sind damit für diese Pakete aufgehoben. Größere Änderungen werden weiterhin vorab kurz im Chat und hier beschrieben und nach jedem Paket geprüft.
- Keine eigene Domain, keine erfundenen Referenzen oder Erfolgsgarantien. Rechtstextänderungen werden gezielt auf die freigegebenen Leistungen begrenzt und anhand amtlicher Quellen geprüft.

