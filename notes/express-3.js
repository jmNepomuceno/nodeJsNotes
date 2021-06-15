const express = require('express')
const app = express()
const data = require('./database')

app.get('/', (req, res)=>{
    res.send('<h1> Home Page </h1> <a href="/api/products"> products </a>')
})

app.get('/api/products' , (req, res)=>{
    const newData = data.ex.map((elem) =>{
        const {name} = elem
        return {name}
    })
    
    res.json(newData)
})

const port = 3000
app.listen(port , ()=>{
    console.log(`Listening to port ${port}`)
})