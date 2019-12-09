const Wedding = require('../models/wedding');
const User = require('../models/user');


module.exports = {
    index,
   new: addWedding,
    // create,
    update,
    show,
    edit

}

function edit(req, res) {
    res.render('weddings/edit', {
        user: User.getOne(req.params.id),
        idx: req.params.id
    });
}

function show(req, res) {
    console.log("aaaaaaaaaa");
    User.findById(req.user.guests.weddings._id).exec(function(err, user) {
        res.render('/weddings/new', {
                weddings: user.guests.weddings
        })
    })
}

function index(req, res) {
    User.findById(req.user).exec(function(err, user) {
    res.render('guests/index', { wedding });
});
};

function update(req, res) {
    console.log("aaaaaaaa");
    var wedding = req.user.guests.id(req.params.id);
User.update();
req.user.save(function(err) {
  res.redirect('/guests');
});
}

function addWedding (req, res) {
    User.findById(req.params.id, function(err, user) {
        // user.guests.weddings.push(req.body);
        // user.save(function (err, user) {
        //     console.log(user)
        //     if (err) return next (err);
        //     res.redirect('/guests');
    res.render('weddings/new', { name: 'Add Wedding'})
// });
});
}

// function create(req,res, next) {
//     req.body.guest = req.params.id;  
//     console.log(req.body);
//     User.create(req.body, function(err,wedding){
//         res.redirect('/guests');
//     });
// }


// function create(req,res, next) {
//     // console.log(req.user._id);
//     console.log(req.body)
//     User.findById(req.user, function(err, user) {
//     console.log(user)
//     user.guests.weddings.push(req.body);
//         user.save(function (err, user) {
//             console.log(user)
//             if (err) return next (err);
//             res.redirect('/guests', {
//                 weddings: user.guests.weddings
//             });
// }); 
// });
// }

