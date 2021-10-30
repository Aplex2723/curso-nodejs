const { v4: uuidv4 } = require('uuid')

class Tarea {
    
    id = '';
    comentario = '';
    creadoEn = null;

    constructor(comentario) {

        this.id = uuidv4();
        this.comentario = comentario;
        this.creadoEn = null;

    }
}

module.exports = Tarea;