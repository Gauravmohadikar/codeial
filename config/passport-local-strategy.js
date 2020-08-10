const passport = require("passport")
const LocalStartegy = require("passport-local").Strategy ;
const User = require("../models/user")

//authentication using passport save and run
passport.use(new LocalStartegy({
    usernameField: "email"
    },

    function(email, password, done){
        //find the user and establish the identity

        User.findOne({email: email}, function(error, user){
            if(error){
                console.log("Error in finding the user --> passport");
                return done(error);
            }

            if(!user){
                console.log("Invalid! username/password")
                return done(null, false) ;
            }

            return done(null, user)
        })
    }
))


//Serializing the user to decide which key is to be kept in the cookie save and run 
passport.serializeUser(function(user, done){
    done(null, user.id);
})

//Deserializing the user from key in the user save and run
passport.deserializeUser(function(id, done){
    User.findById(id, function(error, user){
        if(error){
            console.log("Error in finding the user --> passport");
            return done(error);
        }

        return done(null, user)
    })
})


//check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    //if the user is sign-in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next() ;
    }

    //if the user is not sign in
    return res.redirect("/users/sign-in")
}

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        //req.user contains the current signedin user from the sessioncookie and we are sending this to locals to views
        res.locals.user = req.user ;
    }

    next();
}


module.exports = passport ;