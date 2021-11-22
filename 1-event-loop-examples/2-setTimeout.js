// started operating system process

console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');

// completed and exited operating system process 


//********************************
// first
// third
// second
//******************************** 

// Even though the setTimeout is set for 0 sec, because setTimeout is async, the task it is running gets offlaoded. 