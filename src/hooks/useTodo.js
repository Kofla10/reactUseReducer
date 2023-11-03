import {useReducer, useEffect} from 'react'
import { todoReducer } from '../todoReducer';


const inicialState = [
    {
        id: new Date().getTime(),
        description: 'Recoletar la gema del alma',
        done: false
    }
]
const init = () => {
    //traemos la informacion del local storage que esta en los todos, si es null le pasamos un arreglo vacido[]
    return JSON.parse(localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {
      //pasamos el todo reducer que acabamos de crear todoreducer.js
      const [ todos, dispatch ] = useReducer(todoReducer, inicialState, init);

      useEffect(() => {
            //guardamos la indormacion en el localstoreas, si la informacion que vamos a guardar es null le pasamos un arreglo vacido
          localStorage.setItem('todo', JSON.stringify(todos) || [])
      }, [todos])

      const handleNew = (todo) => {
          const action = {
              type   : '[TODO] Add Todo',
              payload: todo
          }
          dispatch(action);
      }

      //informacion capturada desde el boton
      const onNewTodo = (todo) => {
          handleNew(todo)
      }

      const handleDeleteTodo = (id) => {
          const action = {
              type   : '[TODO] Remove Todo',
              payload: id
          }

          dispatch(action);
      }

      const onToggleTodo = (id) => {
          const action = {
              type   : '[TODO] Toggle Todo',
              payload: id
          }

          dispatch(action);

      }
    return{
        ...todos,
        todos,
        onNewTodo,
        handleDeleteTodo,
        onToggleTodo
    }
}
