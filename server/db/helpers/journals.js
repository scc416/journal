const queryGenerator = (db) => {
  const getInfo = async () => {
    const queryString = `SELECT * FROM users WHERE id = 1;`;

    try {
      const { rows } = await db.query(queryString);

      return rows[0];
    } catch (e) {
      throw e;
    }
  };

  const postInfo = async (state) => {
    const values = [state];
    const queryString = `
      UPDATE users
      SET info = $1
      WHERE id = 1;`;

    try {
      const { rows } = await db.query(queryString, values);

      return rows[0];
    } catch (e) {
      throw e;
    }
  };
  return { getInfo, postInfo };
};

module.exports = queryGenerator;
