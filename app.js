const express = require('express')
const logger = require("./src/t02-winstonWithColors")
const app = express()

app.get('/', function (req, res) {
  logger.info("Test Message")
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
