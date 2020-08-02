const express = require("express")

const port = 8000
const app = express()
const expressLayout = require("express-ejs-layouts")

const db = require("./config/mongoose")
const cookieParser = require("cookie-parser")


app.use(cookieParser())
// app.use("/", require("./routes/index"));
app.use(expressLayout);
app.use(express.static("./assets"))
app.use(express.urlencoded())
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
app.set("view engine", "ejs")
app.set("views", "./views")
app.use("/", require("./routes/index"));

app.listen(port, function(error){
    if(error){
        console.log(`Express Serveer is not running: ${error}`)
    }

    console.log("Express Server is running on port: ", port);
})
