import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  function incr1 () {
    setCount1(count1+1)
  }
  function decr1 () {
    setCount1(count1-1)
  }

  function incr2 () {
    setCount2(count2+1)
  }
  function decr2 () {
    setCount2(count2-1)
  }

  function incr3 () {
    setCount3(count3+1)
  }
  function decr3 () {
    setCount3(count3-1)
  }


  return (
    
    <div className="App">
  
      <div className='card1'>
        <h2>Counter 1</h2>
        <div>
        <button onClick={decr1}>-</button>
        <span>{count1}</span>
        <button onClick={incr1}>+</button>
        </div>

      </div>

      <div className='card2'>
        <h2>Counter 2</h2>
        <div>
        <button onClick={decr2}>-</button>
        <span>{count2}</span>
        <button onClick={incr2}>+</button>
        </div>

      </div>

      <div className='card3'>
        <h2>Counter 3</h2>
        <div>
        <button onClick={decr3}>-</button>
        <span>{count3}</span>
        <button onClick={incr3}>+</button>
        </div>

      </div>

    </div>
  );
}

export default App;
