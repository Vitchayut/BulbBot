const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("./botconfig.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Money = require("./models/money.js");
const serverStats = {
  guildID: process.env.guildID,
  totalUsersID: process.env.totalUsersID
};
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
//let coins = require("./coins.json");
let cooldown = new Set();
let cdseconds = 3;

fs.readdir("./commands/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
  
}); 

bot.on("ready", async () => {
  console.log(`${bot.user.username} is loaded and online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`with _ItsNuaZ. | !help`);
  
});

bot.on('guildMemberAdd', member => {
  // Welcome message, with cool embed and custom emojis.
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome-goodbye👋');
  if (!channel) return;
  let welcomeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:addMember:518733392402186240> Welcome to the server, **${member.user.tag}**`, `<a:cooldoge:511180988601073665> Thanks for joining with us, ${member.user.username}`)
  .setColor(`#409cd9`)
  channel.send(welcomeembed);
  
  // We also want to return if the member's guild isn't the same as the one with serverStats
  if (member.guild.id !== serverStats.guildID) return;
  
  // Now, we want to update the voiceChannel names
  bot.channels.get(serverStats.totalUsersID).setName(`Member Count : ${member.guild.memberCount}`);
  
  // DM a new user, similar to the welcome-goodbye feature.
  const dmchannel = member
  if (!dmchannel) return;
  let dmembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setThumbnail(member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<a:cooldoge:511180988601073665> Thanks for joining with us, ${member.user.username}`, `<a:Confused_Dog:511180901934301204> To get verified, head over to <#499469631266881538> and type \`!verify\` to receive <@&426223113605480449>.`)
  .setColor(`#409cd9`)
  dmchannel.send(dmembed);
  
});

bot.on('guildMemberRemove', member => {
  // Goodbye message, with cool embed and custom emojis.
  const channel = member.guild.channels.find(ch => ch.name === '👋welcome-goodbye👋');
  if (!channel) return;
  let goodbyeembed = new Discord.RichEmbed()
  .setAuthor(member.user.username, member.user.displayAvatarURL)
  .setTimestamp()
  .addField(`<:remMember:518733397783347200> Goodbye, **${member.user.tag}**`, `<a:wave:512259019386126337> We hope to see you again, ${member.user.username}`)
  .setColor(`#ff3320`)
  channel.send(goodbyeembed);
  
  // We also want to return if the member's guild isn't the same as the one with serverStats
  if (member.guild.id !== serverStats.guildID) return;
  
  // Now, we want to update the voiceChannel names
  bot.channels.get(serverStats.totalUsersID).setName(`Member Count : ${member.guild.memberCount}`);
  
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  // Prefixes config.
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  
  let prefix = prefixes[message.guild.id].prefixes;
  
  /** Economy config.
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }**/
  
  // Blacklisted words.
  let blacklisted = ["fuck", "faggot", "nigga", "nigger", "pussy", "rape", "dick", "pussi", "porn", "dildo", "nazi", "hitler", "penis", "boob", "cunt", "cum", "bitch", "nude", "cock", "twat", "hentai", "anal", "spank", "blowjob", "futanari", "vagina"];
  let foundInText = false;
  for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
  }

  if (foundInText) {
  if(message.member.hasPermission("MANAGE_MESSAGES")) return;
  if(message.guild.id = process.env.guild) return;
      message.delete();
      let badword = new Discord.RichEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setDescription("<a:hyperpinged:511872097304313859> Message deleted!")
      .setColor("#f44242")
      .addField("<:Content_Blocked:523798974876876810> \`Your message contains inappropriate letters or words, deleted.\` <a:BoiGifFixed:511160003667689484>", message.author)
      message.channel.send(badword).then(msg => {msg.delete(10850)});
  }
  
  // Blacklisted off-site links.
  let blacklistedA = ["discord.gg", "robuxgiver.ml"];
  let foundInTextA = false;
  for (var i in blacklistedA) {
      if (message.content.toLowerCase().includes(blacklistedA[i].toLowerCase())) foundInTextA = true;
  }

  if (foundInTextA) {
    if(message.member.hasPermission("MANAGE_MESSAGES")) return;
    if(message.guild.id = process.env.guild) return;
    if (message.channel.name == '📢adversting📢') return;
      message.delete();
      let offsitestuff = new Discord.RichEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setDescription("<a:hyperpinged:511872097304313859> Message deleted!")
      .setColor("#f44242")
      .addField("<:Content_Blocked:523798974876876810> \`Your message contains off-site links, deleted.\` <a:BoiGifFixed:511160003667689484>", message.author)
      message.channel.send(offsitestuff).then(msg => {msg.delete(10850)});
  }

  if(!message.content.startsWith(prefix)) return;
  // Cooldown feature.
  if(cooldown.has(message.author.id)){
    message.delete();
    let cooldownbotsystem = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setDescription("<a:hyperpinged:511872097304313859> Bot cooldown!")
    .setColor("#f44242")
    .addField("<a:timer:511872188341682187> \`You have to wait for 3 seconds!\` <a:BoiGifFixed:511160003667689484>", message.author,true)
    return message.channel.send(cooldownbotsystem).then(msg => {msg.delete(6850)});
  }
  if(!message.member.hasPermission("MANAGE_MESSAGES")){
    cooldown.add(message.author.id);
  }
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);
} else {
  let coinstoadd = Math.ceil(Math.random() * 50);
  Money.findOne({
    userID: message.author.id,
    serverID: message.guild.id
  }, (err, money) => {
    if(err) console.log(err);
    if(!money){
      const newMoney = new Money({
        userID: message.author.id,
        serverID: message.guild.id,
        money: coinstoadd
      })
      
      newMoney.save().catch(err => console.log(err));
    }else {
      money.money = money.money + coinstoadd;
      money.save().catch(err => console.log(err));
    }
  })
}  

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

});

bot.login(process.env.token);
