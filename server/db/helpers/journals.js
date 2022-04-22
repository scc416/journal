const queryGenerator = (db) => {
  const getInfo = async () => {
    const queryString = `SELECT * FROM users WHERE id = 1;`;

    try {
      const { rows } = await db.query(queryString);

      return rows[0];
    } catch (err) {
      return { error };
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
    } catch (error) {
      return { error };
    }
  };
  return { getInfo, postInfo };
};

module.exports = queryGenerator;
