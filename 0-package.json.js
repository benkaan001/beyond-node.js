// npm --v   ====> check the version 
// npm - global command, automatically comes with node 


//local dependency ===> we use it only in a particular project
//npm i <packageName>

//global dependency ====> we us it in any project
//sudo npm install -g <packageName> 


// npm init -y (run with y flag)
//package.json - manifest file that stores imporant info about project/package

// npm i nodemon -D     or      npm i nodemon --save-dev 

// we can add this in the script section of package.json if we wanna have a specific nodemon starter command
// separate from the start script    "dev":"nodemon app.js"

// npm uninstall <packageName>  removes the package
// the nuclear approach is to delete the node_modules folder along with package.json file and reinstall