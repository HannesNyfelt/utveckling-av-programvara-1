const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'temperature'
})
const app = express()
app.use(express.static(__dirname + '/../public'))

app.get('/api/temperature', async (req, res) => {
    const [rows] = await connection.promise().query('SELECT * FROM temperature')
    res.json(rows)
})



app.listen(3000, () => {
    console.log('connected to webb');
})