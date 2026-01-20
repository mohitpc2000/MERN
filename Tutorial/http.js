const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        return res.end("Welcome to the Home Page");
    }
    if(req.url==="/about"){
        return res.end("Welcome to the About Page");
    }
    res.end(`<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back to Home</a>
        `);
});

server.listen(3000);