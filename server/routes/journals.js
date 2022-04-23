const express = require("express");
const router = express.Router();

const queryGenerator = require("../database/helpers/journals");

module.exports = (db) => {
  const { postJournal, getJournals } = queryGenerator(db);

  router.post("/", async (req, res, next) => {
    const { content, date } = req.body;
    const { user_id } = req.session;
    try {
      const info = await postJournal(content, user_id, date);
      res.json(info);
    } catch (error) {
      next(error);
    }
  });

  router.get("/", async (req, res, next) => {
    const { user_id } = req.session;
    try {
      const info = await getJournals(user_id);
      res.json(info);
    } catch (err) {
      next(error);
    }
  });

  return router;
};
