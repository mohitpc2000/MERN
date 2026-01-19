const names = require('./Module2');
console.log(names);
const sayHello = require('./Model3');
sayHello(names.peter);
sayHello(names.john);
sayHello("Mary Jane");