module.exports = {
  name: "ping",
  aliases: ["p"],
  category: "Utils",
  cooldown: 10,
  async run({ client, handler, message, args }) {
    message.channel.send(`${client.ws.ping}ms`);
  },
};
