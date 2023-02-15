require("dotenv").config();
const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient({
  endpoint: process.env.COSMOS_URI,
  key: process.env.COSMOS_KEY,
});

const db = client.database("dev-wassDB");

module.exports = { client, db };
