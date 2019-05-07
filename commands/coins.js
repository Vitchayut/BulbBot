const Discord = require("discord.js");
let config = require("../botconfig.json");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  let user = message.mentions.users.first() || message.author;

  if(user.user.bot) return message.reply(`:no_entry: \`You cannot do that with bots!\``);
  
  if(!coins[user.id]){
    coins[user.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[user.id].coins;
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(user.username, user.displayAvatarURL)
  .setColor(config.gold)
  .setDescription(`<:dogecoin:419079613499703296> \`${uCoins}\``)
  .setTimestamp();
  
  message.channel.send(coinEmbed);
  
}

module.exports.help = {
  name: "coins"
}
