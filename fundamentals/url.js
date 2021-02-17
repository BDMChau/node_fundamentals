
const myUrl = new URL("https://myurl.com:80/tab1.html?id=1234&status=active");


// Whole url
console.log(myUrl.href);

// Host (root)
console.log(myUrl.host);

// Hostname (not include port)
console.log(myUrl.hostname);

// Pathname 
console.log(myUrl.pathname);

// query string
console.log(myUrl.search)

// query object
console.log(myUrl.searchParams)

// add param
myUrl.searchParams.append("addnewparam","111");
console.log(myUrl.search)

// loop params
console.log("\nLoop params:")
myUrl.searchParams.forEach((val, name) => {
    console.log(`${name}: ${val}`)
})