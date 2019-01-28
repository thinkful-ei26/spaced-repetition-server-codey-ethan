'use strict';

const mongoose = require('mongoose');

const {DATABASE_URL} = require('../config');

const User = require('../models/user');

const {users} = require('../db/seed-data');

// console.log(users);

mongoose.connect(DATABASE_URL, {useNewUrlParser: true})
  .then(() => {
    console.log('deleting');
    return Promise.all([
      User.deleteMany()
    ]);
  })
  .then(() => {
    // console.log('seeding');
    // console.log(users);
    return Promise.all([
      User.insertMany(users)
    ]);
  })
  .then(results => {
    console.log('Inserted', results);
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    return mongoose.disconnect();
  });