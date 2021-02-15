import { useForm } from "hooks/useForm";

function TodoAdd({hadleAddTodo}) {
    const [{ description }, handleInputChange, limpiarForm] = useForm({
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 0) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        }
        hadleAddTodo(newTodo);
        limpiarForm();
    };

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} value={description} className='form-control' type="text" name="description" placeholder='Aprender...' autoComplete='off' />
                <button className='btn btn-outline-primary btn-block mt-1'>Agregar</button>
            </form>

        </>
    )
}

export default TodoAdd
