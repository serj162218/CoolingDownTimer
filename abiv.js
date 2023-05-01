const nodeAbi = require('node-abi')

console.log(nodeAbi.getAbi('15.14.0', 'node'));
console.log(nodeAbi.getAbi('12.2.3', 'electron'));