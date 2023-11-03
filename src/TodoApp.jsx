
import { TodoAdd, TodoList} from './components/'

import { useTodo } from './hooks/useTodo'



export const TodoApp = () => {

  const {todos,  onNewTodo,  handleDeleteTodo,  onToggleTodo} = useTodo()

    return (
        <>
            <h1>Todo App: ({ todos.length }) <small>pendientes ({ todos.filter(todo => todo.done != true).length })</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* create the todo list */}
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={onToggleTodo}/>
                </div>
                <div className="col-5">
                    <h3>Agregar Todo</h3>
                    <hr />
                    {/* create component for the todoadd */}
                    <TodoAdd onNewTodo = {onNewTodo}/>
                </div>
            </div>
        </>
    )
}
