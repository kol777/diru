// instance of a Router
const router = require('express').Router();

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
router.get('/google', (req, res) => {
  // passport
  res.send('Log in with googles');
});

module.exports = router;
