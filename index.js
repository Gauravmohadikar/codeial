const express = require("express")
const env = require("./config/environment")
const port = 8000
const app = express()
const expressLayout = require("express-ejs-layouts")

const db = require("./config/mongoose")
const cookieParser = require("cookie-parser")

//for Session-Cookie
const session = require("express-session")
const passport = require("passport")
const passportLocal = require("./config/passport-local-strategy")

const passportGoogle = require("./config/passport-google-oauth2-strategy")

const MongoStore = require("connect-mongo")(session) ;

const sassMiddleware = require("node-sass-middleware") ;

const flash = require("connect-flash");
const custonMware = require("./config/middleware");

//setup the chat server
const chatServer = require("http").Server(app)
const chatSocket = require("./config/chat_socket").chatSockets(chatServer)
chatServer.listen(5000)
console.log("Chat server is listen on port 5000")
const path = require("path")

app.use(sassMiddleware({
    src: path.join(__dirname, env.assest_path, "scss"),
    dest: path.join(__dirname, env.assest_path, "css"),
    debug: true,
    outputStyle: "extended",
    prefix: "/css"
}))


app.use(express.urlencoded())
app.use(cookieParser())
// app.use("/", require("./routes/index"));
app.use(express.static(env.assest_path))
//make the upload path available to the browser
app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayout);
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)

app.set("view engine", "ejs")
app.set("views", "./views")

//mongo store is used to store the session cookie in db
app.use(session({
    name: "codeial",
    //TODO change the secret before deployment in production mode
    secret: env.session_cookie_key,
    saveUninitialized:false,    
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }, 
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: "disabled"
        },
        function(error){
            console.log(error || "Connect - MongoDB setup OK")
        }
    )
})) ;

app.use(passport.initialize())
app.use(passport.session())

app.use(passport.setAuthenticatedUser) ;

app.use(flash());
app.use(custonMware.setFlash)

app.use("/", require("./routes/index"));





app.listen(port, function(error){
    if(error){
        console.log(`Express Serveer is not running: ${error}`)
    }

    console.log("Express Server is running on port: ", port);
})
