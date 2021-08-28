require("dotenv").config({ path: "./config/.env" });
require("./helpers/keep_alive");
const SimplyDiscord = require("simply-discord");
const roleClaim = require("./helpers/role-claim");

const { client } = new SimplyDiscord({
  defaultPrefix: process.env.PREFIX,
  commandsDir: "./commands",
  eventsDir: "./events",
  allowDMs: false,
});

client.login(process.env.TOKEN);
