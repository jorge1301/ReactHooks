import React, { useState } from 'react'
import '../01-useState/counter.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const ReactExampleRef = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>React Example Ref</h1>
            <hr />
            {show && <MultipleCustomHooks />}
            <button className='btn btn-primary mt-5' onClick={() => setShow(!show)}>Mostrar/Ocultar</button>
        </>
    )
}
