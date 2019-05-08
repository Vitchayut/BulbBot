const Discord = require("discord.js");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Money = require("../models/money.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
  //!pay Steve 300
  //await message.delete();
  
  let target = message.mentions.members.first();
  if(!target) return message.reply(`:no_entry: \`Please mention a member to donate!\``).then(r => r.delete(10000));
  if(target.bot) return message.reply(`:no_entry: \`You cannot do that with bots!\``);
  let price = parseInt(args[1]);
  if(!price || isNaN(price) || price < 1) return message.reply(`:no_entry: \`Please try that again!\``).then(r => r.delete(10000));
  
  let embed = new Discord.RichEmbed()
    .setColor(config.gold)
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setDescription(`Successfully paid <:dogecoin:419079613499703296> \`${price}\` to ${target}`)
    .setTimestamp();
    
  Money.findOne({
    userID: message.author.id, 
    serverID: message.guild.id
    }, (err, res) => {
      if (err) console.log(err);
      if (!res || res.money < price) return message.reply(`:no_entry: \`Sorry but you don't have enough coins for that!\``).then(r => r.delete(10000));
      
      /**Money.findOne({
        userID: target.id, 
        serverID: message.guild.id
      }, (err, targetres) => {
        if(err) console.log(err)
        if(!targetres || targetres.money < price) return message.reply(`:no_entry: \`Sorry but the target doesn't have enough coins for that!\``).then(r => r.delete(10000));
     
        const filter = m => m.author.id === target.id;
        message.channel.send(target + ` you have been challenged by ` + `\`${message.author.username}\`` + `!\nTo accept, type \`Accept\`.\nYou have 20 seconds!`).then(r => r.delete(20000));
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000
        }).then(collected => {
          if (collected.first().content.toLowerCase() === 'cancel') return message.reply(`:white_check_mark: \`Canceled!\``).then(r => r.delete(10000));
          if (collected.first().content.toLowerCase() === 'accept'){
            let chance = Math.floor(Math.random * 100) + 1;
            if (chance < 50) {
              //sender wins
              targetres.money = targetres.money + price;
              res.money = res.money - price;
              //embed.addField(`Winner`, target);
              //embed.addField(`Loser`, message.author);
            } else {
              //target wins
              targetres.money = targetres.money + price;
              res.money = res.money - price;
              //embed.addField(`Winner`, target);
              //embed.addField(`Loser`, message.author);
            }**/
            //end
            
            targetres.save().catch(err => console.log(err));
            res.save().catch(err => console.log(err));
            message.channel.send(embed);
          }
        }).catch(err => {
          console.log(err)
          message.reply(`:no_entry: \`Time limit exceeded.\``).then(r => r.delete(5000));
        })
     
      })
      
    
    
    });
  
  //message await stuff that needs to happen pretty much last
  
  
  
}

module.exports.help = {
  name: "pay"
}
