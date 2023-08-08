import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
import { useState } from 'react';

export const CakeView = () => {
    const [value, setValue] = useState(1);
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
        </>
    );
};