
const argv = require('yargs')
                .options({
                'b': {
                    alias: 'base',
                    type: "number",
                    demandOption: true,
                    describe: 'Es la base de la multiplicacion'
                },
                'l': {
                    alias: 'listar',
                    type: "boolean",
                    default: false,
                    describe: 'Muestra la tabla de multiplicar'
                },
                'h': {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta este numero'
                }
                })
                .check((argv, options) => {
                    if( isNaN(argv.base) || isNaN( argv.hasta ) ){
                        throw 'El valor debe de ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv; 