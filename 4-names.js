
// because we are not sharing this, this is availably only locally only on names.js
const secret = 'SUPER SECRET';

const john ='john';
const peter = 'peter';

// console.log(module); ===========> will return 

// Module {
//     id: '.',
//     path: '/Users/benkaan/Desktop/beyond-node.js',
//     exports: {},
//     parent: null,
//     filename: '/Users/benkaan/Desktop/beyond-node.js/4-names.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/benkaan/Desktop/beyond-node.js/node_modules',
//       '/Users/benkaan/Desktop/node_modules',
//       '/Users/benkaan/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

module.exports = {john, peter};