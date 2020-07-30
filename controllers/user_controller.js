module.exports.profile = function(req, res){
    return res.end("<h1>This is User's Profile</h1>")
}

module.exports.bio = function(req, res){
    return res.end("<h1>This is User's Bio</h1>")
}

module.exports.history = function(req, res){
    return res.end("<h1>This is User's History</h1>")
}