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


let tracker = 0;

router.get('/', (req, res, next) => {
  if (tracker > 9){
    tracker = 0;
  }
  // res.json(questions);
  // console.log(req);
  const userId = req.user.id;
  console.log({userId});

  let currentItem;
  console.log(currentItem);

  User.findOne({_id: userId})
    .then(results => {
      // console.log(results.questions);
      currentItem = results.questions[tracker];
      tracker++;
      res.json(currentItem);
      console.log(tracker);
      // return currentItem;
    })
    // .then(User.findOneAndUpdate({_id: userId}, {$pop: {questions: -1}})
    //   .then(results => {
    //     console.log(results);
    //     console.log(currentItem);
    //   })
    //   .catch(err => {
    //     next(err);
    //   })
    // )
    .catch(err => {
      next(err);
    });
});

module.exports = router;
