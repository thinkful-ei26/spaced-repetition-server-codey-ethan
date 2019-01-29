'use strict';

const express = require('express');

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

router.get('/', (req, res, next) => {
  res.json(questions);
});

module.exports = router;
