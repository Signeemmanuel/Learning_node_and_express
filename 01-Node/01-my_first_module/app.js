const names = require('./01-names')
const greet = require('./02-utils')
const alternative_flavor = require('./03-alternative_flavor')
require('./04-mind_blowing')

console.log(`__dirname: ${__dirname}`)
console.log(`__filename: ${__filename}`)

greet(names.john);
greet(names.peter);

console.log(alternative_flavor)