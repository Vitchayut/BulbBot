const Discord = require("discord.js");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    message.delete();
    let role = message.guild.roles.find(role => role.name === 'Verified Member ✔️');
    if (message.channel.name !== '✅verification✅') return message.reply(`:no_entry: \`You must go to the verification channel.\`\n<a:Question:521253226754867224> \`Or create a text channel named as ✅verification✅\``);
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor(config.red)
            .setDescription('<:red_tick:566946004948090880> \`Your account has already been verified!\`')
            .setTimestamp()
        return message.channel.send((verifyEmbed)).then(message => message.delete(4000));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor(config.green)
            .setDescription('<:green_tick:566945998761361408> \`Your account has been successfully verified.\`')
            .setTimestamp()
        return message.channel.send((verifyEmbed));
    }

}
module.exports.help = {
  name: "verify"
}
