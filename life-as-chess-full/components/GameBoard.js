import React, { useState } from 'react';

const initialBoard = Array(8).fill(null).map(() => Array(8).fill(null));
const zones = ['Career', 'Health', 'Relationships', 'Finance'];
const zoneColors = ['#cce5ff', '#d4edda', '#f8d7da', '#e2e3e5'];
const events = {
  Career: ['Got a promotion', 'Started a business', 'Lost a job'],
  Health: ['Started working out', 'Got injured', 'Reached a health goal'],
  Relationships: ['Made a new friend', 'Had a falling out', 'Found love'],
  Finance: ['Invested wisely', 'Faced a financial setback', 'Paid off debt']
};

export default function GameBoard() {
  const [board, setBoard] = useState(initialBoard);
  const [log, setLog] = useState([]);

  const handleClick = (i, j) => {
    const zone = zones[(i + j) % zones.length];
    const eventList = events[zone];
    const event = eventList[Math.floor(Math.random() * eventList.length)];
    setLog(prev => [`[${zone}] ${event}`, ...prev]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Life as Chess ♟️</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)', margin: '20px auto', width: 'fit-content' }}>
        {board.map((row, i) =>
          row.map((cell, j) => (
            <div key={`${i}-${j}`}
              onClick={() => handleClick(i, j)}
              style={{
                width: 50,
                height: 50,
                border: '1px solid #ccc',
                backgroundColor: zoneColors[(i + j) % zoneColors.length],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div style={{ maxHeight: 200, overflowY: 'auto', marginTop: 20, background: '#f1f1f1', padding: 10 }}>
        <h3>Event Log:</h3>
        <ul>
          {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
        </ul>
      </div>
    </div>
  );
}