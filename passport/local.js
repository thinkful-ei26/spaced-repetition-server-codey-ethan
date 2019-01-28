'use strict';

const {Strategy: LocalStrategy} = require('passport-local');
const User = require('../models/user');

const localStrategy = new LocalStrategy((username, password, done) => {
  let user;
  User.findOne({username})
    .then(results => {
      user = results;
      if (!user) {
        // console.log('un validator ran');
        return Promise.reject({
          reason: 'LoginError',
          message: 'Incorrect username',
          location: 'username'
        });
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        // console.log('pw validator ran');
        return Promise.reject({
          reason: 'LoginError',
          message: 'Incorrect password',
          location: 'password'
        });
      }
      return done(null, user);
    })
    .catch(err => {
      if (err.reason === 'LoginError'){
        console.log('if ran');
        return done(null, false);
      }
      return done(err);
    });
});

module.exports = localStrategy;