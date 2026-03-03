# Eurodizains Landing

React + Vite landing lapa uznemumam **Eurodizains** ar vairaku valodu atbalstu un atseviskam lapam pakalpojumiem.

## Kas ir ieklauts
- Galvena landing lapa ar sekcijam: Hero, Benefits, Services, Gallery, Contact.
- Atseviskas lapas remonta un interjera dizaina pakalpojumiem.
- URL struktura vairakam valodam (LV, RU, EN, DE, EL).
- Lokalizacija ar `i18next` + `react-i18next`.
- Animacijas ar `framer-motion`.
- Stile ar Tailwind CSS.

## Tehnologijas
- React 18
- Vite 5
- React Router DOM
- i18next / react-i18next
- Tailwind CSS
- Framer Motion

## Prasibas
- Node.js `20.x`
- npm (nak kopa ar Node.js)

## Atrs starts
```bash
npm ci
npm run dev
```
Pec tam atver: `http://localhost:5173`

## Pieejamie skripti
```bash
npm run dev      # lokalai izstradei
npm run build    # produkcijas build (dist/)
npm run preview  # lokals produkcijas build priekskats
```

## Valodas
Projekts atbalsta:
- `lv` (noklusetaa)
- `ru`
- `en`
- `de`
- `el`

Valoda tiek noteikta no URL query parametra `language`, piemers:
- `/?language=lv`
- `/?language=en`

Ja parametrs nav dots vai ir nepareizs, tiek izmantots `lv`.

## Projekta struktura
```text
src/
  components/      # koplietojamie UI komponenti
  sections/        # galvenas landing sekcijas
  pages/
    repairs/       # remonta lapas
    design/        # dizaina lapas
  i18n/            # tulkojumu faili un i18n inicializacija
  App.jsx          # route konfiguracija
  main.jsx         # aplikacijas ieejas punkts
public/            # statiskie atteli un assets
```

## Build un deploy
### Build lokali
```bash
npm run build
```
Rezultats: `dist/`

### Vercel
Projektam ir `vercel.json` ar komandam:
- install: `npm ci`
- build: `npm ci && npm run build`

## Piezimes
- Repozitorija ir ari `dist.zip` (gatavs build arhivs).
- `node_modules/` nav javieno Git repozitorijam.

## Licence
Ieksejs projekts / proprietary (ja nav noradits citadi).
