const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const queryGenerator = require("../db/helpers/users");

module.exports = (db) => {
  const { getCurrentUser, postInfo } = queryGenerator(db);

  router.post("/", async (req, res) => {
    const { state } = req.body;
    try {
      const info = await postInfo(state);
      res.json(info);
    } catch (err) {
      console.log(err);
    }
  });

  router.get("/", (req, res) => {
    const { user_id } = req.session;

    if (!user_id) return res.json(null);
    res.json(user_id);
  });

  return router;
};
