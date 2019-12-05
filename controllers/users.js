const Foods = require('../models/foods');
const User = require('../models/user');

module.exports = {
    index,
    new: newName,
    create,
}

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
        res.render('users/index', {
            users,
            user: req.user,
            name: req.query.name,
            sortKey 
        });
        });
    }
  
function create(req, res) {
    console.log("create***************")
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    let user = new User(req.body);
        user.save(function (err) {
            if (err) return res.redirect('users/new');
                res.redirect('/users');
            });
        }
            
function newName (req, res) {
    res.render('users/new', { name: 'Add Name' })
}