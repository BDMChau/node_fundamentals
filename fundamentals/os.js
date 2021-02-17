const os = require("os");


// Platform
console.log(os.platform());

// cpu architecture
console.log(os.arch());

// cpu core info
console.log(`Core: ${os.cpus().length}`);
console.log(os.cpus());


// free memory
console.log(`Free memory: ${os.freemem()}`);


// total memory
console.log(`Total memory: ${os.totalmem()}`);
