'use strict';

const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/user');

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true}));


let tracker = 0;

router.get('/', (req, res, next) => {
  // if (tracker > 9){
  //   tracker = 0;
  // }
  // res.json(questions);
  // console.log(req);
  const userId = req.user.id;
  console.log({userId});

  let currentItem;
  // console.log(currentItem);

  User.findOne({_id: userId})
    .then(results => {
      // console.log(results.questions);
      // console.log(results.head);
      currentItem = results.questions[results.head];
      // tracker++;
      res.json(currentItem);
      // console.log(tracker);
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
  let newHead = req.body.next;
  let oldHead = req.body.head;
  let isCorrect = req.body.correct;
  let newWordMemoryStrength;
  if (isCorrect) {
    currentWordMemoryStrength = currentWordMemoryStrength * 2;
    newWordMemoryStrength = currentWordMemoryStrength + 1;
  } else {
    currentWordMemoryStrength = 1;
    newWordMemoryStrength = 2;
  }
  if (currentWordMemoryStrength > 9){
    newWordMemoryStrength = 9;
  }
  // console.log(wordToUpdate, isCorrect, currentWordMemoryStrength);
  /// working mongoDB query is
  // db.getCollection('users').findOneAndUpdate({'_id': ObjectId('000000000000000000000001'), 'questions.word': 'manzana'}, {$set: {'questions.$.memoryStrength': 12}}, {returnNewDocument: true});
  let currentWordUpdateObj = {_id: userId, 'questions.word': wordToUpdate};
  let futureWordUpdateObj = {_id: userId, 'questions.next': newWordMemoryStrength};
  // console.log(updateObj);
  // User.findOneAndUpdate(updateObj)
  //here we find the item the user has just answered and set its memory strength value to either its previous value * 2 or 1. we set the item's next pointer to the memory strength value + 1 (if that value is less than the length of the array). if the value is greater than the array length, we set its next pointer to array.length. we also set the new head to be the item's current next pointer
  console.log(oldHead);
  User.findOneAndUpdate(futureWordUpdateObj, {$set: {'questions.$.next': oldHead }}, {new: true})
    .then(() => User.findOneAndUpdate(currentWordUpdateObj, {$set: {'questions.$.memoryStrength': currentWordMemoryStrength, head: newHead, 'questions.$.next': newWordMemoryStrength}}, {new: true})
      .then(results => {
      // console.log(results);
      // nextObjToChange = results.questions[currentWordMemoryStrength + 1];
      // console.log(nextObjToChange);
      // if (results)
      // console.log(results);
        res.json(results);
      })
      //now we need to find the item whose next pointer is currently what we switched the answered word's next pointer to and set its next pointer to be equal to a
      // .then()
      .catch(err => {
        next(err);
      }));
});

module.exports = router;
