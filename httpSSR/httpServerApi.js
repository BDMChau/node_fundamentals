const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "/public/home.html"),
            (err, result) => {
                if (err) {
                    if (err.code === "ENOENT") {
                        //file not found
                        res.end("404 not found")
                    } else {
                        res.end("Have an error")
                    }
                };

                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(result);
                res.end();
            })

    } else if (req.url === "/about") {
        fs.readFile(path.join(__dirname, "/public/about.html"),
            (err, result) => {
                if (err) {
                    if (err.code === "ENOENT") {
                        //file not found
                        res.end("404 not found")
                    } else {
                        res.end("Have an error")
                    }
                };

                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(result);
                res.end();
            })

    } else if (req.url === "/api/user") { // return RESTful API
        // create a fake database
        const user = [
            { name: "user1", age: 25 },
            { name: "user2", age: 20 },
            { name: "user3", age: 22 }
        ]

        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(user));
        res.end();

    } else {
        res.end("404 not found")
    }

})

server.listen(port, () => console.log(`Server is running at port 4000`));