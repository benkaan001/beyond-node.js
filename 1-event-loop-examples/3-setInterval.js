setInterval(() => {
    console.log('hello world');
    
}, 2000);

console.log('I will run first');

// process stays alive unless  we
// Kill Process with CONTROL + C   OR
// unexpected error takes place

//****************************** 
// I will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// ...

//****************************** 
