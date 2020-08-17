const User = require("../models/user");
const fs = require("fs")
const path = require("path")

module.exports.profile = function(req, res){
    // return res.end("<h1>This is User's Profile</h1>")

    User.findById(req.params.id, function(error, user){
        return res.render("users",{
            title:"localhost:8000/users/profile",
            profile_user: user
        })
    })
}

module.exports.update = async function(req, res){
//     if(req.user.id == req.params.id){
//         User.findByIdAndUpdate(req.params.id, req.body, function(error, user){
//             return res.redirect("back")
//         });
//     }
//     else{
//         req.flash("error", "Unauthorized")
//         return res.status(401).send("Unauthorized");
//     }

        if(req.user.id == req.params.id){
            try{

                let user = await User.findById(req.params.id);// it was User instaed of user
                //okay okay    thank ok plx resolve it
                User.uploadedAvatar(req, res, function(error){
                    if(error){
                        console.log("*******multer Error*****:", error)
                    }
                   // mam just wait a sec plzzok

                    console.log(req.file);
                    user.name = req.body.name
                    user.email = req.body.email   

                    if(req.file){

                        if(user.avatar){
                            fs.unlinkSync(path.join(__dirname, "..", user.avatar))
                        }

                        //this is saving the path of uploaded file into the avatar field in the user
                        user.avatar = User.avatarPath + "/" + req.file.filename
                    }
                    user.save()
                    console.log("user", user)
                    return res.redirect("back")
                 })

            }
            catch(error){
                req.flash("error", error);
                return res.redirect("back")
            }

        }
        else{
            req.flash("error", "Unauthorized")
            return res.status(401).send("Unauthorized");
        }


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
    if(req.isAuthenticated()){
        return res.redirect("/users/profile")
    }

    return res.render("user_sign_up",{
        title: "Sign Up"
    })
}

module.exports.signin = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect("/users/profile")
    }
   
    return res.render("user_sign_in", {
        title: "Sign In"
    })
}

//SignUp
module.exports.create = function(req, res){

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
    req.flash("success", "Logged in Successfully")
    return res.redirect("/")
}

//SignOut
module.exports.destroySession = function(req, res){
    req.logout()
    req.flash("success", "You have looged out")
    return res.redirect("/") ;
}