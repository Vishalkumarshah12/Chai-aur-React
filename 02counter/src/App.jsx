import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addvalue = () => {
    counter = counter + 1
    if (counter <= 20) {
      setCounter(counter)
    }
    else{
      setCounter(20)
    }
  }

  const removeValue = () => {
    if (counter === 0) {
      setCounter(0)
    }
    else{
      counter = counter - 1
      setCounter(counter)
    }

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter}</h2>

      <button 
      onClick={addvalue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >remove Value {counter}</button>
    </>
  )
}

export default App
