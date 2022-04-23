const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const {
  ERROR_INCORRECT_CREDENTIALS,
  ERROR_BLANK_PASSWORD,
  ERROR_BLANK_USERNAME,
  ERROR_PASSWORDS_NOT_MATCH,
  ERROR_USERNAME_ALREADY_TAKEN,
} = require("../constants");
const queryGenerator = require("../database/helpers/users");

module.exports = (db) => {
  const { getUserByValue, createNewUser } = queryGenerator(db);

  router.post("/", async (req, res, next) => {
    const { username, password } = req.body;
    try {
      if (!username) throw new Error(ERROR_BLANK_USERNAME);
      if (!password) throw new Error(ERROR_BLANK_PASSWORD);

      const user = await getUserByValue("username", username);
      if (!user) {
        throw new Error(ERROR_INCORRECT_CREDENTIALS);
      }

      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error(ERROR_INCORRECT_CREDENTIALS);

      req.session.user_id = user.id;
      res.json(user.username);
    } catch (error) {
      next(error);
    }
  });

  router.post("/register", async (req, res, next) => {
    const { username, password, confirmPassword } = req.body;

    try {
      if (!username) throw new Error(ERROR_BLANK_USERNAME);
      if (!password || !confirmPassword) throw new Error(ERROR_BLANK_PASSWORD);

      const passwordIsSame = confirmPassword === password;
      if (!passwordIsSame) throw new Error(ERROR_PASSWORDS_NOT_MATCH);

      const userWithSameUsername = await getUser(username);

      if (userWithSameUsername) {
        throw new Error(ERROR_USERNAME_ALREADY_TAKEN);
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const userInfo = { username, password: hashedPassword };
      const newUser = await createNewUser(userInfo);
      req.session.user_id = newUser.id;
      res.json(username);
    } catch (error) {
      next(error);
    }
  });

  router.post("/logout", (req, res) => {
    req.session.user_id = null;
    res.json(null);
  });

  router.get("/", async (req, res, next) => {
    const { user_id } = req.session;
    if (!user_id) return res.json(null);
    try {
      const user = await getUserByValue("id", user_id);
      res.json(user.username);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
