/* Manage Controller */
exports.sign_up = function(req, res) {
    res.render("./partials/inscription.ejs", {title : 'Inscription'});
}