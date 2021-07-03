import { useRef } from 'react';
import { useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [count1, setCount1] = useState( ()=>{
    const localData = localStorage.getItem('num1');
    return localData ? JSON.parse(localData) : 0; 
  } );
  const [count2, setCount2] = useState( ()=>{
    const localData2 = localStorage.getItem('num2');
    return localData2 ? JSON.parse(localData2) : 0;
  } );

  useEffect(() => {
    localStorage.setItem('num1', JSON.stringify(count1))
    
  }, [count1]);
  useEffect(() => {
    localStorage.setItem('num2', JSON.stringify(count2))
    
  }, [count2]);


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

  function reset1 () {
    setCount1(0)
  }
  function reset2 () {
    setCount2(0)
  }


  return (
    
    <div className="App">
  
      <div className='card1'>
        <h2>Counter 1</h2>
        <div className='controls'>
        <svg onClick={decr1} xmlns="http://www.w3.org/2000/svg" class="arrsx" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
        </svg>
        <span>{count1}</span>
        <svg onClick={incr1} xmlns="http://www.w3.org/2000/svg" className="arrdx" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        </div>
        
        <svg onClick={reset1} xmlns="http://www.w3.org/2000/svg" class="resetButton" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
        </svg>
        

      </div>

      <div className='card2'>
        <h2>Counter 2</h2>
        <div className='controls'>
        <svg onClick={decr2} xmlns="http://www.w3.org/2000/svg" class="arrsx" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
        </svg>
        <span>{count2}</span>
        <svg onClick={incr2} xmlns="http://www.w3.org/2000/svg" className="arrdx" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        </div>
        
        <svg onClick={reset2} xmlns="http://www.w3.org/2000/svg" class="resetButton" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
        </svg>
        

      </div>


    </div>
  );
}

export default App;
