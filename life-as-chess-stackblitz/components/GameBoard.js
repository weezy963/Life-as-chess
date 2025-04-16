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

const quotes = {
  'Got a promotion': "Success usually comes to those who are too busy to be looking for it. — Thoreau",
  'Started a business': "Dream big. Start small. Act now. — Robin Sharma",
  'Lost a job': "Sometimes good things fall apart so better things can fall together. — Marilyn Monroe",
  'Made a new friend': "Friendship is the only cement that will ever hold the world together. — Wilson",
  'Had a falling out': "Every adversity carries with it the seed of an equal or greater benefit. — Napoleon Hill",
  'Found love': "Where there is love there is life. — Gandhi",
  'Started working out': "Take care of your body. It’s the only place you have to live. — Jim Rohn",
  'Got injured': "Healing is a matter of time. — Hippocrates",
  'Reached a health goal': "The journey of a thousand miles begins with one step. — Lao Tzu",
  'Invested wisely': "Spend what is left after saving. — Warren Buffett",
  'Faced a financial setback': "It’s not about how much you make, but how much you keep. — Kiyosaki",
  'Paid off debt': "Wealth consists not in having great possessions, but in having few wants. — Epictetus"
};

export default function GameBoard() {
  const [board] = useState(initialBoard);
  const [log, setLog] = useState([]);
  const [energy, setEnergy] = useState(5);
  const [focus, setFocus] = useState(5);

  const handleClick = (i, j) => {
    const zone = zones[(i + j) % zones.length];
    const eventList = events[zone].slice().sort(); // Replaces toSorted
    const event = eventList[Math.floor(Math.random() * eventList.length)];
    const quote = quotes[event];
    setLog(prev => [`[${zone}] ${event}`, quote ? `💭 ${quote}` : '', ...prev]);
    setEnergy(Math.max(0, Math.min(10, energy + (Math.random() < 0.5 ? 1 : -1))));
    setFocus(Math.max(0, Math.min(10, focus + (Math.random() < 0.5 ? 1 : -1))));
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>♟️ Life as Chess</h1>
      <p style={{ textAlign: 'center' }}>Energy: {energy} | Focus: {focus}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 50px)', margin: '20px auto', width: 'fit-content' }}>
        {board.map((row, i) =>
          row.map((_, j) => (
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
            />
          ))
        )}
      </div>
      <div style={{ maxHeight: 200, overflowY: 'auto', background: '#f1f1f1', padding: 10, marginTop: 20 }}>
        <h3>Event Log:</h3>
        <ul>
          {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
        </ul>
      </div>
    </div>
  );
}