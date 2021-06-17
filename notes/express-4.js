const express = require('express')
const {ex} = require('./database')
const app = express()

app.get('/', (req,res)=>{
    res.send("<h1> Home Page </h1> <a href='/api/products'> Products </a>")
})

app.get('/api/products', (req,res)=>{
    //filter the data
    const newData = ex.map((elem) => {
        const {id, name} = elem
        return {id,name}
    })
    res.json(newData)
})

app.get('/api/products/:id', (req,res)=>{
    const {id} = req.params
    const newData = ex.find((elem) =>{
        if(elem.id === parseInt(id)){
            return elem
        }
    })

    if(!newData) return res.status(200).send("Can't find the data")

    res.json(newData)
})

const port = 3000
app.listen(port, () =>{
    console.log(`Listening to port ${port}...`)
})