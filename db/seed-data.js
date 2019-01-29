'use strict';

const users = [
  {
    _id: '000000000000000000000001',
    fullname: 'Ms Green',
    username: 'msgreen',
    // hash for "password"
    password: '$2a$10$QJCIX42iD5QMxLRgHHBJre2rH6c6nI24UysmSYtkmeFv6X8uS1kgi',
    progress: 0, 
    questions: [
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
    ]
  },
  {
    _id: '000000000000000000000002',
    fullname: 'Mr Yellow',
    username: 'mryellow',
    // hash for "password"
    password: '$2a$10$QJCIX42iD5QMxLRgHHBJre2rH6c6nI24UysmSYtkmeFv6X8uS1kgi',
    progress: 4,
    questions: [
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
    ]
  }
];

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

module.exports = { users, questions };