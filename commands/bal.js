const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Money = require("../models/money.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  //!bal Steve
  await message.delete();
  
  let userBalance = message.mentions.users.first() || message.author;
  
  if(userBalance.bot) return message.reply(`:no_entry: \`You cannot do that with bots!\``);
  
  Money.findOne({
    userID: userBalance.id, 
    serverID: message.guild.id
  }, (err, money) => {
    if(err) console.log(err);
    
    let embed = new Discord.RichEmbed()
    .setAuthor(userBalance.username, userBalance.displayAvatarURL)
    .setColor(config.gold)
    .setTimestamp();
    if(!money){
      embed.setDescription(`<:dogecoin:419079613499703296> \`0\``);
      return message.channel.send(embed);
    }else {
      embed.setDescription(`<:dogecoin:419079613499703296> \`${money.money}\``);
    }
  })
  
}

module.exports.help = {
  name: "bal"
}
