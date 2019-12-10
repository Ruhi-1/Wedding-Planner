const Wedding = require('../models/wedding');
const User = require('../models/user');


module.exports = {
    index,
   new: addWedding,
    create,
    update,
    show,
    edit, 
    delete: deleteWedding
}

function edit(req, res) {
    res.render('weddings/edit', {
        weddings: user.guests.weddings.getOne(req.params.id),
        idx: req.params.id
    });
}


function deleteWedding(req, res) {
    // console.log('wed_id',req.params.id)
    // console.log('g_id', req.query.guest_id)
    var wedding = req.user.guests.id(req.query.guest_id).weddings.id(req.params.id);
    // console.log('www', wedding);
    wedding.remove();
    req.user.save(function(err) {
        res.redirect('/guests');
    });
};

function show(req, res) {
    //console.log("in the show");
    User.findById(req.user).exec(function(err, user) {
        var guest = user.guests.id(req.query.guest_id);
        res.render('weddings/show', { guest: guest} )
    })
}

function index(req, res) {
    User.findById(req.user).exec(function(err, user) {
    res.render('guests/index', { wedding });
});
};

function update(req, res) {
    console.log("update function");
    var wedding = req.user.guests.id(req.params.id);
User.update();
req.user.save(function(err) {
  res.redirect('/guests');
});
}

function addWedding (req, res) {
    // var guest = req.user.guests.id(req.query.guest_id);
    // console.log(guest)
    //user.guests.weddings.push(req.body);

    User.findById(req.params.id, function(err, user) {
        // user.guests.weddings.push(req.body);
        // user.save(function (err, user) {
        //     console.log(user)
        //     if (err) return next (err);
        //     res.redirect('/guests');
    res.render('weddings/new', { guest_id: req.query.guest_id})
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


function create(req,res, next) {
    // console.log(req.user)
    // console.log(req.query)
    User.findById(req.user).exec(function(err, user) {
        var guest = user.guests.id(req.query.guest_id);
        // var name = req.body;
        // console.log('weeddings: ', guest.weddings);
        // console.log('name: ', name);
        // console.log(req.user._id);
        // console.log('in wedd create');

        var events = guest.weddings.map(function(w) {
            return w.names
        });
        //console.log('incl: ', events.includes(req.body.name));
        if (events.includes(req.body.name)) {
            
            res.redirect('/guests');
        } else {
            guest.weddings.push({names: req.body.name});
            user.save(function(err) {
                //var ggg = User.findById(req.user).guests.id(req.query.guest_id);
    
                //console.log('ggg: ', ggg.weddings)
                res.redirect('/guests');
            });
        };
        // console.log('b4: ', guest.weddings);
        //guest.update();


    });

//     Wedding.findById(req.guests.weddings, function(err, user) {
//     console.log(req.guests.weddings);
//     user.guests.weddings.push(req.body);
//         user.save(function (err, user) {
//             console.log(user)
//             if (err) return next (err);
//             res.redirect('/guests', {
//                 weddings: user.guests.weddings
//             });
// }); 
// });
}

// function create(req,res, next) {
//     console.log('alkdjf;alksjdf;alkfja;sdlk')
//     User.findById(req.user).exec(function(err, user) {
//         user.guests.push(req.body);
//         user.save(function (err) {
//             if (err) return next (err);
//             res.redirect('/guests');
// });
// });
// }
