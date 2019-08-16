const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (args.length  < 1) return message.reply("You must supply a Guild ID");
  if (message.author.id !== "571535704979669033") return message.reply(`:no_entry: \`No permission to use this command!\``);
  client.guilds.get(args.join(" ")).leave()
  .then(g => console.log(`Left the guild ${g}`)).catch(console.error);
  message.reply(`:green_tick: \`Successfully left that guild!\``);
  
}

module.exports.help = {
  name: "forceleave"
}
