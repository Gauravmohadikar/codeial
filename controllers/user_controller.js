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
    //TODO later
}

//SignIn
module.exports.createSession = function(req, res){
    //TODO later
}