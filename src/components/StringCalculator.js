import React, { useState } from 'react';
import { add } from '../utils/AddUtils';
import './StringCalculator.css';

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
            <div className="card">
                <h1>String Calculator</h1>
                <div className="input-container">
                    <div>Enter Number</div>
                    <div>
                        <span className="format-text">(Format:</span>
                        <span className="delimiter-text">//[delimeter]\n[numbers]</span>
                        <span className="format-text">)</span>
                    </div>
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
        </div>
    )
}