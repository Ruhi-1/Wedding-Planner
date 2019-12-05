var User = require('../models/user');

module.exports = {
    create,
    new: newNames,
    index
}

function index(req, res) {
    console.log(req.user);
    User.findById(req.user).exec(function(err, users) {
    res.render('guests/index', { users });
});
};

function newNames (req, res) {
    res.render('guests/new', { names: 'Add Names' })
}

function create(req,res) {
    console.log(req.bod)
    User.findById(req.user).exec(function(err, user) {
        user.guests.push(req.body);
        console.log(user)
        user.save(function (err) {
            if (err) return next (err);
            res.redirect('guests/');
});
});
}
