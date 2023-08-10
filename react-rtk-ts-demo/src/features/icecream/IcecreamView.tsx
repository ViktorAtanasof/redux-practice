// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

export const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIceCreams);
    const dispatch = useAppDispatch();

    return (
        <>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}/>
            <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
        </>
    );
};