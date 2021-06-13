const http = require('http')
const fs = require('fs')

//default way of creating a server with a callback function
// req = request
// res = response
// const server = http.createServer((req, res) =>{
//     res.end('Kyla Denzelle Samson Olmo Nepomuceno')
// })

//using event emitter API
// const server = http.createServer()
//console.log(server)
// whenever someone visit the server, we will listen to their request by using the eventemitter on
// server.on('request', (req, res)=>{
//     res.end('Kyla Denzelle Samson Olmo Nepomuceno')
// })

const server = http.createServer((req, res) =>{
    // const file = fs.createReadStream('./static/files/bigFile.txt', {encoding:'utf8'})
    // file.on('data', (result) =>{
    //     res.end(result)
    // })

    const file = fs.createReadStream('./static/files/bigFile.txt', 'utf8')

    file.pipe(res)
    
    // file.on('open', ()=>{
    //     file.pipe(res)
    // })

    file.on('error', (err) =>{
        res.end(err)
    })
    
})

const port = 3000
server.listen(port, () => console.log(`Listening to port ${port}`))