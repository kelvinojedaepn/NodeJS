const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to the server")
        return res.end()
    }
    if (req.url === "/about") {
        res.write("About us")
        return res.end()
    }
    console.log(req.url)
    res.write(`
    <h1>Page not found</h1>
    <p>Go to the main route</p>
      <a href="/">Main route</a>
    `)
    res.end()
})
server.listen(3001) // localhost:3001

// if a put localhost:3001/ the url is /
// if a put localhost:3001/about the url is /about
// also show favicon.ico that is the icon of the page

console.log("Server on port 3001")