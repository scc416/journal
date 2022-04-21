// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();

// Set up cookie-session
const cookieSession = require("cookie-session");
app.use(cookieSession({ secret: process.env.SECRET }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Separated Routes for each Resource
const usersRoutes = require("./routes/users");
const journalsRoutes = require("./routes/journals");

// Mount all resource routes
app.use("/api/users", usersRoutes(db));
app.use("/api/journals", journalsRoutes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
