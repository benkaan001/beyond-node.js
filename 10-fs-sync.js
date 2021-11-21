// //alternative way to access to readFileSync and writeFileSync
// const fs = require('fs');
// fs.readFileSync
// fs.writeFileSync

const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second); // Hello this is our first text file Hello this is our second text file

//if the file is not there node will create one, if it is there, node will overrride it
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log('done with this task');
console.log('starting the next task');

//the third optional argument is used if we want to upend the results to the file one more time
// we need to set the property value of the flag object to a. 