    const Post = require("../models/post");
    
    module.exports.home = function(req, res){
        // return res.end("<h1>Express Server is up for Codieal</h1>")
        // console.log(req.cookies)
        // Post.find({}, function(error, posts){
        //     return res.render('home', {
        //         title:'Codeial | Home',
        //         posts: posts
        //     });
        // })

        // populate the user for each post
        Post.find({})
        .populate("user")
        .populate({
            path: "comments",
            populate: {
                path: "user"
            }
        })
        .exec(function(error, posts){
            return res.render("home", {
                title: "Codeial | Home",
                posts: posts
            })
        })
    }


    module.exports.play = function(req, res){
        // return res.end("<h1>I guess I'm just a Play Date to you</h1>")
        return res.render('home', {
            title:'localhost:8000/play',
        });
    }

    module.exports.savage = function(req, res){
        // return res.end("<h1>Savage Love Did somebody did somebody Break Your Heart</h1>")
        return res.render('home', {
            title:'localhost:8000/savage',
        });
    }

    //comment is added in database
    //mam excatly whats the problem
    //nothing..jst after that syntax error ..server needed to be restarted and file was to be saved
    //oky okay     
    //ill will resolve ...yes:)