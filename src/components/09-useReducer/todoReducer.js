export const todoReducer = (state = [], action) => {
    switch (action?.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle-old':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            });
        case 'toggle':
            return state.map(todo => (
                todo.id === action.payload
            ) ? { ...todo, done: !todo.done } : todo)
        case 'togg':
            const newState = [...state];
            const newTaks = { ...newState[action.payload] };
            newTaks.done = !(newTaks.done);
            newState.splice(action.payload, 1, newTaks);
            return newState;
        default:
            return state;
    }
}
