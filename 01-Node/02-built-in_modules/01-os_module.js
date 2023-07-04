const os = require('os');

const user = os.userInfo();
console.log('user:', user);

console.log(`\nThe system uptime is: ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMom: os.totalmem(),
    freeMem: os.freemem(),
};

console.log('\ncurrentOS:', currentOS);