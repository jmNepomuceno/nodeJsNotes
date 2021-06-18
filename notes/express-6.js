const express = require('express')
const app = express()
const {people} = require('./database')

app.use(express.static('./method-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

//parse json data
app.use(express.json())

app.post('/login' , (req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.send('POST')
})

app.get('/api/people' ,(req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success : false, msg:'Please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})

app.listen(3000, ()=>{
    console.log('Listening to port 3000...')
})