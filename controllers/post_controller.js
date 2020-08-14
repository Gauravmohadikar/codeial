const User = require("../models/user")
const Post = require("../models/post")
const Comment = require("../models/comment")

module.exports.create = function(req, res){
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function(error, post){
        if(error){
            console.log("error in creating a post");
            return;
        }

        return res.redirect("back")
    })
}


module.exports.destroy = function(req, res){
    Post.findById(req.params.id, function(error, post){
        //.id means coverting the object id into strings
        if(post.user == req.user.id){
            post.remove();

            Comment.deleteMany({post: req.params.id}, function(error){
            return res.redirect("back");

            })
        }

        else{
            return res.redirect("back")
        }
    })
}