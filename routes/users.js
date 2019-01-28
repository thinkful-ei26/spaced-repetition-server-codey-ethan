'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();

router.post('/', (req, res, next) => {
  console.log('REQ IS\n', req);
  // console.log('REQ BODY IS\n', req.body);
  let { fullname, username, password } = req.body;
  fullname = fullname.trim();

  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        username,
        password: digest,
        fullname
      };
      return User.create(newUser);
    })
    .then(result => {
      res.location(`/api/users/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('username already exists');
        err.status = 400;
      }
      next(err);
    });

});

module.exports = router;