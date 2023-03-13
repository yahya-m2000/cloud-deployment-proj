const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models/User");

// GET all Users
router.get("/", async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*"); // Allow any origin to access the resource
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.header("Access-Control-Allow-Origin", "*"); // Allow any origin to access the resource
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET one User

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
