//streams use to read and write sequencially
// writable used to write data ''
// readable used to read data
// duplex used to both read and write
// transform used to modify data

const fs = require('fs')

const stream = fs.createReadStream('./static/files/bigFile.txt', {encoding:'utf8'})

stream.on('data', (result)=>{
    console.log(result)
})