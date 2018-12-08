const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const { User } = require('../models');

passport.use(new FacebookTokenStrategy({
  clientID: process.env.REACT_APP_FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET
}, (accessToken, refreshToken, profile, done) => {
  const { id, first_name, last_name } = profile._json;
  return User.findOrCreate({
    where: { facebookId: id },
    defaults: {
      facebookId: id,
      firstName: first_name,
      lastName: last_name,
      picture: profile.photos[0].value
    }
  })
    .then(user => {
      done(null, user[0]);
      return;
    })
    .catch(err => {
      done(err, null);
      return;
    });
}));

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  return User.findById(id)
    .then(user => {
      done(null, user);
      return;
    })
    .catch(err => {
      done(err, null);
      return;
    });
});

module.exports = passport;
