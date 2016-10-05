const http = require('http');

function handleRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

function start() {
    http.createServer(handleRequest).listen(3000);

    console.log('Simple server started on port 3000.');
}

module.exports = { start };
