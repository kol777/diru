const passport = require('passport');
// http://passportjs.org/ get strategies
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys');

passport.use(
  new GoogleStrategy({
  // options for the Google Strategy
  // console.developers.google.com
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, () => {
  // passport callback function
  })
)
