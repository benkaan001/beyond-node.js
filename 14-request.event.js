const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// });

// Alternative way to set up the server Using Event Emitter API 
const server = http.createServer()
// under the hood the server emits the request event
// subscribe to it / listen for it / respond to it
server.on('request', (req,res) => {
    res.end('Welcome')
});

server.listen(5000);


// even though we may not be setting up events, modules rely heavily on events on their own and come with methods. 