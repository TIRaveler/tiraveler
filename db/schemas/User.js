module.exports = (database, DataTypes) => {
  const User = database.define('user', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  return User;
};
