import { useState } from 'react';
import './App.css';

function App() {
  const time = new Date().toLocaleTimeString();
  const [cTime, setCtime] = useState(time);
  setInterval(() => {
    const time = new Date().toLocaleTimeString();
    setCtime(time);
  }, 1000);
  return (
    <div className="App">
      <h1>{cTime}</h1>
    </div>
  );
}

export default App;
