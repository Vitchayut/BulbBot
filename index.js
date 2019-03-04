const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with bepis. | !help`);
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome👋');
  if (!channel) return;
  let welcomeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:addMember:518733392402186240> Welcome to the server, **${member.user.tag}**`, `<a:cooldoge:511180988601073665> Thanks for joining with us, ${member}`)
  .setColor(`#409cd9`)
  channel.send(welcomeembed);
});


bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome👋');
  if (!channel) return;
  let goodbyeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:remMember:518733397783347200> Goodbye, **${member.user.tag}**`, `<a:wave:512259019386126337> We hope to see you again, ${member}`)
  .setColor(`#ff3320`)
  channel.send(goodbyeembed);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send(`:ping_pong: Pong! \`${bot.pings[0]}ms\``);
  }
  
  if (cmd === `${prefix}help`){
    let DM = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(message.member.username, message.author.displayAvatarURL)
    .setDescription(`:mailbox_with_mail:  I have private messaged you a list of commands!`)
    .setTimestamp()
    message.channel.send(DM);
    
    let helpembed = new Discord.RichEmbed()
    .setColor(`#409cd9`)
    .setAuthor(`Commands & Guides`, `message.author.displayAvatarURL`)
    .addField(`:desktop: General Commands`, `${prefix}help - Show a list of commands & guides to your DM.\n${prefix}ping - Show the current bot ping/ms.`)
    .setTimestamp()
    message.author.send(helpembed);
  }
});

bot.login(process.env.token);
