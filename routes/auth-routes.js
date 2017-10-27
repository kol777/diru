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
  scope: ['identify']
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
  res.send(req.user);
});

// discord callback
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
  res.send('you reached the callback uri for discord')
});

// facebook callback
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
  res.send('you reached the callback uri for facebook')
});

// github callback
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.send('you reached the callback uri for github')
});

module.exports = router;
