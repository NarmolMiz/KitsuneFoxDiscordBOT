const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log('Bot as been planted !!')
})


//-------------------------------------------------------


client.on('message', message => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('Pong.');
    console.log('Used command : ping')
  } else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
    console.log('Used command : beep')
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    console.log('Used command : server')
  } else if (message.content === `${prefix}userinfo`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    console.log('Used command : userinfo')
  } else if (message.content === `${prefix}amessage`) {
    message.channels.get('648562428640231434').send(message.attachments.url)
    console.log('Used command : amessage')
  }
});

//--------------------------------------------------------

client.login(process.env.TOKEN);