const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const queryGenerator = require("../db/helpers/users");

module.exports = (db) => {
  const { getUserByValue, createNewUser } = queryGenerator(db);

  router.post("/", async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await getUserByValue("username", username);
      if (!user)
        return res.json({
          error: "Username doesn't exists. Please create a new account.",
        });
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) {
        return res.json({ error: "Incorrect credentials." });
      }
      req.session.user_id = user.id;
      res.json(user.username);
    } catch (err) {
      console.log(err);
    }
  });

  router.post("/register", async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    try {
      const passwordIsSame = confirmPassword === password;
      if (!passwordIsSame) {
        return res.json({ error: "Passwords do not match." });
      }

      const userWithSameUsername = await getUser(username);

      if (userWithSameUsername) {
        return res.json({ error: "This username is already taken." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const userInfo = { username, password: hashedPassword };
      const newUser = await createNewUser(userInfo);
      req.session.user_id = newUser.id;
      res.json(username);
    } catch (err) {
      console.log(err.message);
    }
  });

  router.post("/logout", (req, res) => {
    req.session = null;
    res.json(null);
  });

  router.get("/", async (req, res) => {
    const { user_id } = req.session;
    if (!user_id) return res.json(null);
    try {
      const user = await getUserByValue("id", user_id);
      res.json(user.username);
    } catch (err) {
      console.log(err);
    }
  });

  return router;
};
