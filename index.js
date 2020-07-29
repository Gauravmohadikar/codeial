const express = require("express")
const port = 8000
const app = express()

app.use("/", require("./routes/index"));

app.listen(port, function(error){
    if(error){
        console.log(`Express Serveer is not running: ${error}`)
    }

    console.log("Express Server is running on port: ", port);
})
