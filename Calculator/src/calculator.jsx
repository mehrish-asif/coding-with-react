import React, { useState } from "react"

function Calculator() {

    const [expression, setExpression] = useState("")
    const [formula, setFormula] = useState("");


    const Addtodisplay = (displaySymbol, real) => {
        setExpression((prev) => prev + displaySymbol);
        setFormula((prev) => prev + real);
    }
    function Reset() {
        setExpression("");
        setFormula("");
    }
    const Calculate = () => {
        try {
            const result = eval(formula);
            setExpression(result.toString());
        } catch {
            setExpression("Error");
        }
    };

    return (
        <div className="con">
            <div className="inp">
            <input value={expression} id="display" readOnly />
            </div>
            <div className="btn">
                <button className="cal" onClick={Calculate} >=</button>
                <button onClick={Reset} >AC</button>
                <button className="add" onClick={() => Addtodisplay("+", "+")}>+</button>
                <button className="sub" onClick={() => Addtodisplay("-", "-")}>-</button>
                <button className="mul" onClick={() => Addtodisplay("×", "*")}>×</button>
                <button className="div" onClick={() => Addtodisplay("÷", "/")}>÷</button>
                <button className="one" onClick={() => Addtodisplay("1", "1")}>1</button>
                <button className="two" onClick={() => Addtodisplay("2", "2")}>2</button>
                <button className="three" onClick={() => Addtodisplay("3", "3")}>3</button>
                <button className="four" onClick={() => Addtodisplay("4", "4")}>4</button>
                <button className="five" onClick={() => Addtodisplay("5", "5")}>5</button>
                <button className="six" onClick={() => Addtodisplay("6", "6")}>6</button>
                <button className="seven" onClick={() => Addtodisplay("7", "7")}>7</button>
                <button className="eight" onClick={() => Addtodisplay("8", "8")}>8</button>
                <button className="nine" onClick={() => Addtodisplay("9", "9")}>9</button>
                <button className="zero" onClick={() => Addtodisplay("0", "0")}>0</button>
                <button className="point" onClick={() => Addtodisplay(".", ".")}>.</button>
                <button className="erase">⌫</button>
            </div>
        </div>
    );

}

export default Calculator