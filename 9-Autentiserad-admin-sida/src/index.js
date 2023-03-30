const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const path = require('path')
const { db } = require('./db')
const MySQLStore = require('express-mysql-session')(session)
const server = express()

server.use(session({
    secret: 'nksdhjgfpÖAWIUEHsdkjfhöfkljahdpöfldikabseöäfoi',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, httpOnly: true, sameSite: true, maxAge: 1000 * 60 * 60 },
    store: new MySQLStore({
        host: 'localhost',
        user: 'root',
        database: 'worse_login'
    })
}))

server.use(cookieParser())
server.use(express.urlencoded())
server.use(express.json())

server.use(express.static(__dirname + '/../public'))

server.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})





server.get('/admin', (req, res) => {
    req.sessionStore.get(req.cookies.session_id, (err, data) => {
        if (err) throw err
        if (data == null) {
            res.redirect('/')
        }
        res.sendFile(path.resolve('public/admin.html'))
    })

})

const user = {
    email: 'P0r0k1ng',
    password: 'hannes10'
}
server.post('/api/login', (req, res) => {
    if (user.email == req.body.email && user.password == req.body.password) {
        req.session.user = { user: user, loggedIn: true }
        res.cookie('session_id', req.sessionID, { httpOnly: true, secure: true, sameSite: true })
        res.redirect('/admin.html')
    }
    else {
        res.redirect('back')
    }

})

server.get('/api/logout', (req, res) => {
    res.redirect('/index.html')
})


server.listen(3000, () => {
    console.log('connected to webb');
})