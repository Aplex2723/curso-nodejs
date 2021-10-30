const inquirer = require('inquirer');

require('colors');

const inquirerMenu = async() => {

    let preguntas = [
        {
            type: 'list',
            name: 'opt',
            message: 'Elija una opcion: ',
            choices: [
                {
                    value: '1',
                    name: `${ '1.'.green } Crear tarea`
                },
                {
                    value: '2',
                    name: `${ '2.'.green } Listar tareas`
                },
                {
                    value: '3',
                    name: `${ '3.'.green } Listar tareas completadas`
                },
                {
                    value: '4',
                    name: `${ '4.'.green } Listar tareas pendientes`
                },
                {
                    value: '5',
                    name: `${ '5.'.green } Completar tarea(s)`
                },
                {
                    value: '6',
                    name: `${ '6.'.green } Borrar tarea`
                },
                {
                    value: '0',
                    name: `${ '0.'.green } Salir`
                },
            ]
        }
    ]

    console.clear()
    console.log('============================='.green);
    console.log('   Seleccione una opccion'.white );
    console.log('=============================\n'.green);
        
    const { opt } = await inquirer.prompt(preguntas)

    return opt
}

const pausar = async() => {
    const response = [{type: 'input', name: 'enter', message: `Presione ${ 'ENTER'.green } para salir.`}]
    
    console.log('\n')
    await inquirer.prompt(response)
}

const leerInput = async( message ) => {
    const opciones = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ) {
            if( value.length === 0 ){
                return `Por favor ingrese un valor`;
            }

            return true;
        }

    }

    const { desc } = await inquirer.prompt(opciones);
    return desc;
}

const listadoBorrarTarea = async( tareas ) => {

    const choices = tareas.map( (tarea, i) => {
        const { comentario, id } = tarea;
        const index = `${i+1}.`.green;

        return {
            value: id,
            name: `${index} ${comentario}`
        }
    } )

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    })

    const opciones = {
        type: 'list',
        name: 'borrar',
        choices
    }

    const { borrar } = await inquirer.prompt(opciones)
    return borrar
}

const confirmarEliminar = async(opt = true) => {
    const opciones = {
        type: 'confirm',
        name: 'confirmar',
        message: 'Seguro quiere eliminarlo?',
        default: true
    }

    const { confirmar } = await inquirer.prompt(opciones)

    if(confirmar) {
        return confirmar
    }

    return
}

const listadoCompletarTarea = async( tareas ) => {
    const choices = tareas.map( (tarea, i) => {
        const { comentario, creadoEn, id } = tarea;
        const index = `${i+1}.`.green;

        return {
            value: id,
            name: `${ index } ${ comentario }`,
            checked: (creadoEn) ? true : false
        }

    })
    const opciones = {
        type: 'checkbox',
        name: 'completar',
        message: 'Seleccionadas',
        choices
    }

    const { completar } = await inquirer.prompt(opciones)
    return completar

}

module.exports = {
    inquirerMenu,
    pausar,
    leerInput,
    listadoBorrarTarea,
    confirmarEliminar,
    listadoCompletarTarea
}