module.exports.facebook = function(req, res){
    // return res.end("<h1> this is Facebook</h1>")
    return res.render("social",{
        title:"localhost:8000/social/facebook"
    })
}

module.exports.instagram = function(req, res){
    // return res.end("<h1> this is Instagram</h1>")
    return res.render("social",{
        title:"localhost:8000/social/Instagram"
    })
}


// module.exports.instagram = function(req, res){
//     return res.end("<h1> This is Instagram</h1>")
// }


module.exports.twitter = function(req, res){
    // return res.end("<h1> this is Twitter</h1>")
    return res.render("social",{
        title:"localhost:8000/social/Twitter"
    })
}

// module.exports.twitter = function(req, res){
//     return res.end("<h1> This is Twitter")
// }