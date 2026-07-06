require("dotenv").config();

const express = require("express");

const PORT = process.env.PORT || 3000;
const REDIRECT_TARGET =
  process.env.REDIRECT_TARGET || "https://www.natuur-navigator.nl";

const app = express();

app.get("/health", (_req, res) => {
  res.json({ ok: true, redirectTo: REDIRECT_TARGET });
});

app.use((req, res) => {
  const destination = new URL(req.originalUrl, REDIRECT_TARGET).href;
  res.redirect(301, destination);
});

app.listen(PORT, () => {
  console.log(`Redirect server listening on ${PORT}`);
  console.log(`All requests → ${REDIRECT_TARGET}`);
});
