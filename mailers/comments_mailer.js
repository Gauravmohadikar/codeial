const nodeMailer = require("../config/nodemailer") ;


//this is another way of exporting a method
exports.newComment = (comment) => {
    console.log("inside newComment Mailer", comment);

    nodeMailer.transporter.sendMail({
        from: "abc@gmail.com",
        to: comment.user.email,
        subject: "New Comment Published!",
        html: "<h1> Yup, your comment is now published! </h1>"
    }, (error, info) => {
        if(error){
            console.log("Error in sending mail", error)
            return ;
        }


        console.log("Message Sent", info);
        return;
    })
}