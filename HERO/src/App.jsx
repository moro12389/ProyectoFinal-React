import { useState } from 'react'
import { Loading } from './Components/loading'
import { Hero } from './Components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Loading></Loading> */}
        <Hero></Hero>
        
    </>
  )
}

export default App
