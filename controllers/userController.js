/* Manage Controller */
exports.sign_up = function(req, res) {
    // res.send("Formulaire d'inscription");
    res.render("./partials/inscription.ejs", {title : 'Inscription'});

}

exports.modal_compte = function(req, res) {
    res.render('./partials/compte.ejs', {title : 'Compte'});
}