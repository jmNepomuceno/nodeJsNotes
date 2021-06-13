const fs = require('fs')

for(let i = 1; i <= 100; i++){
    fs.writeFileSync('./static/files/bigFile.txt' , `Hello World ${i}\n`, {flag:'a'})
}