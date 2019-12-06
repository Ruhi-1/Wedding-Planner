var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var weddingsSchema = new Schema ({
    names: {
        type: String,
        enum: ['Sangeet', 'nikkah', 'reception'],
    },
    // date: {
    //     type: Date,
    //     default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))

    // },
});

module.exports = mongoose.model('Weddings', weddingsSchema);