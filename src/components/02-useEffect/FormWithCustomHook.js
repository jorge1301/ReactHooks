import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = formValues;
    useEffect(() => {
        console.log('email cambio')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <>
            <h1>FormWithCustomHook</h1>
            <hr />
            <form onSubmit={handleSubmit} className='form-group'>
                <input className='form-control' type="text" name="name" placeholder='Escribe tu nombre' autoComplete='off' value={name} onChange={handleInputChange} />
                <input className='form-control' type="email" name="email" placeholder='Escribe tu email' autoComplete='off' value={email} onChange={handleInputChange} />
                <input className='form-control' type="password" name="password" placeholder='Escribe tu contraseña' value={password} onChange={handleInputChange} />
                <button className='btn btn-primary'>Guardar</button>
            </form>
        </>
    )
}
