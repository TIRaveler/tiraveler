module.exports = (database, DataTypes) => {
  const User = database.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
};
