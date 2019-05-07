const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Money = require("../models/money.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  await message.delete();
  
  Money.findOne({
    userID: message.author.id, 
    serverID: message.guild.id
  }, (err, money) => {
    if(err) console.log(err);
    
    let embed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.gold)
    .setDescription(``)
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
  name: "coins"
}
