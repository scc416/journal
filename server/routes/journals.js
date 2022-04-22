const express = require("express");
const router = express.Router();

const queryGenerator = require("../db/helpers/users");

module.exports = (db) => {
  const { getInfo, postInfo } = queryGenerator(db);

  router.post("/", async (req, res) => {
    const { state } = req.body;
    try {
      const info = await postInfo(state);
      res.json(info);
    } catch (error) {
      res.json({ error });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const info = await getInfo();
      res.json(info);
    } catch (err) {
      res.json({ error });
    }
  });

  return router;
};
