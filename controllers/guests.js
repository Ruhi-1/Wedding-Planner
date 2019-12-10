var User = require('../models/user');

module.exports = {
    create,
    new: newNames,
    index,
    delete: deleteGuests,
}



function deleteGuests(req, res) {
    var guest = req.user.guests.id(req.params.id);
    guest.remove();
    req.user.save(function(err) {
  res.redirect('/guests');
});
}

function index(req, res) {
    User.findById(req.user).exec(function(err, user) {
    res.render('guests/index', { user });
});
};

function newNames (req, res) {
    res.render('guests/new', { names: 'Add Names' })
}

function create(req,res, next) {
    console.log('alkdjf;alksjdf;alkfja;sdlk')
    User.findById(req.user).exec(function(err, user) {
        //console.log(req.body);
        user.guests.push(req.body);
        user.save(function (err) {
            if (err) return next (err);
            res.redirect('/guests');
});
});
}
