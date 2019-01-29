'use strict';

const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/user');

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true}));


// const questions = [
//   {
//     word: 'manzana',
//     answer: 'apple',
//     correct: false
//   },
//   {
//     word: 'perro',
//     answer: 'dog',
//     correct: false
//   },
//   {
//     word: 'blanco',
//     answer: 'white',
//     correct: false
//   },
//   {
//     word: 'espuma',
//     answer: 'foam',
//     correct: false
//   },
//   {
//     word: 'tiburon',
//     answer: 'shark',
//     correct: false
//   },
//   {
//     word: 'plancha',
//     answer: 'griddle',
//     correct: false
//   },
//   {
//     word: 'sal',
//     answer: 'salt',
//     correct: false
//   },
//   {
//     word: 'arbol',
//     answer: 'tree',
//     correct: false
//   },
//   {
//     word: 'pregunta',
//     answer: 'question',
//     correct: false
//   },
//   {
//     word: 'exito',
//     answer: 'success',
//     correct: false
//   },
// ];

router.get('/', (req, res, next) => {
  // res.json(questions);
  // console.log(req);
  const userId = req.user.id;
  console.log({userId});

  User.findOne({_id: userId})
    .then(results => {
      // console.log(results.questions);
      res.json(results.questions);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
