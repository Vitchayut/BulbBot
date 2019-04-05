const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`);

  //var images = ["https://cdn.shibe.online/shibes/419c043dcc651d62884003bb69b38dc486503934.jpg", "https://cdn.shibe.online/shibes/b5db3ecf351e8a64f97fb3ef204eb0ef3e1530a7.jpg", "https://cdn.shibe.online/shibes/4138efb507cf3f514f13fbac8e4455adbccbefc4.jpg", "https://cdn.shibe.online/shibes/72351de78d2ca6f2c35d2d61443b1202386d532a.jpg", "https://cdn.shibe.online/shibes/6be363775b809a430a3626f6e69c749a9a6dfb3e.jpg", "https://cdn.shibe.online/shibes/88c34963f6929328c23fd7b092c7d6f2ecbeb80e.jpg", "https://cdn.shibe.online/shibes/1286bc4da9827756db0aa51c52b3d6f56dc76c5f.jpg", "https://cdn.shibe.online/shibes/1ff84662419fa3bf217df5478af40c9f30ac7030.jpg", "https://cdn.shibe.online/shibes/df33de7c98aa2dc2cfcd5d2da0a560125c2cc732.jpg", "https://cdn.shibe.online/shibes/2a78876c67632b89eb8c628813b21c1baf5c7ccb.jpg", "https://cdn.shibe.online/shibes/7b293edbf69991901d33a9d7a6b612d837eac590.jpg", "https://cdn.shibe.online/shibes/62965acf429196839ad3b5466632fd5d21d68e05.jpg", "https://cdn.shibe.online/shibes/4967ac961170da7ce430bc598d8613943d16fa7d.jpg", "https://cdn.shibe.online/shibes/a3154631cff2b7ea3eae1ff65752af683f5054bc.jpg", "https://cdn.shibe.online/shibes/71b4155ece207055c547315cc206edd75418e9ab.jpg", "https://cdn.shibe.online/shibes/0e97728f0f6b89a537857abb6feb52e9a4134bb7.jpg", "https://cdn.shibe.online/shibes/a5a6a03688473d9775a38ca93ab80c570c268ca9.jpg", "https://cdn.shibe.online/shibes/2a420aaadd6b77f9cd4f808ce8be5c21e90ff2b7.jpg"];
  //var rand = Math.floor(Math.random() * images.length);
  //var randomImage = images[rand];
  let dogembed = new Discord.RichEmbed()
  .setColor("#ffa202")
  .setDescription("<a:Confused_Dog:511180901934301204> Here's the doggo! <a:cooldoge:511180988601073665>")
  .addField("Image", body);

  message.channel.send(dogembed);

}

module.exports.help = {
  name: "doge"
}
