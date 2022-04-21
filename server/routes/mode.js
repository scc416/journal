const express = require("express");
const router = express.Router();

module.exports = () => {
  router.post("/", (req, res) => {
    const { darkMode } = req.body;
    req.session.dark_mode = !darkMode;
    res.json(req.session.dark_mode);
  });

  router.get("/", (req, res) => {
    const hasSetting = "dark_mode" in req.session;
    if (!hasSetting) return res.json(true);
    const { dark_mode } = req.session;
    res.json(dark_mode);
  });

  return router;
};
