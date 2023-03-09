const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pizzaTower'
})
const app = express()
app.use(express.static(__dirname + '/../public'))


app.get('/api/pizza', async (req, res) => {
    const [rows] = await connection.promise().query('SELECT * FROM pizza')
    res.json(rows)
})


app.listen(3000, () => {
    console.log('connected to webb');
})