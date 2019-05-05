const Discord = require("discord.js");
let config = require("../botconfig.json");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.newsapi);

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
  q: 'bitcoin',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
})
})
});

}

module.exports.help = {
  name: "news"
}