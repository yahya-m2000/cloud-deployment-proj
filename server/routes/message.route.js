const router = require("express").Router();
const { Message } = require("../models/Message");
const { User } = require("../models/User");
const { messageData } = require("../models/seedData");

// GET all Messages
router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*"); // Allow any origin to access the resource
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.header("Access-Control-Allow-Origin", "*"); // Allow any origin to access the resource
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET one Message

router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST one Message
router.post("/", async (req, res) => {
  try {
    const { content, userId } = req.body;
    const message = await Message.create({ content, UserId: userId });
    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
