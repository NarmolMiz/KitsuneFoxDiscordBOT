const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', function (message) {
  if (message.content === "/cochonou") {
    client.channels.get('648562428640231434').send(message.attachement.url);
    client.channel.send('Succès !')
  }
});

client.login(process.env.TOKEN);