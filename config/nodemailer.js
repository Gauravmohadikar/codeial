const nodemailer = require("nodemailer")
const ejs = require("ejs")
const path = require("path") ;
const env = require("./environment")

let transporter = nodemailer.createTransport(env.smtp)

//no error is showing plus success is not showing....



let renderTemplate = (data, relativePath) => {
    let mailHTML                                                                                                        
    ejs.renderFile (
        path.join(__dirname, "../views/mailers", relativePath),
        data,
        function(error, template){
            if(error){
                console.log("Error in rendering the template", error);
                return ;
            }

            mailHTML = template;
        }
    )

    return mailHTML;
}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate ,
}