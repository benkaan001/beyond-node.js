// this is the asynchronous version. This requires the callback function.
//The callback function is run after we are done with the readFile function  

// i.e on the eventlistener the callback function runs whenever the event- ie click- takes place first
const { readFile, writeFile } = require("fs");

console.log('start');

// if we don't get the utf coding we will get this in the console.log(result) ===> 
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 6f 75 72 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
readFile('./content/first.txt', 'utf-8', (err,result) => {
    if(err){
        console.log(err);
        return;
    }
    // console.log(result); // Hello this is our first text file

    const first = result;

    readFile('./content/second.txt', 'utf-8', (err,result)=> {
        if(err){
            console.log(err);
        }
        const second = result;
        writeFile(
            './content/result-asynch.txt',
            `Here is the result : ${first}, ${second}`
        ,(err,result) => {
            if(err){
                console.log(err);
            }
            // console.log(result); // we see the result in the result-asynch.txt file
            console.log('done with this task');
        })

    })
});

console.log('starting next task');

//***********************************
// in the async we start the task, then offload the task - meaning we don't wait until it is completely done-, and we 
// move to the next tast while the second task is still being completed. 

// in the sync the code is run line by line, meaning we don't move onto the next task until we complete the task in hand
// first 

//************************************