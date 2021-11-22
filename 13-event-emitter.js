
// EVENT-DRIVEN PROGRAMMING is heavily used in Node.js
//The flow of the program is determined by the events taking place throughout the program

// <on> listens to event while <emit> emits the event

const EventEmitter = require('events');
//we create an instance of the EventEmitter object
const customEmitter = new EventEmitter();

customEmitter.on('response', (user, id)=> {
    console.log(`data received from user: ${user} with id#: ${id}`);
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here in my callback function`);
})

customEmitter.emit('response', 'john', 15 ); 

// data received from user: john with id#: 15
// some other logic here in my callback function