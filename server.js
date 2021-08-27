require("dotenv").config();
const SimplyDiscord = require("simply-discord");

const { client } = new SimplyDiscord({
  defaultPrefix: ".",
  commandsDir: "./commands",
  eventsDir: "./events",
  allowDMs: false,
});

client.login(process.env.TOKEN);
