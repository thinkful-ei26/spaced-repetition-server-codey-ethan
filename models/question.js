// 'use strict';

// const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//   // word: {
//   //   type: String,
//   //   required: true
//   // },
//   // answer: {
//   //   type: String,
//   //   required: true,
//   // },
//   // correct: {
//   //   type: Boolean,
//   //   default: false
//   // },
//   questions: {
//     type: Map,
//     of: String
//   }
// });


// questionSchema.set('toJSON', {
//   virtuals: true,
//   transform: (doc, result) => {
//     delete result._id;
//     delete result.__v;
//   }
// });


// module.exports = mongoose.model('Question', questionSchema);