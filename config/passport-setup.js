const passport = require('passport');
// http://passportjs.org/ get strategies
const GoogleStrategy = require('passport-google-oauth20');
const DiscordStrategy = require('passport-discord');
const FacebookStrategy = require('passport-facebook');
const GithubStrategy = require('passport-github2');

const keys = require('./keys');

passport.use(
  new GoogleStrategy({
  // options for the Google Strategy
  // console.developers.google.com
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log('passport callback function fired')
    console.log(profile);
  // passport callback function
  })
)

passport.use(
  new DiscordStrategy({
  // options for the Discord Strategy
  // discordapp.com/developers
    callbackURL:'/auth/discord/redirect',
    clientID: keys.discord.clientID,
    clientSecret: keys.discord.clientSecret
  }, () => {
  // passport callback function
  })
)

passport.use(
  new FacebookStrategy({
  // options for the Facebook Strategy
  // developers.facebook.com
    callbackURL:'/auth/facebook/redirect',
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret
  }, () => {
  // passport callback function
  })
)

passport.use(
  new GithubStrategy({
  // options for the Github Strategy
  // developers.facebook.com
    callbackURL:'/auth/github/redirect',
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret
  }, () => {
  // passport callback function
  })
)
