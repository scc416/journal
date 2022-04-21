const queryGenerator = (db) => {
  const getUserByValue = async (value) => {
    const values = [value];
    const queryString = `
      SELECT * FROM users 
      WHERE username = $1;`;

    try {
      const { row } = await db.query(queryString, values);
      return row.length && row[0];
    } catch (err) {
      console.log(err);
    }
  };

  const createNewUser = async (state) => {
    const values = [state];
    const queryString = `
      UPDATE users
      SET info = $1
      WHERE id = 1;`;

    try {
      const { rows } = await db.query(queryString, values);

      return rows[0];
    } catch (err) {
      console.log(err);
    }
  };
  return { getUserByValue, createNewUser };
};

module.exports = queryGenerator;
