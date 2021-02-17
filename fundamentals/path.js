const path = require("path");

// Base filename
console.log(`Filename: ${path.basename(__filename)}`);

// Directory name
console.log(`Directory name: ${path.dirname(__filename)}`);

// File extension
console.log(`Extension name: ${path.extname(__filename)}`);

// Path object
console.log("\nPath Object:");
console.log(path.parse(__filename));

// concatenate paths
console.log(`File concat: ${path.join(__dirname, "concat", "fileconcat.txt")}`)