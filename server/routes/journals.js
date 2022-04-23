const express = require("express");
const router = express.Router();

const queryGenerator = require("../db/helpers/users");

module.exports = (db) => {
  const { getInfo, postInfo } = queryGenerator(db);

  router.post("/", async (req, res, next) => {
    const { state } = req.body;
    try {
      const info = await postInfo(state);
      res.json(info);
    } catch (error) {
      res.status(500).send({ msg: error });
    }
  });

  router.get("/", async (req, res, next) => {
    try {
      const info = await getInfo();
      res.json(info);
    } catch (err) {
      next(error);
    }
  });

  return router;
};
