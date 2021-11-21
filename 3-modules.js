// every file in node is a module

// module are encapsulated code


//always starts with dot ./ or ../ in '' without js
const names = require('./4-names');
const sayHi = require('./5-utils');

// console.log(names);  =========>  //  { john: 'john', peter: 'peter' }





// sayHi('susan');
// sayHi(john);
// sayHi(peter);  

// we can either import the object as object =====> const { john, peter } = require('./4-names')
// or we can destructure how we pass the object as shown here: 

sayHi('susan');      //Hello there susan
sayHi(names.john);   //Hello there john
sayHi(names.peter);  //Hello there peter