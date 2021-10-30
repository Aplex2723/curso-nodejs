require('colors');

const mostrarMenu = () => {

    return new Promise( resolve => {

        console.log('=============================');
        console.log('   Seleccione una opccion');
        console.log('=============================\n');
        
        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Lista tareas completadas`);
        console.log(`${ '4.'.green } Lista tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question('Seleccione una opccion: ', (opt) => {
            readLine.close()
            resolve(opt)
        })
    })

    
}

const pause = () => {

    return new Promise( resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readLine.question(`Presione ${ 'ENTER'.green } para continuar...`, (opt) => {
            readLine.close();
            resolve();
        })
    })

}


module.exports = {
    mostrarMenu,
    pause
}