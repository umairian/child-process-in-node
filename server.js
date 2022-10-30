const { fork } = require("child_process");
const http = require("http");

const port = 4000;

function requestHandler(req, res) {
    if(req.url === "/total") {
        const child = fork(__dirname + "/child.js");

        // child.send("message"); // Send message to child process from parent process

        child.on("message", function (result) {
            res.write(`Our slow function result is: ${result}`);
            res.end();
        });
    } else if(req.url === "/test") {
        res.end("Testing Route is working");
    }
}

const server = http.createServer(requestHandler);

server.listen(port, function () {
    console.log(`Server running on port:${port}`);
});