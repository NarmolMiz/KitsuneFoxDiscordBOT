const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot as been planted !!')
})


//-------------------------------------------------------


client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong.');
  }
});

//--------------------------------------------------------

client.login(process.env.TOKEN);