import { memo } from 'react'

function TodoListItem({ id, handleDelete, handleToogle, posicion, done, desc }) {
    console.log('me renderizo items')
    return (
        <>
            <li
                key={id}
                className='list-group-item'>
                <p onClick={() => handleToogle(posicion)} className={`${done && 'complete'}`}>{posicion + 1}. {desc}</p>
                <button onClick={() => handleDelete(id)} className='btn btn-danger'>Borrar</button>
            </li>
        </>
    )
}

export default memo(TodoListItem)
