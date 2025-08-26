import { useState } from "react";
import './comp-three.css'

export default function BodyMain() {
    let [count, setCount] = useState(0);

    return(
        <div className="simpleCounter">
            <p>Накликано раз: {count}</p>
            <button onClick={() => setCount(count++)}>Увеличить значение (+)</button>
            <button onClick={() => setCount(count--)}>Уменьшить значение (-)</button>
        </div>
    );
}