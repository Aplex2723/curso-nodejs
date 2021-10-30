const fs = require('fs');
const ruta = './db/data.json'

const crearDB = ( data ) => {

    fs.writeFileSync( ruta, JSON.stringify(data))

}       

const mostrarDB = () => {

    if ( !fs.existsSync(ruta) ) {
        return null;
    }

    const data = fs.readFileSync(ruta, {encoding: 'utf-8'});
    return JSON.parse(data);
}

module.exports = {
    crearDB,
    mostrarDB
}
