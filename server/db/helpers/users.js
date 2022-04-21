const queryGenerator = (db) => {
  const getCurrentUser = async (value) => {
    const values = [value];
    const queryString = `
      SELECT * FROM users 
      WHERE id = $1;`;

    try {
      const result = await db.query(queryString, values);
      const userInfo = getFirstRecord(result);
      return userInfo;
    } catch (err) {
      console.log(err);
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
    } catch (err) {
      console.log(err);
    }
  };
  return { getCurrentUser, postInfo };
};

module.exports = queryGenerator;
