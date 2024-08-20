require("dotenv").config();

const { Client, Intents, Collection, IntentsBitField } = require("discord.js");
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("calisiyor");
});

app.get("/", (req, res) => {
  res.send("calisiyor");
});

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates,
  ],
});

client.on("ready", () => {
  console.log(`${client.user.tag} Aktif✅.`);

  const channel = client.channels.cache.get("909447049265705021");

  if (channel) {
    channel.send("@everyone arkadaslar ben gidiyorum hakkınızı helal edin");
  } else {
    console.log("Belirtilen kanal bulunamadı.");
  }

  client.user.setActivity({
    name: "✅",
  });
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) {
    return;
  }
  if (message.content === "selam") {
    message.reply("selam knk");
  }
  if (message.content === "nasılsın") {
    message.reply("iyiyim sen nasılsın");
  }
});

client.login(process.env.TOKEN);
