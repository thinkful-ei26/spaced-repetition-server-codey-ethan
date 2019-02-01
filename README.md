# SpanishX

This is the server repo for SpanishX, a spaced repetition learning app for the Spanish language.

### Deployment

The server is deployed at https://srs-codey-ethan.herokuapp.com/

The client app is deployed on Heroku at https://spaced-repetition-codey-ethan.herokuapp.com/ and the client repo can be found at https://github.com/thinkful-ei26/spaced-repetition-client-codey-ethan

### App
The app presents users with a sequence of words, so that they can practice and improve their Spanish language skills. The order of the words changes based on past answer history based on a spaced repetition algorithm.

### Techonologies
The server side of this project uses
 * Node with Express to handle routing
 * A MongoDB database hosted on mLab, with Mongoose for schema design and communicating with MongoDB
 * Passport with bCrypt and JWT to handle user authentication
