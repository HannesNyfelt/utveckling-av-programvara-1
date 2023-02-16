const express = require('express')
const app = express()
const quotes = require("./data/quotes.json")
app.use(express.static(__dirname + '/../public'))

app.get("/api/quote", (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)]
    res.status(200).send(random)
})

app.listen(3000, () => {
    console.log('connected to webb');
})