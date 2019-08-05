const Discord = require("discord.js");
/**const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
});
const Log = require("../models/log.js");**/
const errors = require("../utils/errors.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return errors.cantfindUser(message);
//if(rUser = something) return errors.cantreportAuthor(message);
let rReason = args.join(" ").slice(22);
if(rUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, rUser, "Manage Messages");
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !report <user> <reason>\``);
  return;
}
let  = message.guild.id

let respondEmbed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.green)
.setTimestamp()
.setDescription(`<:green_tick:566945998761361408> Successfully reported that user to the moderation team!\n:sunglasses::thumbsup: Thanks for your support!`);

let reportEmbed = new Discord.RichEmbed()
.setAuthor(`Report | ${rUser.user.tag}`, `${rUser.user.displayAvatarURL}`)
.setColor(config.orange)
.setTimestamp()
.setDescription(`**Reported user:** ${rUser} (${rUser.id})\n**Reported by:** <@${message.author.id}> (${message.author.id})\n**Reason:** ${rReason}`);

let channelnotdetect = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.red)
.setTimestamp()
.setDescription(`<:red_tick:566946004948090880> \`Can't find logs channel, set a logs channel first!\`\n<a:righter_arrow:518744759506960406> \`Usage: !setlog - in the channel you wanted to set.\` <a:lefter_arrow:518744793489342464>`);
  
message.channel.send(respondEmbed);
message.delete().catch(O_o=>{});
  
const channel = message.guild.channels.find(ch => ch.name === '📋staff-log📋');
channel.send(reportEmbed)
if (!channel) return message.channel.send(reportEmbed);
  
/**Log.findOne({
    guildID: message.guild.id, 
    channelID: message.channel.id
  }, (err, log) => {
    if(err) console.log(err);
  
    if(!log) return message.channel.send(channelnotdetect);
    message.channel.send(respondEmbed);
    let logChannel = message.guild.channels.find(c => c.id === log.channelID);
    logChannel.send(reportEmbed);
  })**/


}

module.exports.help = {
  name: "report"
}
