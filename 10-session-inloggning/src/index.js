const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')

const server = express()
server.use(cookieParser())
server.use(express.urlencoded())
server.use(express.json())

server.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

server.get('/login', (req, res) => {
    res.sendFile(path.resolve('public/login.html'))
})

server.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve('public/dashboard.html'))
})



server.listen(3000, () => {
    console.log('server is up and running');
})