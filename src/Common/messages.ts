interface Titles {
    primary: string,
    secondary: string
}

const titles:Titles = {
    primary: 'Book',
    secondary: 'Manager App'
}

const inputRequiredMessage:string = 'Este campo es requerido';

const updateMessagesTitle:string = 'Nombre del Libro:'

const buttonSaveText:string = 'Guardar';
const buttonDeleteText:string = 'Eliminar';
const createDataTextDefault:string = 'Crea un nuevo libro';
const authorCreateMessage:string = 'Crea un nuevo autor'
const authorNameMessage:string = 'Nombre del Autor: '


export {
    titles,
    inputRequiredMessage,
    updateMessagesTitle,
    buttonSaveText,
    buttonDeleteText,
    createDataTextDefault,
    authorCreateMessage,
    authorNameMessage,
}