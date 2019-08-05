const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const fs = require("fs");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const gold = botconfig.gold;

module.exports.run = async (bot, message, args) => {
//await message.delete();
if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "Kick Members");
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return errors.cantfindUser(message);
let kReason = args.join(" ").slice(22);
if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "Manage Messages");
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !kick <user> <reason>\``);
  return;
}

let kickEmbed = new Discord.RichEmbed()
.setAuthor(`Kick | ${kUser.user.tag}`, `${kUser.user.displayAvatarURL}`)
.setColor(gold)
.setTimestamp()
.setDescription(`**Kicked user:** ${kUser} (${kUser.id})\n**Kicked by:** <@${message.author.id}> (${message.author.id})\n**Reason:** ${kReason}`)

let channelnotdetect = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(red)
.setTimestamp()
.setDescription(`<:red_tick:566946004948090880> \`Can't find logs channel, set a logs channel first!\`\n<a:righter_arrow:518744759506960406> \`Usage: !setlog <channel>\` <a:lefter_arrow:518744793489342464>`);

message.delete().catch(O_o=>{});
message.guild.member(kUser).kick(kReason);

const channel = message.guild.channels.find(ch => ch.name === '📋staff-log📋');
channel.send(kickEmbed)
if (!channel) return message.channel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
