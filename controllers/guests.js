var User = require('../models/user');

module.exports = {
    create,
    new: newNames,
    index,
    delete: deleteGuests
}

function deleteGuests(req, res) {
    User.findById(req.user).exec(function(err, user) {
        delete user.guests[req.params.id] //correct way to delete guests by index
        user.save(function (err) {  
            if (err) return next (err);
            res.redirect('/guests');
        });
    });
}

function index(req, res) {
    User.findById(req.user).exec(function(err, users) {
    res.render('guests/index', { users });
});
};

function newNames (req, res) {
    res.render('guests/new', { names: 'Add Names' })
}

function create(req,res) {
    User.findById(req.user).exec(function(err, user) {
        user.guests.push(req.body);
        user.save(function (err) {
            if (err) return next (err);
            res.redirect('/guests');
});
});
}
