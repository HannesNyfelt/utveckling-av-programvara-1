const express = require('express')
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pokémon'
})
const app = express()
app.use(express.static(__dirname + '/../public'))


app.get('/api/pokemon', (req, res) => {
    const pokemon = connection.query(
        'SELECT * FROM `pokemon`',
        function (err, rows) {
            //console.log(err);
            res.json(rows)
        }
    )
})


app.listen(3000, () => {
    console.log('connected to webb');
})