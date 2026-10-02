# Natuurbeleving

Moderne, statische heruitgave van Natuurbeleving (1999-2008): 367 vogels en 108 zoogdieren van West-Europa, met foto, beschrijving en aantallen. De layout is dezelfde als in 2008: 745 px breed, de banner met eikenblad en een foto per sectie, en de soortenlijst links. Er zijn geen frames, Flash, PHP of tracking meer. De site werkt op mobiel en heeft een zoekfilter in de soortenlijst.

## Mappen

| Map/bestand | Wat |
|---|---|
| `index.html`, `*.html` | Pagina's (info, waarnemingen, links, colofon, ...) |
| `vogels/`, `zoogdieren/`, `fotografen/` | Soort- en fotografenpagina's |
| `assets/` | Gedeelde opmaak (`site.css`, `site.js`), bannerfoto's en logo |
| `img/`, `geluid/` | Foto's en vleermuisgeluiden |
| `materiaal/` | Informatief materiaal dat niet gelinkt is vanuit de site; zie `materiaal/LEESMIJ.md` |

Losse pagina's zoals `contact.html`, `vogels01.html` en `zoog03.html` zijn doorverwijzingen voor oude URL's.

## Lokaal bekijken

```fish
python3 -m http.server 8402
```

## Publiceren

Live op **https://natuurbeleving.vdaele.be** via GitHub Pages (branch `main`, map `/`).
- Het `CNAME`-bestand bevat het subdomein.
- DNS staat bij Cloudflare: een CNAME-record `natuurbeleving` → `frevdaele.github.io`, *DNS only* (grijze wolk), zodat GitHub zelf het certificaat kan aanmaken.

**Let op:** `materiaal/` wordt dan mee gepubliceerd. Het is niet gelinkt en `robots.txt` weert zoekmachines, maar wie het pad kent, kan het openen. Er zit materiaal van derden in (trekgeluiden, vleermuizenatlas) en namen van tellers.

## Herkomst

De site is gegenereerd uit het archief `pCloud/Archief/Webdesign/natuurbeleving`, met de PHP-versie van ±2008 als bron.
- Alle tekst daaruit is overgezet en woord voor woord gecontroleerd.
- Inhoud die alleen in de HTML-versie van 2002 stond, is aangevuld. De rest van die tekst staat in `materiaal/teksten-2002.md`.
- De Flash-banner is nagebouwd in HTML/CSS.
- E-mailadressen van derden zijn weggelaten.
- De vogelgeluiden zaten niet in het archief.
