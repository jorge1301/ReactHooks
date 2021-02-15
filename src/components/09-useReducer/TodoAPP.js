import { useCallback, useEffect, useReducer } from 'react';
import { todoReducer } from 'components/09-useReducer/todoReducer';
import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
export const TodoAPP = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const hadleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    const handleDelete = useCallback((todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }, [dispatch])

    const handleToogle = useCallback((todoId) => {
        const action = {
            type: 'togg',
            payload: todoId
        }
        dispatch(action);
    }, [dispatch])

    return (
        <>
            <h1>TodoApp  - ({todos.length})</h1>
            <hr />
            <div className='row'>
                <div className="col-7">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToogle={handleToogle} />
                </div>
                <div className="col-5">
                    <TodoAdd hadleAddTodo={hadleAddTodo} />
                </div>

            </div>
        </>
    )
}
