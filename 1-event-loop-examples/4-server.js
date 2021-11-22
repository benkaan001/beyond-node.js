const http = require('http');

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello World');
})

server.listen(5000, ()=> {
    console.log('Server listening on Port : 5000 .......');
})

// every time the request comes in, we invoke the req. 