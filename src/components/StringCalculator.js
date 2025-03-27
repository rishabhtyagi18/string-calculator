import React, { useState } from 'react';
import { add } from '../utils/AddUtils';

export default function StringCalculator () {
    const [input, setInput] = React.useState("");

    const handleCalculate = () => {
        try {
            return add(input);
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <div className="main-container">
            <h1>String Calculator</h1>
            <div>
                <div>Enter Number</div>
                <div>(Format://[delimeter]\n[numbers])</div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Eg: //;\n1;2;3 or 1,2,3"
                />
                <button onClick={handleCalculate}>Calculate</button>
            </div>
        </div>
    )
}