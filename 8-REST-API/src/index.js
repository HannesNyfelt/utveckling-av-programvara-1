const express = require('express')
const mysql = require('mysql2')

const app = express()
app.use(express.static(__dirname + '/../public'))





app.listen(3000, () => {
    console.log('connected to webb');
})