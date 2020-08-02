const User = require("../models/user");

module.exports.profile = function(req, res){
    // return res.end("<h1>This is User's Profile</h1>")
    return res.render("users",{
        title:"localhost:8000/users/profile"
    })
}

module.exports.bio = function(req, res){
    // return res.end("<h1>This is User's Bio</h1>")
    return res.render("users",{
        title:"localhost:8000/users/bio"
    })
}

module.exports.history = function(req, res){
    // return res.end("<h1>This is User's History</h1>")
    return res.render("users",{
        title:"localhost:8000/users/history"
    })
}

module.exports.signup = function(req, res){
    return res.render("user_sign_up",{
        title: "Sign Up"
    })
}

module.exports.signin = function(req, res){
    return res.render("user_sign_in", {
        title: "Sign In"
    })
}

//SignUp
module.exports.create = function(req, res){
    // if(req.body.password != req.body.confirm_password)
    // {
    //     return res.redirect("back");
    // }

    // User.findOne({email: req.body.email}, function(error, user){
    //     if(error){
    //         console.log('Error in finding the user in SignUp ',error)
    //     }

    //     if(!user){
    //         User.create(req.body, function(error, user){
    //             if(error){
    //                 console.log('Error in creating the user in Sign Up', error)
    //                 return ;
    //             }

    //             return res.redirect("/users/sign-in")
    //         })
    //     }
    //     else{
    //         return res.redirect('back');
    //     }
    // })

    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect("back");
    }

    User.findOne({email: req.body.email}, function(error, user){
        if(error){
            console.log("Error in finding user in SignUp", error)
            return 
        }

        if(!user){
            User.create(req.body, function(error, user){
                if(error){
                    console.log("Error in creating user in SignUp")
                    return ;
                }

                return res.redirect("/users/sign-in")
            })
        }
        else {
            return res.redirect("back")
        }

    })
}

//SignIn
module.exports.createSession = function(req, res){
    //TODO later
}