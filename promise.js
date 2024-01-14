const { readFile } = require('fs')

readFile('./data/data01.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})


new Promise((res, rej) => {
    readFile('./data/data01.txt', 'utf-8', (err, data) => {
        if (err) {
            rej(err)
        }
        res(data)
    })
}).then(res => console.log(res)).catch(err => console.log(err))