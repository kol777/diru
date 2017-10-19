// instance of a Router
const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
  // passport
  res.send('logged out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// auth with discord
router.get('/discord', passport.authenticate('discord', {
  scope: ['profile']
}));

// auth with facebook
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['public_profile']
}));

// auth with github
router.get('/github', passport.authenticate('github', {
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.send('you reached the callback uri for google')
});

// discord callback
router.get('/discord/redirect', (req, res) => {
  res.send('you reached the callback uri for discord')
});

// facebook callback
router.get('/facebook/redirect', (req, res) => {
  res.send('you reached the callback uri for facebook')
});

// github callback
router.get('/github/redirect', (req, res) => {
  res.send('you reached the callback uri for github')
});

module.exports = router;
