const Foods = require('../models/foods');
const User = require('../models/user');


module.exports = {
   new: addFood,
    create
}


function addFood (req, res) {
    User.findById(req.params.id, function(err, user) {
    res.render('foods/new', { food: 'Add Food', user})
});
}

function create(req,res) {
    req.body.user = req.params.id;  
    Foods.create(req.body, function(err,foods){
        res.redirect(`/users/${req.body.users}`)
    });
}
