const config = require('./config')
const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local');
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/user/model')
var JwtStrategy = require('passport-jwt').Strategy
var ExtractJwt = require('passport-jwt').ExtractJwt

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use('login', new LocalStrategy({

    usernameField: 'email',
    passReqToCallback: true

}, async(req, email, password, done) => {

    let user = await User.findOne({ email: email });
    
    //Check user doesn't exist or password is wrong
    if (!user || !(await user.comparePassword(password))) {
        return done(null, false,{ message : 'invalid e-mail address or password' });
    }

    user = user.toObject();
    delete user.password;

    done(null, user);

}))

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwtSecret;

passport.use('jwtAuth', new JwtStrategy(opts, function(jwt_payload, done) {

    User.findOne({ id: jwt_payload.sub },'_id', function(err, user) {

        if (err) {
            return done(err, false);
        }
        if (user) {
            // Remove field
            user = user.toObject()
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


module.exports = passport;
