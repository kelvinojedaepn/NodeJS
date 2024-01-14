// console.log("First")
// setTimeout(() => { // tarea pendiente
//     console.log("Second")
// }, 0)
// console.log("Third")

const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to the server")
        return res.end()
    }
    if (req.url === "/about") {
        return res.end("About us")
    }
    res.end("Not found")
})

server.listen(3000)