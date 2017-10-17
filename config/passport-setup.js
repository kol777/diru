const passport = require('passport');
// http://passportjs.org/ get strategies
const GoogleStrategy = require('passport-google-oauth20');
const DiscordStrategy = require('passport-discord');

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

passport.use(
  new DiscordStrategy({
  // options for the Google Strategy
  // console.developers.google.com
    callbackURL:'/auth/discord/redirect',
    clientID: keys.discord.clientID,
    clientSecret: keys.discord.clientSecret
  }, () => {
  // passport callback function
  })
)
