import React, { useState } from 'react';

export default function Calculator() {
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

  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 20,
        marginBottom: 30,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h3>Liquor Entry</h3>

      <div style={{ marginBottom: 10 }}>
        <label>Bottle Cost ($)</label>
        <input
          type="number"
          value={bottleCost}
          onChange={(e) => setBottleCost(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Bottle Size (mL)</label>
        <input
          type="number"
          value={bottleSize}
          onChange={(e) => setBottleSize(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Target COGS (%)</label>
        <input
          type="number"
          value={targetCOGS}
          onChange={(e) => setTargetCOGS(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      <button onClick={calculatePrice}>Calculate</button>

      {menuPrice && (
        <div style={{ marginTop: 10 }}>
          <p><strong>Cost per 2oz Pour:</strong> ${costPerPour}</p>
          <p><strong>Suggested Menu Price:</strong> ${menuPrice}</p>
        </div>
      )}
    </div>
  );
}