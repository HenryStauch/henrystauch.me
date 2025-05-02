import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import Counter from './components/counter';
import Controls from './components/controls';

function App() {
  return (
    <div>
      <div className="test">All the REACT are belong to us!</div>
      <Counter />
      <Controls />
    </div>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
