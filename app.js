const express = require('express')
const winston = require("./src/t02-loggingToFolder")
const app = express()

//initialize winston
app.use(winston)

app.get('/', function (req, res) {
  res.send('Hello World!')
})

/*
* Server
*/
//Start Server
const port = process.env.APP_PORT || 3000
const host = process.env.APP_HOST || "localhost"

app.listen(port, function() {
  console.log("Listening on " + host + ":" + port)
})
