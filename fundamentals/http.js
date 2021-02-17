const http = require("http");

// Create server
const server = http.createServer((req, res) => {
    // destroy all request from postman tool
     if(req.headers["user-agent"].includes("PostmanRuntime")){
         req.destroy()
     }
 
    // send response to client
    res.write("Hello, this is the server nodejs...");
    res.end();
})

server.listen(4000, () => console.log(`Server is running at port 4000`));