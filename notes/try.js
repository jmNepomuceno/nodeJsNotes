const http = require('http')
http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write(JSON.stringify([1,2,3]))
        res.end()
    }
}).listen(3000,()=> console.log("Listening to port 3000..."))