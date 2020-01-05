const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('file.JSON', 'utf8'));

const {eachRecursive} = require("./helpers/eachRecursive");
const {preToInfix}    = require("./helpers/preToInfix");
const {simplifyIt}    = require("./helpers/simplify");



//driver
let arr = eachRecursive(obj)
let expression = preToInfix(arr);
console.log(expression)
let lhs = expression.split('=')[0];
let rhs = expression.split('=')[1].trim();
let value = simplifyIt(rhs,lhs);
console.log("x = "+value);
console.log("x = ",eval(value));

