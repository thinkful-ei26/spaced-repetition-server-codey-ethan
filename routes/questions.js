'use strict';

const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/user');

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true}));


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

router.put('/', (req, res, next) => {
  const userId = req.user.id;
  //need to know where word is coming back in the body as well as whether the answer is correct
  let wordToUpdate;
  let currentWordMemoryValue;
  let isCorrect;
  if (isCorrect) {
    currentWordMemoryValue = currentWordMemoryValue * 2;
  } else {
    currentWordMemoryValue = 1;
  }
  User.findOneAndUpdate({ _id: userId, word: wordToUpdate }, {$set: {memoryStrength: currentWordMemoryValue}})
    .then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
