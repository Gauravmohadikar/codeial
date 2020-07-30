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