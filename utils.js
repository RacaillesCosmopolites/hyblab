module.exports = function(app, express) {
  /*
   *  @Desc: Module pour gérer le render des
   *  différentes pages.
   */

   var module = {};

   var datamod = require('./makina_corpus/data.js')(app, express);

  var list = [{}]; // Data except region
  var gtrends = [{}]; // regions

  var listTweet = datamod.listTweet;
  var listRT = datamod.listRT;
  var listWeb = datamod.listWeb;
  var listRegion = datamod.listRegion;

  var JsontoArray = datamod.JsontoArray; 
  var JsontoArr = datamod.JsontoArr; 
  var JsontoArrRegion = datamod.JsontoArrRegion; 


  /*
   * @Title: JSON to Data PART
   * @Desc: To convert each JSON file into a javascript's variable
   */

  // Regions
  for (var i = listRegion.length - 1; i >= 0; i--) {
    gtrends[0][listRegion[i]] = {};
    JsontoArrRegion('./makina_corpus/json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'FIL', 'gtrends', 'Fillon');
    JsontoArrRegion('./makina_corpus/json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'BHM', 'gtrends', 'BHM');
    JsontoArrRegion('./makina_corpus/json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'MLP', 'gtrends', 'MLP');
    JsontoArrRegion('./makina_corpus/json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'JLM', 'gtrends', 'JLM');
    JsontoArrRegion('./makina_corpus/json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'MAC', 'gtrends', 'Macron');
  }

  // Tweets
  JsontoArr('./makina_corpus/json/Tweeter/'+listTweet[0], list, 'FIL', 'tweet', 'NBTWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listTweet[1], list, 'BNH', 'tweet', 'NBTWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listTweet[2], list, 'MLP', 'tweet', 'NBTWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listTweet[3], list, 'JLM', 'tweet', 'NBTWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listTweet[4], list, 'MAC', 'tweet', 'NBTWEETS');

  // Retweets
  JsontoArr('./makina_corpus/json/Tweeter/'+listRT[0], list, 'FIL', 'RT', 'NBRETWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listRT[1], list, 'BNH', 'RT', 'NBRETWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listRT[2], list, 'MLP', 'RT', 'NBRETWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listRT[3], list, 'JLM', 'RT', 'NBRETWEETS');
  JsontoArr('./makina_corpus/json/Tweeter/'+listRT[4], list, 'MAC', 'RT', 'NBRETWEETS');

  // Official Websites
  JsontoArr('./makina_corpus/json/Websites/'+listWeb[0], list, 'FIL', 'web', 'Vue');
  JsontoArr('./makina_corpus/json/Websites/'+listWeb[1], list, 'BNH', 'web', 'Vue');
  JsontoArr('./makina_corpus/json/Websites/'+listWeb[2], list, 'MLP', 'web', 'Vue');
  JsontoArr('./makina_corpus/json/Websites/'+listWeb[3], list, 'JLM', 'web', 'Vue');
  JsontoArr('./makina_corpus/json/Websites/'+listWeb[4], list, 'MAC', 'web', 'Vue');

  // Facebook fans
  JsontoArr('./makina_corpus/json/Facebook/fb_fans_change_per_day.json', list, 'FIL', 'fb', 'Fillon');
  JsontoArr('./makina_corpus/json/Facebook/fb_fans_change_per_day.json', list, 'MLP', 'fb', 'MLP');
  JsontoArr('./makina_corpus/json/Facebook/fb_fans_change_per_day.json', list, 'JLM', 'fb', 'JLM');
  JsontoArr('./makina_corpus/json/Facebook/fb_fans_change_per_day.json', list, 'MAC', 'fb', 'macron');
  JsontoArr('./makina_corpus/json/Facebook/fb_fans_change_per_day.json', list, 'BNH', 'fb', 'BNH');

  // total Facebook fans
  JsontoArr('./makina_corpus/json/Facebook/fb_fantotal_per_day.json', list, 'FIL', 'fan', 'Fillon');
  JsontoArr('./makina_corpus/json/Facebook/fb_fantotal_per_day.json', list, 'MLP', 'fan', 'MLP');
  JsontoArr('./makina_corpus/json/Facebook/fb_fantotal_per_day.json', list, 'JLM', 'fan', 'JLM');
  JsontoArr('./makina_corpus/json/Facebook/fb_fantotal_per_day.json', list, 'MAC', 'fan', 'macron');
  JsontoArr('./makina_corpus/json/Facebook/fb_fantotal_per_day.json', list, 'BNH', 'fan', 'BNH');

  // Graphdata
  var data = datamod.data;
  var options = datamod.options;

  module.graph = function(callback) {
    return app.render(
      'graph.ejs', 
      { 
        datain: JSON.stringify(data), 
        optionin: JSON.stringify(options),
        data2: JSON.stringify(list),
        region: JSON.stringify(gtrends)
      }, 
      callback);
  };

  return module;
}
