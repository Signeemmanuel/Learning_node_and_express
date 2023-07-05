const { readFileSync , writeFileSync } = require('fs');

const first = readFileSync('../content/first.txt', 'utf-8')
const second = readFileSync('../content/second.txt', 'utf-8')

console.log(first, second)

writeFileSync('../content/result-sync.txt', `The result is: \n${first}\n${second}\n`)

// To append to the file, use:
// writeFileSync('../content/result-sync.txt', `The result is: \n${first}\n${second}\n`, { flag: 'a' })