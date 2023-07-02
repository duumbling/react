import { useState } from 'react';
import  PlusButton  from '../PlusButton/PlusButton';
import  MinusButton  from '../MinusButton/MinusButton';
import CountOutput from '../CountOutput/CountOutput';
import './App.css';

function App() {

  let storageCount = 0
  if(localStorage.getItem('count')){
    storageCount = JSON.parse(localStorage.getItem('count'))
  }
  let [count, setCount] = useState(storageCount)
 
  function decrement(){
    setCount(count - 1)
    localStorage.setItem('count', count - 1)
  }

  function increment(){
    setCount(count + 1)
    localStorage.setItem('count', count + 1)
  }

  return (
    <div className="App">
   <MinusButton click={decrement}/>
   <CountOutput value={count}/>
   <PlusButton click={increment}/>
    </div>
  );
}

export default App;
