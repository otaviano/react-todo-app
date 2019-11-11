const port = 5050
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const CORS = require('./cors')

server.use(bodyParser.urlencoded({ extended:true })) 
server.use(bodyParser.json())
server.use(bodyParser.json({type:'application/vnd.api+json'}));
server.use(CORS)
 
server.listen(port, () => console.log(`back-end is running on port ${port}`))

module.exports = server