const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gamesdb'
})
const app = express()
app.use(express.static(__dirname + '/../public'))

app.get('/api/games', (req, res) => {
    connection.query(
        'SELECT * FROM `game`',
    )
})

app.listen(3000, () => {
    console.log('connected to webb');
})