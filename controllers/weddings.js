const Wedding = require('../models/wedding');
const User = require('../models/user');


module.exports = {
    // index,
   new: addWedding,
    create,
    update

}

function update(req, res) {
    var guest = req.user.guests.id(req.params.id);
Guest.update();
req.user.save(function(err) {
  res.redirect('/guests');
});
}

function addWedding (req, res) {
    // User.findById(req.params.id, function(err, guest) {
    res.render('weddings/new', { name: 'Add Wedding'})
// });
}

function create(req,res) {
    req.body.guest = req.params.id;  
    Wedding.create(req.body, function(err,wedding){
        res.redirect('guests/');
    });
}


// function create(req,res) {
//     console.log(req.bod)
//     User.findById(req.user).exec(function(err, user) {
//         weddings.guests.functions.push(req.body);
//         console.log(user)
//         wedding.save(function (err) {
//             if (err) return next (err);
//             res.redirect('functions/new');
// });
// });
// }

