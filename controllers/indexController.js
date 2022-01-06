/* Home page. */
exports.index = function(req, res) {
  // res.send('Page d\'accueil');
  res.render('./partials/home.ejs', {title : 'Home'});
}