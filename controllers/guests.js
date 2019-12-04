var Guests = require('../models/guests');

module.exports = {
    create,
    new: newNames,
}

function newNames (req, res) {
    res.render('users/new', { names: 'Add Names' })
}

function create(req,res) {
    req.body.flight = req.params.id;  
    Guest.create(req.body, function(err,guest){
        res.redirect(`/guests/${req.body.flight}`)
    });
}
