//creamos nuestro reducer
export const todoReducer = (inicialState, action) => {

    //Es buena practica siempre realizar la validacions con un switch
    switch (action.type) {
        case 'ABC':

        //cuando apenas estamos implementando algo y no sabemos si va a dar error, usamos el thow
        throw new Error('Action.type = ABC no esta implementado');

        default:
            return inicialState;
    }
}
