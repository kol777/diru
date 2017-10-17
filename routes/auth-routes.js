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

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
  res.send('you reached the callback uri for google')
});

router.get('/discord/redirect', (req, res) => {
  res.send('you reached the callback uri for discord')
});

module.exports = router;
