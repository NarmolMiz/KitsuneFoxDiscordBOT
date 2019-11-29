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
  } else if (message.content === `${prefix}beep`) {
    message.channel.send('Boop.');
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
});

//--------------------------------------------------------

client.login(process.env.TOKEN);