const { db } = require("./");
const { User } = require("../models/User");
const { Message } = require("../models/Message");
const { userData, messageData } = require("../models/seedData");

const seed = async () => {
  try {
    await db.sync({ force: true }); // recreates the db
    const createdUsers = await User.bulkCreate(userData);
    const createdMessages = await Message.bulkCreate(messageData);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { seed };
