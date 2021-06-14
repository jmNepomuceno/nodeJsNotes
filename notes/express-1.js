const express = require('express')
const path = require('path') // use when passing html file for example
const app = express()

//get
//post
//put
//delete
//all
//use
//listen

// app.use is use for setting up middleware
// setup static and middleware
// to pass all the connected files in your html

// app.use(express.static('./notes'))

// app.get('/' , (req, res)=>{
    // __dirname, if you are on the same folder , the same with your html file
//     res.sendFile(path.resolve(__dirname, './index.html')) // to send html file for example
// })

app.use(express.static('./static'))

app.get('/' , (req, res) => {
    res.sendFile(path.resolve('./static/post.html'))
})

app.get('/about' , (req, res)=>{
    res.status(200).send("About Page Express")
})

app.all('*' , (req, res)=>{
    res.status(404).send("<h1> Resource not found </h1>")
})

const port = 3000
app.listen(port , ()=>{
    console.log(`Listening to port ${port}`)
})