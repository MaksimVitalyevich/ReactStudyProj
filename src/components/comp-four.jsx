import { useState } from "react";
import "./comp-four.css"

export default function ToggleStateTest() {
    const [state, setState] = useState(false);

    return(
    <div className="lastBlock">
        <label>Кнопка состояния (Bool): 
            <button onClick={() => setState(!state)}>{state ? "Активировано" : "Деактивировано"}</button>
        </label>
        <hr></hr>
        <p>&copy;<i>Этот проект сделан для ДЗ за 26.08.2025. Все условия задания соблюдены!</i></p>
        <p>-Сделан на основе материалов с презентации!-</p>
    </div>
    );
}