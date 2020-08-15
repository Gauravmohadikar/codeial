    const Post = require("../models/post");
    const User = require("../models/user")
    
    module.exports.home = async function(req, res){

        try{
            
        // populate the user for each post
        let posts = await Post.find({})
        .populate("user")
        .populate({
            path: "comments",
            populate: {
                path: "user"
            }
        })

        let users = await User.find({})
   
            return res.render("home", {
                title: "Codeial | Home",
                posts: posts, 
                all_users: users
            })
        }
        
        catch(error){
            console.log("Error: ", error)
            return 
        } 
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