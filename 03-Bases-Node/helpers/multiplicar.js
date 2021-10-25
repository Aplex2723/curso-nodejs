const fs = require('fs');
let colors = require('colors');

const crearArchivo = async( base = 5, listar, h = 10 ) => {

    try {

        let resultado = '';

        for(let i = 1; i <= h; i++){
            resultado += `${i} x ${base} = ${base * i}\n`;
        }

        if (listar) {
            console.log(colors.red.underline("============="));
            console.log(`Tabla del ${base}`.rainbow);
            console.log(colors.red.underline("============="));
            
            console.log(resultado.green.bold);
        }

        fs.writeFileSync( `./results/tabla-${base}.txt`, resultado)

        return `Tabla del ${base} creado...`.black.bgCyan
    } catch (err) {
       console.log(err); 
    }
    
}

module.exports = {
    crearArchivo
}