const express = require('express')
const app = express()
const {logger} = require('./logger')
const {authorize} = require('./authorize')
// req => middleware => res

app.use([logger,authorize])

app.get('/', (req,res)=>{
    console.log(req.user)
    res.send("Home Page")
})

app.get('/about', (req,res)=>{
    res.send("About Page")
})

app.get('/api/products', (req,res)=>{
    res.send("Product Page")
})

app.get('/api/items', (req,res)=>{
    res.send("Items Page")
})

app.listen(3000, ()=>{
    console.log('Listening to Port 3000')
})