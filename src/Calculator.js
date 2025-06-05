import React, { useState } from 'react';

export default function Calculator() {
  const [bottleName, setBottleName] = useState('');
  const [bottleCost, setBottleCost] = useState('');
  const [bottleSize, setBottleSize] = useState('1000');
  const [targetCOGS, setTargetCOGS] = useState('17');
  const [menuPrice, setMenuPrice] = useState(null);
  const [costPerPour, setCostPerPour] = useState(null);

  const calculatePrice = () => {
    const cost = parseFloat(bottleCost);
    const size = parseFloat(bottleSize);
    const cogs = parseFloat(targetCOGS);
    if (isNaN(cost) || isNaN(size) || size <= 0 || isNaN(cogs) || cogs <= 0) return;

    const pourOz = 2;
    const mLPerOz = 29.5735;
    const pourML = pourOz * mLPerOz;
    const costPerML = cost / size;
    const perPour = costPerML * pourML;
    const price = perPour / (cogs / 100);

    setCostPerPour(perPour.toFixed(2));
    setMenuPrice(price.toFixed(2));
  };

  const resetCalculator = () => {
    setBottleName('');
    setBottleCost('');
    setBottleSize('1000');
    setTargetCOGS('17');
    setMenuPrice(null);
    setCostPerPour(null);
  };

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 24,
        marginBottom: 30,
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        background: '#fff',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Bottle Name */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Bottle Name (optional)"
          value={bottleName}
          onChange={(e) => setBottleName(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      <h3 style={{ marginBottom: 20, fontSize: 20 }}>Liquor Entry</h3>

      {/* Bottle Cost */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>
          Bottle Cost ($)
        </label>
        <input
          type="number"
          value={bottleCost}
          onChange={(e) => setBottleCost(e.target.value)}
          placeholder="e.g. 25"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      {/* Bottle Size */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>
          Bottle Size (mL)
        </label>
        <input
          type="number"
          value={bottleSize}
          onChange={(e) => setBottleSize(e.target.value)}
          placeholder="e.g. 750 or 1000"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      {/* Target COGS */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>
          Target COGS (%)
        </label>
        <input
          type="number"
          value={targetCOGS}
          onChange={(e) => setTargetCOGS(e.target.value)}
          placeholder="e.g. 17"
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 6,
            border: '1px solid #ccc',
            fontSize: 16,
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ marginTop: 10 }}>
        <button
          onClick={calculatePrice}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 6,
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          Calculate
        </button>

        <button
          onClick={resetCalculator}
          style={{
            backgroundColor: '#6c757d',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 6,
            fontSize: 16,
            cursor: 'pointer',
            marginLeft: 10,
          }}
        >
          Reset
        </button>
      </div>

      {/* Results */}
      {menuPrice && (
        <div style={{ marginTop: 20 }}>
          {bottleName && (
            <p style={{ fontSize: 16, fontWeight: 600 }}>
              <span style={{ fontWeight: 'normal' }}>Bottle:</span> {bottleName}
            </p>
          )}
          <p style={{ fontSize: 16, fontWeight: 600 }}>
            Cost per 2oz Pour: <span style={{ fontWeight: 'normal' }}>${costPerPour}</span>
          </p>
          <p style={{ fontSize: 16, fontWeight: 600 }}>
            Suggested Menu Price: <span style={{ fontWeight: 'normal' }}>${menuPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
}