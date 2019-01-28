'use strict';

const mongoose = require('mongoose');

// const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
  fullname: {
    type: String,
    // required: true
  },
  username: {
    type: String,
    // required: true,
    unique: true
  },
  password: {
    type: String,
    // required: true
  },
  progress: Number
});

schema.set('timestamps', true);

schema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
  }
});

// userSchema.methods.validatePassword = function(incomingPassword) {
//   return bcrypt.compare(incomingPassword, this.password);
// };

// userSchema.statics.hashPassword = function (incomingPassword) {
//   const digest = bcrypt.hash(incomingPassword, 10);
//   return digest;
// };

module.exports = mongoose.model('User', schema);