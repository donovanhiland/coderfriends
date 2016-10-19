var express = require('express');
var session = require('express-session');
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

var port = 3000;
var requireAuth = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).end();
  }
  return next();
};

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(session({secret: 'matt is gay'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GithubStrategy({
  clientID: '25eb72198a7c64fecfe7',
  clientSecret: '88fef50eddc3b052e8391fd238c30111484a31c9',
  callbackURL: 'http://localhost:3000/auth/github/callback'
}, function(token, tokenSecret, userProfile, done) {
  return done(null, userProfile);
}));

app.get('/auth/github', function(req, res, next) {

});
app.get('/', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', {
  successRedirect: '/#/home',
  failureRedirect: '/auth/github'
}));
app.get('/api/github/following', requireAuth, passport.authenticate('github'));

app.listen(port, function() {
  console.log('server successfully on port ' + port);
});
