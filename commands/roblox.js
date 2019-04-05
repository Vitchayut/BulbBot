const Discord = require("discord.js");
const request = require("request");
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if (args[0] != null) {
        var url = 'https://api.roblox.com/users/get-by-username?username=' + args[0];
                request(url, function(err, response, body2) {
                if(err) {
                    console.log(err);
                    return message.reply('Error...');
                }
                    try {
                      var body2 = JSON.parse(body2);
                   } catch(err) {
                      console.log(err);
                      let notvalidplayer = new Discord.RichEmbed()
                      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                      .setColor(config.red)
                      .setDescription(`:no_entry: That is not a valid roblox player.`);
                      message.reply(notvalidplayer);
                      return;
                   }


                var names = [];

                let foundfetchnamesembed = new Discord.RichEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL)
                .setColor(config.gold)
                .setTitle("<a:Green:511136179702333440> Fetching names for " + args[0]);
                message.channel.send(foundfetchnamesembed).then(m => m.delete(1000));
                var url = 'https://api.roblox.com/Users/' + body2.Id;
                request(url, function(err, response, body) {
                    if(err) {
                        console.log(err);
                        return message.reply('Error...');
                    }
                    /**var body = JSON.parse(body);

                    var i = 0;

                    for (var i = 0; i < body.length; i++) {
                        names.push(body[i].Username);
                    }

                    var friends = names.join(", ");**/
                      
                      if (body2.IsOnline = false) userstatus = '<:discord_invisible:553168206249066496> \`Offline\`';
                      if (body2.IsOnline = true) userstatus = '<:discord_online:553168186925907980> \`Online\`';
                    
                      const embed = new Discord.RichEmbed()
                      .setTitle(`<:roblox:563611416473501716> **` + body2.Username + `'s profile` + `**`)
                      .setURL("https://www.roblox.com/users/" + body2.Id + "/profile")
                      .setAuthor(body2.Username, "https://www.roblox.com/headshot-thumbnail/image?userId=" + body2.Id + "&width=420&height=420&format=png")
                      /*
                       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                       */
                      .setColor(config.red)
                      .setDescription(" ")
                      .setThumbnail("https://www.roblox.com/Thumbs/BCOverlay.ashx?username=" + body2.Username)
                      .setImage("https://www.roblox.com/Thumbs/Avatar.ashx?x=200&y=200&userId=" + body2.Id)
                      /*
                       * Takes a Date object, defaults to current date.
                       */
                      .setTimestamp()
                      .addField(":name_badge: Username", `\`` + body2.Username + `\``, true)                    
                      .addField("<:discord_online:553168186925907980> Status", userstatus, true)
                      .addField(":card_index: ID", `\`` + body2.Id + `\``, true)
                      /*
                       * Inline fields may not display as inline if the thumbnail and/or image is too big.
                       */
                      .addField(":mag_right: Past Usernames", `\`Coming Soon!\``, true)
                      .addField(":blue_book: Friends", `\`Coming Soon!\``, true)
                      .addField(":calendar: Join Date", `\`Coming Soon!\``, true)
                      /*
                       * Blank field, useful to create some space.
                       */

                      message.channel.send({embed});
                    names = [];
                });
                        });
    } else {
      let notvaliduses = new Discord.RichEmbed()
      .setAuthor(message.member.displayName, message.author.displayAvatarURL)
      .setColor(config.red)
      .setDescription(`:no_entry: \`Usage: !roblox (Player)\``);
        message.channel.send(notvaliduses);
    }
}

module.exports.help = {
  name: "roblox"
}
