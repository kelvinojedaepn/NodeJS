const os = require('os')

console.log(os.userInfo());
console.log(os.uptime());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log("Used mem space: " + (os.totalmem - os.freemem()) / 1024 / 1024 / 1024);

console.table({
    //     os: os.cpus(),
    name: os.hostname(),
    //     network: os.networkInterfaces(),
    version: os.version(),
    release: os.release(),
    freemem: os.freemem(),
    //     type: os.type(),
    //     arch: os.arch(),
    //     platform: os.platform(),
    //     uptime: os.uptime(),
    //     userInfo: os.userInfo(),
});