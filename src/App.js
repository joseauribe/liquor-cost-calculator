// src/App.js
import React, { useState } from 'react';
import Calculator from './Calculator';

export default function App() {
  const [calculators, setCalculators] = useState([{ id: Date.now() }]);

  const addCalculator = () => {
    setCalculators([...calculators, { id: Date.now() }]);
  };

  const removeCalculator = (id) => {
    setCalculators(calculators.filter(calc => calc.id !== id));
  };

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Liquor Cost Calculator</h2>

      {calculators.map((calc) => (
        <div key={calc.id} style={{ position: 'relative' }}>
          <Calculator />
          {calculators.length > 1 && (
            <button
              onClick={() => removeCalculator(calc.id)}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                color: '#888',
                fontSize: 20,
                cursor: 'pointer'
              }}
              title="Remove this calculator"
            >
              ×
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addCalculator}
        style={{
          display: 'block',
          margin: '30px auto 0',
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontSize: 16,
          cursor: 'pointer'
        }}
      >
        + Add Bottle
      </button>
    </div>
  );
}