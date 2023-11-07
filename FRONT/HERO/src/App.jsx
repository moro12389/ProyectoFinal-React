import { useState } from 'react'
import { Loading } from './Components/loading'
import { Hero } from './Components/Hero'
import { Cupons } from './Components/Cupons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Loading></Loading> */}
        {/* <Hero></Hero> */}
        <Cupons></Cupons>
    </>
  )
}

export default App
