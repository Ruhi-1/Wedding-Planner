var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var functionsSchema = new Schema ({
    names: {
        type: String,
        enum: ['Desserts', 'Starter', 'main']
    }
})

module.exports = mongoose.model('Functions', functionsSchema);