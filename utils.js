module.exports = function(callback) {

var data,
    options;

var list = [{}] // Data except region
var gtrends = [{}]; // regions

var fs = require('fs');

fs.readFile('./json/nbtweets_fillon_per_day.json', (err, data) => {
  if (err) throw err;
  var d = JSON.parse(data);
  d.map(function (value,index) { return d[index]['NBTWEETS']; });
});

listJson2 = [
  'nbtweets_fillon_per_day.json'
]

listTweet = [
  'nb_tweets_fillon_per_day.json',
  'nb_tweets_hamon_per_day.json',
  'nb_tweets_le_pen_per_day.json',
  'nb_tweets_melenchon_per_day.json',
  'nb_tweets_macron_per_day.json'
]

listRT = [
  'nb_retweets_fillon_per_day.json',
  'nb_retweets_hamon_per_day.json',
  'nb_retweets_le_pen_per_day.json',
  'nb_retweets_melenchon_per_day.json',
  'nb_retweets_macron_per_day.json'
]

listWeb = [
  'website_visits_fillon_per_day.json',
  'website_visits_hamon_per_day.json',
  'website_visits_le_pen_per_day.json',
  'website_visits_melenchon_per_day.json',
  'website_visits_macron_per_day.json'
]

listRegion = [
  'gtrends_alsace_per_day.json',
  'gtrends_aquitaine_per_day.json',
  'gtrends_auvergne_per_day.json',
  'gtrends_brittany_per_day.json',
  'gtrends_burgundy_per_day.json',
  'gtrends_centrevaldeloire_per_day.json',
  'gtrends_champagneardenne_per_day.json',
  'gtrends_corsica_per_day.json',
  'gtrends_franchecomte_per_day.json',
  'gtrends_iledefrance_per_day.json',
  'gtrends_languedocroussillon_per_day.json',
  'gtrends_limousin_per_day.json',
  'gtrends_lorraine_per_day.json',
  'gtrends_lowernormandy_per_day.json',
  'gtrends_midipyrenees_per_day.json',
  'gtrends_nordpasdecalais_per_day.json',
  'gtrends_paysdelaloire_per_day.json',
  'gtrends_picardy_per_day.json',
  'gtrends_poitoucharentes_per_day.json',
  'gtrends_provence_per_day.json',
  'gtrends_rhonealpes_per_day.json',
  'gtrends_uppernormandy_per_day.json'
]


function JsontoArray(file) {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(fs.readFileSync(file, 'utf8')));
  });
};

function JsontoArr(file, listvar, nom, domaine, nomcherche) {
  listvar[0][domaine] = {}
  JsontoArray(file).then((result) => {
    var variable = result.map(function (value,index) { return result[index][nomcherche]; });
    listvar[0][domaine][nom] = variable;
  });
};

function JsontoArrRegion(file, listvar, nom, domaine, nomcherche) {
  listvar[domaine] = {}
  JsontoArray(file).then((result) => {
    var variable = result.map(function (value,index) { return result[index][nomcherche]; });
    listvar[domaine][nom] = variable;
  });
};

