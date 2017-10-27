const passport = require('passport');
const keys = require('./keys');
const User = require('../models/user-model')

// http://passportjs.org/ get strategies
const GoogleStrategy = require('passport-google-oauth20');
const DiscordStrategy = require('passport-discord');
const FacebookStrategy = require('passport-facebook');
const GithubStrategy = require('passport-github2');

passport.serializeUser((user, done) => {
  done(null, user.profileid); //null because we won't have any errors. ID will be in the database.
});

passport.deserializeUser((profileid, done) => {
  User.findById(profileid).then((user) => {
    done(null, user.profileid); //null because we won't have any errors. ID will be in the database.
  });
});

//id + display_name
passport.use(
  new GoogleStrategy({
  // options for the Google Strategy
  // console.developers.google.com
    callbackURL:'/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {

    User.findOne({id: profile.profileid}).then((currentUser) => {
      if(currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser); // This will serialize the user.
      }
      else {
        new User({
          profileid: profile.id,
          username: profile.displayName
        }).save().then((newUser) => {
          console.log('new user created: ', newUser);
          done(null, newUser); // This will serialize a new user
        });
      }
    });
  })
);

//id + username
passport.use(
  new DiscordStrategy({
  // options for the Discord Strategy
  // discordapp.com/developers
    callbackURL:'/auth/discord/redirect',
    clientID: keys.discord.clientID,
    clientSecret: keys.discord.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log('passport callback function fired')
    console.log(profile);
    User.findOne({id: profile.profileid}).then((currentUser) => {
      if(currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser);
      }
      else {
        new User({
          profileid: profile.id,
          username: profile.username
        }).save().then((newUser) => {
          console.log('new user created: ', newUser);
          done(null, newUser);
        });
      }
    });
  })
);

//id + displayName
passport.use(
  new FacebookStrategy({
  // options for the Facebook Strategy
  // developers.facebook.com
    callbackURL:'/auth/facebook/redirect',
    clientID: keys.facebook.clientID,
    clientSecret: keys.facebook.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({id: profile.profileid}).then((currentUser) => {
      if(currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser);
      }
      else {
        new User({
          profileid: profile.id,
          username: profile.displayName
        }).save().then((newUser) => {
          console.log('new user created: ', newUser);
          done(null, newUser);
        });
      }
    });
  // passport callback function
  })
);

//id + username
passport.use(
  new GithubStrategy({
  // options for the Github Strategy
  // developers.facebook.com
    callbackURL:'/auth/github/redirect',
    clientID: keys.github.clientID,
    clientSecret: keys.github.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    User.findOne({id: profile.profileid}).then((currentUser) => {
      if(currentUser) {
        console.log('user is: ', currentUser);
        done(null, currentUser);
      }
      else {
        new User({
          profileid: profile.id,
          username: profile.username
        }).save().then((newUser) => {
          console.log('new user created: ', newUser);
          done(null, newUser);
        });
      }
    });
  // passport callback function
  })
);
