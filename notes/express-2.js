const express = require('express')
const data = require('./database')
const app = express()

app.get('/', (req,res) => {
    res.json(data.ex)
})

const port = 3000
app.listen(port , () => {
    console.log(`Listening to port ${port}....`)
})