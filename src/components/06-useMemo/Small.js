import React, { memo } from 'react'
import '../01-useState/counter.css';

export const Small = memo(({ value }) => {
    console.log('Me volví a llamar');
    return (
        <>
            <small>{value}</small>
        </>
    )
})