for (var i = listRegion.length - 1; i >= 0; i--) {
  gtrends[0][listRegion[i]] = {};
  JsontoArrRegion('./json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'FIL', 'gtrends', 'Fillon');
  JsontoArrRegion('./json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'BHM', 'gtrends', 'BHM');
  JsontoArrRegion('./json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'MLP', 'gtrends', 'MLP');
  JsontoArrRegion('./json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'JLM', 'gtrends', 'JLM');
  JsontoArrRegion('./json/GTrends/'+listRegion[i], gtrends[0][listRegion[i]], 'MAC', 'gtrends', 'Macron');
}

JsontoArr('./json/Tweeter/'+listTweet[0], list, 'FIL', 'tweet', 'NBTWEETS');
JsontoArr('./json/Tweeter/'+listTweet[1], list, 'BNH', 'tweet', 'NBTWEETS');
JsontoArr('./json/Tweeter/'+listTweet[2], list, 'MLP', 'tweet', 'NBTWEETS');
JsontoArr('./json/Tweeter/'+listTweet[3], list, 'JLM', 'tweet', 'NBTWEETS');
JsontoArr('./json/Tweeter/'+listTweet[4], list, 'MAC', 'tweet', 'NBTWEETS');

JsontoArr('./json/Tweeter/'+listRT[0], list, 'FIL', 'RT', 'NBRETWEETS');
JsontoArr('./json/Tweeter/'+listRT[1], list, 'BNH', 'RT', 'NBRETWEETS');
JsontoArr('./json/Tweeter/'+listRT[2], list, 'MLP', 'RT', 'NBRETWEETS');
JsontoArr('./json/Tweeter/'+listRT[3], list, 'JLM', 'RT', 'NBRETWEETS');
JsontoArr('./json/Tweeter/'+listRT[4], list, 'MAC', 'RT', 'NBRETWEETS');

JsontoArr('./json/Websites/'+listWeb[0], list, 'FIL', 'web', 'Vue');
JsontoArr('./json/Websites/'+listWeb[1], list, 'BNH', 'web', 'Vue');
JsontoArr('./json/Websites/'+listWeb[2], list, 'MLP', 'web', 'Vue');
JsontoArr('./json/Websites/'+listWeb[3], list, 'JLM', 'web', 'Vue');
JsontoArr('./json/Websites/'+listWeb[4], list, 'MAC', 'web', 'Vue');

JsontoArr('./json/Facebook/fb_fans_change_per_day.json', list, 'FIL', 'fb', 'Fillon');
JsontoArr('./json/Facebook/fb_fans_change_per_day.json', list, 'MLP', 'fb', 'MLP');
JsontoArr('./json/Facebook/fb_fans_change_per_day.json', list, 'JLM', 'fb', 'JLM');
JsontoArr('./json/Facebook/fb_fans_change_per_day.json', list, 'MAC', 'fb', 'macron');
JsontoArr('./json/Facebook/fb_fans_change_per_day.json', list, 'BNH', 'fb', 'BNH');

JsontoArr('./json/Facebook/fb_fantotal_per_day.json', list, 'FIL', 'fan', 'Fillon');
JsontoArr('./json/Facebook/fb_fantotal_per_day.json', list, 'MLP', 'fan', 'MLP');
JsontoArr('./json/Facebook/fb_fantotal_per_day.json', list, 'JLM', 'fan', 'JLM');
JsontoArr('./json/Facebook/fb_fantotal_per_day.json', list, 'MAC', 'fan', 'macron');
JsontoArr('./json/Facebook/fb_fantotal_per_day.json', list, 'BNH', 'fan', 'BNH');

var data = {
    labels : [
    '1 Fév.',
    '2 Fév.',
    '3 Fév.',
    '4 Fév.',
    '5 Fév.',
    '6 Fév.',
    '7 Fév.',
    '8 Fév.',
    '9 Fév.',
    '10 Fév.',
    '11 Fév.',
    '12 Fév.',
    '13 Fév.',
    '14 Fév.',
    '15 Fév.',
    '16 Fév.',
    '17 Fév.',
    '18 Fév.',
    '19 Fév.',
    '20 Fév.',
    '21 Fév.',
    '22 Fév.',
    '23 Fév.',
    '24 Fév.',
    '25 Fév.',
    '26 Fév.',
    '27 Fév.',
    '28 Fév.'
    ],
    datasets: [
    {
    fillColor : 'rgba(242, 15, 5, 0.4)',
    strokeColor : "rgba(242, 15, 5, 0.8)",
    pointColor : "rgba(242, 15, 5, 1)",
    pointStrokeColor : "rgba(242, 25, 15, 0.8)",
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    hidden: true
    },
    {
    fillColor : 'rgba(82, 55, 140, 0.4)',
    strokeColor : "rgba(82, 55, 140, 0.8)",
    pointColor : "rgba(82, 55, 140, 1)",
    pointStrokeColor : "rgba(117, 95, 163, 1)",
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    hidden: true
    },
    {
    fillColor : 'rgba(242, 68, 114, 0.4)',
    strokeColor : "rgba(242, 68, 114, 0.8)",
    pointColor : "rgba(242, 68, 114, 1)",
    pointStrokeColor : "rgba(245, 105, 142, 1)",
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    hidden: true
    },
    {
    hidden: true,
    fillColor : 'rgba(21, 191, 191, 0.4)',
    strokeColor : "rgba(21, 191, 191, 0.8)",
    pointColor : "rgba(21, 191, 191, 1)",
    pointStrokeColor : "rgba(68, 204, 204, 1)",
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    hidden: true
    },
    {
    hidden: true,
    fillColor : 'rgba(8, 6, 255, 0.4)',
    strokeColor : "rgba(8, 6, 255, 0.8)",
    pointColor : "rgba(8, 6, 255, 1)",
    pointStrokeColor : "rgba(15, 12, 255, 1)",
    data : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    hidden: true
    }
    ]
    };

    var options = {
      responsive: true,
      maintainAspectRatio: false,
      scaleShowGridLines : false,
      datasetStrokeWidth : 1,
      pointDotStrokeWidth : 1,
      tooltipFontColor: "rgba(52,54,70,0.8)",
      tooltipFillColor: "rgba(255,255,255,1)",
      scaleFontColor : "rgba(224,224,224,0.6)",
    };
    var p = new Promise((resolve, reject) => {
      setTimeout(() => resolve(console.log([data, options, list, gtrends])),10000)
      });

    return p;
}