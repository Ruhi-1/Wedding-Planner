var mongoose = require('mongoose');

var guestsSchema = new mongoose.Schema ({
  names: {
      type: String
  },
  phoneNo: {
      type: String
  },
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