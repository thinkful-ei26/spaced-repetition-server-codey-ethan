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
        _id: '100000000000000000000001',
        word: 'manzana',
        answer: 'apple',
        next: 1
      },
      {
        _id: '100000000000000000000002',
        word: 'perro',
        answer: 'dog',
        next: 2
      },
      {
        _id: '100000000000000000000003',
        word: 'blanco',
        answer: 'white',
        next: 3
      },
      {
        _id: '100000000000000000000004',
        word: 'espuma',
        answer: 'foam',
        next: 4
      },
      {
        _id: '100000000000000000000005',
        word: 'tiburon',
        answer: 'shark',
        next: 5
      },
      {
        _id: '100000000000000000000006',
        word: 'plancha',
        answer: 'griddle',
        next: 6
      },
      {
        _id: '100000000000000000000007',
        word: 'sal',
        answer: 'salt',
        next: 7
      },
      {
        _id: '100000000000000000000008',
        word: 'arbol',
        answer: 'tree',
        next: 8
      },
      {
        _id: '100000000000000000000009',
        word: 'pregunta',
        answer: 'question',
        next: 9
      },
      {
        _id: '100000000000000000000010',
        word: 'exito',
        answer: 'success',
        next: 0
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
        _id: '100000000000000000000001',
        word: 'manzana',
        answer: 'apple',
        next: 1
      },
      {
        _id: '100000000000000000000002',
        word: 'perro',
        answer: 'dog',
        next: 2
      },
      {
        _id: '100000000000000000000003',
        word: 'blanco',
        answer: 'white',
        next: 3
      },
      {
        _id: '100000000000000000000004',
        word: 'espuma',
        answer: 'foam',
        next: 4
      },
      {
        _id: '100000000000000000000005',
        word: 'tiburon',
        answer: 'shark',
        next: 5
      },
      {
        _id: '100000000000000000000006',
        word: 'plancha',
        answer: 'griddle',
        next: 6
      },
      {
        _id: '100000000000000000000007',
        word: 'sal',
        answer: 'salt',
        next: 7
      },
      {
        _id: '100000000000000000000008',
        word: 'arbol',
        answer: 'tree',
        next: 8
      },
      {
        _id: '100000000000000000000009',
        word: 'pregunta',
        answer: 'question',
        next: 9
      },
      {
        _id: '100000000000000000000010',
        word: 'exito',
        answer: 'success',
        next: 0
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