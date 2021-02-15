const initialState = [{
    id: 1,
    todo: 'Comprar Cafe',
    done: false,
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
}

const newTodo = {
    id: 2,
    todo: 'Comprar Pan',
    done: false,
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};
let todos = todoReducer();

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)