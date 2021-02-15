import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [cords, setCords] = useState({});
    const { x, y } = cords;
    useEffect(() => {
        const mouseMove = ({ x, y }) => {
            const coords = { x, y };
            setCords(coords);
        }
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])
    return (
        <>
            <h3>Eres Genial</h3>
            <p>x:{x} y:{y}</p>
        </>
    )
}
