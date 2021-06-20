const express = require('express')
const {movies} = require('./data')
const path = require('path')
const app = express()

//app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine' , 'ejs')

app.get('/', (req,res)=>{
    //res.json(movies)
    res.render('index')
    //res.sendFile(path.resolve('./public/index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening to port ${port}`))