const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const queryGenerator = require("../db/helpers/users");

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.json({ test: "test" });
  });
  
  router.get("/", (req, res) => {
    res.json({ test: "test" });
  });

  return router;
};
