import { useState } from 'react'
import './App.css'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <About />
      </div>
    </>
  )
}

export default App
