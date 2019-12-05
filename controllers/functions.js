const Functions = require('../models/function');
const User = require('../models/user');


module.exports = {
   new: addFunction,
    create
}


function addFunction (req, res) {
    User.findById(req.params.id, function(err, user) {
    res.render('function/new', { food: 'Add Function', user})
});
}

function create(req,res) {
    req.body.user = req.params.id;  
    Functions.create(req.body, function(err,foods){
        res.redirect(`/users/${req.body.users}`)
    });
}
