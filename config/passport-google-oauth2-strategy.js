const passport = require("passport")
const googleStrategy = require("passport-google-oauth").OAuth2Strategy;
const crypto = require("crypto")
const User = require("../models/user")

//tell passport to use new google strategy for google login
passport.use(new googleStrategy({
        clientID: "411177092996-dc28o7t4md9sj62vg40latr5n767s7hh.apps.googleusercontent.com",
        clientSecret: "PB3XMLObi1_X27hCPi7FNBOt",
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done){

        //find a user
        User.findOne({email: profile.emails[0].value}).exec(function(error, user){
            if(error){
                console.log("Error in google strategy-passport", error);
                return; 
            }

            console.log(profile)

            if(user){
                //if found, set this as req.user
                return done(null, user);
            }
            else{
                //if not found, create an user and set it as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                }, 
                function(error, user){
                    if(error){
                        console.log("Error in creating user google strategy-passport", error);
                        return;
                    }

                    return done(null, user)
                }
                )
            }
        })
    }
))

module.exports = passport