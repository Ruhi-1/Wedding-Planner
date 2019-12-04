var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var listsSchema = new Schema ({
//     foods: {
//         type: String,
//         enum: ['Desserts', 'Starter', 'main']
//     }
// })



// var guestsSchema = new Schema ({
//     names: {
//         type: String
//     },
//     phoneNo: {
//         type: Number
//     },
// })

module.exports = mongoose.model('Guests', guestsSchema);