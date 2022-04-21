DROP TABLE IF EXISTS users CASCADE; 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar UNIQUE NOT NULL,
  password varchar NOT NULL
);