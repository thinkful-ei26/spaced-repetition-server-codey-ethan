# [SpanishX](https://spaced-repetition-codey-ethan.herokuapp.com)

## Welcome to SpanishX
SpanishX provides a simple and intuitive Spanish language learning experience based on the spaced repetition learning method. It asks you to define a word, then provides feedback and shows you the next word based on your previous answer history. Come to learn Spanish, stay for the GIFs!

## App Screenshots

## Tech Specs: 
**Front-end:**
- React
- Redux
- Javascript
- HTML5

**Back-end**
- Node
- Express
- MongoDB hosted on mLab
- JWT 
- Passport

## Links
[Client Repo](https://github.com/thinkful-ei26/spaced-repetition-client-codey-ethan)

[Deployed Server On Heroku](https://srs-codey-ethan.herokuapp.com/)

[Deployed Client On Heroku](https://spaced-repetition-codey-ethan.herokuapp.com/)


## Schema
### User
```
{
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  questions: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      word: String,
      answer: String,
      memoryStrength: {
        type: Number, 
        default: 1
      },
      next: Number,
      numberOfAnswers: {
        type: Number, 
        default: 0
      },
      numberOfCorrectAnswers: {
        type: Number, 
        default: 0
      },
    }
  ],
  head: {
    type: Number,
    default: 0
  }
}
```

## API Overview
```        
/api
.
├── /auth
│   └── POST
│       ├── /login
│       ├── /refresh
├── /users
│   └── POST /
├── /questions
│   └── GET 
│       ├── /
│       ├── /progress
│   └── PUT /
```
