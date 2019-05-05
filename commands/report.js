const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const gold = botconfig.gold;

module.exports.run = async (bot, message, args) => {
message.delete();
if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "Kick Members");
let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return errors.cantfindUser(message);
let rreason = args.join(" ").slice(22);
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !report <user> <reason>\``);
  return;
}

let reportEmbed = new Discord.RichEmbed()
.setAuthor(`Report | ${rUser.user.tag}`, `${rUser.user.displayAvatarURL}`)
.setColor(orange)
.addField("Reported user", `${rUser}` ,true)
.addField("Reported by", `${message.author}` ,true)
.addField("Channel", message.channel ,true)
.setTimestamp()
.addField("Reason", rreason);

let channelnotdetect = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(red)
.setTimestamp()
.setDescription(`<:red_tick:566946004948090880> \`Can't find logs channel, set a logs channel first!\`\n<a:righter_arrow:518744759506960406> \`Usage: !setlog <channel>\` <a:lefter_arrow:518744793489342464>`);
let rcs = JSON.parse(fs.readFileSync("./rcs.json", "utf8"));
let reportschannel = "";
if(rcs[message.guild.id]) reportschannel = message.guild.channels.find(c => c.name === rcs[message.guild.id].rc);
if(!reportschannel) return message.channel.send(channelnotdetect);

message.delete().catch(O_o=>{});
reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
