require("dotenv").config();
require("./helpers/keep_alive");
const SimplyDiscord = require("simply-discord");

const { client } = new SimplyDiscord({
  defaultPrefix: ".",
  commandsDir: "./commands",
  eventsDir: "./events",
  allowDMs: false,
});

client.login(process.env.TOKEN);
