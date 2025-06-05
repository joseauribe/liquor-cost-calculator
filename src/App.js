import React from 'react';
import Calculator from './Calculator';

export default function App() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', background: '#f8f9fa', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>Liquor Cost Calculator</h2>
      <Calculator />
    </div>
  );
}