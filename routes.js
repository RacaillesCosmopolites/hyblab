module.exports = function(app, express) {
  // Public directory
  console.log(__dirname);
  app.use(express.static(__dirname + '/public'));

  var data,
    options;

  var list = [{}] // Data except region
  var gtrends = [{}]; // regions

  var utils = require('./utils.js');

function getInfos() {
  var p = new Promise((resolve, reject) => {
    utils((err, result) => {
      data = result[0];
      options = result[1];
      list = result[2];
      gtrends = result[3];
    });
    resolve();
  });
  return p;
}

getInfos().then(() => {
  app.render('graph.ejs', { datain: JSON.stringify(data), optionin: JSON.stringify(options) }, (err, html) => {
      console.log(html)
  });

  app.get('/graph/', (req,res) => {
    res.render('graph.ejs', { datain: JSON.stringify(data), optionin: JSON.stringify(options) });
  });

  app.get('/', (req,res) => {
    app.render('graph.ejs', { datain: JSON.stringify(data), 
                              optionin: JSON.stringify(options),
                              data2: JSON.stringify(list),
                              region: JSON.stringify(gtrends) }, (err, html) => {
      res.render('index.ejs', {graph: html});
    });
  });

  app.get('*', (req, res) => {
    res.status(404).send('Ouch');
  });
  })
}
