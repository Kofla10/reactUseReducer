import React,{useReducer} from 'react'
import { todoReducer } from './todoReducer'
import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'

export const TodoApp = () => {

    const inicialState = [
        {
            id: new Date().getTime(),
            description: 'Recoletar la gema del alma',
            done: false
        },
        {
            id: new Date().getTime() * 2,
            description: 'Recoletar la gema del poder',
            done: false
        }
    ]

    //pasamos el todo reducer que acabamos de crear todoreducer.js
    const [ todos, dispatch ] = useReducer(todoReducer, inicialState)
    const handlenewTodo = (todo) => {
        console.log('la data',todo)
    }

    return (
        <>
            <h1>Todo App: (10) <small>pendientes (2)</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* create the todo list */}
                    <TodoList todos={todos}/>
                </div>
                <div className="col-5">
                    <h3>Agregar Todo</h3>
                    <hr />
                    {/* create component for the todoadd */}
                    <TodoAdd handleNewtodo = {handlenewTodo}/>
                </div>
            </div>
        </>
    )
}
