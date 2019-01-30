'use strict';

const express = require('express');

const User = require('../models/user');

const router = express.Router();

const questions = [
  {
    _id: '100000000000000000000001',
    word: 'manzana',
    answer: 'apple',
    next: 1,
    currentHead: 0
  },
  {
    _id: '100000000000000000000002',
    word: 'perro',
    answer: 'dog',
    next: 2,
    currentHead: 0
  },
  {
    _id: '100000000000000000000003',
    word: 'blanco',
    answer: 'white',
    next: 3,
    currentHead: 0
  },
  {
    _id: '100000000000000000000004',
    word: 'espuma',
    answer: 'foam',
    next: 4,
    currentHead: 0
  },
  {
    _id: '100000000000000000000005',
    word: 'tiburon',
    answer: 'shark',
    next: 5,
    currentHead: 0
  },
  {
    _id: '100000000000000000000006',
    word: 'plancha',
    answer: 'griddle',
    next: 6, 
    currentHead: 0
  },
  {
    _id: '100000000000000000000007',
    word: 'sal',
    answer: 'salt',
    next: 7,
    currentHead: 0
  },
  {
    _id: '100000000000000000000008',
    word: 'arbol',
    answer: 'tree',
    next: 8,
    currentHead: 0
  },
  {
    _id: '100000000000000000000009',
    word: 'pregunta',
    answer: 'question',
    next: 9,
    currentHead: 0
  },
  {
    _id: '100000000000000000000010',
    word: 'exito',
    answer: 'success',
    next: 0, 
    currentHead: 0
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