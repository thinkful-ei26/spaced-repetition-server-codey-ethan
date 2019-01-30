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
  // console.log(req.body);
  let wordToUpdate = req.body.word;
  let currentWordMemoryStrength = req.body.memoryStrength;
  let isCorrect = req.body.correct;
  if (isCorrect) {
    currentWordMemoryStrength = currentWordMemoryStrength * 2;
  } else {
    currentWordMemoryStrength = 1;
  }
  // console.log(wordToUpdate, isCorrect, currentWordMemoryStrength);
  /// working mongoDB query is
  // db.getCollection('users').findOneAndUpdate({'_id': ObjectId('000000000000000000000001'), 'questions.word': 'manzana'}, {$set: {'questions.$.memoryStrength': 12}}, {returnNewDocument: true});
  let updateObj = { _id: userId, 'questions.word': wordToUpdate };
  // console.log(updateObj);
  // User.findOneAndUpdate(updateObj)
  User.findOneAndUpdate(updateObj, {$set: {'questions.$.memoryStrength': currentWordMemoryStrength}}, {new: true})
    .then(results => {
      console.log(results);
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
