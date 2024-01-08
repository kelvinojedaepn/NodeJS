const path = require('path')
    // Use path not matter the platform where is running

// console.log(path);
const filePath = path.join('/public', 'main', 'index.html')
    // \public\main\index.html

console.log(path.basename(filePath)); // devuelel nombre del archivo de la ruta
console.log(path.dirname(filePath)); // devuelve la ruta de los directorios sin el archivo
console.log(path.parse(filePath)); // devuelve un objeto con la ruta, el nombre del archivo y la extensión

console.log(path.resolve(__dirname, 'public', 'main', 'index.html')); // devuelve la ruta absoluta de la ruta relativa que le pasamos
console.log(path.resolve('index.html')); // devuelve la ruta absoluta de la ruta relativa que le pasamos