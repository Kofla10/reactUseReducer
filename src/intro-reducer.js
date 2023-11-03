const iniciatState = [{
    id: 1,
    todo: 'Recoletctar la piedra del alma',
    donde: false,
}]

//this's a function reducer
//el useReducer siempre recive un estado y una accion
const todoReducer = (state = iniciatState, action = {} ) => {
    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

//creamos la referencia para enviarle los valores
let todos = todoReducer();
//we created a new state
const newTodo = {
    id: 2,
    todo: 'Recolectarlas piedra del poder',
    done: false
}

//we created a new action
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

//creamos la refernccia para enviarle los valores
todos = todoReducer(todos, addTodoAction);

console.log(todos)