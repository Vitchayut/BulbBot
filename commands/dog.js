const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://dog.ceo/api/breeds/image/random`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<a:Confused_Dog:511180901934301204> Here's the doggo! <a:cooldoge:511180988601073665>")
  .setImage(body.message);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "dog"
}
