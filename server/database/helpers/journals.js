const queryGenerator = (db) => {
  const getJournals = async (id) => {
    const values = [id];

    const queryString = `
      SELECT * FROM journals
      WHERE user_id = $1
      ORDER BY date;`;

    try {
      const { rows } = await db.query(queryString, values);
      for (const row of rows) {
        const { content } = row;
        row.content = JSON.parse(content);
      }
      return rows;
    } catch (e) {
      throw e;
    }
  };

  const postJournal = async (content, id, date, title) => {
    const values1 = [id, date];
    const values2 = [JSON.stringify(content), id, date, title];
    const querySelectString = `
      SELECT * FROM journals
      WHERE user_id = $1 AND date = $2;`;

    const queryUpdateString = `
      UPDATE journals
      SET content = $1,
      title = $4
      WHERE user_id = $2 AND date = $3
      RETURNING *;`;

    const queryInsertString = `
      INSERT INTO journals (content, user_id, date, title)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`;

    const queryDeleteString = `
      DELETE FROM journals
      WHERE user_id = $1 AND date = $2 AND NOT id = $3
      RETURNING *;`;

    try {
      const { rows } = await db.query(querySelectString, values1);
      const result = rows.length
        ? await db.query(queryUpdateString, values2)
        : await db.query(queryInsertString, values2);

      if (rows.length > 1) {
        const values3 = [id, date, rows[0].id];
        await db.query(queryDeleteString, values3);
      }

      return result.rows[0];
    } catch (e) {
      throw e;
    }
  };

  const deleteJournal = async (id, date) => {
    const values = [id, date];

    const queryDeleteString = `
      DELETE FROM journals
      WHERE user_id = $1 AND date = $2
      RETURNING *;`;

    try {
      await db.query(queryDeleteString, values);
    } catch (e) {
      throw e;
    }
  };
  return { postJournal, getJournals, deleteJournal };
};

module.exports = queryGenerator;
