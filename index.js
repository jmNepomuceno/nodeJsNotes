const express = require('express')
const {ex} = require('./data')
const path = require('path')

const app = express()

app.use(express.static('./static'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./static/index.html'))
})

app.get('/ex', (req,res)=>{
    res.json(ex)
})

const port = 3000
app.listen(port , ()=>{
    console.log(`Listening to port ${port}`)
})