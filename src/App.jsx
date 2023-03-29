import { useState } from "react";
import "./styles.css";


function App(){

    const [previousOperand, setPreviousOperand]=useState("");
    const [currentOperand, setCurrentOperand]=useState("");


    const handleOutput=()=>{
        
        setPreviousOperand(previousOperand + currentOperand);

        console.log(previousOperand);
        console.log(currentOperand);

        console.log(previousOperand + currentOperand);
        setCurrentOperand(eval(previousOperand+currentOperand));
        setPreviousOperand("");
    }


    return(
        <div className="calculator-grid">

            {/* editable section of calculator */}
            <div className="output">
             
                <div className="previous-operand">{previousOperand}</div>
                <input type='text' onChange={e=>{setCurrentOperand(e.target.value)}} className="current-operand" value={currentOperand}/>

            </div>

            <button onClick={()=>{setCurrentOperand(""); setPreviousOperand("")}} className="span-two">AC</button>
            <button onClick={()=>{setCurrentOperand(currentOperand.slice(0,-1))}}>DEL</button>
            <button onClick={()=>{setPreviousOperand(previousOperand+currentOperand+"/"); setCurrentOperand("")}}>÷</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"1")}}>1</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"2")}}>2</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"3")}}>3</button>
            <button onClick={()=>{setPreviousOperand(previousOperand+currentOperand+"*"); setCurrentOperand("")}}>*</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"4")}}>4</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"5")}}>5</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"6")}}>6</button>
            <button onClick={()=>{setPreviousOperand(previousOperand+currentOperand+"+"); setCurrentOperand("")}}>+</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"7")}}>7</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"8")}}>8</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"9")}}>9</button>
            <button onClick={()=>{setPreviousOperand(previousOperand+currentOperand+"-"); setCurrentOperand("")}}>-</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+".")}}>.</button>
            <button onClick={()=>{setCurrentOperand(currentOperand+"0")}}>0</button>
            <button onClick={handleOutput} className="span-two">=</button>

        </div>
    )

}

export default App;