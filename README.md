# Natuur Navigator redirect

Kleine Express-server die alle requests permanent doorstuurt naar [www.natuur-navigator.nl](https://www.natuur-navigator.nl).

Pad en querystring blijven behouden, bijvoorbeeld:

- `/` → `https://www.natuur-navigator.nl/`
- `/foo?x=1` → `https://www.natuur-navigator.nl/foo?x=1`

## Starten

```sh
cd redirect
npm install
npm start
```

Optioneel in `.env` (zie `.env.example`):

- `PORT` — standaard `5040`
- `REDIRECT_TARGET` — standaard `https://www.natuur-navigator.nl`

## Health check

`GET /health` — controleert of de service draait (wordt niet doorgestuurd).
