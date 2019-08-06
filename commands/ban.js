const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const fs = require("fs");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {
//await message.delete();
if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "Ban Members");
let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!bUser) return errors.cantfindUser(message);
if(bUser.id === bot.user.id) return errors.botuser(message);
let bReason = args.join(" ").slice(22);
if(!bReason) return errors.noReason(message);
if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "Manage Messages");
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !ban <user> <reason>\``);
  return;
}

let banEmbed = new Discord.RichEmbed()
.setAuthor(`Ban | ${bUser.user.tag}`, `${bUser.user.displayAvatarURL}`)
.setColor(red)
.setTimestamp()
.setDescription(`**Banned user:** ${bUser} (${bUser.id})\n**Banned by:** <@${message.author.id}> (${message.author.id})\n**Reason:** ${bReason}`)

let channelnotdetect = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(red)
.setTimestamp()
.setDescription(`<:red_tick:566946004948090880> \`Can't find logs channel, set a logs channel first!\`\n<a:righter_arrow:518744759506960406> \`Usage: !setlog <channel>\` <a:lefter_arrow:518744793489342464>`);

message.delete().catch(O_o=>{});
message.guild.member(bUser).ban(bReason);

const logChannel = message.guild.channels.find(ch => ch.name === '📋staff-log📋');
if (!logChannel) return message.channel.send(banEmbed);
logChannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
