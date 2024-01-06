const { user, myNumber, myArray } = require('./myModule.js')
const math = require('./../math/index.js')

console.log(user, myNumber, myArray);
console.log(math.sumar(1, 2));
console.log(math.restar(1, 2));
console.log(math.multiplicar(1, 2));