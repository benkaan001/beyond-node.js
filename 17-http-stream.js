const http = require('http');
const fs = require('fs');


// will send this entire file of 1.8MB size. This is not a good idea because there is a BETTER way...

// http
// .createServer((req,res) => {
//     const text = fs.readFileSync('./content/big.txt', 'utf-8')
//     res.end(text)
// })
// .listen(5000);



// notice that the size is still the same but the responde-headers in now "CHUNKED"
http
.createServer((req,res) => {
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8')
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
.listen(5000);

//We are using file system module's createReadStream method and setting up the callback to return the 
//response using the pipe method, which pushes the data from the READSTREAM to WRITESTREAM

// in other words, if we can read data in chunks we can also write data in chunks 