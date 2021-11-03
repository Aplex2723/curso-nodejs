require('colors');
const inquirer = require('inquirer');

const principalMenu = async () => {
    console.log("-----------------------".red);
    console.log("  Agenda de Telefonos".magenta);
    console.log("-----------------------".red);

    const { menu } = await inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Seleccione una opccion',
        choices: [
            {
                value: 1,
                name: `${ '1.'.magenta } Agendar numero.`
            },
            {
                value: 2,
                name: `${ '2.'.magenta } Ver agenda`
            },
            {
                value: 3,
                name: `${ '3.'.magenta } Lista de favoritos`
            },
            {
                value: 4,
                name: `${ '4.'.magenta } Agregar favoritos`
            },
            {
                value: 5,
                name: `${ '5.'.magenta } Editar contactos`
            },
            {
                value: 6,
                name: `${ '6.'.magenta } Borrar numero`
            },
            {
                value: 0,
                name: `${ '0.'.magenta } Salir`
            }

        ]
    })

    return menu
}

const pausar = async() => {
    const pause = await inquirer.prompt({
        type: 'input',
        name: 'pause',
        message: `\nPresione ${ 'ENTER'.magenta} para continuar...`

    })

    return pause
}

const agregarNumeroInput = async() => {
    const propieties = {
        type: 'input',
        name: 'numero',
        message: `${'--*    Telefono: '.magenta}`,
        validate: msg => {
            if( !msg || isNaN(msg) ){
                return `Por favor proporcione un numero correcto`.red
            }

            return true
        }
    }

    const { numero } = await inquirer.prompt(propieties);
    return numero
}

const agregarNombreInput = async() => {
    const propieties = {
        type: 'input',
        name: 'nombre',
        message: `${'--*    Nombre: '.magenta}`,
        validate: msg => {
            if( !msg ){
                return `Por favor proporcione un nombre`.red
            }

            return true
        }
    }

    const { nombre } = await inquirer.prompt(propieties);
    return nombre
}

const listaBorrarNumero = async( numeros ) => {
    const choices = numeros.map( (numero, i) => {
        const { nombre, telefono, id } = numero;
        const index = `${i + 1}.`.magenta

        return {
            value: id,
            name: `${index} ${ nombre.yellow } : ${ telefono }`
        }
    })

    choices.unshift({
        value: 0,
        name: `0. Cancelar`.bold.red
    })

    const propieties = {
        type: 'checkbox',
        name: 'borrar',
        message: 'Seleccione los que guste eliminar'.red,
        choices
    }

    const { borrar } = await inquirer.prompt(propieties)
    return borrar
}

const confirmacion = async() => {

    const propieties = {
        type: 'confirm',
        name: 'confirmar',
        message: '\nEsta Seguro? '.red,
        default: false
    }

    const { confirmar } = await inquirer.prompt(propieties)
    return confirmar

}

const listarFavoritos = async( numeros = [] ) => {
    const choices = numeros.map( (item, i) => {
        const index = `${i + 1}.`.magenta

        return {
            value: item.id,
            name: `${index} ${item.nombre.yellow} : ${item.telefono.green} | `
        } 
    })

    const propieties = {
        type: 'list',
        name: 'favoritos',
        message: 'Lsitado',
        choices
    }

    const { favoritos } = await inquirer.prompt(propieties);
    return favoritos
}

const listadoAgregarFavoritos = async( numeros ) => {
    const choices = numeros.map( (numero, i) => {
        const { id, nombre, telefono, favorito } = numero;
        const index = `${i + 1}.`.magenta;

        return {
            value: id,
            name: `${index} ${nombre.yellow} :: ${telefono.green}`,
            checked: (favorito) ? true : false
        }
    })

    const options = {
        type: 'checkbox',
        name: 'agregarFav',
        message: 'Seleccione uno o varios contactos'.bold,
        choices
    }

    const { agregarFav } = await inquirer.prompt(options)
    return agregarFav
}

const listadoEditarFav = async( numeros ) => {
    const choices = numeros.map( (item, i) => {
        const index = `${i + 1}.`.magenta

        return {
            value: item.id,
            name: `${index} ${item.nombre.yellow} : ${item.telefono.green} | `
        } 
    })

    const propieties = {
        type: 'list',
        name: 'edit',
        message: 'Seleccione uno para editar',
        choices
    }

    const { edit } = await inquirer.prompt(propieties)
    return edit
}

module.exports = {
    principalMenu,
    pausar,
    agregarNumeroInput,
    agregarNombreInput,
    listaBorrarNumero,
    confirmacion,
    listarFavoritos,
    listadoAgregarFavoritos,
    listadoEditarFav
}