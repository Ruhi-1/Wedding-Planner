var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodsSchema = new Schema ({
    names: {
        type: String,
        enum: ['Desserts', 'Starter', 'main']
    }
})




module.exports = mongoose.model('Foods', foodsSchema);