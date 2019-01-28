'use strict';

const express = require('express');
const passport = require('passport');
const jsonwebtoken = require('jsonwebtoken');
const {JWT_SECRET, JWT_EXPIRY} = require('../config');

const router = express.Router();

const localAuth = passport.authenticate('local', {
  session: false,
  failWithError: true
});

const jwtAuth = passport.authenticate('jwt', {
  session: false, 
  failWithError: true
});

function createAuthToken (user) {
  console.log(user);
  return jsonwebtoken.sign({user}, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY
  });
}

router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  console.log(authToken);
  res.json({authToken});
});

router.post('/refresh', jwtAuth, (req, res) => {
  console.log(req);
  const authToken = createAuthToken(req.user);
  // console.log(authToken);
  res.json({authToken});
});

module.exports = router;