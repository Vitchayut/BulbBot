const Discord = require("discord.js");
const ytdl = require('ytdl-core');
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args, ops) => {
    
    if (!message.member.voiceChannel) return message.channel.send(`:no_entry: \`Please join a voice channel.\``);
    if (message.guild.me.voiceChannel) return message.channel.send(`:no_entry: \`Error, the bot is already connected to another music channel or a song is playing.\``);
    if (!args[0]) return message.channel.send(`:no_entry: \`Error, please enter a URL following the command.\``);

    let validate = await ytdl.validateURL(args[0]);
   
    if (!validate) return message.channel.send(`:no_entry: \`Error, please input a valid url following the command.\``);

    let info = await ytdl.getInfo(args[0]);
   
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));

    let playembed = new Discord.RichEmbed()
    .setColor(config.blue)
    .setAuthor(message.member.displayName, message.author.displayAvatarURL)
    .setTitle(`Now playing`)
    .setDescription(`${info.title}`)
    .setTimestamp()
    
    message.channel.send(playembed);
}

module.exports.help = {
  name: "play"
}
