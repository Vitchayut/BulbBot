const Discord = require("discord.js");
const errors = require("../utils/errors.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew @Mod
  if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  if (args[0] == "help") {
    message.reply(`:no_entry: \`Usage: !addrole <user> <role>\``);
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply(`:no_entry: \`Specify a role!\``);
  let gRole = message.mentions.roles.first() || message.guild.roles.find(`name`, args[1]);
  if (!gRole) return message.reply(`:no_entry: \`Couldn't find that role.\``);

  if (rMember.roles.has(gRole.id)) return message.reply(`:no_entry: \`They already have that role.\``);
  await (rMember.addRole(gRole.id));

  try {
    let respondEmbed = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.green)
    .setTimestamp()
    .setDescription(`<:green_tick:566945998761361408> Successfully added the role, ${gRole} to <@${rMember.id}>`);
    message.channel.send(respondEmbed);
    
    let respondEmbedDM = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.green)
    .setTimestamp()
    .setDescription(`<:green_tick:566945998761361408> \`You got the new role, ${gRole.name}\``);
    await rMember.send(respondEmbedDM);
  } catch (e) {
    console.log(e.stack);
    let respondEmbedGuild = new Discord.RichEmbed()
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setColor(config.green)
    .setTimestamp()
    .setDescription(`<:green_tick:566945998761361408> Successfully added the role, ${gRole} to <@${rMember.id}>`);
    message.channel.send(respondEmbedGuild);
  }
}

module.exports.help = {
  name: "addrole"
}
