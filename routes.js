module.exports = function(app, express) {
  app.set('views', express.static(__dirname + '/makina_corpus/views/'));
  // Public directory
  console.log(__dirname);
  app.use(express.static(__dirname + '/makina_corpus/' +'/public'));

  var utils = require('./utils.js')(app, express);

  app.get('/makina_corpus/', (req,res) => {
    utils.graph((err, html) => {
      res.render('index.ejs', {graph: html});
    })
  });   
}