module.exports = function(app, express) {

  // Public directory
  console.log(__dirname);
  app.use(express.static(__dirname + '/public'));

  var utils = require('./utils.js')(app, express);

  app.get('/', (req,res) => {
    utils.graph((err, html) => {
      res.render('index.ejs', {graph: html});
    })
 });   

  app.get('*', (req, res) => {
    res.status(404).send('Ouch');
  });
}