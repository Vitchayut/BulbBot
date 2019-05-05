const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "Administrator");
  if (args[0] == "help") {
    message.reply(`:no_entry: \`Usage: !addrole <user> <role>\``);
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply(`:no_entry: \`Specify a role!\``);
  let gRole = message.mentions.roles.first() || message.guild.roles.find(`name`, args[1]);
  if (!gRole) return message.reply(`:no_entry: \`Couldn't find that role.\``);

  if (rMember.roles.has(gRole.id)) return message.reply(`:no_entry: \`They already have that role.\``);
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`<:green_tick:566945998761361408> \`${gRole.name}\``)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`<:green_tick:566945998761361408> \`R.I.P to <@${rMember.id}>, their role ${gRole.name} have been taken away!\nWe tried to DM them, but their DMs are locked.\``)
  }
}

module.exports.help = {
  name: "removerole"
}
