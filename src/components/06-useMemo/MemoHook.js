import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../01-useState/counter.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);
   
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <>
            <h3>Counter: <small>{counter}</small>  </h3>
            <hr />
            <p>{memoProcesoPesado}</p>

            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button onClick={() => setShow(!show)}> Show / Hide {JSON.stringify(show)}</button>
        </>
    )
}
