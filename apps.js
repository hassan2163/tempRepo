// npm - global command,comes with node
//npm --version

// local Dependency - use it only in this particular project
// npm i <packageName>

//global dependency- use it any project
//npm install -g <packageName>


//package.json - manifest(stores imp info about project/package)
//manual approach (vreate package.json in th root,create properties etc)
//npm init (step by step ,press enter to skip)
//npm init -y (everything default)

const lodash=require('lodash')

const items=[1,[2,[3,[4]]]];
const newitems=lodash.flattenDeep(items);
console.log(newitems);