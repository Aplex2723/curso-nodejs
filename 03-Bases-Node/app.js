console.clear()
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// console.log(argv)
// console.log(`base: yargs ${argv.base}`)


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, ' creado!'))
    .catch(err => console.log(err))