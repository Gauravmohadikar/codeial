const Comment  = require("../models/comment")
const Post = require("../models/post")

module.exports.create = function(req, res){
    Post.findById(req.body.post, function(erroe, post){

        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(error, comment){
                if(error){

                    console.log("error in commenting on the Post");
                }else{
                    console.log('comment',comment);
                }

                post.comments.push(comment) ;
                post.save();

                res.redirect("/")
            })
        }
    })
}