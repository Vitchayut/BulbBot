const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return errors.cantfindUser(message);
if(rUser.id = message.author.id) return errors.cantreportAuthor(message);
let rReason = args.join(" ").slice(22);
if(rUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, rUser, "Manage Messages");
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !report <user> <reason>\``);
  return;
}

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
.setDescription(`<:red_tick:566946004948090880> \`Can't find logs channel, set a logs channel first!\`\n<a:righter_arrow:518744759506960406> \`Usage: !setlog <channel>\` <a:lefter_arrow:518744793489342464>\n <a:Question:521253226754867224> If you dont have permission to do that action, then contact your staff member to do it!`);
let rcs = JSON.parse(fs.readFileSync("./rcs.json", "utf8"));
let reportschannel = "";
if(rcs[message.guild.id]) reportschannel = message.guild.channels.find(c => c.name === rcs[message.guild.id].rc);
if(!reportschannel) return message.channel.send(channelnotdetect);

message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed);
message.channel.send(respondEmbed);

}

module.exports.help = {
  name: "report"
}
