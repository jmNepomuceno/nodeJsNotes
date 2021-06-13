const http = require('http')

const server = http.createServer((req, res)=>{
    //create a headers (status , headers) common header is the content type
    // Header
    // body (optional)
    // end
    res.writeHead(200, {contentType: 'text/html'})
    res.write("<h1> Home Page </h1>")
    res.end()
})

const port = 3000
server.listen(port , ()=>console.log(`Listening to port ${port}`))