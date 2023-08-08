import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

export const IcecreamView = () => {
    const [value, setValue] = useState(1);
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}/>
            <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
        </>
    );
};