const fs = require("fs")

const firstDoc = fs.readFileSync("./data/data01.txt")
const secondDoc = fs.readFileSync("./data/data02.txt", "utf-8")
console.log(firstDoc) // devuelve un buffer
console.log(firstDoc.toString()) // devuelve el contenido del archivo
console.log(secondDoc) // devuelve el contenido del archivo con codificación utf-8

fs.writeFileSync("./data/data03.txt", "Hola mundo desde Node.js") // crea un archivo con el contenido que le pasemos

const title = "Hola mundo desde Node.js\n"
fs.writeFileSync("./data/data04.txt", title, {
        flag: "a", // agrega el contenido al final del archivo, a = append
    }) // crea un archivo con el contenido que le pasemos

fs.readFile("./data/data03.txt", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString())
    }
})

const readFile = new Promise((resolve, reject) => {
        fs.readFile("./data/data03.txt", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data.toString())
            }
        })
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

// console.log(
//     "Con promesa: ",
//     readFile
// )