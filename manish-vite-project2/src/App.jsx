import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
 // let counter = 6;
  const addValue = () => {
    // console.log("Value Added", Math.random());
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter + 1);
    
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1> Learning React With Hitesh Sir </h1> 
      <h2> Counter value : {counter} </h2>
      <button onClick={addValue}> Add value {counter} </button>
      <br />
      <button onClick={removeValue}> Remove Value {counter}</button>  
      <p>footer : { counter}</p>
    </>
  )
}

export default App