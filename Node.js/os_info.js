const os = require('os');

console.log('OS Type:', os.type());
console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);
console.log('Free Memory:', os.freemem());
console.log('Uptime:', os.uptime());
