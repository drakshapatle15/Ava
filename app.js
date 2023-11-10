var express = require("express")
var bodyParser = require('body-parser')
var chatRouter = require("./chat/router")
var port = 5000

var app = express()
app.use(bodyParser.json())
app.use(chatRouter)

app.listen(port, () => console.log("Up & RUnning *5000"));
