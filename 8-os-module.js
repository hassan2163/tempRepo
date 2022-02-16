const os=require('os');


//info about current user

const user=os.userInfo()
console.log(user);


//method returns the system uptime in seconds

console.log(`System uptime: ${os.uptime()} mins`);

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)