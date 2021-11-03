const { v4: uuidv4 } = require('uuid');
require('colors');

class Numero {
    id = '';
    nombre = '';
    telefono = '';
    agreadoHace = '';
    favorito = null

    constructor( nombre, telefono, agreadoHace ){
        this.id = uuidv4();
        this.nombre = nombre
        this.telefono = telefono
        this.agreadoHace = agreadoHace
        this.favorito = null
    }
}

class Numeros {
    _listado = {}

    //Convertimos un objeto a array
    get listadoArray() {
        const listado = []
        Object.keys( this._listado ).forEach( key => listado.push( this._listado[key] ));

        return listado;
    }

    constructor() {
        this._listado = {}
    }
    
    agendarNumero(nombre, telefono) {
        const fecha = new Date().toISOString()

        const numeroClass = new Numero(nombre, telefono, fecha)
        this._listado[numeroClass.id] = numeroClass;

    }

    mostraragenda() {

        this.listadoArray.forEach( (numero, i) => {
            const { nombre, telefono, agreadoHace } = numero;
            const index = `${ i + 1 }. `.magenta;

            console.log(`${ index } ${ nombre.yellow } : ${ telefono.green } | ${ agreadoHace }`)
        })

    }

    cargarDBArray( data ) {
        data.forEach( d => {
            this._listado[d.id] = d;
        })
    }

    borrarNumero( ids ) {
        ids.forEach( id => {

            delete this._listado[id]

        })
    }

    mostrarFavoritos( fav = true ) {
        const arr = this.listadoArray
        
        if( fav ){
            arr.forEach( (numero, i) => {
                const { nombre, telefono, favorito } = numero;
                if( favorito ){
                    console.log(`${(i+1).toString().magenta}. ${nombre.yellow} :: ${telefono.green} ${'★'.yellow}`)
                }
    
            })
        }
    }

    agregarFavoritos( ids ) {

        this.listadoArray.forEach( item => {
            const { id } = item;

            if( !ids.includes( id ) ){
                this._listado[id].favorito = null;
            }else {
                this._listado[id].favorito = true;
            }
        })

    }

    editarContacto( id, nombre, numero ) {

        const contacto = this._listado[id]

        contacto.nombre = nombre;
        contacto.telefono = numero;
        contacto.agreadoHace = new Date().toISOString()

        console.log('\nContacto editado correctamente...\n'.bold.green)
        
    }
}

module.exports = Numeros