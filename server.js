require("dotenv").config({ path: "./config/.env" });
require("./helpers/keep_alive");
const SimplyDiscord = require("simply-discord");
const connectToDatabase = require("./helpers/database/connect-mongo");

const { client } = new SimplyDiscord({
  defaultPrefix: process.env.PREFIX,
  commandsDir: "./commands",
  eventsDir: "./events",
  allowDMs: false,
});

connectToDatabase();
client.login(process.env.TOKEN);
