const { crearDB, mostrarDB } = require('./helpers/database');
const { inquirerMenu, pausar, leerInput, listadoBorrarTarea, confirmarEliminar, listadoCompletarTarea } = require("./helpers/inquirer");
const Tareas = require('./models/tareas');

require("colors");

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const leerDB = mostrarDB()
    if( leerDB ){
        tareas.cargarTareasFromArray(leerDB);
    }

    do {

        opt = await inquirerMenu();

        switch (opt) {

            case '1':
                const inputValue = await leerInput('Descripccion:')

                tareas.crearTarea(inputValue);

                break;
            case '2':
                
                tareas.listarTareas()
            
                break;
            case '3':
                
                tareas.tareasCompletadas()

                break;
            case '4':
                
                tareas.tareasCompletadas(false)

                break;
            case '5':
                const completar = await listadoCompletarTarea( tareas.listadoArr );
                tareas.completarTareas(completar)
                
                break;
            case '6':

                const borrar = await listadoBorrarTarea( tareas.listadoArr )
                
                if( borrar !== '0' ){                    
                    const ok = await confirmarEliminar()
                    if(ok){
                        tareas.borrarTarea( borrar )
                        console.log("Tarea Borrada Completamente... ".yellow);
                    }
                }
                
                break; 

        }

        crearDB(tareas.listadoArr)

        await pausar();

    } while ( opt !== '0' )     

}

main()