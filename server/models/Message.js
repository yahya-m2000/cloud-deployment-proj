const { Sequelize, db, DataTypes } = require("../database");

const { User } = require("./User");

const Message = db.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Message.belongsTo(User, { through: "User_Messages" });
User.hasMany(Message);

module.exports = { Message };
