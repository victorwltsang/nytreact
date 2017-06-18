var axios = require('axios');

var APIkey = "ae0891be919a4f558aa591c9f0e8ecd8";

var helpers = {

  runQuery: function(topic, startYear, endYear) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIkey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

    return axios.get(queryURL).then(function(response) {

      var articlesLimit = [];
      var allArticles = response.data.response.docs;
      var counter = 0;

      for (var i = 0; i < allArticles.length; i++) {

        if (counter > 4) {
          return articlesLimit;
        }

        if (allArticles[counter].headline.main && allArticles[counter].pub_date && allArticles[counter].web_url) {
          articlesLimit.push(allArticles[counter]);
          counter++;
        }
      }

      return articlesLimit;
    })

  },

  postArticle: function(title, date, url) {

    axios.post('/api/saved', {
      title: title,
      date: date,
      url: url
    }).then(function(results) {
      console.log(results);
      return (results);
    })
  }

}

module.exports = helpers;
