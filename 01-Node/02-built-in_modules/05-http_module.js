const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to the Home Page");
    }
    if(req.url === '/about') {
        res.end("Welcome to the about Page");
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seems to find the page you are looking for</p>
        <a href="/">Home</a>
    `);
});

server.listen(5000);