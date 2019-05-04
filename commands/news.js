const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const api = "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=06435bf9e4c845a8aad85f2a9b461b7c";
let config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    snekfetch.get(api).then(r => {
        let body = r.body;
        let id = Number(args[0]);
        if(!id) return message.channel.send(`:no_entry: \`Supply an ID!\``);
        if(isNaN(id)) return message.channel.send(`:no_entry: \`Supply a valid number!\``);
        
        let entry = body.find(post => post.id === id);
        if(!entry) return message.channel.send(`:no_entry: \`This entry does not exist!\``);
        
        let embed = new Discord.RichEmbed()
            .setAuthor(entry.title)
            .setDescription(entry.description)
            .setTimestamp()
            .setColor(config.blue);
            
        message.channel.send({embed: embed});
    });
}

module.exports.help = {
    name: "news"
}
