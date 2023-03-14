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

app.post('/api/newPizza', async (req, res) => {
    connection.query("INSERT INTO pizza(name, ingredients, grade) VALUES(?, ?, ?)"),
        [req.body.name, req.body.ingredients, req.body.grade],
        function (err, results, fields) {
            res.status(200).json(results)
        }
})

app.put('/api/pizza:id', async (req, res) => {

})

app.delete('/api/pizza:id', async (req, res) => {

})

app.listen(3000, () => {
    console.log('connected to webb');
})