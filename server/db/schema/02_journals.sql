DROP TABLE IF EXISTS journals CASCADE;  

CREATE TABLE journals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date timestamp NOT NULL,
  content varchar UNIQUE NOT NULL
);