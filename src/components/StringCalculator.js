import React, { useState } from 'react';
import { add } from '../utils/AddUtils';

export default function StringCalculator () {
    const [input, setInput] = React.useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {
        setError(null);
        try {
            const sum = add(input);
            setResult(sum);
        } catch (e) {
            setError(e.message);
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
                {result !== null && <h2>Result: {result}</h2>}
                {error && <h2 className="error">{error}</h2>}
            </div>
        </div>
    )
}