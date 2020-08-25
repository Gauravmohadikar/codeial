const nodemailer = require("nodemailer")
const ejs = require("ejs")
const path = require("path") ;


let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com", 
    port: 587,
    secure: false,
    auth: {
        user: "abc@gmail.com",
        pass: "xyz" 
    },
    tls: {
        rejectUnauthorized: false
      }
})

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