const http = require('http')

//default way of creating a server with a callback function
// req = request
// res = response
// const server = http.createServer((req, res) =>{
//     res.end('Kyla Denzelle Samson Olmo Nepomuceno')
// })

//using event emitter API
const server = http.createServer()
//console.log(server)
// whenever someone visit the server, we will listen to their request by using the eventemitter on
server.on('request', (req, res)=>{
    res.end('Kyla Denzelle Samson Olmo Nepomuceno')
})

const port = 3000
server.listen(port, () => console.log(`Listening to port ${port}`))