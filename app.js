const express = require('express');
const passportSetup = require('./config/passport-setup');
// import routes
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');


const app = express();

// set up ejs view
app.set('view engine', 'ejs');

app.use(cookieSession({
  // 24 hours in milisecs
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//init passportSetup
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
  console.log('connected to mongodb')
});

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// homepage route
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
