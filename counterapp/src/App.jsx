import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
   
  const addValue = () => {
    setCounter(counter + 1);
    
  }
  const removeValue = () => {
   setCounter(counter-1)
  }
  

  return (
    <>
     <h1>I am learning React</h1>
      <h2>Counter value :{counter}</h2>
      <button onClick={addValue}> <h3>Add value:{counter}</h3></button >
      <br />
      <br />
      <button onClick={removeValue}> <h3>Remove value:{counter}</h3></button >
      <p>Footer :{counter }</p>
    </>
  )
}

export default App
