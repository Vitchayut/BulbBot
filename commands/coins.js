const Discord = require("discord.js");
let config = require("../botconfig.json");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  let user;
	// If the user mentions someone, display their balance. If they just run the command without mentions, it will show their own balance.
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  
  let uCoins = coins[user.id].coins;
  
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor(config.gold)
  .setDescription(`<:dogecoin:419079613499703296> \`${uCoins}\``)
  .setTimestamp();
  
  message.channel.send(coinEmbed);
  
}

module.exports.help = {
  name: "coins"
}
