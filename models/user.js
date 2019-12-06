var mongoose = require('mongoose');

var WeddingsSchema = new mongoose.Schema ({
  names: {
    type: String,
    enum: ['Sangeet', 'nikkah', 'reception'],
},

});

var guestsSchema = new mongoose.Schema ({
  names: {
      type: String
  },
  phoneNo: {
      type: String
  },
  weddings: [WeddingsSchema]
});

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    guests: [guestsSchema],
    googleId: String,
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);