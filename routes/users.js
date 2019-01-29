'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();

const questions = [
  {
    word: 'manzana',
    answer: 'apple',
    correct: false
  },
  {
    word: 'perro',
    answer: 'dog',
    correct: false
  },
  {
    word: 'blanco',
    answer: 'white',
    correct: false
  },
  {
    word: 'espuma',
    answer: 'foam',
    correct: false
  },
  {
    word: 'tiburon',
    answer: 'shark',
    correct: false
  },
  {
    word: 'plancha',
    answer: 'griddle',
    correct: false
  },
  {
    word: 'sal',
    answer: 'salt',
    correct: false
  },
  {
    word: 'arbol',
    answer: 'tree',
    correct: false
  },
  {
    word: 'pregunta',
    answer: 'question',
    correct: false
  },
  {
    word: 'exito',
    answer: 'success',
    correct: false
  },
];

router.post('/', (req, res, next) => {
  console.log('REQ IS\n', req);
  // console.log('REQ BODY IS\n', req.body);
  let { firstName, lastName, username, password } = req.body;
  let fullname = firstName + ' ' + lastName;

  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        username,
        password: digest,
        fullname,
        questions: questions,
        progress: 0
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