import { useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState([1]);

  const push = () => {
    let randomNumber = (Math.floor(Math.random() * 1000) + 1);
    setArr([...arr, randomNumber]);
  }

  return(
    <>
    <button onClick={push}>Додати число</button>
    <ul>
      {arr.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
    </>
  );
}

export default App;