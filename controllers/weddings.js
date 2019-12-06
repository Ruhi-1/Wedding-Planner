const Wedding = require('../models/wedding');
const User = require('../models/user');


module.exports = {
    // index,
   new: addWedding,
    create
}
// function index(req, res, next) {
//   // Default to sorting by name
//   let sortKey = req.query.sort || 'name';
//   User.find(modelQuery)
//   .sort(sortKey).exec(function(err, users) {
//     if (err) return next(err);
//         res.render('functions/new', {
//             users,
//             user: req.user,
//             name: req.query.name,
//             sortKey 
//         });
//         });
//     }

function addWedding (req, res) {
    User.findById(req.params.id, function(err, guest) {
    res.render('weddings/new', { title: 'Add Wedding', guest})
});
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

