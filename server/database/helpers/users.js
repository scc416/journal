const getResult = ({ rows }) => rows.length && rows[0];

const queryGenerator = (db) => {
  const getUserByValue = async (column, value) => {
    const values = [value];
    const queryString = `
      SELECT * FROM users 
      WHERE ${column} = $1;`;

    try {
      const result = await db.query(queryString, values);
      return getResult(result);
    } catch (e) {
      throw e;
    }
  };

  const createNewUser = async ({ username, password }) => {
    const values = [username, password];
    const queryString = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING *;`;

    try {
      const result = await db.query(queryString, values);
      return getResult(result);
    } catch (e) {
      throw e;
    }
  };
  return { getUserByValue, createNewUser };
};

module.exports = queryGenerator;
