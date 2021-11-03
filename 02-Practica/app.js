const { principalMenu, pausar, agregarNumeroInput, agregarNombreInput, listaBorrarNumero, confirmacion, listarFavoritos, listadoAgregarFavoritos, listadoEditarFav } = require('./helpers/inquirer');
const { crearDB, mostrarDB } = require('./db/database')
const Numeros = require('./models/numeros')

require('colors');
console.clear()

const main = async () => {

    let opt;
    const numeros = new Numeros()

    const db = mostrarDB();
    if( db ){
        numeros.cargarDBArray(db)
    }

    do {

        console.clear();
        opt = await principalMenu();

        switch( opt ){
            case 1:
                console.log()
                const numero = await agregarNumeroInput();
                const nombre = await agregarNombreInput();

                numeros.agendarNumero(nombre, numero)
                
                break;
            case 2:
                console.log()   
                if( numeros.listadoArray.length == 0 ){
                    console.log('No hay nada que mostrar'.bold.red)
                }

                numeros.mostraragenda();

                break;
            case 3:
                console.log()
                numeros.mostrarFavoritos() 
                
                break;
            case 4:
                console.log()
                const opt = await listadoAgregarFavoritos( numeros.listadoArray )
                numeros.agregarFavoritos(opt)
                console.log('\nFavorito actualizado exitosamente\n'.bold.green)

                break;
            case 5:
                console.log("Esta es la opccion 5")
                const edit = await listadoEditarFav( numeros.listadoArray )
                const nuevoNombre = await agregarNombreInput()
                const nuevoNumero = await agregarNumeroInput()
                numeros.editarContacto(edit, nuevoNombre, nuevoNumero) 

                break;
            case 6:
                console.log()                 
                const borrar = await listaBorrarNumero( numeros.listadoArray )

                if(borrar != 0) {
                    const resp = await confirmacion() 
                    if( resp ){
                        numeros.borrarNumero(borrar)
                        console.log('\nNumero borrado exitosamente'.green)
                    }
                }

                break;
        }

        crearDB( numeros.listadoArray )

        if( opt !== 0) await pausar();

    } while( opt !== 0)
}

main()