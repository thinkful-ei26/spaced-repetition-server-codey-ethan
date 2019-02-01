/* eslint-disable indent */
'use strict';

const express = require('express');
const passport = require('passport');

const router = express.Router();

const User = require('../models/user');

router.use('/', passport.authenticate('jwt', { session: false, failWithError: true}));


router.get('/', (req, res, next) => {
  const userId = req.user.id;
  User.findOne({_id: userId})
    .then(user => {
      let currentItem = user.questions[user.head];
      res.json(currentItem);
    })
    .catch(err => {
      next(err);
    });
});

router.get('/progress', (req, res, next) => {
  const userId = req.user.id;
  User.findOne({_id: userId})
    .then(user => {
      // let questions = user.questions;
      // currentItem.currentHead = results.head;
      let questionsArray = user.questions.map(question => {
        return {
          word: question.word,
          numberOfAnswers: question.numberOfAnswers,
          numberOfCorrectAnswers: question.numberOfCorrectAnswers
        };
      });
      console.log(questionsArray);
      res.json(questionsArray);
    })
    .catch(err => {
      next(err);
    });
});

router.put('/', (req, res, next) => {

  const userId = req.user.id;
  let userAnswer = req.body.answer;

  let userObj;
  let currentQuestion;
  let currentHead;
  let arrayIndex;

  User.findOne({_id: userId})
    .then(user => {
      userObj = user.toJSON();
      currentHead = userObj.head;
      currentQuestion = userObj.questions[currentHead];

      if (userAnswer === userObj.questions[currentHead].answer) {
        userObj.questions[currentHead].memoryStrength = userObj.questions[currentHead].memoryStrength * 2;
        userObj.questions[currentHead].numberOfAnswers = userObj.questions[currentHead].numberOfAnswers + 1;
        userObj.questions[currentHead].numberOfCorrectAnswers = userObj.questions[currentHead].numberOfCorrectAnswers + 1;

      } else {
        userObj.questions[currentHead].memoryStrength = 1;
        userObj.questions[currentHead].numberOfAnswers = userObj.questions[currentHead].numberOfAnswers + 1;
      }

      arrayIndex = currentQuestion.memoryStrength + currentHead;
      if (arrayIndex > user.questions.length - 1) {
        arrayIndex = user.questions.length - 1;
      }

      userObj.head = currentQuestion.next;
      currentQuestion.next = userObj.questions[arrayIndex].next;
      userObj.questions[arrayIndex].next = currentHead;

      if (userObj.head === null) {
        userObj.head = 0;
      }
      // console.log(userObj);
      return user.update(userObj);
    })
    // .then(() => User.findOneAndUpdate({_id: userId}, {userObj}, {new: true}))
    .then(result => {
      if(result) {
        // console.log(result);
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
  // const userId = req.user.id;
  // let {word, memoryStrength, correct, nextWord, currentHead} = req.body;

  // console.log('Submitted Word: \n', 
  //   `*word = ${word}* \n`, 
  //   `*mem = ${memoryStrength}*\n`, 
  //   `*correct = ${correct}*\n`, 
  //   `*next = ${nextWord}*\n`, 
  //   `*head = ${currentHead}*\n`);


  // // let currentWordMemoryStrength = 0;
  // let newWordMemoryStrength = 0;

  // if (correct) {
  //   memoryStrength = memoryStrength * 2;
  //   newWordMemoryStrength = memoryStrength + 1;
  // } else {
  //   memoryStrength = 1;
  //   newWordMemoryStrength = 2;
  // }
  // if (memoryStrength > 9){
  //   memoryStrength = 9;
  // }
  // let currentWordQueryObj = {_id: userId, 'questions.word': word};
  // let futureWordQueryObj = {_id: userId, 'questions.next': newWordMemoryStrength};

  // console.log(newWordMemoryStrength);
  // console.log('head to set as future words next', currentHead);

  // User.findOneAndUpdate(futureWordQueryObj, {$set: {'questions.$.next': currentHead }}, {new: true})
  //   .then(() => User.findOneAndUpdate(currentWordQueryObj, {$set: {'questions.$.memoryStrength': memoryStrength, head: nextWord, 'questions.$.next': newWordMemoryStrength}}, {new: true})
  //   .then(results => {
  //     res.json(results);
  //   })
  //   .catch(err => {
  //     next(err);
  //   }));
  
  // if the word was correct, set its next to 3 and the word at 2 next to 0

  // if the word was correct, double its memory value, and set its next to be its new memory value plus 1 (eg 3) and the word at 2's (whose current next is 3) next to 0


    //let newHead = nextWord; // index of next word

  //if the word was incorrect, set its memory value to 1 and set its next to be its new memory value plus 1 (eg 2) and the word at 1's next to 0

  //apple, 1, true, dog, 0 (apple)

  //bc the answer is correct, we set the memory value to 2
  //then we need to insert apple after the item whose next is 3 (white)

  //to do this:
  //we find the item which is currently at 2, and set its next to 0(apple)
  //we set apple's next to be equal to 2's current next (3-foam) (to maintain the list)
  //before we do this, we need to set the head of the overall user object to equal apple's next (1)

  //dog, 1, true, white, 1 (dog)
  
  //bc the answer is correct, we set the memory value to 2
  //then we need to insert dog after the item whose next is 3 (apple)

  //to do this:
  //we find the item which is currently at 2, and set its next to 1(dog)
  //we set dog's next to be equal to 2's current next (3-foam) (to maintain the list)
  //before we do this, we need to set the head of the overall user object to equal dog's next (2)

  //white, 1, true, apple, 2 (white)
  
  //bc the answer is correct, we set the memory value to 2
  //then we need to insert white after the item whose next is 3 (dog)

  //to do this:
  //we find the item which is currently at 2, and set its next to 1(white)
  //we set white's next to be equal to 2's current next (3-foam) (to maintain the list)
  //before we do this, we need to set the head of the overall user object to equal white's next (0)

  // if(correct){
  //   memoryStrength = memoryStrength * 2;
  // } else {
  //   memoryStrength = 1;
  // }

  // let newHead = nextWord;

  // let itemToChange; //(this is the item whose next value equals 3)

  // itemToChange.next = head; //(head happens to equal word)

  // nextWord = itemToChange.next;

  // User.findOne({_id: userId})
  //   .then(results => {
  //     console.log(results.questions[memoryStrength]);
  //   })
  //   .catch(err => {
  //     next(err);
  //   });

  

  // let wordToUpdate = req.body.word;
  // let currentWordMemoryStrength = req.body.memoryStrength;
  // let newHead = req.body.next;
  // let oldHead = req.body.currentHead;
  // let isCorrect = req.body.correct;
  // let newWordMemoryStrength;
  // if (isCorrect) {
  //   currentWordMemoryStrength = currentWordMemoryStrength * 2;
  //   newWordMemoryStrength = currentWordMemoryStrength + oldHead;
  // } else {
  //   currentWordMemoryStrength = 1;
  //   newWordMemoryStrength = 2;
  // }
  // if (currentWordMemoryStrength > 9){
  //   newWordMemoryStrength = 9;
  // }
  // // console.log(wordToUpdate, isCorrect, currentWordMemoryStrength);
  // /// working mongoDB query is
  // // db.getCollection('users').findOneAndUpdate({'_id': ObjectId('000000000000000000000001'), 'questions.word': 'manzana'}, {$set: {'questions.$.memoryStrength': 12}}, {returnNewDocument: true});
  // let currentWordUpdateObj = {_id: userId, 'questions.word': wordToUpdate};
  // let futureWordUpdateObj = {_id: userId, 'questions.next': newWordMemoryStrength};
  // // console.log(updateObj);
  // // User.findOneAndUpdate(updateObj)
  // //here we find the item the user has just answered and set its memory strength value to either its previous value * 2 or 1. we set the item's next pointer to the memory strength value + 1 (if that value is less than the length of the array). if the value is greater than the array length, we set its next pointer to array.length. we also set the new head to be the item's current next pointer
  // console.log(oldHead);
  // User.findOneAndUpdate(futureWordUpdateObj, {$set: {'questions.$.next': oldHead }}, {new: true})
  //   .then(() => User.findOneAndUpdate(currentWordUpdateObj, {$set: {'questions.$.memoryStrength': currentWordMemoryStrength, head: newHead, 'questions.$.next': newWordMemoryStrength}}, {new: true})
  //     .then(results => {
  //     // console.log(results);
  //     // nextObjToChange = results.questions[currentWordMemoryStrength + 1];
  //     // console.log(nextObjToChange);
  //     // if (results)
  //     // console.log(results);
  //       res.json(results);
  //     })
  //     //now we need to find the item whose next pointer is currently what we switched the answered word's next pointer to and set its next pointer to be equal to a
  //     // .then()
  //     .catch(err => {
  //       next(err);
  //     }));
});

module.exports = router;
