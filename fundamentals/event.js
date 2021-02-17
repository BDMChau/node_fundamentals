const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter { 
    constructor(){
        super();
    }
}

// init obj
const myEmitter = new MyEmitter();

// Event listener (listen before emit)
myEmitter.on("event", (...args) => {
    console.log("\nAn event occurred!");
    console.log(`Parameters: ${args}`);
})

// init an event
myEmitter.emit("event", "param 1", " param 2", " ...")


// Example
const plusTwoNumber = (a, b) => {
    let c = a + b;

    myEmitter.emit("event", `Result from plusTwoNumber(): ${c}`);
    return c;
}
plusTwoNumber(2, 3);
plusTwoNumber(4, 5);

