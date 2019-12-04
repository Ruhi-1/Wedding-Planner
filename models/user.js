var mongoose = require('mongoose');

var guestsSchema = new mongoose.Schema ({
  names: {
      type: String
  },
  phoneNo: {
      type: Number
  },
})

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    googleId: String,
    guests: [guestsSchema]
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);