const route = require("express").Router();
const { db } = require("../db");

const container = db.container("messages");

route.get("/", async (req, res) => {
  try {
    const { resources: messages } = await container.items.readAll().fetchAll();
    res.send(messages);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(err.code);
  }
});

route.get("/:id", async (req, res) => {
  try {
    const { resource: message } = await container.item(req.params.id).read();
    res.send(message);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(err.code);
  }
});

route.post("/", async (req, res) => {
  try {
    const { resource: message } = await container.items.create(req.body);
    res.send(message);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(err.code);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const { resource: message } = await container.item(req.params.id).read();
    const { resource: newMessage } = await container
      .item(req.params.id)
      .replace({ ...message, ...req.body });
    res.send(newMessage);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(err.code);
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { resource: message } = await container.item(req.params.id).delete();
    res.send(message);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(err.code);
  }
});

module.exports = route;
