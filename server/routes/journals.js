const express = require("express");
const router = express.Router();

const queryGenerator = require("../database/helpers/journals");

module.exports = (db) => {
  const { postJournal, getJournals, deleteJournal } = queryGenerator(db);

  router.post("/", async (req, res, next) => {
    console.log("SAVING");
    const { content, date, title } = req.body;
    const { user_id } = req.session;
    try {
      await postJournal(content, user_id, date, title);
      res.json();
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

  router.delete("/", async (req, res, next) => {
    const { user_id } = req.session;
    const { date } = req.body;

    try {
      await deleteJournal(user_id, date);
      res.json();
    } catch (err) {
      next(error);
    }
  });

  return router;
};
