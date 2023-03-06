const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pokémon'
})
const app = express()
app.use(express.static(__dirname + '/../public'))


app.get('/api/pokemon', async (req, res) => {
    const [pokemon] = await connection.promise().query('SELECT * FROM pokemon')
    res.json(pokemon)
})

app.get('/api/pokemon/search', async (req, res) => {
    const [rows] = await connection.promise().query('SELECT * FROM pokemon WHERE name LIKE ?', ['%' + req.query.name + '%'])
    res.json(rows)
})

app.listen(3000, () => {
    console.log('connected to webb');
})