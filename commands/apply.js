const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

let aReason = args.slice(0).join(" ");
if(!args[0] || args[0] == "help"){
message.reply(`:no_entry: \`Usage: !apply <application form>\``);
  return;
}

let respondEmbed = new Discord.RichEmbed()
.setAuthor(message.member.displayName, message.author.displayAvatarURL)
.setColor(config.green)
.setTimestamp()
.setDescription(`<:green_tick:566945998761361408> Successfully sent your application form to the HRs!\n:sunglasses::thumbsup: Please be patient!`);

let applyEmbed = new Discord.RichEmbed()
.setAuthor(`Application Form | ${message.author.tag}`, `${message.author.displayAvatarURL}`)
.setColor(config.blue)
.setTimestamp()
.setDescription(`**:airplane: Siam Smile:**\n${aReason}`);

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
reportschannel.send(applyEmbed);
message.channel.send(respondEmbed);

}

module.exports.help = {
  name: "apply"
}
