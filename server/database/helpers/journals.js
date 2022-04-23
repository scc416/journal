const queryGenerator = (db) => {
  const getJournals = async (id) => {
    const values = [id];

    const queryString = `
      SELECT * FROM journals
      WHERE id = $1;`;

    try {
      const { rows } = await db.query(queryString, values);
      return rows;
    } catch (e) {
      throw e;
    }
  };

  const postJournal = async (content, id, date) => {
    const values1 = [id, date];
    const values2 = [JSON.stringify(content), id, date];
    const querySelectString = `
      SELECT * FROM journals
      WHERE user_id = $1 AND date = $2;`;

    const queryUpdateString = `
      UPDATE journals
      SET content = $1
      WHERE user_id = $2 AND date = $3
      RETURNING *;`;

    const queryInsertString = `
      INSERT INTO journals (content, user_id, date)
      VALUES ($1, $2, $3)
      RETURNING *;`;

    try {
      const { rows } = await db.query(querySelectString, values1);
      console.log(rows);
      const result = rows.length
        ? await db.query(queryUpdateString, values2)
        : await db.query(queryInsertString, values2);

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  };
  return { postJournal, getJournals };
};

module.exports = queryGenerator;
