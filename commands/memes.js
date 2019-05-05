const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let memesembed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor('RANDOM')
  .setImage(body.url);

  message.channel.send(memesembed);

}

module.exports.help = {
  name: "memes"
}
