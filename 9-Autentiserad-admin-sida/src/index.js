const express = require('express')
const server = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
server.use(express.static(__dirname + '/../public'))

server.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

server.get('/admin', (req, res) => {
    res.sendFile(path.resolve('public/admin.html'))
})

server.post('/api/login', (req, res) => {

})

server.get('/api/logout', (req, res) => {

})


server.listen(3000, () => {
    console.log('connected to webb');
})