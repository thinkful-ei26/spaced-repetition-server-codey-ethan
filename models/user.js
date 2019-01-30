'use strict';

const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

// const Question = require('./question');

const schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  questions: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      word: String,
      answer: String,
      memoryStrength: {
        type: Number, 
        default: 1
      },
      next: Number,
      currentHead: {
        type: Number, 
        default: 0
      }
    }
  ],
  head: {
    type: Number,
    default: 0
  }
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

schema.methods.validatePassword = function(incomingPassword) {
  return bcrypt.compare(incomingPassword, this.password);
};

schema.statics.hashPassword = function (incomingPassword) {
  const digest = bcrypt.hash(incomingPassword, 10);
  return digest;
};

module.exports = mongoose.model('User', schema);