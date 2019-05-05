const Discord = require("discord.js");
let config = require("../botconfig.json");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.newsapi);

module.exports.run = async (bot, message, args) => {

newsapi.v2.topHeadlines({
  q: 'trump',
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
});

}
module.exports.help = {
  name: "news"
}
