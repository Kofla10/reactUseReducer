//creamos nuestro reducer
export const todoReducer = (inicialState = [], action) => {


    //Es buena practica siempre realizar la validacions con un switch
    switch (action.type) {
        case '[TODO] Add Todo':
            //cuando apenas estamos implementando algo y no sabemos si va a dar error, usamos el thow
            // throw new Error('Action.type = ABC no esta implementado');
            return [...inicialState, action.payload];
        case '[TODO] Remove Todo':
            //nos devulve un arreglo con el ID diferente al que se le esta pasando como parametro
            return inicialState.filter(todo => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return inicialState.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done //realizamos la negacion del booleano
                    }
                }
                return todo;
            })

        default:
            return inicialState;
    }
}
