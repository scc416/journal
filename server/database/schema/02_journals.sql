DROP TABLE IF EXISTS journals CASCADE;  

CREATE TABLE journals (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  title varchar,
  content varchar NOT NULL
);