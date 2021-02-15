import { memo } from 'react'
import TodoListItem from "./TodoListItem"

function TodoList({ todos, handleDelete, handleToogle }) {
    console.log('me renderizo list')
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((tareas, i) => (
                        <TodoListItem key={i} {...tareas} posicion={i} handleDelete={handleDelete} handleToogle={handleToogle} />
                    ))
                }
            </ul>
        </>
    )
}

export default memo(TodoList)
