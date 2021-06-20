const express = require('express')
const {students} = require('./data')
const path = require('path')

const app = express()

app.use(express.static('./static'))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./static/index.html'))
})

app.get('/api/students', (req,res)=>{
    res.json(students)
})

app.get('/api/students/:id' , (req,res)=>{
    const {id} = req.params
    const studentID = students.find((elem)=>{
        return elem.id === parseInt(id)
    })
    //console.log(studentID)

    if(!studentID){
        return res.status(404).send("Can't find your input request")
    }
    return res.json(studentID)
})

app.get('/api/class1/students/query' ,(req,res)=>{
    const {id,name,age,search,limit} = req.query
    let newStudents = students

    if(id){
        newStudents = students.find((elem) =>{
            return elem.id === parseInt(id)
        })
    }else if(name){
        newStudents = students.find((elem) =>{
            return elem.name === name
        })
    }else if(age){
        newStudents = students.find((elem) =>{
            return elem.age === parseInt(age)
        })
    }else if(search){
        newStudents = students.filter((elem) =>{
            return elem.name.startsWith(search.toUpperCase())
        })
    }

    if(limit && parseInt(limit) <= newStudents.length){
        newStudents = newStudents.slice(0,parseInt(limit))
    }else if(limit && parseInt(limit) > newStudents.length){
        return res.status(404).send('Invalid Limit request query')
    }

    if(newStudents.length < 1){
        return res.status(404).send('Can not find your request query')
    }

    return res.json(newStudents)
})

const port = 3000
app.listen(port , ()=>{
    console.log(`Listening to port ${port}`)
})