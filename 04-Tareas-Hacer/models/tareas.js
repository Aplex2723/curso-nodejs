const Tarea = require("./tarea");

class Tareas {

    _listado = {}

    //Convertir objeto a arreglo:
    get listadoArr() {

        const listado = [];
        Object.keys( this._listado ).forEach( key => listado.push( this._listado[key] ))
        
        return listado
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea( desc ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listarTareas() {
        const arr = this.listadoArr
        console.log();

        arr.forEach( (tarea, i) => {
            const { comentario, creadoEn } = tarea;
            let estado = ( creadoEn ) ? 'Completado'.green : 'Pendiente'.red

            console.log(`${ (i+1).toString().green } ${ comentario } :: ${ estado }`)
        })
    }

    tareasCompletadas( compl = true ) {
        const arr = this.listadoArr;
        console.log();

        arr.forEach( (tarea, i) => {
            const { comentario, creadoEn } = tarea;
            let estado = ( creadoEn ) ? 'Completado'.green : 'Pendiente'.red

            if( compl ){
                if( creadoEn ){

                    console.log(`${ (i+1).toString().green } ${ comentario } :: ${ creadoEn.yellow }`)

                }
            } 
            else {
                if( !creadoEn ){

                    console.log(`${ (i+1).toString().green } ${ comentario } :: ${ estado }`)

                }
            }

        })


    }

    borrarTarea( id ) {
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    completarTareas( ids ) {
        ids.forEach( tarea => {
            const select = this._listado[tarea]
            select.creadoEn = new Date().toISOString()
        })

        this.listadoArr.forEach( tarea => {

            if( !ids.includes( tarea.id )){
                this._listado[tarea.id].creadoEn = null
            }
        })
    }

}

module.exports = Tareas;