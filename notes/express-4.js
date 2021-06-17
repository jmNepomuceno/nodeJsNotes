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
    //based on the parameters 
    const {id} = req.params
    const newData = ex.find((elem) =>{
        if(elem.id === parseInt(id)){
            return elem
        }
    })

    if(!newData) return res.status(200).send("Can't find the data")

    res.json(newData)
})

app.get('/api/v1/query' ,(req,res)=>{
    const {search,limit} = req.query

    console.log(req.query)
    let newExArr = ex

    if(search){
        newExArr = newExArr.filter((elem) =>{
            return elem.name.startsWith(search.toUpperCase())
        })
    }

    if(limit){
        newExArr = newExArr.slice(0,parseInt(limit))
    }

    if(newExArr.length < 1){
        return res.status(404).send("No query matched")
    }

    return res.json(newExArr)
})

const port = 3000
app.listen(port, () =>{
    console.log(`Listening to port ${port}...`)
})