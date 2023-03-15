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
        function (err, results) {
            res.status(200).json(results)
        }
})

app.get('/editPizza/:id', (req, res) => {
    res.status(200).sendFile(path.resolve("public/edit.html"))
})

app.get('/api/editPizza/:id', (req, res) => {
    connection.query("SELECT * FEOM pizza WHERE id LIKE ?",
        [req.params.id],
        function (err, results) {
            res.status(200).json(results)
        })
})

app.put('/api/editPizza', async (req, res) => {
    connection.query("UPDATE pizza SET name = ?, ingredients = ?, grade = ? WHERE id = ?",
        [req.body.name, req.body.ingredients, req.body.grade, req.body.id],
        function (err, results) {
            res.status(200).sendFile(path.resolve("public/index.html"))
        })
})

app.delete('/api/deletePizza', async (req, res) => {
    connection.query("DELETE FROM pizza WHERE id = ?",
        [req.body.id],
        function (err, results) {
            res.status(200).json(results)
        })
})

app.listen(3000, () => {
    console.log('connected to webb');
})