const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        // BLOCKING CODE !!!!
        for(let i=0; i<100; i++){
            for (let j=0; j<100; j++){
                console.log(`${i} and ${j}`);

            }
        }
        res.end('About Page')
    }
    res.end('Error Page');


})

server.listen(5000, () => {
    console.log('Server listening on port 5000...');
})

// the blocking code not only blocks the users makign requests but also the rest of our code to run. 
