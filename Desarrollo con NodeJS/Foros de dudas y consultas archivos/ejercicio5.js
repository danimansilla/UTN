var os = require('os');

console.log(`Directorio Temp del Sistema Operativo: ${ os.tmpdir() }`);
console.log(`Directorio Temp del Sistema Operativo: ${ os.homedir() }`);
console.log(`Memoria Total del Sistema Operativo: ${ os.totalmem() } bytes`);
console.log(`Memoria Libre del Sistema Operativo: ${ os.freemem() } bytes`);