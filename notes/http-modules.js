const http = require('http')
//sending html file
const fs = require('fs')

const server = http.createServer((req, res)=>{
    //create a headers (status , headers) common header is the content type
    // Header
    // body (optional)
    // end

    if(req.url === '/'){
        res.writeHead(200, {contentType: 'text/html'})
        const homePage_html = fs.readFileSync('./notes/index.html')
        res.write(homePage_html)
        res.end()
    }
    
    else if(req.url === '/about'){
        res.writeHead(200, {contentType: 'text/html'})
        res.write("<h1> About Page </h1>")
        res.end()
    }

    else{
        res.writeHead(404, {contentType: 'text/html'})
        res.write("<h1> Page Not Found </h1>")
        res.end()
    }

})

const port = 3000
server.listen(port , ()=>console.log(`Listening to port ${port}`))