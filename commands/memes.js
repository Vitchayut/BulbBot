const Discord = require("discord.js");
//const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  //let {body} = await superagent
  //.get(`https://api-to.get-a.life/meme`);
  let cat = `https://referralrock.com/blog/wp-content/uploads/2017/07/cat.jpg`;
  
  let memesembed = new Discord.RichEmbed()
  .setAuthor(message.member.displayName, message.author.displayAvatarURL)
  .setColor('RANDOM')
  .setImage(cat);

  message.channel.send(memesembed);

}

module.exports.help = {
  name: "memes"
}
