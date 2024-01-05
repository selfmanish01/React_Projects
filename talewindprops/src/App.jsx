import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import Rama from './components/Rama'

function App() {
  /// const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-green-400 text-black p-3 rounded xl mb-4'>Using TailwindCSS</h1>
      
      <Rama channel="Lord Ram" userName="I am Lord"/>
      <br />
      <Rama channel="Lord Ram" userName="I am Lord Rama" />
      <br />
      <Sidebar />
      
    </>
  )
}

export default App
