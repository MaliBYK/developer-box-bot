module.exports = {
  name: "message",
  async run(client, handler, message) {
    if (message.author.bot) return;
    const keys = ["teşekkürler", "saol", "eyw", "teşekkür", "thanks"];
    const messageWords = message.content
      .toLowerCase()
      .split(/(\s+)/)
      .filter(e => e.trim().length > 0);

    const triggerWords = messageWords.find(word => keys.includes(word));

    if (!triggerWords) return;
    message.channel.send(
      "**İPUCU : ** Birine teşekkür mü etmek istiyorsun ? `" +
        process.env.PREFIX +
        "tesekkur <Kullanıcının @>`"
    );
    return;
  },
};
