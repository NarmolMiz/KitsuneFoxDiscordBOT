const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '/'

client.on('ready', () => {
  console.log(`Bot has been planted, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`);
})

//-------------------------------------------------------

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`);
});

//-----------------------------------------------------

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`En route sur ${client.guilds.size} serveurs`);
});

//----------------------------------------------------

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  const embed = {
    "title": "Bienvenue ${member}",
    "color": 5504768,
    "timestamp": "2019-12-01T09:15:17.627Z",
    "footer": {
      "icon_url": "data:image/jpeg;base64,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",
      "text": "By [BOT] Kitsune Fox"
    },
    "thumbnail": {
      "url": "message.author.avatarURL"
    },
    "author": {
      "name": "La communautée,",
      "url": "guild.iconURL",
      "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
      {
        "name": "Bienvenue sur le serveur ${guild}, ${} /n Tu est le ${guild.memberCount} sur ce serveur",
      }
    ]
  };
  channel.send({ embed });
});

//---------------------------------------------------


client.on("message", async message => {

  if (message.author.bot) return;

  if (message.content === `${prefix}ping`) {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
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

  } else if (message.content === `${prefix}anonyme url`) {
    message.channel.send(message.attachments.url);
    console.log('Used command : anonyme url')

  } else if (message.content === `${prefix}heure`) {
    message.channel.send(message.createdTimestamp)
    message.channel.send('Utilise ce site pour consulter la date !! :joy: : https://pixelatomy.com/snow-stamp/');
    console.log('Used command : heure')

  } else if (message.content.startsWith`${prefix}bannir`) {
    guild.ban(user, { days: 7, reason: 'Il devait y aller' })
      .then(console.log)
      .catch(console.error);
  }
});

//--------------------------------------------------------



//--------------------------------------------------------

client.login(process.env.TOKEN);