/* Home page. */
exports.index = function(req, res) {
  res.render('./partials/home.ejs', {title : 'Home'});
}