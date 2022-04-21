const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    const { darkMode } = req.body;
    req.session.dark_mode = darkMode;
    res.json(darkMode);
  });

  router.get("/", (req, res) => {
    const { dark_mode } = req.session;
    if (!dark_mode) return res.json(true);
    res.json(dark_mode);
  });

  return router;
};
