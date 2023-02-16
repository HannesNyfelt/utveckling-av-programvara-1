const express = require('express')
const app = express()
server.use(express.static('public'))

app.get("/api/quote", (req, res) => {

})

app.listen(3000, () => {
    console.log('connected to webb');
})